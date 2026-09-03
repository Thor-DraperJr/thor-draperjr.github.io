type PresentationDeckElement = HTMLElement & {
    _presentReplay?: Record<string, () => void>;
    dataset: DOMStringMap & {
        presentBodyClass?: string;
        cues?: string;
        exitHref?: string;
        present?: string;
        presentDir?: string;
        presentStart?: string;
        railSelector?: string;
        sectionSelector?: string;
    };
};

const initializedDecks = new WeakSet<PresentationDeckElement>();
let pendingDeckObserver: MutationObserver | undefined;

export function initPresentationDeck(root: ParentNode = document) {
    const decks = Array.from(root.querySelectorAll<PresentationDeckElement>('[data-presentation-deck]'));
    const states = decks.map(initDeck);
    const allInitialized = states.length > 0 && states.every(Boolean);
    if (allInitialized) {
        pendingDeckObserver?.disconnect();
        pendingDeckObserver = undefined;
        return;
    }

    if (root === document && !pendingDeckObserver) {
        pendingDeckObserver = new MutationObserver(() => initPresentationDeck());
        pendingDeckObserver.observe(document.documentElement, { childList: true, subtree: true });
    }
}

function initDeck(deck: PresentationDeckElement) {
    if (initializedDecks.has(deck)) return true;

    const sectionSelector = deck.dataset.sectionSelector || '[data-presentation-section]';
    const sections = Array.from(deck.querySelectorAll<HTMLElement>(sectionSelector));
    const railSelector = deck.dataset.railSelector || '[data-presentation-link]';
    const railLinks = Array.from(deck.querySelectorAll<HTMLAnchorElement>(railSelector));
    const presentToggle = deck.querySelector<HTMLButtonElement>('[data-present-toggle]');
    const presentHud = deck.querySelector<HTMLElement>('[data-present-hud]');
    const presentCounter = deck.querySelector<HTMLElement>('[data-present-counter]');
    const presentTitle = deck.querySelector<HTMLElement>('[data-present-title]');
    const presentNote = deck.querySelector<HTMLElement>('[data-presentation-note-display]');
    const presentPrev = deck.querySelector<HTMLButtonElement>('[data-present-prev]');
    const presentNext = deck.querySelector<HTMLButtonElement>('[data-present-next]');
    const presentExit = deck.querySelector<HTMLButtonElement>('[data-present-exit]');
    const presentCues = deck.querySelector<HTMLButtonElement>('[data-present-cues]');

    if (!sections.length || !presentToggle) return false;
    initializedDecks.add(deck);

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
    let previousFocus: HTMLElement | null = null;
    let surroundingInert: Array<{ element: HTMLElement; inert: boolean }> = [];
    const bodyClass = deck.dataset.presentBodyClass || 'presentation-presenting';
    const supportsViewTransitions = typeof document.startViewTransition === 'function'
        && !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const isolateSurroundings = () => {
        if (surroundingInert.length > 0) return;
        let node: HTMLElement = deck;
        while (node.parentElement) {
            const parent = node.parentElement;
            for (const sibling of parent.children) {
                if (sibling === node || !(sibling instanceof HTMLElement)) continue;
                surroundingInert.push({ element: sibling, inert: sibling.inert });
                sibling.inert = true;
            }
            if (parent === document.body) break;
            node = parent;
        }
    };

    const restoreSurroundings = () => {
        for (const record of surroundingInert) record.element.inert = record.inert;
        surroundingInert = [];
    };

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

    const updateSectionAccessibility = (activeIndex: number) => {
        sections.forEach((section, sectionIndex) => {
            const isActive = sectionIndex === activeIndex;
            section.setAttribute('aria-hidden', isActive ? 'false' : 'true');
            section.inert = !isActive;
        });
    };

    const applySlide = (nextIndex: number) => {
        const previous = sections[currentIndex];
        const next = sections[nextIndex];

        if (previous && previous !== next) {
            previous.classList.remove('is-current');
            if (supportsViewTransitions) {
                previous.classList.remove('is-leaving');
            } else {
                previous.classList.add('is-leaving');
                window.clearTimeout(leaveTimer);
                leaveTimer = window.setTimeout(() => previous.classList.remove('is-leaving'), 520);
            }
        }

        sections.forEach((section, sectionIndex) => {
            section.setAttribute('data-presentation-state', sectionIndex === nextIndex ? 'active' : 'inactive');
        });
        updateSectionAccessibility(nextIndex);
        next.classList.add('is-current');
        next.classList.remove('is-leaving');
        next.scrollTop = 0;
        currentIndex = nextIndex;
        updateHud();
    };

    const finishSlide = () => {
        const section = sections[currentIndex];
        const replay = section && deck._presentReplay?.[section.id];
        if (isPresenting && replay) window.setTimeout(replay, 240);
        deck.dispatchEvent(new CustomEvent('presentation:slide', {
            detail: { index: currentIndex, sectionId: section?.id || '' },
        }));
    };

    const setSlide = (index: number, force = false) => {
        const nextIndex = Math.min(total - 1, Math.max(0, index));
        if (!force && nextIndex === currentIndex && sections[nextIndex]?.classList.contains('is-current')) {
            updateHud();
            return;
        }

        const direction = nextIndex >= currentIndex ? 'forward' : 'back';
        deck.dataset.presentDir = direction;

        if (supportsViewTransitions && isPresenting) {
            deck.classList.add('using-view-transitions');
            const transition = document.startViewTransition(() => applySlide(nextIndex));
            transition.finished.then(finishSlide, finishSlide);
        } else {
            applySlide(nextIndex);
            finishSlide();
        }
    };

    const enterPresent = () => {
        if (isPresenting && deck.dataset.present === 'true') return;
        isPresenting = true;
        previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
        isolateSurroundings();
        deck.dataset.present = 'true';
        document.documentElement.classList.add(bodyClass);
        document.body.classList.add(bodyClass);
        if (presentHud) presentHud.removeAttribute('aria-hidden');
        if (deck.dataset.presentStart === 'first') currentIndex = 0;
        sections.forEach((section) => section.classList.remove('is-current', 'is-leaving'));
        setSlide(currentIndex, true);
        deck.dispatchEvent(new CustomEvent('presentation:enter'));
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
        deck.classList.remove('using-view-transitions');
        document.documentElement.classList.remove(bodyClass);
        document.body.classList.remove(bodyClass);
        if (presentHud) presentHud.setAttribute('aria-hidden', 'true');
        sections.forEach((section) => {
            section.classList.remove('is-current', 'is-leaving');
            section.removeAttribute('aria-hidden');
            section.inert = false;
        });
        restoreSurroundings();
        deck.dispatchEvent(new CustomEvent('presentation:exit'));
        (previousFocus?.isConnected ? previousFocus : presentToggle).focus();
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

    const triggerDeepLink = () => {
        const params = new URLSearchParams(window.location.search);
        if ((params.get('present') === '1' || window.location.hash === '#present') && !isPresenting) {
            window.scrollTo(0, 0);
            enterPresent();
        }
    };
    window.setTimeout(triggerDeepLink, 80);

    document.addEventListener('keydown', (event) => {
        if (!isPresenting && deck.dataset.present !== 'true') return;
        const target = event.target;
        const isControlActivation = (event.key === 'Enter' || event.key === ' ')
            && target instanceof HTMLElement
            && Boolean(target.closest('button, a, input, select, textarea'));
        if (isControlActivation) return;

        if (event.key === 'Tab') {
            const focusable = Array.from(deck.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])'))
                .filter((element) => !element.closest('[inert]') && element.getClientRects().length > 0);
            const first = focusable[0];
            const last = focusable.at(-1);
            if (first && last && (event.shiftKey ? document.activeElement === first : document.activeElement === last)) {
                event.preventDefault();
                (event.shiftKey ? last : first).focus();
            }
            return;
        }

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
        const linkedIndex = sections.findIndex((section) => `#${section.id}` === window.location.hash);
        if (linkedIndex >= 0) currentIndex = linkedIndex;
        document.documentElement.classList.add(bodyClass);
        document.body.classList.add(bodyClass);
        isolateSurroundings();
        presentHud?.removeAttribute('aria-hidden');
        setSlide(currentIndex, true);
    } else {
        sections.forEach((section) => {
            section.removeAttribute('aria-hidden');
            section.inert = false;
        });
        updateHud();
    }

    return true;
}