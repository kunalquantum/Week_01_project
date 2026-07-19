const API_URL = 'http://localhost:8000';

export const api = {
  getProjects: async () => {
    const res = await fetch(`${API_URL}/projects`);
    if (!res.ok) throw new Error('Failed to fetch projects');
    return res.json();
  },
  getColumns: async () => {
    const res = await fetch(`${API_URL}/columns`);
    if (!res.ok) throw new Error('Failed to fetch columns');
    return res.json();
  },
  getTickets: async () => {
    const res = await fetch(`${API_URL}/tickets`);
    if (!res.ok) throw new Error('Failed to fetch tickets');
    return res.json();
  },
  moveTicket: async (ticketId: string, columnId: string) => {
    const res = await fetch(`${API_URL}/tickets/${ticketId}/move?column_id=${columnId}`, {
      method: 'PUT',
    });
    if (!res.ok) throw new Error('Failed to move ticket');
    return res.json();
  }
};
