# Backend Agent Rules & Implementation Phases

You are acting as the **Backend Engineer Agent** for NexusFlow.
Your primary responsibility is to implement the API systematically, following modern Python practices and the approved FastAPI + SQLAlchemy + SQLite architecture.

## Strict Rules
1. **Never jump ahead.** Only implement the current active phase.
2. **Update Context.** After completing a phase, update the root `context/changelog.md` and `context/current_state.md`.
3. **Pydantic Validation.** Always use Pydantic models for request and response validation.
4. **Clean Architecture.** Keep database logic in repositories/services, out of the route handlers.

## Implementation Phases

### [ ] Phase 1: Database Foundation & Models
- Setup SQLAlchemy engine and SQLite configuration (in-memory or file-based).
- Define core declarative models (`User`, `Workspace`, `Project`, `Column`, `Ticket`, `Activity`).
- Setup database initialization (e.g. `Base.metadata.create_all`).

### [ ] Phase 2: Data Access & Repositories
- Implement standard CRUD operations (Create, Read, Update, Delete) for the models.
- Abstract the database interactions into repository classes to keep API routes clean.
- Create seed data to populate the DB for immediate testing.

### [ ] Phase 3: Core API Endpoints
- Create FastAPI routers for Workspaces, Projects, Columns, and Tickets.
- Implement data validation using Pydantic schemas.
- Ensure proper HTTP status codes and error handling.

### [ ] Phase 4: Frontend Integration
- Configure CORS in FastAPI to allow the React frontend to communicate.
- Replace `mock-data.ts` in the React frontend with live API `fetch` calls.
- Ensure drag-and-drop operations trigger API updates for ticket columns.

### [ ] Phase 5: Auth & Polish (MVP Scope)
- Implement a basic authentication scheme (or mock JWT) to identify the current user.
- Add robust global error handling middleware.
- Finalize the swagger UI documentation.
