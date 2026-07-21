from pydantic import BaseModel, ConfigDict, Field
from typing import Optional
from datetime import datetime


class TicketBase(BaseModel):
    title: str = Field(..., min_length=1, max_length=255)
    priority: str = Field(..., pattern=r"^(Low|Medium|High|Highest)$")
    storyPoints: int = Field(default=0, ge=0, le=100)
    assignee: str = Field(default="Unassigned", max_length=255)
    columnId: str = Field(..., max_length=36)


class TicketResponse(TicketBase):
    id: str
    created_at: Optional[datetime] = None
    updated_at: Optional[datetime] = None
    model_config = ConfigDict(from_attributes=True)


class TicketMoveRequest(BaseModel):
    column_id: str = Field(..., max_length=36, description="Target column ID")


class ColumnBase(BaseModel):
    title: str = Field(..., min_length=1, max_length=255)
    project_id: str = Field(..., max_length=36)


class ColumnResponse(ColumnBase):
    id: str
    model_config = ConfigDict(from_attributes=True)


class ProjectBase(BaseModel):
    name: str = Field(..., min_length=1, max_length=255)
    description: Optional[str] = Field(default="", max_length=1000)
    status: str = Field(..., pattern=r"^(Active|Planning|Paused|Completed)$")
    ticketCount: int = Field(default=0, ge=0)
    workspace_id: str = Field(..., max_length=36)


class ProjectResponse(ProjectBase):
    id: str
    model_config = ConfigDict(from_attributes=True)


class WorkspaceBase(BaseModel):
    name: str = Field(..., min_length=1, max_length=255)
    role: str = Field(..., max_length=50)


class WorkspaceResponse(WorkspaceBase):
    id: str
    model_config = ConfigDict(from_attributes=True)
