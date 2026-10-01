# Editing content

The site's text, lists and photos are edited through [Pages CMS](https://pagescms.org/), a free editor that works directly on this repository. Nothing about the site changes for visitors: it is still built into plain static HTML.

## How it fits together

- **Content** lives in `src/content/*.json`, one file per section (home and about, interviews, lectures, publications, leadership, testimonials, awards, education).
- **Photos** live in `src/assets/images`. Uploads from the editor land there too, and the build resizes and converts them, so large phone photos are fine.
- **The editor** is configured in `.pages.yml`: every field has a label and a hint.
- **Every save is a commit** to `main`. The build validates every file (`src/data/siteContent.ts`); if something is missing or malformed, the build fails with a message naming the file and field, and the live site stays as it was.

The particle scenes, layout and styling stay in code; the editor only touches content.

## One-time setup (Mahmoud)

1. Sign in at [app.pagescms.org](https://app.pagescms.org) with GitHub and install the Pages CMS GitHub App on `mo-shawa/sahba.space` (this repository only).
2. Open the repository in Pages CMS and check that the sections load.
3. Under **Collaborators**, invite Sahba by email. She doesn't need a GitHub account; she signs in from the email link.
4. When you're ready for her saves to go live on their own, connect the repository in Cloudflare: **Workers & Pages → sahba-space → Settings → Builds → Connect**, branch `main`, build command `npm run build`, deploy command `npx wrangler deploy`. Until then, publish manually with `npm run deploy`.

## For Sahba

- **Add an interview:** Interviews → add an item at the top → fill in the outlet, format, link and an image → Save.
- **Add a talk:** Lectures → add an item → pick the date (they sort themselves) → Save.
- **Add a paper:** Publications → add an item → year, title and venue (papers group by year automatically) → Save.
- **Edit your bio:** Home & about → Biography. Use the link button for links.
- **Emphasise a line in a testimonial:** make that sentence bold.

Changes appear on the site a minute or two after saving, once publishing is connected.

## Self-hosting later

Pages CMS can also be self-hosted (a Node app with Postgres and a GitHub App). `cms/pages-cms/.env.example` lists the variables it needs. The content files and `.pages.yml` work unchanged with either.
