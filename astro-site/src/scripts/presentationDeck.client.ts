type PresentationDeckElement = HTMLElement & {
    dataset: DOMStringMap & {
        cues?: string;
        exitHref?: string;
        present?: string;
        presentDir?: string;
        sectionSelector?: string;
    };
};

const initializedDecks = new WeakSet<PresentationDeckElement>();

export function initPresentationDeck(root: ParentNode = document) {
    const decks = Array.from(root.querySelectorAll<PresentationDeckElement>('[data-presentation-deck]'));
    decks.forEach(initDeck);
}

function initDeck(deck: PresentationDeckElement) {
    if (initializedDecks.has(deck)) return;
    initializedDecks.add(deck);

    const sectionSelector = deck.dataset.sectionSelector || '[data-presentation-section]';
    const sections = Array.from(deck.querySelectorAll<HTMLElement>(sectionSelector));
    const railLinks = Array.from(deck.querySelectorAll<HTMLAnchorElement>('[data-presentation-link]'));
    const presentToggle = deck.querySelector<HTMLButtonElement>('[data-present-toggle]');
    const presentHud = deck.querySelector<HTMLElement>('[data-present-hud]');
    const presentCounter = deck.querySelector<HTMLElement>('[data-present-counter]');
    const presentTitle = deck.querySelector<HTMLElement>('[data-present-title]');
    const presentNote = deck.querySelector<HTMLElement>('[data-presentation-note-display]');
    const presentPrev = deck.querySelector<HTMLButtonElement>('[data-present-prev]');
    const presentNext = deck.querySelector<HTMLButtonElement>('[data-present-next]');
    const presentExit = deck.querySelector<HTMLButtonElement>('[data-present-exit]');
    const presentCues = deck.querySelector<HTMLButtonElement>('[data-present-cues]');

    if (!sections.length || !presentToggle) return;

    const total = sections.length;
    const totalLabel = String(total).padStart(2, '0');
    const labels = sections.map((section) => section.dataset.presentationTitle
        || railLinks.find((link) => link.getAttribute('href') === `#${section.id}`)?.textContent?.trim()
        || section.querySelector('h2')?.textContent?.trim()
        || section.id);
    const notes = sections.map((section) => section.dataset.presentationNote || '');

    let currentIndex = Math.max(0, sections.findIndex((section) => section.classList.contains('is-current')));
    if (currentIndex < 0) currentIndex = 0;
    let isPresenting = deck.dataset.present === 'true';
    let leaveTimer = 0;

    const updateRail = () => {
        railLinks.forEach((link) => {
            link.classList.toggle('is-active', link.getAttribute('href') === `#${sections[currentIndex]?.id}`);
        });
    };

    const updateHud = () => {
        if (presentCounter) {
            presentCounter.textContent = `Section ${String(currentIndex + 1).padStart(2, '0')} / ${totalLabel}`;
        }
        if (presentTitle) presentTitle.textContent = labels[currentIndex] || '';
        if (presentNote) presentNote.textContent = notes[currentIndex] || '';
        if (presentPrev) presentPrev.disabled = currentIndex === 0;
        if (presentNext) presentNext.disabled = currentIndex === total - 1;
        updateRail();
    };

    const setSlide = (index: number, force = false) => {
        const nextIndex = Math.min(total - 1, Math.max(0, index));
        if (!force && nextIndex === currentIndex && sections[nextIndex]?.classList.contains('is-current')) {
            updateHud();
            return;
        }

        const previous = sections[currentIndex];
        const next = sections[nextIndex];
        const direction = nextIndex >= currentIndex ? 'forward' : 'back';
        deck.dataset.presentDir = direction;

        if (previous && previous !== next) {
            previous.classList.remove('is-current');
            previous.classList.add('is-leaving');
            window.clearTimeout(leaveTimer);
            leaveTimer = window.setTimeout(() => previous.classList.remove('is-leaving'), 520);
        }

        sections.forEach((section, sectionIndex) => {
            section.setAttribute('data-presentation-state', sectionIndex === nextIndex ? 'active' : 'inactive');
        });
        next.classList.add('is-current');
        next.classList.remove('is-leaving');
        next.scrollTop = 0;
        currentIndex = nextIndex;
        updateHud();
    };

    const enterPresent = () => {
        if (isPresenting && deck.dataset.present === 'true') return;
        isPresenting = true;
        deck.dataset.present = 'true';
        document.documentElement.classList.add('presentation-presenting');
        document.body.classList.add('presentation-presenting');
        if (presentHud) presentHud.removeAttribute('aria-hidden');
        sections.forEach((section) => section.classList.remove('is-current', 'is-leaving'));
        setSlide(currentIndex, true);
        window.setTimeout(() => presentNext?.focus(), 60);
    };

    const exitPresent = () => {
        if (deck.dataset.exitHref) {
            window.location.href = deck.dataset.exitHref;
            return;
        }

        isPresenting = false;
        delete deck.dataset.present;
        delete deck.dataset.presentDir;
        document.documentElement.classList.remove('presentation-presenting');
        document.body.classList.remove('presentation-presenting');
        if (presentHud) presentHud.setAttribute('aria-hidden', 'true');
        sections.forEach((section) => section.classList.remove('is-current', 'is-leaving'));
        presentToggle.focus();
    };

    const toggleCues = () => {
        deck.dataset.cues = deck.dataset.cues === 'true' ? 'false' : 'true';
        presentCues?.setAttribute('aria-pressed', deck.dataset.cues === 'true' ? 'true' : 'false');
    };

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            if (isPresenting) return;
            const visible = entries
                .filter((entry) => entry.isIntersecting)
                .sort((left, right) => right.intersectionRatio - left.intersectionRatio)[0];
            if (!visible) return;
            const visibleIndex = sections.indexOf(visible.target as HTMLElement);
            if (visibleIndex >= 0) {
                currentIndex = visibleIndex;
                updateHud();
            }
        }, { threshold: [0.28, 0.5, 0.7], rootMargin: '-18% 0px -54% 0px' });
        sections.forEach((section) => observer.observe(section));
    }

    presentToggle.addEventListener('click', enterPresent);
    presentExit?.addEventListener('click', exitPresent);
    presentPrev?.addEventListener('click', () => setSlide(currentIndex - 1));
    presentNext?.addEventListener('click', () => setSlide(currentIndex + 1));
    presentCues?.addEventListener('click', toggleCues);

    document.addEventListener('keydown', (event) => {
        if (!isPresenting && deck.dataset.present !== 'true') return;
        if (event.key === 'Escape') {
            event.preventDefault();
            exitPresent();
        } else if (event.key === 'ArrowRight' || event.key === 'PageDown' || event.key === ' ' || event.key === 'Enter') {
            event.preventDefault();
            setSlide(currentIndex + 1);
        } else if (event.key === 'ArrowLeft' || event.key === 'PageUp' || event.key === 'Backspace') {
            event.preventDefault();
            setSlide(currentIndex - 1);
        } else if (event.key === 'Home') {
            event.preventDefault();
            setSlide(0);
        } else if (event.key === 'End') {
            event.preventDefault();
            setSlide(total - 1);
        } else if (event.key.toLowerCase() === 'c') {
            event.preventDefault();
            toggleCues();
        }
    });

    if (isPresenting) {
        document.documentElement.classList.add('presentation-presenting');
        document.body.classList.add('presentation-presenting');
        presentHud?.removeAttribute('aria-hidden');
        setSlide(currentIndex, true);
    } else {
        updateHud();
    }
}