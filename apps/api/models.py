from sqlalchemy import Column, Integer, String, ForeignKey, DateTime
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from database import Base


class User(Base):
    __tablename__ = "users"
    id = Column(String(36), primary_key=True, index=True)
    name = Column(String(255), nullable=False)
    email = Column(String(255), unique=True, index=True, nullable=False)

    def __repr__(self):
        return f"<User(id={self.id}, name={self.name})>"


class Workspace(Base):
    __tablename__ = "workspaces"
    id = Column(String(36), primary_key=True, index=True)
    name = Column(String(255), nullable=False)
    role = Column(String(50), nullable=False)
    projects = relationship("Project", back_populates="workspace", cascade="all, delete-orphan")

    def __repr__(self):
        return f"<Workspace(id={self.id}, name={self.name})>"


class Project(Base):
    __tablename__ = "projects"
    id = Column(String(36), primary_key=True, index=True)
    name = Column(String(255), nullable=False)
    description = Column(String(1000))
    status = Column(String(50), nullable=False)
    ticketCount = Column(Integer, default=0)
    workspace_id = Column(String(36), ForeignKey("workspaces.id", ondelete="CASCADE"), index=True, nullable=False)
    workspace = relationship("Workspace", back_populates="projects")
    columns = relationship("ColumnModel", back_populates="project", cascade="all, delete-orphan")

    def __repr__(self):
        return f"<Project(id={self.id}, name={self.name})>"


class ColumnModel(Base):
    __tablename__ = "columns"
    id = Column(String(36), primary_key=True, index=True)
    title = Column(String(255), nullable=False)
    project_id = Column(String(36), ForeignKey("projects.id", ondelete="CASCADE"), index=True, nullable=False)
    project = relationship("Project", back_populates="columns")
    tickets = relationship("Ticket", back_populates="column", cascade="all, delete-orphan")

    def __repr__(self):
        return f"<ColumnModel(id={self.id}, title={self.title})>"


class Ticket(Base):
    __tablename__ = "tickets"
    id = Column(String(36), primary_key=True, index=True)
    title = Column(String(255), nullable=False)
    priority = Column(String(50), nullable=False)
    storyPoints = Column(Integer, default=0)
    assignee = Column(String(255))
    columnId = Column(String(36), ForeignKey("columns.id", ondelete="SET NULL"), index=True)
    column = relationship("ColumnModel", back_populates="tickets")
    created_at = Column(DateTime, server_default=func.now())
    updated_at = Column(DateTime, server_default=func.now(), onupdate=func.now())

    def __repr__(self):
        return f"<Ticket(id={self.id}, title={self.title})>"
