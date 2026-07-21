# Decisions

**Last Updated:** 2026-07-20

## ADR-001: SQLite for MVP
- **Date:** 2026-07-19
- **Context:** Need rapid development without external DB dependencies.
- **Decision:** Use SQLite with SQLAlchemy ORM for easy migration to PostgreSQL later.
- **Consequences:** No concurrent write support. Acceptable for MVP.

## ADR-002: Mock Authentication for MVP
- **Date:** 2026-07-19
- **Context:** Authentication would slow down initial development.
- **Decision:** Hardcoded demo user; real JWT/OAuth deferred post-MVP.
- **Consequences:** No real security until Phase 2.

## ADR-003: Controller-Service-Repository Pattern
- **Date:** 2026-07-19
- **Context:** Need clean separation of concerns in backend.
- **Decision:** Routes (main.py) -> Services -> Repository (crud.py) -> Models.
- **Consequences:** Current implementation is flat (no service layer). To be added post-MVP.

## ADR-004: React Query for Server State
- **Date:** 2026-07-20
- **Context:** Raw fetch + useState is insufficient for caching, error handling, and optimistic updates.
- **Decision:** Use @tanstack/react-query for all server data fetching.
- **Consequences:** Cleaner data management; library dependency added.

## ADR-005: CORS Origin Restriction
- **Date:** 2026-07-20
- **Context:** Wildcard CORS with credentials was a security risk.
- **Decision:** Restrict to specific localhost origins (5173, 3000).
- **Consequences:** Production deployment will need updated origin list.
