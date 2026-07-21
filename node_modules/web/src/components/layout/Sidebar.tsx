import React, { useState } from 'react';
import { LayoutDashboard, CheckSquare, Settings, ChevronDown, Building2 } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { MOCK_WORKSPACES } from '@/lib/mock-data';

export const Sidebar: React.FC = () => {
  const [activeWorkspace, setActiveWorkspace] = useState(MOCK_WORKSPACES[0]!);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <aside className="w-64 border-r border-border bg-card flex flex-col hidden md:flex h-full">
      <div className="h-16 flex items-center px-4 border-b border-border relative">
        <button 
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center justify-between w-full p-2 rounded-md hover:bg-muted transition-colors text-left"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-primary/20 flex items-center justify-center text-primary">
              <Building2 size={16} />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold truncate w-32">{activeWorkspace.name}</span>
              <span className="text-xs text-muted-foreground">{activeWorkspace.role}</span>
            </div>
          </div>
          <ChevronDown size={16} className={`text-muted-foreground transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
        </button>

        {isDropdownOpen && (
          <div className="absolute top-16 left-4 right-4 bg-popover border border-border rounded-md shadow-lg z-50 py-1 animate-in fade-in slide-in-from-top-2 duration-200">
            {MOCK_WORKSPACES.map(ws => (
              <button
                key={ws.id}
                onClick={() => {
                  setActiveWorkspace(ws);
                  setIsDropdownOpen(false);
                }}
                className="w-full text-left px-4 py-2 text-sm hover:bg-muted transition-colors flex items-center gap-2"
              >
                <Building2 size={14} className="text-muted-foreground" />
                {ws.name}
              </button>
            ))}
          </div>
        )}
      </div>
      
      <nav className="flex-1 p-4 space-y-2">
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            `flex items-center gap-3 px-3 py-2 rounded-md transition-all duration-200 ${isActive ? 'bg-primary/10 text-primary' : 'hover:bg-muted text-muted-foreground hover:translate-x-1'}`
          }
        >
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </NavLink>
        <NavLink 
          to="/projects" 
          className={({ isActive }) => 
            `flex items-center gap-3 px-3 py-2 rounded-md transition-all duration-200 ${isActive ? 'bg-primary/10 text-primary' : 'hover:bg-muted text-muted-foreground hover:translate-x-1'}`
          }
        >
          <CheckSquare size={20} />
          <span>Projects</span>
        </NavLink>
      </nav>
      
      <div className="p-4 border-t border-border">
        <button className="flex items-center gap-3 px-3 py-2 rounded-md w-full hover:bg-muted text-muted-foreground transition-colors">
          <Settings size={20} />
          <span>Settings</span>
        </button>
      </div>
    </aside>
  );
};
