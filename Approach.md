Here's how I'd present it if this were a document meant to be shared with a team. I've organized it as a methodology rather than just a checklist.

---

# Context-Driven Vibe Coding Workflow

## A Structured AI-Assisted Software Development Methodology

**Version:** 1.0

---

# Introduction

Traditional vibe coding often produces software quickly but struggles with long-term maintainability. As conversations become longer, AI loses context, architectural decisions become inconsistent, documentation falls behind, and technical debt accumulates.

This workflow introduces **Context-Driven Vibe Coding**, where the project context becomes the primary source of truth instead of the AI conversation itself.

The goal is to make every AI session productive, maintain architectural consistency, reduce hallucinations, and allow any new AI model or developer to continue work with minimal onboarding.

---

# Core Principles

## 1. Context is the Product Memory

The conversation is temporary.

The project context is permanent.

Every important decision must exist inside the repository rather than inside a chat.

---

## 2. Architecture Before Implementation

Never begin coding immediately.

Every project should first define:

* Business Problem
* Functional Scope
* Technical Scope
* System Architecture
* Development Phases
* Success Criteria

The implementation should always follow an approved architecture.

---

## 3. Documentation Evolves With Code

Documentation is never written after development.

Documentation is developed alongside the implementation.

Every completed task updates the project context.

---

## 4. AI Should Ask Questions

When requirements are unclear, the AI should enrich the project plan by asking questions instead of making assumptions.

Assumptions are one of the biggest sources of future bugs.

---

# Phase 1 – Project Initialization

## Create Context Folder

```text
context/

├── project_plan.md
├── architecture.md
├── phase_plan.md
├── current_state.md
├── changelog.md
├── decisions.md
├── assumptions.md
├── todo.md
├── api.md
├── components.md
├── handover.md
├── session.md
├── technical_debt.md
├── risks.md
├── ai_rules.md
├── prompts/
├── agents/
└── architecture/
```

---

# Create Project Plan

The Project Plan becomes the foundation of the entire project.

It should include:

* Business Problem
* Existing Limitations
* Product Vision
* Functional Requirements
* Non-functional Requirements
* Technical Decisions
* Technology Stack
* Folder Structure
* UI Design Principles
* Color Scheme
* Coding Standards
* MVP Scope
* Future Roadmap

Nothing should be implemented before this document exists.

---

# Phase 2 – Solution Architecture

Ask the AI to act as an experienced Solution Architect.

The AI should design:

* Overall System Architecture
* Frontend Architecture
* Backend Architecture
* Database Design
* API Structure
* Authentication Strategy
* State Management
* Deployment Strategy
* Security Considerations
* Scalability Considerations

Architecture should always support future expansion.

---

# Phase 3 – AI Project Rules

Create permanent AI instructions.

Examples include:

* Always update changelog.md after meaningful work.
* Record every technical decision.
* Never assume unclear requirements.
* Ask clarification questions whenever required.
* Never rewrite large modules without justification.
* Never declare work complete without verification.
* Prefer modifying existing code over rebuilding it.

These rules remain constant across every AI conversation.

---

# Phase 4 – Create Specialized AI Agents

Instead of using one general AI for everything, create specialized agents.

Recommended agents include:

### Product Planner

Responsible for feature planning and scope.

---

### Solution Architect

Responsible for architecture and technical design.

---

### Frontend Engineer

Responsible for UI implementation.

---

### Backend Engineer

Responsible for APIs, services, and business logic.

---

### Documentation Engineer

Responsible for maintaining all project documentation.

---

### Code Reviewer

Responsible for reviewing completed work.

---

### Testing Engineer

Responsible for generating sensible test cases.

---

### Context Manager

Responsible only for maintaining project memory.

This agent updates:

* Current State
* Changelog
* Decisions
* Session Notes
* Handover Notes

---

# Phase 5 – Development

Development always begins from the approved project plan.

For every phase:

1. Read the Project Plan
2. Read Current State
3. Read Architecture
4. Read Agent Instructions
5. Implement one feature only

Avoid implementing multiple unrelated features simultaneously.

---

# Phase 6 – Human Review

Once implementation is complete:

The AI must stop.

Instead of immediately continuing,

Ask the developer to manually verify:

* UI
* Business Logic
* API
* Edge Cases
* User Experience

Development continues only after confirmation.

---

# Phase 7 – Sensible Testing

Avoid infinite testing loops.

The objective is confidence rather than perfection.

Testing should include:

* Primary Flow
* Important Edge Cases
* Error Handling
* Responsive Behaviour
* Basic Performance

Avoid spending excessive time chasing unlikely scenarios during MVP development.

---

# Phase 8 – Definition of Done

A task is complete only if:

✓ Feature implemented

✓ Manual testing completed

✓ Documentation updated

✓ Changelog updated

✓ Technical decisions recorded

✓ Current State updated

✓ Git committed

If any item is incomplete, the task is not considered finished.

---

# Phase 9 – Git Snapshot

After completing a meaningful milestone:

* Review changes
* Create a clean commit
* Push to GitHub

Frequent commits provide safe recovery points and preserve development history.

---

# Phase 10 – Requirement Validation

Before assuming a bug exists, verify whether the implementation matches the intended behaviour.

Ask:

* Is this actually incorrect?
* Was the requirement misunderstood?
* Is the feature behaving differently than expected?

Many apparent bugs are requirement misunderstandings.

---

# Phase 11 – Hallucination Detection

If the AI repeatedly suggests similar fixes without making progress:

Stop.

Do not continue generating fixes.

Instead follow this process:

1. Reproduce the issue.
2. Confirm whether the issue still exists.
3. Identify the root cause.
4. Try a different implementation strategy.
5. Verify the result.
6. Continue development.

Changing approaches is usually more effective than repeating similar prompts.

---

# Phase 12 – Context Maintenance

After every completed milestone update:

* current_state.md
* changelog.md
* decisions.md
* session.md
* handover.md
* todo.md

The repository should always reflect the latest project state.

---

# Phase 13 – Context Engineering

Long conversations reduce AI effectiveness.

After completing a significant milestone:

1. Open a fresh conversation.
2. Ask the AI to read the Context folder.
3. Continue development from the updated documentation.

The Context folder replaces conversation history.

---

# Phase 14 – Cross-Model Review

Periodically switch to another AI model.

Request:

* Architecture Review
* Folder Structure Review
* Performance Review
* Security Review
* Refactoring Opportunities
* Production Readiness Assessment

Fresh models often identify issues overlooked by previous sessions.

---

# Phase 15 – Continuous Refactoring

Do not postpone all cleanup until the end.

After every major phase:

* Remove dead code
* Improve naming
* Simplify components
* Reduce duplication
* Improve folder organization
* Update documentation

Small, regular improvements prevent large refactoring efforts later.

---

# Phase 16 – Release Preparation

Before creating a release:

Review:

* Features Complete
* Known Bugs
* Technical Debt
* Performance
* Documentation
* Deployment Readiness

Generate release notes summarizing the completed work.

---

# Final Development Philosophy

This workflow treats AI as a collaborative engineering partner rather than an autonomous code generator.

The objective is not simply to generate code quickly, but to build software that remains understandable, maintainable, and extensible over time.

By separating **project knowledge** from **conversation history**, every new AI session begins with reliable context, every decision is traceable, and development scales without relying on the memory of a single chat.

**In Context-Driven Vibe Coding, code is only one artifact of development. The real asset is the continuously evolving project context that enables both humans and AI to build with clarity, consistency, and confidence.**
