# Todo

**Last Updated:** 2026-07-20

## In Progress
- [ ] Wire Dashboard and Search pages to backend API
- [ ] Production readiness / Dockerization
- [ ] Replace mock JWT with real OAuth/JWT authentication

## Backend
- [ ] Add create/update/delete endpoints for all entities
- [ ] Add pagination, filtering, sorting to list endpoints
- [ ] Add Alembic migrations
- [ ] Add pytest + httpx tests
- [ ] Add logging configuration
- [ ] Add rate limiting
- [ ] Add proper User management endpoints

## Frontend
- [ ] Connect Dashboard to real API data
- [ ] Add dark mode toggle
- [ ] Make Header search functional (opens SearchModal)
- [ ] Add @tanstack/react-query QueryClientProvider wrapper
- [ ] Add form validation (react-hook-form + zod)
- [ ] Add vitest + @testing-library/react tests
- [ ] Add proper error boundaries per route

## Infrastructure
- [ ] Dockerize frontend and backend
- [ ] Set up GitHub Actions CI
- [ ] Add environment variable configuration (.env files)
- [ ] Add PostgreSQL migration path
