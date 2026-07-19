from sqlalchemy.orm import Session
import models, schemas

def get_workspaces(db: Session):
    return db.query(models.Workspace).all()

def get_projects(db: Session):
    return db.query(models.Project).all()

def get_columns(db: Session):
    return db.query(models.ColumnModel).all()

def get_tickets(db: Session):
    return db.query(models.Ticket).all()

def update_ticket_column(db: Session, ticket_id: str, new_column_id: str):
    ticket = db.query(models.Ticket).filter(models.Ticket.id == ticket_id).first()
    if ticket:
        ticket.columnId = new_column_id
        db.commit()
        db.refresh(ticket)
    return ticket
