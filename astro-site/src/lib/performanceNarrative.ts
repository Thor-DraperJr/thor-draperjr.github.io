// Performance Narrative data
// All customer-identifiable details are anonymized (segment + scale only).
// Keep it that way. Customers, deal names, and city-specific identifiers
// stay out of this file.

export interface ImpactCard {
    metric: string; // headline scale, e.g. "Eight-figure TCV"
    sub?: string; // secondary scale, e.g. "Seven-figure billed"
    segment: string; // anonymized customer descriptor
    narrative: string;
    tags?: string[];
}

export interface ImpactZone {
    id: 'self' | 'others' | 'built-on';
    eyebrow: string;
    title: string;
    framing: string;
    cards: ImpactCard[];
    hue: string;
    hueSoft: string;
    hueDeep: string;
}

export interface PromptPanel {
    id: string;
    category: string; // "Reflect on the past" | "Plan for the future"
    numeral: string; // "I" | "II" | "III"
    question: string;
    helper?: string; // helper line that mirrors the Connect form prompt
    narrative: string[]; // paragraphs; rendered as <p>
    zones?: ImpactZone[]; // optional supporting evidence (only used by panel 1)
}

export interface PerformanceNarrative {
    identity: {
        name: string;
        role: string;
        org: string;
        level: string;
        period: string;
        periodMonths: number;
        quotaSummary: string;
    };
    framing: {
        headline: string;
        what: string;
        how: string;
    };
    panels: PromptPanel[];
}

const impactZones: ImpactZone[] = [
    {
        id: 'self',
        eyebrow: 'I',
        title: 'Key accomplishments',
        framing: 'Wins that contribute to the team, business, and customer impact.',
        hue: '#3a7fb8',
        hueSoft: 'rgba(58, 127, 184, 0.14)',
        hueDeep: '#1c4f73',
        cards: [
            {
                metric: 'Eight-figure TCV',
                sub: 'Seven-figure billed - tens of thousands of seats',
                segment: 'Regional health system',
                narrative:
                    'Led the shift from a fragmented stack (third-party email and endpoint) to a unified Microsoft platform. Reframed the deal around operational efficiency, cost overlap, and improved security outcomes.',
                tags: ['Entra Suite', 'M365 E5', 'Defender'],
            },
            {
                metric: 'Mid six-figure',
                sub: 'DEX hunting expansion',
                segment: 'Multi-state health system',
                narrative:
                    'Secured a Defender Experts for Hunting opportunity by partnering with account leadership on a SOC transformation initiative. Shaped the customer DEX strategy and aligned hunting capabilities to their threat detection priorities.',
                tags: ['DEX', 'SOC modernization'],
            },
            {
                metric: 'Seven-figure',
                sub: 'Modern IAM displacement',
                segment: 'Health system in a regulated environment',
                narrative:
                    'Advanced an Entra ID Governance opportunity to displace a legacy IAM tool. Led stakeholder alignment across IAM teams and shaped the vision for lifecycle management, Verified ID, and EHR-integrated identity workflows.',
                tags: ['Entra ID Governance', 'Verified ID'],
            },
        ],
    },
    {
        id: 'others',
        eyebrow: 'II',
        title: 'Lift for others',
        framing: 'Contributions to the success of teams and field around me.',
        hue: '#3f8a55',
        hueSoft: 'rgba(63, 138, 85, 0.14)',
        hueDeep: '#225a36',
        cards: [
            {
                metric: 'Multi-part series',
                sub: 'AI-Transformation security enablement',
                segment: 'Field enablement (HLS Americas)',
                narrative:
                    'Created and led a security enablement series to help account teams confidently bring security into AI conversations - anchored in identity and real customer scenarios. Also presented on the SE&O call with a practical technique for delivering on-the-fly ESAs.',
                tags: ['Enablement', 'AI security'],
            },
            {
                metric: 'Regional groups',
                sub: 'AI Red Teaming workshop',
                segment: 'Two regional communities',
                narrative:
                    'Authored and delivered the AI Red Teaming workshop and extended it into regional user groups. Hands-on labs and CTF-style exercises bridged Security, AppDev, and Data/AI teams.',
                tags: ['Workshop', 'CTF', 'AI red team'],
            },
            {
                metric: 'Tech Community',
                sub: '+ GitHub red-team assets',
                segment: 'Microsoft community at large',
                narrative:
                    'Translated this work into scalable assets - co-authored Tech Community content and contributed GitHub-based red teaming resources that enable repeatable AI security validation. Designed so other teams can pick them up and run them with their own customers.',
                tags: ['Content', 'Open source'],
            },
        ],
    },
    {
        id: 'built-on',
        eyebrow: 'III',
        title: 'Built on the work of others',
        framing: 'Results that compound the ideas, motions, or assets of others.',
        hue: '#23344c',
        hueSoft: 'rgba(35, 52, 76, 0.14)',
        hueDeep: '#0f1f33',
        cards: [
            {
                metric: 'Doubled commitment',
                sub: 'Sentinel data lake expansion',
                segment: 'Health system on a competitive takeout',
                narrative:
                    'Built on the Sentinel data lake strategy from product and field leadership to support a competitive takeout motion. Helped the customer evaluate Sentinel against a third-party ingestion path and double their data lake commitment.',
                tags: ['Sentinel', 'Data lake'],
            },
            {
                metric: 'Bi-weekly cadence',
                sub: 'GBB / CxE / CSU partnerships',
                segment: 'Frontier-customer incubation signals',
                narrative:
                    'Partnered with GBBs, CxEs, and CSU to surface incubation signals from frontier customers and present on bi-weekly SE calls - translating strategy into actionable field execution on Entra, A365, DEX, and CIR.',
                tags: ['GBB', 'CxE', 'Field execution'],
            },
        ],
    },
];

export const performanceNarrative: PerformanceNarrative = {
    identity: {
        name: 'Thor Draper Jr',
        role: 'Sr Security Solution Engineer',
        org: 'Health & Life Sciences',
        level: 'Lvl 64',
        period: 'Oct 2025 - Apr 2026',
        periodMonths: 7,
        quotaSummary: 'Exceeded quota across all four revenue buckets.',
    },
    framing: {
        headline: 'Impact is what you accomplish - and how you do it matters just as much.',
        what: 'Results delivered against goals, with security, quality, and AI in mind.',
        how: 'Behaviors and actions that helped me, my team, and Microsoft excel, grow, and build trust.',
    },
    panels: [
        {
            id: 'past-results',
            category: 'Reflect on the past',
            numeral: 'I',
            question: 'What results did you deliver, and how did you do it?',
            helper:
                'Measurable outcomes for current priorities. Contributions to security, quality, and AI. Behaviors that demonstrated the culture.',
            narrative: [
                'The defining work of this half was platform displacement: moving customers off fragmented third-party stacks and onto a Microsoft security platform they could actually operate. The biggest of those was an eight-figure-TCV E5 step-up at a regional health system, where the play reframed the deal around operational efficiency, cost overlap, and security outcomes we could prove. Two more followed the same pattern. A mid six-figure Defender Experts for Hunting expansion at a multi-state health system, anchored in their SOC transformation roadmap. And a seven-figure Entra ID Governance opportunity in a regulated environment, where I led stakeholder alignment to displace a legacy IAM tool with a lifecycle management, Verified ID, and workflow-integrated identity vision.',
                'Underneath the deals was a Perform motion that earned the right to those conversations: landing the E5 step-up, executing competitive CIR/DART wins across several large health systems, and delivering an on-the-fly ESA during a renewal pressure cycle. The Transform side compounded it. My flagship contribution this half was the ATS Security Enablement series. It started as an idea about driving a sales campaign toward ACR and grew into an executive-sponsored program that helps account teams turn Microsoft\'s security and AI story into practical customer conversations, especially around agentic AI, identity, governance, and risk. The sessions are forums for translating complex platform capabilities into language a customer can act on. The motivation is simple: make security an accelerator for AI adoption instead of a blocker. Alongside it I authored and delivered the AI Red Teaming workshop that two regional user groups picked up and ran with their own communities.',
                'The "how" is where I want this to land. None of these were solo wins. The E5 step-up took months of weekly co-selling with the account team, and the DEX expansion only worked because I got out of the way and let the customer\'s SOC leader carry the narrative back to their own executives. I leaned hard on the work of others, too. I built on the Sentinel data lake strategy coming out of product and field leadership to support a competitive takeout that doubled a customer\'s ingestion commitment, and I partnered on a bi-weekly cadence with GBBs, CxEs, and CSU to translate frontier-customer incubation signals into field execution. I also joined the HLS Momentum Program this half to develop deeper sales acumen and grow my network with AEs, SSPs, and executives, because the long-term version of this role is bigger than the deals I close myself; it is shaping the motions others close. The pattern I am most proud of: every deal above has at least one named teammate whose contribution is load-bearing, and every enablement asset I shipped is something another SE can run without me in the room.',
            ],
            zones: impactZones,
        },
        {
            id: 'past-setbacks',
            category: 'Reflect on the past',
            numeral: 'II',
            question: 'Reflect on recent setbacks - what did you learn and how did you grow?',
            helper: 'Specific examples of setbacks, what I learned, and how I improved.',
            narrative: [
                'My biggest setback this year was a motivation one. I was assigned a 24-account quota, but I stepped in to help across roughly 60 once I picked up coverage for three additional sellers. I was pivotal on several of the largest closes of the year. The verbal credit was there. The comp credit was not, because I was running an overlay motion. That is a hard rhythm to keep up. Showing up at the same intensity for deals you are not getting paid on is a real motivation test, and there were stretches this half where I felt it. I also understand that org coverage changes, things stay flexible, and the help was the right call every time. I grew, because sixty accounts gives you sixty at-bats. I got exposure to deal shapes, customer archetypes, and SE peers I would not have seen on a 24-account year.',
            ],
        },
        {
            id: 'future-actions',
            category: 'Plan for the future',
            numeral: 'III',
            question: 'How will your actions and behaviors help you reach your goals?',
            helper:
                'Connect day-to-day behavior to the longer-term goals in my career development plan.',
            narrative: [
                'My H2 goal is to graduate from "the SE who closes the deal" to "the SE who shapes the motion others close." That means three concrete behavior shifts. First, write earlier and write publicly. The one-pager habit from the setback above becomes the default operating mode - every customer engagement starts with a written position, and the strongest of those become Tech Community posts or GitHub assets that other teams can run. Second, multiply through enablement, not heroics. The AI Red Teaming workshop and the security enablement series both proved that a single well-shaped asset reaches more customers than a calendar full of 1:1 calls; H2 is about making more of those, with co-authors, and instrumenting which ones actually move pipeline.',
            ],
        },
    ],
};
