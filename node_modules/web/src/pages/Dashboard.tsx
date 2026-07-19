import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Activity, CheckCircle, Clock, TrendingUp } from 'lucide-react';

export const Dashboard: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <h1 className="text-3xl font-bold tracking-tight">Welcome back, {user?.name}</h1>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {/* Mock Stat Cards */}
        <div className="p-6 border border-border rounded-xl bg-card shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between pb-2">
            <h3 className="text-sm font-medium text-muted-foreground">Active Sprint Health</h3>
            <Activity size={18} className="text-emerald-500" />
          </div>
          <div className="text-2xl font-bold">92%</div>
          <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
            <TrendingUp size={12} className="text-emerald-500"/> +4% from last week
          </p>
        </div>
        
        <div className="p-6 border border-border rounded-xl bg-card shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between pb-2">
            <h3 className="text-sm font-medium text-muted-foreground">Tickets Completed</h3>
            <CheckCircle size={18} className="text-blue-500" />
          </div>
          <div className="text-2xl font-bold">24</div>
          <p className="text-xs text-muted-foreground mt-1">This week</p>
        </div>
        
        <div className="p-6 border border-border rounded-xl bg-card shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between pb-2">
            <h3 className="text-sm font-medium text-muted-foreground">Hours Logged</h3>
            <Clock size={18} className="text-orange-500" />
          </div>
          <div className="text-2xl font-bold">38.5</div>
          <p className="text-xs text-muted-foreground mt-1">This week</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 mt-8">
        <div className="border border-border rounded-xl p-6 bg-card h-80 flex flex-col">
          <h3 className="font-semibold mb-4">Sprint Velocity</h3>
          <div className="flex-1 flex items-end gap-2 mt-4">
            {[40, 60, 45, 80, 55, 90, 75].map((height, i) => (
              <div key={i} className="flex-1 bg-primary/20 rounded-t-md hover:bg-primary/40 transition-colors relative group" style={{ height: `${height}%` }}>
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-popover text-popover-foreground text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  {height} pts
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border border-border rounded-xl p-6 bg-card h-80 flex flex-col">
          <h3 className="font-semibold mb-4">Recent Activity</h3>
          <div className="flex-1 space-y-4 overflow-y-auto">
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex-shrink-0" />
              <div>
                <p className="text-sm"><span className="font-semibold">Jane Doe</span> moved <span className="font-semibold text-primary">NEX-42</span> to Done</p>
                <p className="text-xs text-muted-foreground">2 hours ago</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex-shrink-0" />
              <div>
                <p className="text-sm"><span className="font-semibold">You</span> commented on <span className="font-semibold text-primary">NEX-38</span></p>
                <p className="text-xs text-muted-foreground">4 hours ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
