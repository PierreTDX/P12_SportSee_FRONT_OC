/**
 * @file index.jsx
 * @description Composant React définissant la mise en page de l'utilisateur, incluant un en-tête, une barre latérale et un contenu principal.
 * Ce composant sert de layout de base pour les pages de l'utilisateur, avec un espace pour les routes enfants.
 */

import SideBar from "../../components/SideBar";
import Header from "../../components/Header";
import { Outlet } from "react-router";
import "./userLayout.scss";
import ScrollbarHover from "../../hooks/scrollbarHover"; // Importation du hook

/**
 * Composant représentant le layout principal pour l'utilisateur, avec un en-tête, une barre latérale, et un contenu principal.
 * Le contenu des routes enfants est rendu à l'intérieur de la section `main` via le composant `Outlet` de `react-router`.
 *
 * @returns {JSX.Element} Le layout utilisateur avec un en-tête, une barre latérale et un espace pour les routes enfants.
 */
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