import fs from 'node:fs';
import path from 'node:path';

export interface ImageSlot {
    id: string;
    label: string;
    src: string;
    alt: string;
    note: string;
    role: string;
    caption?: string;
    tilt?: number;
}

export type BranchKind = 'career' | 'education' | 'service';

export interface Branch {
    kind: BranchKind;
    label: string;
    detail: string;
    cx: number;
    cy: number;
}

export interface Chapter {
    id: string;
    era: string;
    tag: string;
    glyph: string;
    headline: string;
    thesis: string;
    ability: string;
    abilityDetail: string;
    highlights: string[];
    branches: Branch[];
    cx: number;
    cy: number;
    image?: string;
    imageFocus?: string;
}

const publicRoot = path.join(process.cwd(), 'public');
const postImageRoot = '/assets/images/posts/2026-05-01-walking-deck';

const imageExists = (src: string) => fs.existsSync(path.join(publicRoot, src.replace(/^\//, '')));

export const slotExists = (slot: ImageSlot) => imageExists(slot.src);

const chapterImage = (file: string): string | undefined => {
    const src = `${postImageRoot}/${file}`;
    return imageExists(src) ? src : undefined;
};

export const imageSlots: ImageSlot[] = [
    {
        id: 'portrait',
        label: 'Cover portrait',
        src: `${postImageRoot}/hero-portrait.jpg`,
        alt: 'Thor Draper Jr portrait',
        role: 'First impression',
        note: 'Professional photo or favorite candid that feels like you.',
    },
    {
        id: 'charlotte',
        label: 'Panthers draft day',
        src: `${postImageRoot}/panthers-draft-day.JPG`,
        alt: 'Thor on Panthers draft day in Charlotte',
        role: 'Charlotte',
        note: 'Charlotte moment - draft day, uptown, or Belk Theater.',
        caption: 'Charlotte. Panthers, Hornets, and a Yankees.',
        tilt: -2.4,
    },
    {
        id: 'banff',
        label: 'Banff wedding',
        src: `${postImageRoot}/banff-wedding.jpg`,
        alt: 'Thor and his wife in Banff',
        role: 'Family',
        note: 'The 7/11 story deserves a real visual anchor.',
        caption: 'Banff, 7/11.',
        tilt: 1.8,
    },
    {
        id: 'lloyd',
        label: 'Lloyd',
        src: `${postImageRoot}/lloyd.jpg`,
        alt: 'Lloyd the dog',
        role: 'Home life',
        note: 'The personality photo. Let it be charming.',
        caption: 'Lloyd. Household charisma director.',
        tilt: -3.2,
    },
    {
        id: 'teacher',
        label: 'Teaching and tech',
        src: `${postImageRoot}/teaching-tech.png`,
        alt: 'Teaching, technical work, or Microsoft community moment',
        role: 'Craft',
        note: 'Bootcamp teaching, Microsoft event, or technical community photo.',
        caption: 'Teaching cyber, the night job.',
        tilt: 2.6,
    },
];

export const chapters: Chapter[] = [
    {
        id: 'foundation',
        era: '2010 - 2019',
        tag: 'Sales, Ownership, Service',
        glyph: 'I',
        headline: 'A decade of selling, leading, and serving.',
        thesis: 'My previous career was all in sales: B2B, B2C, and a heavy influence of developing the team around me. Methodical, process-driven, and trained on a four-prong approach: take care of customers, take care of employees, growth and profits follow. All of it while serving in the Army National Guard as an E-4 Specialist, 11B Infantryman.',
        ability: 'Trust at Scale',
        abilityDetail: '+ Lead a 40+ team across full-time and part-time',
        highlights: [
            'B2B and B2C across Enterprise, Paychex, and gym ownership',
            'Managed 40+ team members, mix of full-time and part-time',
            'Four-prong approach: customers, employees, growth, profits',
        ],
        branches: [
            { kind: 'service', label: 'Army National Guard', detail: 'E-4 Specialist, 11B Infantryman', cx: 60, cy: 360 },
            { kind: 'education', label: 'Returned to education', detail: 'Re-engaged on degrees and certs', cx: 260, cy: 360 },
        ],
        cx: 160,
        cy: 230,
        image: chapterImage('military-thor.png'),
        imageFocus: 'center 18%',
    },
    {
        id: 'pivot',
        era: '2019 - 2021',
        tag: 'Pivot to Tech',
        glyph: 'II',
        headline: 'Sold the gym, picked up the MSP, and taught the bootcamp by night.',
        thesis: 'Sold the gym just before the pandemic. Took an MSP role and started studying IT certifications at the front desk. Earned an Associate of Science in Cloud and Virtualization from Central Piedmont Community College in July 2021. By night I taught a cybersecurity bootcamp, which forced me to explain the work without jargon.',
        ability: 'Teach to Sell',
        abilityDetail: '+ Explain it without jargon',
        highlights: [
            'MSP by day, cybersecurity bootcamp instructor by night',
            'CPCC A.S. in Cloud and Virtualization, July 2021',
            'Stacked industry certifications between client tickets',
        ],
        branches: [
            { kind: 'education', label: 'CPCC A.S.', detail: 'Cloud and Virtualization, July 2021', cx: 400, cy: 60 },
            { kind: 'career', label: 'Bootcamp instructor', detail: 'Cybersecurity, by night, in front of cohorts', cx: 600, cy: 60 },
        ],
        cx: 500,
        cy: 170,
        image: chapterImage('teaching-tech.png'),
        imageFocus: 'center top',
    },
    {
        id: 'microsoft',
        era: '2021 - now',
        tag: 'Microsoft + Range',
        glyph: 'III',
        headline: 'Built the technical depth on purpose so the next sales seat compounds everything.',
        thesis: 'Started at Microsoft as a contractor in April 2021 - Azure Networking Support Engineer. Converted to FTE in October 2021, supporting Azure Rapid Response in Azure Networking and then moving into Support Escalations Engineer. Now Senior Security Solution Engineer, with a SANS B.S. in cybersecurity earned on Microsoft tuition assistance. Doubled down on technical depth on purpose so the move back to sales lands with credibility, not a learning curve.',
        ability: 'Compounded Range',
        abilityDetail: '+ Sell with deep technical credibility',
        highlights: [
            'Azure Networking Support Engineer (contractor, Apr 2021)',
            'Azure Rapid Response + Support Escalations Engineer (FTE, Oct 2021)',
            'Senior Security Solution Engineer + SANS B.S. (Microsoft tuition assist)',
        ],
        branches: [
            { kind: 'education', label: 'SANS B.S.', detail: 'Cybersecurity, on Microsoft tuition assist', cx: 740, cy: 360 },
            { kind: 'career', label: 'AE-ready', detail: 'Next: Account Executive in the AI era', cx: 940, cy: 360 },
        ],
        cx: 840,
        cy: 230,
    },
];

export const linkPaths = [
    'M160,230 Q330,70 500,170',
    'M500,170 Q670,70 840,230',
];

export const branchLinks = chapters.flatMap((chapter, index) =>
    chapter.branches.map((branch) => ({
        parent: index,
        kind: branch.kind,
        d: `M${chapter.cx},${chapter.cy} Q${(chapter.cx + branch.cx) / 2},${(chapter.cy + branch.cy) / 2 + (branch.cy > chapter.cy ? -10 : 10)} ${branch.cx},${branch.cy}`,
    }))
);
