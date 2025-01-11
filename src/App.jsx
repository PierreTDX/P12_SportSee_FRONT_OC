import { BrowserRouter as Router, useLocation, matchPath } from 'react-router-dom';
import AppWithLayout from './AppWithLayout';
import AppWithOutLayout from './AppWithOutLayout';

function App() {
  const location = useLocation(); // Récupère l'URL actuelle

  // Routes spécifiques à AppWithLayout
  const AppWithLayoutRoutes = ["/user/:id", "/user/:id/profil/"];

  // Vérifie si la route actuelle correspond à AppWithLayout
  const matchesLayoutRoute = AppWithLayoutRoutes.some((route) =>
    matchPath({ path: route, end: true }, location.pathname)
  );

  return matchesLayoutRoute ? <AppWithLayout /> : <AppWithOutLayout />;
}

export default function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  );
}