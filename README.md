<!-- Last modified: 2026-08-09 -->

# Thor Draper Jr.

I write here for technology and security leaders, builders, and people growing their careers. I share practical lessons from security, cloud, AI, and leadership that readers can use in their own work. The site also gives me one place to keep my writing and resume current.

This repo is the Astro version of `thor-draperjr.github.io`. I've gone through a few iterations of Jekyll, but Astro is the first time I've felt like the stack is working for me instead of against me.

## The point of the site

- A working resume that I can link to and update without friction.
- A place to share ideas and lessons from my work in security, cloud, AI, and leadership.
- Feel intentional and editorial instead of like a default blog template.

## Where the real work happens

- [astro-site](astro-site) is the actual app.
- [astro-site/src/content/posts](astro-site/src/content/posts) is where blog posts go.
- [astro-site/public/assets/images](astro-site/public/assets/images) is where post images go.
- [astro-site/src/content/post-template.md](astro-site/src/content/post-template.md) is the starter template.
- [docs/repo-structure-policy.md](docs/repo-structure-policy.md) defines where source, reusable code, generated artifacts, and durable review evidence belong.

## Publishing reminder

- New posts go in `astro-site/src/content/posts/` as `YYYY-MM-DD-slug.md`.
- The first category sets the URL bucket.
- Default categories are `tech`, `business`, and `life`.
- Tags should stay lower-case and reusable.
- Run the build before pushing.
