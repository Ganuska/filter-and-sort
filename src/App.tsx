import { AppRoutes } from '@/routes';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './context/authContext';

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </Router>
  );
}

export default App;
