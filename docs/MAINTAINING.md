# Issue triage and contributor coordination

## Label scheme

Keep existing GitHub labels. Use the repository's labels consistently; the initial backlog is tracked in issues #3–#17.

| Dimension | Labels | Meaning |
| --- | --- | --- |
| Type | `bug`, `enhancement`, `documentation`, `question` | Choose the primary purpose |
| Area | `area: navigation`, `area: accessibility`, `area: tickets`, `area: gallery`, `area: tooling`, `area: content`, `area: performance`, `area: community` | Main ownership area; add another only when useful |
| Priority | `priority: high`, `priority: medium`, `priority: low` | Exactly one; relative ordering, not a deadline |
| Status | `status: ready`, `status: blocked`, `status: in progress`, `status: in review` | Exactly one after triage |
| Contributor suitability | `good first issue`, `help wanted` | Beginner-sized work or ready work welcoming a contributor |

High priority means a core visitor journey, accessibility barrier, or contributor setup blocker. Medium is important follow-up work; low is polish. An issue can be high priority and blocked.

New issue forms apply only a type label. Maintainers check evidence, scope, area, priority, dependencies, and acceptance criteria before setting status. Do not mark every task as a good first issue.

## Lifecycle

1. **Triage:** verify the problem, check duplicates and PRs, and add starting files plus observable acceptance criteria.
2. **Ready:** scope is implementable. Use `status: ready` and `help wanted`; keep unassigned until a contributor's approach is accepted.
3. **Assigned:** use GitHub Assignees, replace ready with `status: in progress`, and remove `help wanted`. Only assign an actual confirmed contributor.
4. **Blocked:** state the precise dependency or required decision in the issue, link any dependent issue, and replace the status with `status: blocked`.
5. **Review:** link the PR, replace status with `status: in review`, and check every acceptance criterion.
6. **Done:** merge the accepted PR and close the issue (normally through `Closes #N`). Remove the active status label.

If progress stops, ask the contributor for an update before reassigning. Preserve their branch/PR and leave handoff context. Do not introduce automatic inactivity deadlines.

## Assignment order and dependencies

Start with runtime setup, navigation bugs, explicit registration states, and keyboard access. CI follows the runtime setup. The test harness can be developed alongside it, but coordinate lockfile edits. Reduced motion and gallery performance need coordination with gallery accessibility.

Official event content, launch metadata, and licensing need owner/organizer decisions. Keep them blocked until the required information is recorded. Do not add invented deadlines or contributors.

## PR review checklist

- Linked issue, focused diff, acceptance criteria met.
- Build results recorded for code changes; applicable automated checks pass once available.
- Mobile/desktop and keyboard evidence for affected UI.
- No credentials or unauthorized media/contact information.
- Content approved by organizers where required.
- Documentation and lockfile updated only as needed.
- No unrelated refactors hiding in a small fix.

## Suggested GitHub filters

- Ready to assign: `is:issue is:open label:"status: ready" no:assignee`
- Beginner tasks: `is:issue is:open label:"good first issue" label:"status: ready"`
- High priority: `is:issue is:open label:"priority: high"`
- Blocked: `is:issue is:open label:"status: blocked"`
- Awaiting review: `is:issue is:open label:"status: in review"`

Branch protection, deployment, access grants, deadlines, and milestones are separate maintainer decisions; this workflow does not silently configure them.
