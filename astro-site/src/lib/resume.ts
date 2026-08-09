export interface ResumeEra {
    id: string;
    years: string;
    title: string;
    org: string;
    bullets: string[];
    skills: string[];
}

export interface CertGroup {
    vendor: string;
    count: number;
    certs: string[];
}

export interface Education {
    degree: string;
    school: string;
    year: string;
}

export interface Competency {
    label: string;
    skills: string[];
}

export interface SpeakingEngagement {
    title: string;
    venue: string;
    url?: string;
}

export const summary = {
    name: "Thor G. Draper Jr",
    positioning: "Sales and Security Leader | Enterprise Solution Selling | Cloud, AI, and Cybersecurity",
    headline: "Senior Security Solution Engineer at Microsoft with a decade of sales, business operations, and people leadership experience strengthened by six years of hands-on cloud and cybersecurity work.",
    sub: "Led a 40-plus-person branch with P&L responsibility, owned and sold a business, sold payroll and technology solutions, and now guides healthcare and life sciences organizations through security decisions in a pre-sales role. Built technical depth deliberately to bring stronger discovery, customer judgment, and architecture credibility to complex commercial conversations.",
    contact: {
        email: "thordraper2@outlook.com",
        linkedin: "https://www.linkedin.com/in/thor-draperjr/",
    },
};

export const education: Education[] = [
    { degree: "B.P.S. Applied Cybersecurity", school: "SANS Technology Institute", year: "2024" },
    { degree: "A.A.S. IT, Cloud & Virtualization", school: "Central Piedmont Community College", year: "2021" },
];

export const certifications: CertGroup[] = [
    { vendor: "GIAC", count: 9, certs: ["GOSI", "GPCS", "GCIA", "GPYC", "GCLD", "GCIH", "GSEC", "GFACT", "GISF"] },
    { vendor: "CompTIA", count: 8, certs: ["CySA+", "Cloud+", "Linux+", "Server+", "Security+", "Network+", "A+", "ITF+"] },
    { vendor: "Microsoft", count: 3, certs: ["SC-200", "SC-900", "AI-900"] },
    { vendor: "VMware", count: 1, certs: ["VCP-DCV"] },
    { vendor: "Cisco", count: 1, certs: ["CCNA"] },
];

export const timeline: ResumeEra[] = [
    {
        id: "security",
        years: "2024 - Present",
        title: "Sr. Security Solution Engineer",
        org: "Microsoft Corporation",
        bullets: [
            "Provide pre-sales technical guidance for identity, threat protection, data security, and cloud security across U.S. healthcare payors, providers, and life sciences organizations.",
            "Lead discovery and architecture discussions that translate security requirements, operating risks, and technical constraints into practical solution paths.",
            "Work across customers, partners, sales teams, and technical specialists to support security evaluations, deployment readiness, and customer adoption.",
        ],
        skills: ["Consultative Discovery", "Pre-Sales Solution Architecture", "Healthcare & Life Sciences", "Security Strategy", "Cross-Functional Orchestration"],
    },
    {
        id: "azure",
        years: "2021 - 2024",
        title: "Azure Network Support Engineer, Azure Rapid Response",
        org: "Microsoft Corporation",
        bullets: [
            "Supported critical incidents and service-request backlogs across 18 Azure IaaS technologies, helping customers restore service and understand complex infrastructure failures.",
            "Served as a team lead for proactive Azure architecture and security posture reviews, coordinating technical work across teams and guiding customers through findings and next steps.",
            "Applied Microsoft Sentinel and Log Analytics to infrastructure investigation, security review, and operational decision support.",
        ],
        skills: ["Azure IaaS", "Critical Incident Response", "Architecture Reviews", "Security Posture Reviews", "Technical Team Leadership"],
    },
    {
        id: "teaching",
        years: "2020 - 2024",
        title: "Cybersecurity Instructor, Adjunct",
        org: "Trilogy Education",
        bullets: [
            "Taught Windows and Linux administration, ethical hacking, and SIEM operations through hands-on labs and practical scenarios for career-changing professionals.",
            "Earned the highest Net Promoter Score in the 2020 cohort while turning complex technical subjects into clear, usable instruction.",
        ],
        skills: ["Technical Instruction", "Technical-to-Business Translation", "Curriculum Design", "SIEM", "Mentorship"],
    },
    {
        id: "biz-technology",
        years: "Nov 2020 - May 2021",
        title: "Information Systems Engineer",
        org: "Biz Technology Solutions",
        bullets: [
            "Led client discovery for network and cloud migration work across healthcare, real estate, and other industries.",
            "Conducted network audits that identified technology gaps, established priorities, and secured follow-up customer conversations.",
            "Supported cloud migrations, technical escalations, and PowerShell-based diagnosis of synchronization and profile issues.",
        ],
        skills: ["Client Discovery", "Network Assessment", "Cloud Migration", "Opportunity Development", "PowerShell"],
    },
    {
        id: "nucentric",
        years: "Jan 2020 - Dec 2020",
        title: "Network Administrator",
        org: "Nucentric Solutions",
        bullets: [
            "Built and supported ESXi and Hyper-V environments and automated repetitive administration with PowerShell.",
            "Combined customer support, infrastructure operations, and independent lab work to build practical cloud and virtualization depth.",
        ],
        skills: ["Infrastructure Operations", "Virtualization", "PowerShell Automation", "Customer Support", "Technical Troubleshooting"],
    },
    {
        id: "stay-fit",
        years: "2020",
        title: "Owner and Operator",
        org: "Stay Fit CLT",
        bullets: [
            "Founded and operated a Charlotte fitness business, with responsibility for customer acquisition, daily operations, service delivery, and business performance.",
            "Managed the business through its sale, gaining direct experience in ownership, risk, customer retention, and operational decision-making.",
        ],
        skills: ["Business Ownership", "Sales", "Operations", "Customer Retention", "Business Sale"],
    },
    {
        id: "paychex",
        years: "2019 - 2020",
        title: "Mid-Market Consultant",
        org: "Paychex",
        bullets: [
            "Sold payroll and human resources solutions to mid-market organizations through customer discovery and needs-based consultation.",
        ],
        skills: ["B2B Solution Selling", "Mid-Market Customers", "Consultative Discovery", "Payroll & HR Solutions"],
    },
    {
        id: "g-net",
        years: "Jul 2019 - Jan 2020",
        title: "Technical Account Manager",
        org: "G-Net Solutions",
        bullets: [
            "Prospected for and developed technology opportunities across North Carolina, South Carolina, and Virginia as a value-added reseller.",
            "Managed the sales path from initial outreach and solution discussion through technical deployment and integration guidance.",
        ],
        skills: ["Full-Cycle Solution Selling", "Prospecting", "Territory Development", "Technical Consulting", "Deployment Guidance"],
    },
    {
        id: "enterprise",
        years: "2013 - 2019",
        title: "Branch Manager",
        org: "Enterprise Rent-A-Car",
        bullets: [
            "Led more than 40 employees at the company's largest non-airport location, with responsibility for team development, customer experience, daily operations, and P&L performance.",
            "Balanced customer service, employee growth, operating discipline, and profitability in a high-volume business.",
        ],
        skills: ["P&L Management", "People Leadership", "Customer Experience", "Business Operations", "Performance Management"],
    },
    {
        id: "military",
        years: "2010 - 2016",
        title: "Infantryman, E-4",
        org: "Army National Guard",
        bullets: [
            "Served six years as an infantryman, developing discipline, team coordination, accountability, and calm decision-making under pressure.",
        ],
        skills: ["Team Leadership", "Operational Discipline", "Accountability", "Coordination", "Service"],
    },
];

export const specialRoles = [
    {
        title: "Apprentice Handler",
        org: "SANS Internet Storm Center",
        year: "2023",
        description: "Deployed DShield sensors and web application honeypots to monitor internet-facing threats. Processed, interpreted, and analyzed the data, then wrote it up as short blog-style \"diaries\" for the global information security community.",
        link: { label: "View ISC Diary Archive", url: "https://isc.sans.edu/diaryarchive.html" },
    },
];

export const speakingEngagements: SpeakingEngagement[] = [
    {
        title: "Defender for AI Services: Threat Protection and AI Red Team Workshop",
        venue: "Microsoft Tech Community",
        url: "https://techcommunity.microsoft.com/blog/microsoftdefendercloudblog/defender-for-ai-services-threat-protection-and-ai-red-team-workshop/4464771",
    },
    {
        title: "Managing Mentors",
        venue: "RVASec 2021",
        url: "https://youtu.be/bxD_0kLMnQs?si=-6-QRtrzAT6LTrgl",
    },
    {
        title: "Managing Mentors",
        venue: "Netflix/2U Speaker Series",
    },
];

export const competencies: Competency[] = [
    {
        label: "Solution Selling & Customer Outcomes",
        skills: ["Consultative Discovery", "Full-Cycle Solution Selling", "Pre-Sales Solution Architecture", "Opportunity Development", "Customer Outcome Alignment"],
    },
    {
        label: "Leadership & Business Operations",
        skills: ["People Leadership", "P&L Management", "Business Ownership", "Operational Decision-Making", "Team Development"],
    },
    {
        label: "Stakeholder Orchestration",
        skills: ["Cross-Functional Coordination", "Customer & Partner Engagement", "Technical-to-Business Translation", "Deployment Readiness", "Workshop Facilitation"],
    },
    {
        label: "Security, Cloud & AI Transformation",
        skills: ["Microsoft Security Portfolio", "Zero Trust & Identity Security", "Cloud Security Posture", "Threat Detection", "AI Security"],
    },
    {
        label: "Industry & Communication",
        skills: ["Healthcare & Life Sciences", "Technical Instruction", "Public Speaking", "Mentorship", "Technical Content"],
    },
    {
        label: "Technical Depth",
        skills: ["Azure IaaS & Networking", "Microsoft Sentinel & KQL", "PowerShell", "Virtualization", "Windows & Linux Security"],
    },
];
