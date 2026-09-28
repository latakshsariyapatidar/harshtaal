# Contributing to Harshtal

Contributions are welcome for the IIT Dharwad cultural fest website. Read the [README](README.md) for the current product and setup, and follow the [community conduct expectations](CODE_OF_CONDUCT.md).

## Choose and claim a task

1. Check open issues and existing PRs to avoid duplicate work.
2. Choose an **unassigned** issue with `status: ready`. New contributors can start with `good first issue`.
3. Comment with your proposed approach and availability. A maintainer confirms scope and assigns the issue; a comment alone does not reserve it.
4. Wait for assignment before substantial implementation. For a tiny typo fix, a focused PR is fine.
5. Keep one contributor responsible for each issue unless maintainers explicitly coordinate a pair. If blocked or unavailable, leave a progress note so the task can be handed over.

Do not implement `status: blocked` tasks until their stated dependency or decision is resolved. Official dates, prices, rules, sponsor placement, registration URLs, and personal contact details require organizer-approved information. Do not invent them.

## Fork and set up

Replace YOUR-USERNAME with your GitHub username:

```bash
git clone https://github.com/YOUR-USERNAME/harshtaal.git
cd harshtaal
git remote add upstream https://github.com/latakshsariyapatidar/harshtaal.git
git fetch upstream
git switch -c fix/ISSUE-short-description upstream/main
npm ci
npm run dev
```

Use Node 22.12 or newer in the Node 22 release line. See README for the supported toolchain. A collaborator with repository write access can use a branch in the main repository; external contributors should use a fork.

## Make a focused change

- Follow the existing JavaScript/JSX component style. This repository is not a TypeScript project.
- Read [COMPONENTS.md](docs/COMPONENTS.md) before editing shared navigation, loader, or gallery code.
- Keep event data in `src/data/eventsData.js` where applicable. Separate content edits from broad component rewrites.
- Preserve the dark, Japanese/anime-inspired visual style unless the issue explicitly changes it.
- Use semantic HTML, keyboard access, visible focus, descriptive names, and reduced-motion alternatives.
- Do not commit credentials, personal data, `node_modules/`, or `dist/`.
- Include dependency and lockfile changes together only when needed; let npm generate the lockfile.
- Use media you own or have permission to contribute. Record source and attribution in the PR; do not assume photos or sponsor logos are freely reusable.

## Validate

Always run `npm run build` for code changes. Until a test harness is merged, do not claim to have run nonexistent test or lint commands.

Check the issue's acceptance criteria. For UI changes, include:
- Desktop and mobile behavior (for example, 1440px and 375px widths).
- Keyboard navigation, focus visibility, and any affected menu or dialog.
- Direct URL load and Back/Forward for navigation changes.
- Reduced-motion behavior for animation changes.
- Screenshots or a short recording for visual changes, and relevant console errors.

For documentation-only changes, check commands against package.json and verify relative file links.

## Commit and open a PR

```bash
git status
git add path/to/changed-file
git commit -m "fix: describe the user-visible improvement"
git fetch upstream
git merge upstream/main
npm run build
git push -u origin fix/ISSUE-short-description
```

Resolve any merge conflicts and recheck the affected behavior. Do not overwrite another contributor's work or force-push shared branches.

Open a PR against `main` using the template. Include `Closes #ISSUE`, what changed, validation actually performed, screenshots when useful, and remaining limitations. A draft PR is welcome for early feedback. An issue is complete only when its acceptance criteria are met and the fix is merged.

## Review and handoff

Respond to review comments and keep the PR focused. Maintainers manage labels and assignment using [MAINTAINING.md](docs/MAINTAINING.md). If you cannot finish, summarize what works, what remains, and the branch/PR containing your work. Never publish sensitive security details in a public issue; ask the maintainer for a private reporting route.
