from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from database import Base

class User(Base):
    __tablename__ = "users"
    id = Column(String, primary_key=True, index=True)
    name = Column(String)
    email = Column(String, unique=True, index=True)

class Workspace(Base):
    __tablename__ = "workspaces"
    id = Column(String, primary_key=True, index=True)
    name = Column(String)
    role = Column(String)

class Project(Base):
    __tablename__ = "projects"
    id = Column(String, primary_key=True, index=True)
    name = Column(String)
    description = Column(String)
    status = Column(String)
    ticketCount = Column(Integer, default=0)
    workspace_id = Column(String, ForeignKey("workspaces.id"))
    workspace = relationship("Workspace")

class ColumnModel(Base):
    __tablename__ = "columns"
    id = Column(String, primary_key=True, index=True)
    title = Column(String)
    project_id = Column(String, ForeignKey("projects.id"))

class Ticket(Base):
    __tablename__ = "tickets"
    id = Column(String, primary_key=True, index=True)
    title = Column(String)
    priority = Column(String)
    storyPoints = Column(Integer)
    assignee = Column(String)
    columnId = Column(String, ForeignKey("columns.id"))
