import SideBar from "../../components/SideBar";
import Header from "../../components/Header";
import { Outlet } from "react-router";
import './userLayout.scss'

function UserLayout() {
    return (
        <>
            <Header />
            <div className="main-container">
                <SideBar />
                <main className="content-routes">
                    <Outlet /> {/* Rendu des routes enfants ici */}
                </main>
            </div>
        </>
    );
}

export default UserLayout;