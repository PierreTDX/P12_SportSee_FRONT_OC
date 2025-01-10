import './utils/style/global.scss'
import './app.scss'
import Header from './components/Header'
import SideBar from './components/SideBar'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import ProfilUser from './pages/ProfilUser'
import Error from './pages/404'
import { BrowserRouter as Router, Route, Routes, useLocation, matchPath } from 'react-router-dom'

function App() {
  const location = useLocation(); // Récupérer l'URL actuelle

  // Définir les routes avec layout (Routes avec Header et SideBar)
  const routesWithLayout = ["/user/:id", "/user/:id/profil/"];

  // Vérifier si la route actuelle est dans les routes avec layout
  const hasLayout = routesWithLayout.some((route) => matchPath(route, location.pathname));

  return (
    <div className="app-container">
      {hasLayout && <Header />}
      <div className="main-container">
        {hasLayout && <SideBar />}
        <div className="content-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user/:id" element={<Dashboard />} />
            <Route path="/user/:id/profil/" element={<ProfilUser />} />
            <Route path="/*" element={<Error />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  );
}
