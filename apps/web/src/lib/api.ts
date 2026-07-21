const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:8000';

interface TicketData {
  id: string;
  title: string;
  priority: string;
  storyPoints: number;
  assignee: string;
  columnId: string;
}

interface ColumnData {
  id: string;
  title: string;
  project_id: string;
}

interface ProjectData {
  id: string;
  name: string;
  description: string;
  status: string;
  ticketCount: number;
  workspace_id: string;
}

async function request<T>(path: string, options?: RequestInit): Promise<T> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10000);

  try {
    const res = await fetch(`${API_BASE}${path}`, {
      ...options,
      signal: controller.signal,
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
    });
    if (!res.ok) {
      const body = await res.text();
      throw new Error(body || `Request failed: ${res.status}`);
    }
    return res.json();
  } finally {
    clearTimeout(timeout);
  }
}

export const api = {
  getProjects: () => request<ProjectData[]>('/projects'),

  getColumns: () => request<ColumnData[]>('/columns'),

  getTickets: () => request<TicketData[]>('/tickets'),

  moveTicket: (ticketId: string, columnId: string) =>
    request<TicketData>(`/tickets/${ticketId}/move`, {
      method: 'PUT',
      body: JSON.stringify({ column_id: columnId }),
    }),
};
