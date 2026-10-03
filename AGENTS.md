# Notes for agents

## Design docs live in a private submodule

The design record for this site (taste contract, fact ledger, research notes) is kept out of this public repo. It lives in the private repo `mo-shawa/sahba-space-docs`, mounted here as the git submodule `docs/`. Each commit in this repo records the exact docs version it was made with.

```bash
git clone --recurse-submodules git@github.com:mo-shawa/sahba.space.git
git submodule update --init docs        # in an existing clone where docs/ is empty
git config push.recurseSubmodules check && git config submodule.recurse true   # once per clone
```

- Before any visual change, read `docs/taste-contract.md`. Owner feedback becomes a dated amendment there.
- Every claim on the site must be in `docs/facts.txt`. Restructure freely, invent nothing.
- If `docs/` is empty and you can't fetch it (no access), say so instead of guessing at its contents.

### Changing docs and site together

1. Make sure `docs/` is on `main`, not a detached HEAD: `git -C docs switch main` (and `git -C docs pull`).
2. Commit the doc change inside the submodule: `git -C docs add -A && git -C docs commit -m "…"`.
3. Stage the site change and the new docs pointer together, and commit once: `git add <files> docs && git commit -m "…"`.
4. Push the docs first (`git -C docs push`), then the site. With `push.recurseSubmodules check`, git refuses to push a site commit whose docs commit isn't on GitHub yet.

A docs-only change is the same, with only `docs` staged in step 3.

## Site

- Astro (static output), three.js, GSAP with ScrollTrigger, and Lenis. The particle engine is `src/scripts/galaxy.ts`; the scroll choreography is `src/scripts/home.ts`. Every visual state is a function of scroll position.
- Content: `src/content/*.json`, validated in `src/data/siteContent.ts`. Sahba edits it through Pages CMS (`.pages.yml`, guide in `cms/README.md`), so keep the JSON shapes and the CMS fields in step.
- `npm run earth-mask` regenerates `src/data/earthMask.ts` (land, plus the Palestine and Jordan grid) from Natural Earth.
- Deploys are manual to Cloudflare Workers. `npm run deploy` publishes production; only run it when Mahmoud asks. Preview a branch without touching production with `npm run build && npx wrangler versions upload --preview-alias <branch>`, which serves it at `https://<branch>-sahba-space.icy-heart-96a5.workers.dev`.
- Commits carry no co-author or tool attribution lines.
