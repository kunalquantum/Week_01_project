import React, { useEffect, useState } from 'react';
import { Search, Command, LayoutDashboard, CheckSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

export const SearchModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(prev => !prev);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh] bg-background/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="fixed inset-0 z-40"
        onClick={() => setIsOpen(false)}
      />
      <div className="relative z-50 w-full max-w-xl bg-card border border-border rounded-xl shadow-2xl overflow-hidden animate-in slide-in-from-top-4 duration-300">
        <div className="flex items-center px-4 py-3 border-b border-border">
          <Search size={20} className="text-muted-foreground mr-3" />
          <input 
            autoFocus
            type="text" 
            placeholder="Type a command or search..." 
            className="flex-1 bg-transparent border-none outline-none text-lg"
          />
          <div className="flex items-center gap-1 bg-muted px-2 py-1 rounded text-xs text-muted-foreground font-mono">
            <Command size={14} /> K
          </div>
        </div>
        
        <div className="p-2 max-h-[60vh] overflow-y-auto">
          <div className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            Quick Actions
          </div>
          <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-muted transition-colors text-left group">
            <LayoutDashboard size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
            <span>Go to Dashboard</span>
          </Link>
          <Link to="/projects" onClick={() => setIsOpen(false)} className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-muted transition-colors text-left group">
            <CheckSquare size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
            <span>Go to Projects</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
