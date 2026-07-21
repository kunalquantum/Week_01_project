import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MOCK_TICKETS, MOCK_COLUMNS } from '@/lib/mock-data';
import { ArrowLeft, Clock, MessageSquare, Paperclip, Check } from 'lucide-react';

export const TicketView: React.FC = () => {
  const { ticketId } = useParams();
  const ticket = MOCK_TICKETS.find(t => t.id === ticketId) ?? MOCK_TICKETS[0]!;

  const column = MOCK_COLUMNS.find(c => c.id === ticket.columnId);
  const projectId = column?.project_id || '';

  return (
    <div className="h-full flex flex-col md:flex-row gap-6 animate-in fade-in duration-500">
      {/* Main Content */}
      <div className="flex-1 flex flex-col space-y-6">
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <Link to={projectId ? `/projects/${projectId}` : '/projects'} className="hover:text-primary transition-colors flex items-center gap-1">
            <ArrowLeft size={16} /> Back to Board
          </Link>
          <span>/</span>
          <span>{ticket.id.toUpperCase()}</span>
        </div>

        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-4">{ticket.title}</h1>
          <div className="flex items-center gap-4 border-b border-border pb-4">
            <span className="bg-emerald-500/10 text-emerald-500 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2">
              <Check size={16} /> Active
            </span>
            <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <Paperclip size={16} /> Attach Files
            </button>
          </div>
        </div>

        <div className="flex-1">
          <h3 className="font-semibold mb-2">Description</h3>
          <div className="min-h-[200px] border border-border rounded-lg bg-card p-4 text-sm text-muted-foreground relative group">
            <div className="absolute inset-0 bg-transparent hover:bg-muted/10 transition-colors rounded-lg cursor-text" />
            # Phase 4 Implementation
            This ticket tracks the implementation of the rich ticket workspace.
            
            ## Acceptance Criteria
            - [x] Split-pane view
            - [ ] Mock Markdown Editor
            - [ ] Comments feed
          </div>
        </div>

        <div className="mt-8">
          <h3 className="font-semibold mb-4 flex items-center gap-2">
            <MessageSquare size={18} /> Activity & Comments
          </h3>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex-shrink-0" />
              <div className="flex-1">
                <div className="border border-border rounded-lg bg-card p-4 relative">
                  <textarea 
                    className="w-full bg-transparent border-none outline-none resize-none text-sm min-h-[60px]" 
                    placeholder="Add a comment..."
                  />
                  <div className="flex justify-end mt-2">
                    <button className="bg-primary text-primary-foreground px-4 py-1.5 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
                      Comment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-full md:w-80 border-l border-border pl-6 space-y-6 hidden lg:block">
        <div>
          <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">Details</h4>
          <div className="space-y-3 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Assignee</span>
              <span className="font-medium flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-primary/20" /> {ticket.assignee}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Priority</span>
              <span className="font-medium">{ticket.priority}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Story Points</span>
              <span className="font-medium">{ticket.storyPoints}</span>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">History</h4>
          <div className="space-y-4 text-sm border-l-2 border-border ml-2 pl-4">
            <div className="relative">
              <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-border" />
              <p className="text-muted-foreground">Ticket created</p>
              <p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5"><Clock size={12} /> 2 days ago</p>
            </div>
            <div className="relative">
              <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-primary" />
              <p className="text-foreground">Moved to In Progress</p>
              <p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5"><Clock size={12} /> 1 hour ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
