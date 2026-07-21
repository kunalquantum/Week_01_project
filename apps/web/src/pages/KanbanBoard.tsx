import React, { useState, useEffect, useCallback } from 'react';
import { MoreHorizontal, Plus, Search, Filter, AlertCircle } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import type { DropResult } from '@hello-pangea/dnd';
import { api } from '@/lib/api';

interface Ticket {
  id: string;
  title: string;
  priority: string;
  storyPoints: number;
  assignee: string;
  columnId: string;
}

interface Column {
  id: string;
  title: string;
  project_id: string;
}

export const KanbanBoard: React.FC = () => {
  const { projectId } = useParams();
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [columns, setColumns] = useState<Column[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    let cancelled = false;

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const [fetchedCols, fetchedTickets] = await Promise.all([
          api.getColumns(),
          api.getTickets()
        ]);
        if (cancelled) return;
        setColumns(fetchedCols.filter((c: Column) => c.project_id === projectId || !projectId));
        setTickets(fetchedTickets);
      } catch (err) {
        if (cancelled) return;
        setError(err instanceof Error ? err.message : 'Failed to load board data. Is the backend running?');
      } finally {
        if (!cancelled) setLoading(false);
      }
    };
    fetchData();

    return () => { cancelled = true; controller.abort(); };
  }, [projectId]);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Highest': return 'bg-red-500/10 text-red-500';
      case 'High': return 'bg-orange-500/10 text-orange-500';
      case 'Medium': return 'bg-blue-500/10 text-blue-500';
      case 'Low': return 'bg-slate-500/10 text-slate-500';
      default: return 'bg-slate-500/10 text-slate-500';
    }
  };

  const onDragEnd = useCallback(async (result: DropResult) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;
    if (destination.droppableId === source.droppableId && destination.index === source.index) return;

    const previousTickets = [...tickets];

    const updatedTickets = tickets.map(ticket => {
      if (ticket.id === draggableId) {
        return { ...ticket, columnId: destination.droppableId };
      }
      return ticket;
    });
    setTickets(updatedTickets);

    try {
      await api.moveTicket(draggableId, destination.droppableId);
    } catch (err) {
      setTickets(previousTickets);
      console.error("Failed to move ticket on server:", err);
    }
  }, [tickets]);

  if (loading) return <div className="p-8 text-muted-foreground animate-pulse">Loading board data...</div>;

  if (error) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="text-center space-y-4">
          <AlertCircle size={48} className="text-destructive mx-auto" />
          <h3 className="text-lg font-semibold">Failed to Load Board</h3>
          <p className="text-muted-foreground max-w-md">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col space-y-4 animate-in fade-in duration-500">
      <div className="flex items-center justify-between pb-4 border-b border-border">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Board {projectId ? `- ${projectId}` : ''}</h2>
          <p className="text-muted-foreground">Manage your sprint tasks.</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center bg-muted/50 rounded-md px-3 py-1.5 border border-border">
            <Search size={16} className="text-muted-foreground mr-2" />
            <input type="text" placeholder="Search board..." className="bg-transparent border-none outline-none text-sm w-40" />
          </div>
          <button className="p-2 border border-border rounded-md hover:bg-muted text-muted-foreground">
            <Filter size={18} />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-x-auto">
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="flex gap-6 h-full pb-4 w-max items-start">
            {columns.map(column => {
              const columnTickets = tickets.filter(t => t.columnId === column.id);
              return (
                <div key={column.id} className="w-80 flex flex-col bg-muted/30 rounded-xl border border-border/50 max-h-full">
                  <div className="p-4 flex items-center justify-between font-semibold border-b border-border/50">
                    <div className="flex items-center gap-2">
                      <span>{column.title}</span>
                      <span className="text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded-full">{columnTickets.length}</span>
                    </div>
                    <button className="text-muted-foreground hover:text-foreground">
                      <MoreHorizontal size={18} />
                    </button>
                  </div>
                  
                  <Droppable droppableId={column.id}>
                    {(provided, snapshot) => (
                      <div 
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        className={`flex-1 p-3 overflow-y-auto space-y-3 min-h-[150px] ${snapshot.isDraggingOver ? 'bg-muted/50' : ''} transition-colors rounded-b-xl`}
                      >
                        {columnTickets.map((ticket, index) => (
                          <Draggable key={ticket.id} draggableId={ticket.id} index={index}>
                            {(provided, snapshot) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                className={`group bg-card p-4 rounded-lg border shadow-sm transition-all cursor-grab 
                                  ${snapshot.isDragging ? 'shadow-lg border-primary/50 rotate-2' : 'border-border hover:shadow-md hover:border-primary/50 hover:-translate-y-0.5'}`}
                              >
                                <p className="font-medium text-sm mb-3 group-hover:text-primary transition-colors">
                                  <Link to={`/tickets/${ticket.id}`}>{ticket.title}</Link>
                                </p>
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-2">
                                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${getPriorityColor(ticket.priority)}`}>
                                      {ticket.priority}
                                    </span>
                                    <span className="text-xs bg-muted px-2 py-0.5 rounded text-muted-foreground font-mono">
                                      {ticket.storyPoints}
                                    </span>
                                  </div>
                                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-[10px] font-bold text-primary border border-primary/30">
                                    {ticket.assignee === 'Unassigned' ? '?' : ticket.assignee.charAt(0)}
                                  </div>
                                </div>
                              </div>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                        
                        <button className="w-full flex items-center justify-center gap-2 p-3 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors border border-dashed border-transparent hover:border-border mt-2">
                          <Plus size={16} />
                          Add Task
                        </button>
                      </div>
                    )}
                  </Droppable>
                </div>
              );
            })}
          </div>
        </DragDropContext>
      </div>
    </div>
  );
};
