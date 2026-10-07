const initialized = new WeakSet<Element>();
const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function initWalkingDeck(root: ParentNode = document) {
    root.querySelectorAll<HTMLElement>('[data-walking-signal]').forEach((deck) => {
        if (initialized.has(deck)) return;
        initialized.add(deck);
        initJourney(deck);
        initPitch(deck);
    });
}

/** Career map: tabs that reveal one chapter panel and light the path up to it. */
function initJourney(deck: HTMLElement) {
    const journey = deck.querySelector<HTMLElement>('[data-sphere]');
    if (!journey) return;
    const buttons = Array.from(journey.querySelectorAll<HTMLButtonElement>('[data-node-button]'));
    const panels = Array.from(journey.querySelectorAll<HTMLElement>('[role="tabpanel"]'));
    const links = Array.from(journey.querySelectorAll<SVGPathElement>('[data-link]'));
    const branches = Array.from(journey.querySelectorAll<Element>('[data-branch-parent]'));
    let timer = 0;

    const activate = (idx: number) => {
        buttons.forEach((button, i) => {
            button.classList.toggle('is-lit', i <= idx);
            button.classList.toggle('is-active', i === idx);
            button.setAttribute('aria-selected', String(i === idx));
            button.tabIndex = i === idx ? 0 : -1;
        });
        panels.forEach((panel, i) => { panel.hidden = i !== idx; });
        links.forEach((link, i) => link.classList.toggle('is-lit', i < idx));
        branches.forEach((el) => el.classList.toggle('is-lit', Number((el as HTMLElement).dataset.branchParent) === idx));
    };

    buttons.forEach((button, i) => {
        button.addEventListener('click', () => { window.clearTimeout(timer); activate(i); });
        button.addEventListener('keydown', (event) => {
            const step = event.key === 'ArrowRight' ? 1 : event.key === 'ArrowLeft' ? -1 : 0;
            if (!step) return;
            event.preventDefault();
            event.stopPropagation();
            const next = (i + step + buttons.length) % buttons.length;
            activate(next);
            buttons[next].focus();
        });
    });

    // Walk the chapters once when the slide first comes into view.
    const walk = () => {
        if (reducedMotion()) return activate(buttons.length - 1);
        let i = 0;
        const tick = () => { activate(i); if (++i < buttons.length) timer = window.setTimeout(tick, 1800); };
        tick();
    };
    activate(0);
    const observer = new IntersectionObserver((entries) => {
        if (entries.some((e) => e.isIntersecting)) { observer.disconnect(); walk(); }
    }, { threshold: 0.3 });
    observer.observe(journey);
}

/** Executive / Backend pitch toggle with a typed terminal. */
function initPitch(deck: HTMLElement) {
    const shell = deck.querySelector<HTMLElement>('[data-pitch-shell]');
    const terminal = shell?.querySelector<HTMLElement>('[data-pitch]');
    const executive = shell?.querySelector<HTMLElement>('[data-pitch-executive]');
    const output = terminal?.querySelector<HTMLElement>('[data-pitch-output]');
    const stream = terminal?.querySelector<HTMLElement>('[data-pitch-stream]');
    if (!shell || !terminal || !executive || !output || !stream) return;

    let lines: Array<{ prompt?: string; text?: string; out?: string }> = [];
    try { lines = JSON.parse(terminal.querySelector('[data-pitch-script]')?.textContent || '{}').lines || []; } catch { lines = []; }
    const render = (line: (typeof lines)[number]) => (line.prompt ? `${line.prompt} ${line.text || ''}` : line.out || '');
    const full = lines.map(render).join('\n');
    let run = 0;

    const type = async () => {
        const id = ++run;
        if (reducedMotion()) { output.textContent = full; return; }
        output.textContent = '';
        for (const line of lines) {
            const text = render(line);
            for (const ch of text) {
                if (id !== run) return;
                output.append(ch);
                await new Promise((r) => setTimeout(r, line.prompt ? 28 : 10));
            }
            output.append('\n');
            stream.scrollTop = stream.scrollHeight;
            await new Promise((r) => setTimeout(r, line.prompt ? 220 : 80));
        }
    };

    shell.querySelectorAll<HTMLButtonElement>('[data-pitch-mode-button]').forEach((button, _i, all) => {
        button.addEventListener('click', () => {
            const backend = button.dataset.pitchModeButton === 'backend';
            all.forEach((b) => { b.classList.toggle('is-active', b === button); b.setAttribute('aria-pressed', String(b === button)); });
            executive.hidden = backend;
            terminal.hidden = !backend;
            if (backend) void type(); else run++;
        });
    });
    terminal.querySelector('[data-pitch-skip]')?.addEventListener('click', () => { run++; output.textContent = full; });
}
