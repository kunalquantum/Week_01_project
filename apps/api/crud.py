from sqlalchemy.orm import Session
from sqlalchemy import func
import models


def get_workspaces(db: Session):
    return db.query(models.Workspace).all()


def get_projects(db: Session):
    return db.query(models.Project).all()


def get_columns(db: Session):
    return db.query(models.ColumnModel).all()


def get_tickets(db: Session):
    return db.query(models.Ticket).all()


def get_ticket(db: Session, ticket_id: str):
    return db.query(models.Ticket).filter(models.Ticket.id == ticket_id).first()


def get_column(db: Session, column_id: str):
    return db.query(models.ColumnModel).filter(models.ColumnModel.id == column_id).first()


def update_ticket_column(db: Session, ticket_id: str, new_column_id: str):
    ticket = db.query(models.Ticket).filter(models.Ticket.id == ticket_id).first()
    if not ticket:
        return None

    column = db.query(models.ColumnModel).filter(models.ColumnModel.id == new_column_id).first()
    if not column:
        return None

    ticket.columnId = new_column_id
    db.commit()
    db.refresh(ticket)
    return ticket


def get_projects_with_counts(db: Session):
    projects = db.query(
        models.Project,
        func.count(models.Ticket.id).label("actual_ticket_count")
    ).outerjoin(
        models.ColumnModel,
        models.ColumnModel.project_id == models.Project.id
    ).outerjoin(
        models.Ticket,
        models.Ticket.columnId == models.ColumnModel.id
    ).group_by(models.Project.id).all()

    result = []
    for project, count in projects:
        project.ticketCount = count
        result.append(project)
    return result
