# Microsoft product icons

Official SVGs from Microsoft icon packs. Each is used as-is per Microsoft's
icon terms: no crop, no flip, no rotate, no recolor. The product name is
always displayed next to the icon.

## What's here

| File | Source pack | Original filename |
|---|---|---|
| `foundry.svg` | Azure architecture icons | `03513-icon-service-AI-Studio.svg` (Azure AI Studio, rebranded to Microsoft Foundry) |
| `entra-governance.svg` | Azure architecture icons | `10235-icon-service-Identity-Governance.svg` |
| `conditional-access.svg` | Azure architecture icons | `10233-icon-service-Conditional-Access.svg` |
| `defender.svg` | Azure architecture icons | `10241-icon-service-Microsoft-Defender-for-Cloud.svg` |
| `copilot-studio.svg` | Power Platform (scalable) | `CopilotStudio_scalable.svg` |
| `agent-365.svg` | Power Platform (scalable) | `Agent365_scalable.svg` |
| `purview.svg` | Azure architecture icons | `02517-icon-service-Azure-Purview-Accounts.svg` |
| `entra.svg` | Entra architecture icons (Oct 2023) | `Microsoft Entra ID color icon.svg` (base Entra ID mark, used for Entra Agent ID until a dedicated icon ships) |

## What's still using monogram fallback

_None._ Every product currently maps to an official icon. Entra Agent ID reuses
the base Entra ID mark (`entra.svg`); swap it for a dedicated Agent ID icon when
Microsoft publishes one.

To wire one in: drop the SVG here (e.g. `copilot-studio.svg`), then in
`../AllAboardStation.astro` add the import + an entry to `msLogos` + set
`logo: 'copilot-studio'` on the matching `msft` entry. The component
already falls back to the colored monogram tile if `logo` is missing.

## Source

- Azure pack: https://learn.microsoft.com/azure/architecture/icons/
- Terms: https://learn.microsoft.com/azure/architecture/icons/ (Icon terms section)
