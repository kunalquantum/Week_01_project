export const MOCK_WORKSPACES = [
  { id: 'w1', name: 'Acme Corp', role: 'Admin' },
  { id: 'w2', name: 'Personal Projects', role: 'Owner' },
];

export const MOCK_PROJECTS = [
  { id: 'p1', name: 'NexusFlow Platform', description: 'The core AI-native kanban system.', status: 'Active', ticketCount: 42 },
  { id: 'p2', name: 'Marketing Website', description: 'Public facing landing page and blog.', status: 'Planning', ticketCount: 15 },
  { id: 'p3', name: 'Mobile App', description: 'React Native companion app.', status: 'Paused', ticketCount: 104 }
];

export const MOCK_COLUMNS = [
  { id: 'c1', title: 'To Do', project_id: 'p1' },
  { id: 'c2', title: 'In Progress', project_id: 'p1' },
  { id: 'c3', title: 'In Review', project_id: 'p1' },
  { id: 'c4', title: 'Done', project_id: 'p1' }
];

export const MOCK_TICKETS = [
  { id: 't1', title: 'Design System Implementation', priority: 'High', columnId: 'c2', assignee: 'Demo User', storyPoints: 5 },
  { id: 't2', title: 'Setup Authentication Context', priority: 'Medium', columnId: 'c4', assignee: 'Demo User', storyPoints: 3 },
  { id: 't3', title: 'Create Global Search Modal', priority: 'High', columnId: 'c1', assignee: 'Unassigned', storyPoints: 5 },
  { id: 't4', title: 'Build Kanban Drag & Drop', priority: 'Highest', columnId: 'c1', assignee: 'Demo User', storyPoints: 8 },
  { id: 't5', title: 'Mock Chart Components', priority: 'Low', columnId: 'c3', assignee: 'Demo User', storyPoints: 2 },
];
