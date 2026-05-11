type ReplayMap = Record<string, () => void>;

type WalkingDeckElement = HTMLElement & {
    _presentReplay?: ReplayMap;
};

const initializedDecks = new WeakSet<Element>();

export function initWalkingDeck(root: ParentNode = document) {
    const decks = Array.from(root.querySelectorAll<WalkingDeckElement>('[data-walking-signal]'));
    decks.forEach(initDeck);
}

function initDeck(deck: WalkingDeckElement) {
    if (initializedDecks.has(deck)) return;
    initializedDecks.add(deck);

    const railLinks = Array.from(deck.querySelectorAll<HTMLAnchorElement>('[data-rail-link]'));
    const sections = Array.from(deck.querySelectorAll<HTMLElement>('[data-signal-section]'));

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            const visible = entries
                .filter((entry) => entry.isIntersecting)
                .sort((left, right) => right.intersectionRatio - left.intersectionRatio)[0];

            if (!visible) return;

            railLinks.forEach((link) => {
                link.classList.toggle('is-active', link.getAttribute('href') === `#${visible.target.id}`);
            });
        }, { threshold: [0.24, 0.45, 0.65], rootMargin: '-15% 0px -55% 0px' });

        sections.forEach((section) => observer.observe(section));
    }

    const canvas = deck.querySelector('[data-signal-canvas]');
    const context = canvas instanceof HTMLCanvasElement ? canvas.getContext('2d') : null;
    if (!canvas || !context) return;

    const points = [
        { x: 0.12, y: 0.28, r: 2.5 },
        { x: 0.28, y: 0.18, r: 3.2 },
        { x: 0.47, y: 0.35, r: 2.4 },
        { x: 0.69, y: 0.22, r: 3.6 },
        { x: 0.86, y: 0.42, r: 2.8 },
        { x: 0.72, y: 0.7, r: 2.6 },
        { x: 0.4, y: 0.76, r: 3.4 },
        { x: 0.18, y: 0.62, r: 2.2 },
    ];

    let width = 0;
    let height = 0;
    let frame = 0;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const resize = () => {
        const rect = canvas.getBoundingClientRect();
        const ratio = window.devicePixelRatio || 1;
        width = Math.max(1, rect.width);
        height = Math.max(1, rect.height);
        canvas.width = Math.floor(width * ratio);
        canvas.height = Math.floor(height * ratio);
        context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const draw = (time = 0) => {
        context.clearRect(0, 0, width, height);
        const pulse = prefersReducedMotion ? 0.5 : (Math.sin(time / 900) + 1) / 2;

        context.lineWidth = 1;
        for (let index = 0; index < points.length; index += 1) {
            const current = points[index];
            const next = points[(index + 1) % points.length];
            context.strokeStyle = `rgba(255, 255, 255, ${0.11 + pulse * 0.08})`;
            context.beginPath();
            context.moveTo(current.x * width, current.y * height);
            context.lineTo(next.x * width, next.y * height);
            context.stroke();
        }

        points.forEach((point, index) => {
            const radius = point.r + (index % 2 === 0 ? pulse * 1.8 : (1 - pulse) * 1.4);
            const x = point.x * width;
            const y = point.y * height;
            context.fillStyle = 'rgba(241, 183, 95, 0.9)';
            context.beginPath();
            context.arc(x, y, radius, 0, Math.PI * 2);
            context.fill();

            context.strokeStyle = 'rgba(255, 255, 255, 0.18)';
            context.beginPath();
            context.arc(x, y, radius + 9 + pulse * 7, 0, Math.PI * 2);
            context.stroke();
        });

        if (!prefersReducedMotion) {
            frame = window.requestAnimationFrame(draw);
        }
    };

    resize();
    draw();
    window.addEventListener('resize', () => {
        window.cancelAnimationFrame(frame);
        resize();
        draw();
    });

    // Sphere grid (slide 5): activate nodes in sequence, fire ABILITY UNLOCKED on each.
    const sphere = deck.querySelector<HTMLElement>('[data-sphere]');
    if (sphere) {
        let chapters: Array<{
            tag: string;
            era: string;
            headline: string;
            ability: string;
            abilityDetail: string;
            thesis: string;
            highlights?: string[];
            branches?: Array<{ kind: string; label: string; detail: string }>;
            image?: string;
            imageFocus?: string;
        }> = [];
        try { chapters = JSON.parse(sphere.dataset.spherePayload || '[]'); } catch (_e) { chapters = []; }
        const buttons = Array.from(sphere.querySelectorAll<HTMLButtonElement>('[data-node-button]'));
        const links = Array.from(sphere.querySelectorAll<SVGPathElement>('.sphere-link'));
        const branchNodes = Array.from(sphere.querySelectorAll<HTMLElement>('.sphere-branch'));
        const branchLinkEls = Array.from(sphere.querySelectorAll<SVGPathElement>('.branch-link'));
        const banner = sphere.querySelector<HTMLElement>('[data-ability-banner]');
        const get = (selector: string) => sphere.querySelector<HTMLElement>(selector);
        const refs = {
            num: get('[data-readout-num]'),
            tag: get('[data-readout-tag]'),
            year: get('[data-readout-year]'),
            question: get('[data-readout-question]'),
            ability: get('[data-readout-ability]'),
            abilityDetail: get('[data-readout-ability-detail]'),
            thesis: get('[data-readout-thesis]'),
            highlights: get('[data-readout-highlights]'),
            branches: get('[data-readout-branches]'),
            portrait: get('[data-readout-portrait]'),
        };

        const setText = (element: HTMLElement | null, text?: string) => { if (element) element.textContent = text || ''; };

        // Astro scopes CSS via a data-astro-cid-* attr; replicate it on JS-created nodes.
        const findAstroAttr = (element: Element | null) => {
            if (!element) return null;
            for (const attr of Array.from(element.attributes)) {
                if (attr.name.startsWith('data-astro-cid-')) return attr.name;
            }
            return null;
        };
        const astroAttr = findAstroAttr(sphere);
        const tagAstro = (element: Element) => { if (astroAttr) element.setAttribute(astroAttr, ''); };

        const activate = (idx: number, opts?: { fire?: boolean }) => {
            const chapter = chapters[idx];
            if (!chapter) return;
            buttons.forEach((button, index) => {
                button.classList.toggle('is-lit', index <= idx);
                button.classList.toggle('is-active', index === idx);
                button.setAttribute('aria-pressed', index === idx ? 'true' : 'false');
            });
            links.forEach((link, index) => link.classList.toggle('is-lit', index < idx));
            branchNodes.forEach((node) => {
                const isMine = Number(node.dataset.branchParent) === idx;
                node.classList.toggle('is-lit', isMine);
            });
            branchLinkEls.forEach((link) => {
                const isMine = Number(link.dataset.branchParent) === idx;
                link.classList.toggle('is-lit', isMine);
            });
            setText(refs.num, String(idx + 1).padStart(2, '0'));
            setText(refs.tag, chapter.tag);
            setText(refs.year, chapter.era);
            setText(refs.question, chapter.headline);
            setText(refs.ability, chapter.ability);
            setText(refs.abilityDetail, chapter.abilityDetail);
            setText(refs.thesis, chapter.thesis);
            if (refs.highlights) {
                refs.highlights.innerHTML = '';
                (chapter.highlights || []).forEach((highlight) => {
                    const item = document.createElement('li');
                    tagAstro(item);
                    item.textContent = highlight;
                    refs.highlights?.appendChild(item);
                });
            }
            if (refs.branches) {
                refs.branches.innerHTML = '';
                (chapter.branches || []).forEach((branch) => {
                    const chip = document.createElement('span');
                    chip.className = `branch-chip is-${branch.kind}`;
                    tagAstro(chip);
                    const kind = document.createElement('em');
                    kind.textContent = branch.kind;
                    tagAstro(kind);
                    const label = document.createElement('strong');
                    label.textContent = branch.label;
                    tagAstro(label);
                    const detail = document.createElement('span');
                    detail.textContent = branch.detail;
                    tagAstro(detail);
                    chip.append(kind, label, detail);
                    refs.branches?.appendChild(chip);
                });
            }
            if (refs.portrait) {
                if (chapter.image) {
                    let img = refs.portrait.querySelector<HTMLImageElement>('img');
                    if (!img) {
                        img = document.createElement('img');
                        tagAstro(img);
                        img.loading = 'lazy';
                        img.alt = '';
                        refs.portrait.appendChild(img);
                    }
                    if (img.getAttribute('src') !== chapter.image) img.setAttribute('src', chapter.image);
                    refs.portrait.style.setProperty('--portrait-focus', chapter.imageFocus || 'center top');
                    refs.portrait.hidden = false;
                    sphere.querySelector('[data-sphere-readout]')?.classList.remove('no-portrait');
                } else {
                    refs.portrait.hidden = true;
                    sphere.querySelector('[data-sphere-readout]')?.classList.add('no-portrait');
                }
            }
            if (banner && (!opts || opts.fire !== false)) {
                banner.classList.remove('is-firing');
                void banner.offsetWidth;
                banner.classList.add('is-firing');
            }
        };

        buttons.forEach((button, index) => button.addEventListener('click', () => activate(index)));

        let started = false;
        let introTimer = 0;
        const intro = (force?: boolean) => {
            if (started && !force) return;
            started = true;
            window.clearTimeout(introTimer);
            if (prefersReducedMotion) { activate(chapters.length - 1, { fire: false }); return; }
            let index = 0;
            const sphereIntroStepMs = 1850;
            const tick = () => {
                activate(index);
                index += 1;
                if (index < chapters.length) introTimer = window.setTimeout(tick, sphereIntroStepMs);
            };
            tick();
        };
        deck._presentReplay = deck._presentReplay || {};
        deck._presentReplay['signal-impact'] = () => intro(true);
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => { if (entry.isIntersecting) { intro(); observer.disconnect(); } });
            }, { threshold: 0.25 });
            observer.observe(sphere);
        } else {
            intro();
        }
    }

    // Pitch terminal: typewriter animation with skip + reduced-motion support.
    const pitchShell = deck.querySelector<HTMLElement>('[data-pitch-shell]');
    const pitch = deck.querySelector<HTMLElement>('[data-pitch]');
    const executivePitch = pitchShell?.querySelector<HTMLElement>('[data-pitch-executive]');
    const modeButtons = pitchShell ? Array.from(pitchShell.querySelectorAll<HTMLButtonElement>('[data-pitch-mode-button]')) : [];
    const output = pitch?.querySelector<HTMLElement>('[data-pitch-output]');
    const scriptEl = pitch?.querySelector<HTMLScriptElement>('[data-pitch-script]');
    const stream = pitch?.querySelector<HTMLElement>('[data-pitch-stream]');
    const skipBtn = pitch?.querySelector<HTMLButtonElement>('[data-pitch-skip]');

    if (pitch && output && scriptEl && stream) {
        let lines: Array<{ prompt?: string; text?: string; out?: string }> = [];
        try {
            const parsed = JSON.parse(scriptEl.textContent || '{}');
            lines = Array.isArray(parsed.lines) ? parsed.lines : [];
        } catch (_err) {
            lines = [];
        }

        const renderFinal = () => {
            output.textContent = lines.map((line) => {
                if (line.prompt) return `${line.prompt} ${line.text || ''}`;
                return line.out || '';
            }).join('\n');
        };

        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        let cancelled = false;
        let started = false;

        const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

        const typeLine = async (line: { prompt?: string; text?: string; out?: string }) => {
            const text = line.prompt ? `${line.prompt} ${line.text || ''}` : (line.out || '');
            const speed = line.prompt ? 28 : 10;
            for (let index = 0; index < text.length; index += 1) {
                if (cancelled) return;
                output.append(text[index]);
                stream.scrollTop = stream.scrollHeight;
                await sleep(speed);
            }
            if (cancelled) return;
            output.append('\n');
            stream.scrollTop = stream.scrollHeight;
            await sleep(line.prompt ? 220 : 80);
        };

        const run = async (force?: boolean) => {
            if (started && !force) return;
            cancelled = true;
            await sleep(40);
            cancelled = false;
            started = true;
            output.textContent = '';
            stream.scrollTop = 0;
            if (reduced) {
                renderFinal();
                return;
            }
            for (const line of lines) {
                if (cancelled) break;
                await typeLine(line);
            }
        };

        const setPitchMode = (mode: string) => {
            const isBackend = mode === 'backend';
            if (pitchShell) pitchShell.dataset.pitchMode = isBackend ? 'backend' : 'executive';
            if (executivePitch) executivePitch.hidden = isBackend;
            pitch.hidden = !isBackend;
            modeButtons.forEach((button) => {
                const isActive = button.dataset.pitchModeButton === (isBackend ? 'backend' : 'executive');
                button.classList.toggle('is-active', isActive);
                button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
            });
            if (isBackend) void run();
        };

        pitchShell?.addEventListener('click', (event) => {
            const target = event.target instanceof Element ? event.target : null;
            const button = target?.closest<HTMLButtonElement>('[data-pitch-mode-button]');
            if (!button || !pitchShell.contains(button)) return;
            event.preventDefault();
            setPitchMode(button.dataset.pitchModeButton || 'executive');
        });

        deck._presentReplay = deck._presentReplay || {};
        deck._presentReplay['signal-cover'] = () => {
            if ((pitchShell?.dataset.pitchMode || 'backend') === 'backend') void run(true);
        };

        skipBtn?.addEventListener('click', () => {
            cancelled = true;
            renderFinal();
            stream.scrollTop = stream.scrollHeight;
        });

        if ('IntersectionObserver' in window) {
            const pitchObserver = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && (pitchShell?.dataset.pitchMode || 'backend') === 'backend') {
                        run();
                        pitchObserver.disconnect();
                    }
                });
            }, { threshold: 0.25 });
            pitchObserver.observe(pitchShell || pitch);
        } else {
            if ((pitchShell?.dataset.pitchMode || 'backend') === 'backend') void run();
        }
    }

    // Presentation mode: full-screen, section-by-section nav with FFX-style "Section NN" counter.
    const presentToggle = deck.querySelector<HTMLButtonElement>('[data-present-toggle]');
    const presentHud = deck.querySelector<HTMLElement>('[data-present-hud]');
    const presentCounter = deck.querySelector<HTMLElement>('[data-present-counter]');
    const presentTitle = deck.querySelector<HTMLElement>('[data-present-title]');
    const presentPrev = deck.querySelector<HTMLButtonElement>('[data-present-prev]');
    const presentNext = deck.querySelector<HTMLButtonElement>('[data-present-next]');
    const presentExit = deck.querySelector<HTMLButtonElement>('[data-present-exit]');

    if (presentToggle && sections.length) {
        const total = sections.length;
        const totalLabel = String(total).padStart(2, '0');
        const sectionLabels = sections.map((section) => {
            const link = railLinks.find((railLink) => railLink.getAttribute('href') === `#${section.id}`);
            return link ? (link.textContent || '').trim() : (section.id || '');
        });

        let currentIdx = Math.max(0, sections.findIndex((section) => section.classList.contains('is-current')));
        let isPresenting = deck.dataset.present === 'true';
        let leaveTimer = 0;

        const supportsViewTransitions = typeof document.startViewTransition === 'function'
            && !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        const applySlide = (idx: number, previous: HTMLElement | undefined, next: HTMLElement) => {
            if (previous && previous !== next) {
                previous.classList.remove('is-current');
                if (!supportsViewTransitions) {
                    previous.classList.add('is-leaving');
                    window.clearTimeout(leaveTimer);
                    leaveTimer = window.setTimeout(() => previous.classList.remove('is-leaving'), 460);
                } else {
                    previous.classList.remove('is-leaving');
                }
            }
            next.classList.add('is-current');
            next.classList.remove('is-leaving');
            next.scrollTop = 0;

            currentIdx = idx;
            if (presentCounter) {
                presentCounter.textContent = `Section ${String(idx + 1).padStart(2, '0')} / ${totalLabel}`;
            }
            if (presentTitle) {
                presentTitle.textContent = sectionLabels[idx] || '';
            }
        };

        const setSlide = (idx: number) => {
            if (idx < 0) idx = 0;
            if (idx >= total) idx = total - 1;
            if (idx === currentIdx && sections[idx].classList.contains('is-current')) return;

            const previous = sections[currentIdx];
            const next = sections[idx];
            const direction = idx >= currentIdx ? 1 : -1;
            deck.dataset.presentDir = direction > 0 ? 'forward' : 'back';

            const finishUp = () => {
                if (isPresenting && deck._presentReplay) {
                    const replay = deck._presentReplay[next.id];
                    if (typeof replay === 'function') {
                        window.setTimeout(replay, 240);
                    }
                }
            };

            if (supportsViewTransitions && isPresenting) {
                deck.classList.add('using-view-transitions');
                const transition = document.startViewTransition(() => applySlide(idx, previous, next));
                transition.finished.then(finishUp, finishUp);
            } else {
                applySlide(idx, previous, next);
                finishUp();
            }
        };

        const enterPresent = () => {
            if (isPresenting) return;
            isPresenting = true;
            deck.dataset.present = 'true';
            if (presentHud) presentHud.removeAttribute('aria-hidden');
            document.documentElement.classList.add('walking-presenting');
            document.body.classList.add('walking-presenting');
            currentIdx = 0;
            sections.forEach((section) => section.classList.remove('is-current', 'is-leaving'));
            setSlide(0);
            window.setTimeout(() => presentNext?.focus(), 60);
        };

        const exitPresent = () => {
            if (!isPresenting) return;
            isPresenting = false;
            delete deck.dataset.present;
            delete deck.dataset.presentDir;
            deck.classList.remove('using-view-transitions');
            if (presentHud) presentHud.setAttribute('aria-hidden', 'true');
            document.documentElement.classList.remove('walking-presenting');
            document.body.classList.remove('walking-presenting');
            sections.forEach((section) => section.classList.remove('is-current', 'is-leaving'));
            presentToggle.focus();
        };

        presentToggle.addEventListener('click', enterPresent);
        presentExit?.addEventListener('click', exitPresent);
        presentPrev?.addEventListener('click', () => setSlide(currentIdx - 1));
        presentNext?.addEventListener('click', () => setSlide(currentIdx + 1));

        // Deep link: ?present=1 or #present opens directly into presentation mode.
        const triggerDeepLink = () => {
            try {
                const params = new URLSearchParams(window.location.search);
                const wantsPresent = params.get('present') === '1' || window.location.hash === '#present';
                if (wantsPresent && !isPresenting) {
                    window.scrollTo(0, 0);
                    enterPresent();
                }
            } catch (_e) { /* no-op */ }
        };
        if (document.readyState === 'complete' || document.readyState === 'interactive') {
            window.setTimeout(triggerDeepLink, 80);
        } else {
            window.addEventListener('DOMContentLoaded', () => window.setTimeout(triggerDeepLink, 80), { once: true });
        }
        window.addEventListener('load', () => window.setTimeout(triggerDeepLink, 60), { once: true });

        let resizeSuppressTimer = 0;
        const suppressTransitions = () => {
            deck.classList.add('is-resizing');
            if (resizeSuppressTimer) window.clearTimeout(resizeSuppressTimer);
            resizeSuppressTimer = window.setTimeout(() => {
                deck.classList.remove('is-resizing');
                resizeSuppressTimer = 0;
            }, 220);
        };
        window.addEventListener('resize', suppressTransitions);
        window.addEventListener('orientationchange', suppressTransitions);

        document.addEventListener('keydown', (event) => {
            if (!isPresenting) return;
            if (event.key === 'Escape') {
                event.preventDefault();
                exitPresent();
            } else if (event.key === 'ArrowRight' || event.key === 'PageDown' || event.key === ' ') {
                event.preventDefault();
                setSlide(currentIdx + 1);
            } else if (event.key === 'ArrowLeft' || event.key === 'PageUp') {
                event.preventDefault();
                setSlide(currentIdx - 1);
            } else if (event.key === 'Home') {
                event.preventDefault();
                setSlide(0);
            } else if (event.key === 'End') {
                event.preventDefault();
                setSlide(total - 1);
            }
        });
    }
}
