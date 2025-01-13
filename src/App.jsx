import './utils/style/global.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Error from './pages/404';
import UserLayout from './pages/UserLayout';
import UserDashboard from './pages/UserDashboard';
import UserProfil from './pages/UserProfil';

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
        </Route>

      </Routes>
    </Router >
  );
};

export default App;