import React from 'react';
import { Search, Bell, User as UserIcon } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

export const Header: React.FC = () => {
  const { user } = useAuth();
  
  return (
    <header className="h-16 border-b border-border bg-card flex items-center justify-between px-6 z-10 shadow-sm">
      <div className="flex items-center w-full max-w-md bg-muted/50 rounded-md px-3 py-1.5 border border-border focus-within:border-primary transition-colors cursor-text">
        <Search size={18} className="text-muted-foreground mr-2" />
        <span className="text-sm text-muted-foreground flex-1">Search projects, tickets...</span>
        <div className="hidden sm:flex items-center gap-1 bg-background border border-border px-1.5 py-0.5 rounded text-xs text-muted-foreground font-mono">
          <span>⌘</span><span>K</span>
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <button className="text-muted-foreground hover:text-foreground transition-colors relative">
          <Bell size={20} />
          <span className="absolute top-0 right-0 w-2 h-2 bg-destructive rounded-full"></span>
        </button>
        
        <div className="flex items-center gap-2 border-l border-border pl-4">
          <div className="text-sm text-right hidden sm:block">
            <p className="font-medium">{user?.name}</p>
          </div>
          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center overflow-hidden border border-border">
            {user?.avatar ? (
              <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
            ) : (
              <UserIcon size={16} />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
