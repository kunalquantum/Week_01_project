import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { MainLayout } from './components/layout/MainLayout';
import { Dashboard } from './pages/Dashboard';
import { Projects } from './pages/Projects';
import { KanbanBoard } from './pages/KanbanBoard';
import { TicketView } from './pages/TicketView';
import { SearchModal } from './components/SearchModal';

function App() {
  return (
    <AuthProvider>
      <Router>
        <SearchModal />
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="projects" element={<Projects />} />
            <Route path="projects/:projectId" element={<KanbanBoard />} />
            <Route path="tickets/:ticketId" element={<TicketView />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
