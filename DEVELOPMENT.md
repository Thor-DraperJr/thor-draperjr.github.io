# Development

## Recommended Local Workflow

The site now runs from Astro in `astro-site/`.

The simplest workflow on this machine is local Node development. No container is required for normal editing, previewing, or production validation.

## Astro Local Development

The production site source lives in `astro-site/`.

Site content now lives alongside the app in:

- `astro-site/src/content/posts/`
- `astro-site/src/content/about.md`
- `astro-site/src/content/resume.md`
- `astro-site/public/assets/images/`

### Start Astro Locally

```powershell
cd astro-site
npm install
npm run dev -- --host 0.0.0.0
```

Open `http://localhost:4321`.

### Validate Astro Without Deploying

Use this loop while designing:

```powershell
cd astro-site
npm run build
npm run preview -- --host 0.0.0.0
```

This catches build issues before deployment and serves the production output locally for review.

### GitHub Pages Deployment

The Astro deployment workflow is in `.github/workflows/deploy-astro.yml`.

It builds `astro-site/` and deploys the generated static files to GitHub Pages, so the public site can still be served from `https://thor-draperjr.github.io`.

## Notes

- Use `npm run build` before pushing changes that affect routing, content loading, or layout logic.
- Use `npm run preview -- --host 0.0.0.0` when you want to check the production output instead of the dev server.
- For post authoring and tagging rules, use [README.md](README.md).