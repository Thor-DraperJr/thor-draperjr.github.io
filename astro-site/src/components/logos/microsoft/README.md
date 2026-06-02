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

## What's still using monogram fallback

These icons live in packs we couldn't auto-download from this machine
(corporate TLS issue on `download.microsoft.com`). To upgrade:

| Product | Pack | URL |
|---|---|---|
| Copilot Studio | Power Platform | https://learn.microsoft.com/power-platform/guidance/icons |
| Microsoft Agent 365 | Power Platform | https://learn.microsoft.com/power-platform/guidance/icons |
| Microsoft Purview | Microsoft Purview icons | https://learn.microsoft.com/purview/icons |
| Entra Agent ID | Entra architecture icons (or Azure, when Microsoft ships it) | https://learn.microsoft.com/entra/architecture/architecture-icons |

To wire one in: drop the SVG here (e.g. `copilot-studio.svg`), then in
`../AllAboardStation.astro` add the import + an entry to `msLogos` + set
`logo: 'copilot-studio'` on the matching `msft` entry. The component
already falls back to the colored monogram tile if `logo` is missing.

## Source

- Azure pack: https://learn.microsoft.com/azure/architecture/icons/
- Terms: https://learn.microsoft.com/azure/architecture/icons/ (Icon terms section)
