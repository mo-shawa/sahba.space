# Pages CMS Placeholder

This repository is only stubbed for a future self-hosted Pages CMS setup.

The current Astro migration keeps all content inside components until parity is
verified. After that verification step, the intended next move is:

1. Move site content out of Astro components into repository content files.
2. Replace the placeholder `.pages.yml` with real collection and file schemas.
3. Run a separate self-hosted Pages CMS app against this repository.
4. Let repository writes trigger the existing Cloudflare deployment flow.

## Intended architecture

- Astro site in this repository.
- Self-hosted Pages CMS as a separate app and deployment.
- GitHub App for authentication and repository writes.
- PostgreSQL for Pages CMS app state.
- Cloudflare rebuilds triggered by repository updates.

## Placeholder environment file

See `cms/pages-cms/.env.example` for the future Pages CMS runtime variables.

## Deliberate non-goals in this pass

- No active Pages CMS instance is deployed.
- No real editor schema is defined yet.
- No content has been moved into CMS-editable files yet.