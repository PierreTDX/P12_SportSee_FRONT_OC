// import './utils/style/global.scss';
// import './appWithOutLayout.scss';
import Home from './pages/Home';
import Error from './pages/404';
import { Routes, Route } from 'react-router-dom';

function AppWithOutLayout() {
    return (
        <div className="content-otherRoutes">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/*" element={<Error />} />
            </Routes>
        </div>
    );
}

export default AppWithOutLayout;
