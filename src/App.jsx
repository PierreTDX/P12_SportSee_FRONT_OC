import './utils/style/global.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Error from './pages/404';
import UserLayout from './pages/UserLayout';
import UserDashboard from './pages/UserDashboard';
import UserProfil from './pages/UserProfil';
import UserReglage from './pages/UserReglage';
import UserCommunaute from './pages/UserCommunaute';

/**
 * Composant principal de l'application.
 * 
 * Il configure les différentes routes de l'application à l'aide de React Router.
 * - La route de base ("/") mène à la page d'accueil.
 * - Les routes sous "/user/:id/" affichent un layout avec plusieurs sous-pages :
 *   - Dashboard de l'utilisateur (/user/:id/)
 *   - Profil de l'utilisateur (/user/:id/profil)
 *   - Réglages de l'utilisateur (/user/:id/reglage)
 *   - Communauté de l'utilisateur (/user/:id/communaute)
 * 
 * @returns {JSX.Element} Retourne le composant Router avec les Routes configurées.
 */
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="*" element={<Error />} />
        </Route>

        <Route path="/user/:id/" element={<UserLayout />} >
          <Route index element={<UserDashboard />} /> {/* Route par défaut /user/:id/ */}
          <Route path="profil" element={<UserProfil />} />
          <Route path="reglage" element={<UserReglage />} />
          <Route path="communaute" element={<UserCommunaute />} />
        </Route>

      </Routes>
    </Router >
  );
};

export default App;