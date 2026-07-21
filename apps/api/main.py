from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from typing import List
from contextlib import asynccontextmanager

import models, schemas, crud
from database import engine, get_db


@asynccontextmanager
async def lifespan(app: FastAPI):
    models.Base.metadata.create_all(bind=engine)
    yield


app = FastAPI(title="NexusFlow API", lifespan=lifespan)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://localhost:3000",
        "http://127.0.0.1:5173",
        "http://127.0.0.1:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def read_root():
    return {"message": "NexusFlow API is running"}


@app.get("/workspaces", response_model=List[schemas.WorkspaceResponse])
def read_workspaces(db: Session = Depends(get_db)):
    try:
        return crud.get_workspaces(db)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to fetch workspaces: {str(e)}")


@app.get("/projects", response_model=List[schemas.ProjectResponse])
def read_projects(db: Session = Depends(get_db)):
    try:
        return crud.get_projects_with_counts(db)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to fetch projects: {str(e)}")


@app.get("/columns", response_model=List[schemas.ColumnResponse])
def read_columns(db: Session = Depends(get_db)):
    try:
        return crud.get_columns(db)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to fetch columns: {str(e)}")


@app.get("/tickets", response_model=List[schemas.TicketResponse])
def read_tickets(db: Session = Depends(get_db)):
    try:
        return crud.get_tickets(db)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to fetch tickets: {str(e)}")


@app.put("/tickets/{ticket_id}/move", response_model=schemas.TicketResponse)
def move_ticket(ticket_id: str, body: schemas.TicketMoveRequest, db: Session = Depends(get_db)):
    try:
        ticket = crud.get_ticket(db, ticket_id)
        if not ticket:
            raise HTTPException(status_code=404, detail="Ticket not found")

        column = crud.get_column(db, body.column_id)
        if not column:
            raise HTTPException(status_code=404, detail="Target column not found")

        result = crud.update_ticket_column(db, ticket_id, column.id)
        if not result:
            raise HTTPException(status_code=500, detail="Failed to move ticket")
        return result
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to move ticket: {str(e)}")
