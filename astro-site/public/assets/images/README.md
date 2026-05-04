# Image Asset Structure

Image assets are grouped by ownership so the folder can scale without turning into a flat screenshot pile.

- `posts/<date-slug>/` holds images used by one blog post. Use the markdown filename without `.md` as the folder name.
- `unused/` holds images that are not referenced by source content yet.

Public image URLs should match the folder structure, for example `/assets/images/posts/2021-09-01-iac/6-pipeline.png`.