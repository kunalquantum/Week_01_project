import sys
import os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from database import SessionLocal, engine
import models


def seed_db():
    db = SessionLocal()
    try:
        if db.query(models.Workspace).first():
            print("Database already seeded. Delete nexusflow.db to re-seed.")
            return

        workspaces = [
            models.Workspace(id="w1", name="Acme Corp", role="Admin"),
            models.Workspace(id="w2", name="Personal Projects", role="Owner"),
        ]
        db.add_all(workspaces)

        projects = [
            models.Project(id="p1", name="NexusFlow Platform", description="The core AI-native kanban system.", status="Active", ticketCount=0, workspace_id="w1"),
            models.Project(id="p2", name="Marketing Website", description="Public facing landing page and blog.", status="Planning", ticketCount=0, workspace_id="w1"),
            models.Project(id="p3", name="Mobile App", description="React Native companion app.", status="Paused", ticketCount=0, workspace_id="w1"),
        ]
        db.add_all(projects)

        columns = [
            models.ColumnModel(id="c1", title="To Do", project_id="p1"),
            models.ColumnModel(id="c2", title="In Progress", project_id="p1"),
            models.ColumnModel(id="c3", title="In Review", project_id="p1"),
            models.ColumnModel(id="c4", title="Done", project_id="p1"),
        ]
        db.add_all(columns)

        tickets = [
            models.Ticket(id="t1", title="Design System Implementation", priority="High", columnId="c2", assignee="Demo User", storyPoints=5),
            models.Ticket(id="t2", title="Setup Authentication Context", priority="Medium", columnId="c4", assignee="Demo User", storyPoints=3),
            models.Ticket(id="t3", title="Create Global Search Modal", priority="High", columnId="c1", assignee="Unassigned", storyPoints=5),
            models.Ticket(id="t4", title="Build Kanban Drag & Drop", priority="Highest", columnId="c1", assignee="Demo User", storyPoints=8),
            models.Ticket(id="t5", title="Mock Chart Components", priority="Low", columnId="c3", assignee="Demo User", storyPoints=2),
        ]
        db.add_all(tickets)

        db.commit()
        print("Database seeded successfully!")
    except Exception as e:
        db.rollback()
        print(f"Seed failed: {e}")
        raise
    finally:
        db.close()


if __name__ == "__main__":
    models.Base.metadata.create_all(bind=engine)
    seed_db()
