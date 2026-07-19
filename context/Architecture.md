# NexusFlow System Architecture

**Version:** 1.0
**Status:** Approved for MVP
**Last Updated:** 2026-07-19

---

## 1. Overall System Architecture

NexusFlow follows a decoupled client-server architecture managed within a single monorepo using **npm workspaces**. 

- **Frontend:** React SPA bundled with Vite.
- **Backend:** Python-based REST API powered by FastAPI.
- **Database:** SQLite (local/file-based for MVP) to ensure rapid development without external dependencies.
- **AI Integration:** OpenAI API for intelligence, with local stubbing/mocking during early development.

---

## 2. Monorepo Structure

```text
nexusflow/
├── package.json          # Root workspace definition (npm workspaces)
├── apps/
│   ├── web/              # React + Vite frontend
│   └── api/              # FastAPI backend
├── packages/
│   ├── shared/           # Shared utilities/types (if needed)
│   └── ui/               # Reusable UI components
└── context/              # Project memory and documentation
```

---

## 3. Frontend Architecture

**Tech Stack:** React 18, Vite, TypeScript, Tailwind CSS, Shadcn UI.

- **State Management:** 
  - **Server State:** React Query (TanStack Query) for data fetching, caching, and synchronization.
  - **Client State:** React Context (for simple global state like theme or mock user) and local component state.
- **Routing:** React Router DOM.
- **Styling:** Tailwind CSS with Shadcn UI for rapid, accessible component development.

---

## 4. Backend Architecture

**Tech Stack:** Python 3.10+, FastAPI, SQLAlchemy, Pydantic.

- **API Framework:** FastAPI for high performance and automatic OpenAPI documentation.
- **Data Validation:** Pydantic models for request/response schemas.
- **ORM:** SQLAlchemy for database interactions, keeping the code database-agnostic to allow seamless migration from SQLite to PostgreSQL later.
- **Architecture Pattern:** Controller-Service-Repository pattern. Routes handle HTTP requests, services handle business logic, and repositories handle database operations.

---

## 5. Database Design

**Tech Stack:** SQLite.

- **Approach:** We will use a file-based SQLite database (`nexusflow.db`) located in the `apps/api/` directory during development.
- **Flexibility:** Since we are using SQLAlchemy, we can easily swap the SQLite connection string for a PostgreSQL connection string in the future.
- **Core Entities:**
  - `User`: Mocked user profiles.
  - `Project`: Workspaces/Projects containing tickets.
  - `Ticket`: Kanban cards containing metadata, descriptions, and linked context.

---

## 6. API Structure

The API will follow RESTful principles with standard JSON payloads. 
- `/api/v1/projects` - Project management
- `/api/v1/tickets` - Ticket CRUD and state transitions
- `/api/v1/ai` - Endpoints handling AI generation and summarization

All endpoints will be self-documented via FastAPI's `/docs` (Swagger UI).

---

## 7. Authentication Strategy

**MVP Phase:** **None / Mock Authentication.**
To maintain velocity, authentication is deferred. A default mock user context will be injected into requests to simulate user association.

**Future Scope:** JWT-based authentication via OAuth providers (GitHub/Google).

---

## 8. Deployment Strategy

**Local Development:**
A simple `npm run dev` script at the root level will concurrently launch both the Vite development server and the FastAPI uvicorn server.

**Production (Future):** Dockerized deployment with separate containers for the frontend (Nginx) and backend (FastAPI/Uvicorn).

---

## 9. Security & Scalability Considerations

- **Security:** CORS configured on FastAPI to accept requests only from the Vite dev server. 
- **Scalability:** By keeping business logic out of the database and inside FastAPI services, and by using SQLAlchemy, the migration from SQLite to a distributed PostgreSQL cluster will require zero business logic changes.
