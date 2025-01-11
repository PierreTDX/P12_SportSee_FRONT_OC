import './utils/style/appWithLayout.scss';
import './utils/style/global.scss';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Dashboard from './pages/Dashboard';
import ProfilUser from './pages/ProfilUser';
import { Routes, Route } from 'react-router-dom';

function AppWithLayout() {
    return (
        <div className="app-container">
            <Header />
            <div className="main-container">
                <SideBar />
                <div className="content-routes">
                    <Routes>
                        <Route path="/user/:id" element={<Dashboard />} />
                        <Route path="/user/:id/profil/" element={<ProfilUser />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default AppWithLayout;
