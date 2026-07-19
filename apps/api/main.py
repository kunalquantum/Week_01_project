from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from typing import List

import models, schemas, crud
from database import engine, get_db

models.Base.metadata.create_all(bind=engine)

app = FastAPI(title="NexusFlow API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "NexusFlow API is running"}

@app.get("/workspaces", response_model=List[schemas.WorkspaceResponse])
def read_workspaces(db: Session = Depends(get_db)):
    return crud.get_workspaces(db)

@app.get("/projects", response_model=List[schemas.ProjectResponse])
def read_projects(db: Session = Depends(get_db)):
    return crud.get_projects(db)

@app.get("/columns", response_model=List[schemas.ColumnResponse])
def read_columns(db: Session = Depends(get_db)):
    return crud.get_columns(db)

@app.get("/tickets", response_model=List[schemas.TicketResponse])
def read_tickets(db: Session = Depends(get_db)):
    return crud.get_tickets(db)

@app.put("/tickets/{ticket_id}/move")
def move_ticket(ticket_id: str, column_id: str, db: Session = Depends(get_db)):
    ticket = crud.update_ticket_column(db, ticket_id, column_id)
    if not ticket:
        raise HTTPException(status_code=404, detail="Ticket not found")
    return ticket
