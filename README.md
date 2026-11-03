# medilink

Online appointment platform for small medical/dental clinics.

## Team
| Member | Role | Focus |
|---|---|---|
| Michael Kauzman | Engineering Manager / Team Lead | Prioritizes backlog, manages WIP and blockers, coaches devs (does not solve every problem) |
| Tomas Barajas Villalobos | Developer | Patient-facing booking flow |
| Adam Sleiman | Developer | Backend / reminder & notification service |
| Minh Nhat Tran | Developer | Clinic admin interface & test automation |

All developers review PRs and verify each other's work. Production support rotates between developers.

## Workflow
`Backlog → Ready → In Progress → Code Review → Verification → Done`

**WIP limits:** In Progress 3 (1 per dev), Code Review 2, Verification 2.
Why: last release, devs started new work while PRs waited for review. Limits force us to finish and review before starting new work.

## Definition of Done
- [ ] Acceptance criteria met
- [ ] Reviewed and approved by another developer
- [ ] Tests pass
- [ ] Side effects checked (e.g. reminders)
- [ ] Verified by someone other than the author
