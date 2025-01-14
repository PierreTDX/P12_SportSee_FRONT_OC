import SideBar from "../../components/SideBar";
import Header from "../../components/Header";
import { Outlet } from "react-router";
import "./userLayout.scss";
import ScrollbarHover from "../../hooks/scrollbarHover"; // Importation du hook

function UserLayout() {

    return (
        <>
            <Header />
            <div className="main-container">
                <SideBar />
                <main className="content-routes" ref={ScrollbarHover()}> {/* Appel du Hook avec l'attribut "ref" */}
                    <Outlet /> {/* Rendu des routes enfants ici */}
                </main>
            </div>
        </>
    );
}

export default UserLayout