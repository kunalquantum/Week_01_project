# Changelog

## 2026-07-19
- Set up Project Context folder and initial `.md` files.
- Drafted and approved System Architecture plan.
- Scaffolded root monorepo using npm workspaces (`package.json`).
- Scaffolded frontend React SPA (`apps/web`) using Vite.
- Scaffolded backend API (`apps/api`) using FastAPI.
- Implemented Frontend Phase 1: Foundation & UI System.
- Implemented Frontend Phase 2: Workspace & Project Navigation.
- Implemented Frontend Phase 3: The Kanban Board.
- Implemented Frontend Phase 4: Rich Ticket Workspace.
- Implemented Frontend Phase 5: Search & Analytics Dashboard.
- Implemented Backend Phases 1-5: API MVP.
  - Set up SQLite Database and SQLAlchemy models (User, Workspace, Project, Column, Ticket).
  - Built Pydantic validation schemas.
  - Implemented CRUD repository layer.
  - Built FastAPI REST routes for workspaces, projects, columns, and tickets.
  - Configured CORS.
  - Created `seed.py` and populated the database.
  - Updated the frontend `KanbanBoard` to fetch real data from the API and handle cross-column drag-and-drop server updates.
