import React from 'react';
import { Folder, MoreVertical, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MOCK_PROJECTS } from '@/lib/mock-data';

export const Projects: React.FC = () => {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Projects</h2>
          <p className="text-muted-foreground">Manage your workspace projects and boards.</p>
        </div>
        <button className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-all hover:shadow-lg hover:-translate-y-0.5">
          <Plus size={18} />
          <span>New Project</span>
        </button>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {MOCK_PROJECTS.map((project, idx) => (
          <Link 
            to={`/projects/${project.id}`}
            key={project.id} 
            className="group relative flex flex-col p-6 border border-border rounded-xl bg-card shadow-sm hover:shadow-md hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 block"
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            <div className="flex items-start justify-between">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                <Folder size={20} />
              </div>
              <button className="text-muted-foreground hover:text-foreground p-1 rounded-md hover:bg-muted transition-colors">
                <MoreVertical size={18} />
              </button>
            </div>
            
            <div className="mt-4">
              <h3 className="text-lg font-semibold truncate group-hover:text-primary transition-colors">{project.name}</h3>
              <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{project.description}</p>
            </div>
            
            <div className="mt-auto pt-6 flex items-center justify-between">
              <span className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${
                project.status === 'Active' ? 'bg-emerald-500/10 text-emerald-500' : 
                project.status === 'Planning' ? 'bg-blue-500/10 text-blue-500' : 
                'bg-slate-500/10 text-slate-500'
              }`}>
                {project.status}
              </span>
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                {project.ticketCount} tickets
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
