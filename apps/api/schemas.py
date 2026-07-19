from pydantic import BaseModel
from typing import List, Optional

class TicketBase(BaseModel):
    title: str
    priority: str
    storyPoints: int
    assignee: str
    columnId: str

class TicketCreate(TicketBase):
    id: str

class TicketResponse(TicketBase):
    id: str
    class Config:
        from_attributes = True

class ColumnBase(BaseModel):
    title: str
    project_id: str

class ColumnResponse(ColumnBase):
    id: str
    class Config:
        from_attributes = True

class ProjectBase(BaseModel):
    name: str
    description: str
    status: str
    ticketCount: int
    workspace_id: str

class ProjectResponse(ProjectBase):
    id: str
    class Config:
        from_attributes = True

class WorkspaceBase(BaseModel):
    name: str
    role: str

class WorkspaceResponse(WorkspaceBase):
    id: str
    class Config:
        from_attributes = True
