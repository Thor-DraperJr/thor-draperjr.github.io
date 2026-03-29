export interface ResumeEra {
    id: string;
    years: string;
    title: string;
    org: string;
    description: string;
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
    headline: "Senior Security Solution Engineer at Microsoft protecting cloud environments for U.S. healthcare payors, providers, and life-sciences organizations. I combine relationship-building instincts from a decade in sales and entrepreneurship with deep technical work across identity, threat protection, and data security.",
    sub: "Every chapter of my career sharpened the same skill: translating complexity into action for the people who need it most. Now I am focused on where healthcare security intersects with AI, building the enablement programs and security architectures that let organizations move faster without increasing risk.",
    contact: {
        email: "thordraper2@outlook.com",
        linkedin: "https://www.linkedin.com/in/thor-draper-jr/",
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
        description: "Own the full security stack for Modern Workplace across U.S. Healthcare payors, providers, and Life Sciences organizations. Architect and deploy Microsoft identity and security solutions, driving adoption of Zero Trust frameworks, AI-powered threat detection, and data loss prevention. Deliver pre-sales technical engagements that accelerate customer security posture and enable partner readiness.",
        skills: ["Zero Trust", "AI Security", "Security Copilot", "Pre-Sales Architecture", "Healthcare Security"],
    },
    {
        id: "azure",
        years: "2021 - 2024",
        title: "Azure Network Support Engineer, ARR",
        org: "Microsoft Corporation",
        description: "Served on the Rapid Response team covering 18 IaaS technologies, resolving critical-severity incidents and clearing service request backlogs. As ARR Team Lead, drove proactive architecture and security posture reviews across customer Azure estates using Microsoft Sentinel and Log Analytics. Built community impact as ISSA Education Director, organizing mentoring events for students and hosting educational workshops at the Charlotte campus.",
        skills: ["Azure IaaS", "Microsoft Sentinel", "KQL", "Architecture Review", "Incident Response"],
    },
    {
        id: "teaching",
        years: "2020 - 2024",
        title: "Cyber Security Instructor (Adjunct)",
        org: "Trilogy Education",
        description: "Trained career-changers in Windows/Linux administration, ethical hacking, and SIEM management through hands-on labs and real-world scenarios. Earned the highest Net-promoter score in the 2020 cohort. Ran concurrently with Microsoft role, sharpening the ability to translate complex security concepts for diverse audiences.",
        skills: ["Curriculum Design", "Ethical Hacking", "SIEM", "Mentorship"],
    },
    {
        id: "infrastructure",
        years: "2020 - 2021",
        title: "Network Administrator & ISE",
        org: "Nucentric Solution / Biz Technology Solutions",
        description: "Earned three promotions at Nucentric by standing up ESXi and Hyper-V environments and building PowerShell automation that cut repetitive admin tasks. At Biz Technology Solutions, led client-facing discovery for on-premises-to-cloud migrations in healthcare and real estate, conducting network audits that identified technology gaps and closed new business.",
        skills: ["PowerShell", "Virtualization", "Cloud Migration", "Network Architecture"],
    },
    {
        id: "entrepreneur",
        years: "2018 - 2020",
        title: "Entrepreneur & Consultant",
        org: "Stay Fit CLT / Paychex / G-Net Solutions",
        description: "Founded and operated a fitness facility in Charlotte, managing all aspects of the business from build-out to daily operations. At Paychex, consulted on mid-market payroll and HR solutions. At G-Net Solutions, sold and deployed Aternity (Riverbed) as a value-added reseller across NC/SC/VA, owning the full cycle from prospecting through technical deployment guidance.",
        skills: ["Business Ownership", "Solution Selling", "Technical Consulting"],
    },
    {
        id: "early-career",
        years: "2010 - 2018",
        title: "Branch Manager & Army National Guard",
        org: "Enterprise Rent-A-Car / Army National Guard",
        description: "Managed operations and P&L at Enterprise Rent-A-Car's largest non-airport location, building the customer-experience and operational-management instincts that later translated to client-facing technical roles. Served concurrently as an E-4 Infantryman in the Army National Guard, developing leadership under pressure, team coordination, and the discipline that underpins every career chapter since.",
        skills: ["P&L Ownership", "Operations Management", "Customer Experience", "Leadership", "Discipline", "Teamwork"],
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
        label: "Security Strategy & Architecture",
        skills: ["Microsoft Security Portfolio", "Zero Trust & Identity Security", "Cloud Security Posture Management", "Threat Detection & SOC Modernization", "Security Risk Assessment & Remediation"],
    },
    {
        label: "AI Security & Innovation",
        skills: ["AI & Agentic Security Frameworks", "Microsoft Security Copilot", "AI Red Team Evaluation", "Generative AI Security Posture", "Responsible AI Implementation"],
    },
    {
        label: "Solution Selling & Customer Impact",
        skills: ["Pre-Sales Security Architecture", "Enterprise Security Assessments", "Cost Displacement & Business Cases", "Healthcare & Life Sciences Expertise", "Executive Technical Briefings"],
    },
    {
        label: "Enablement & Force Multiplication",
        skills: ["Enablement Program Design", "Hands-On Lab & CTF Development", "Technical Content & Thought Leadership", "Scalable Assets (Playbooks, Workshops)", "Cross-Org Partnership & Community"],
    },
    {
        label: "Technical Depth",
        skills: ["Azure Infrastructure & Cloud Networking", "PowerShell & Python Automation", "SIEM Engineering & KQL", "Identity & Access Architecture (Entra ID)", "Windows & Linux Security Operations"],
    },
];
