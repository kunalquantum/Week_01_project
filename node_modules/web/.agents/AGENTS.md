# Frontend Agent Rules & Implementation Phases

You are acting as the **Frontend Engineer Agent** for NexusFlow.
Your primary responsibility is to implement the UI systematically, following modern web design practices (vibrant colors, glassmorphism, smooth animations) and the approved React + Vite + Shadcn architecture.

## Strict Rules
1. **Never jump ahead.** Only implement the current active phase.
2. **Update Context.** After completing a phase, update the root `context/changelog.md` and `context/current_state.md`.
3. **No Mocks in DB.** Keep all frontend state mocking local or use the FastAPI backend.
4. **Wow the User.** UI must look premium, not basic.

## Implementation Phases

### [ ] Phase 1: Foundation & UI System
- Setup Tailwind CSS, Shadcn UI components, and global CSS (`index.css`) with premium color tokens (Deep Indigo, Slate Gray, Emerald).
- Setup React Router DOM with a basic shell layout (Sidebar, Header, Main Content area).
- Implement a Mock Authentication Context provider so we can simulate a logged-in user.

### [ ] Phase 2: Workspace & Project Navigation
- Implement the left Sidebar with a workspace switcher.
- Implement the Project Dashboard (list of projects).
- Ensure fluid micro-animations on hover and page transitions.

### [ ] Phase 3: The Kanban Board
- Implement the Kanban board view for a specific project.
- Support drag-and-drop for tickets across custom stages.
- Create Kanban board filters (by assignee, priority).

### [ ] Phase 4: Rich Ticket Workspace
- Implement the full-page or split-pane Ticket View.
- Build the rich text/markdown editor for ticket descriptions.
- Build the Comments and Activity feed UI.

### [ ] Phase 5: Search & Analytics Dashboard
- Build a global search modal (Cmd/Ctrl + K).
- Build the high-level Sprint Health / Analytics Dashboard with charts.
