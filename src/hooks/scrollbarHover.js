/**
 * @file scrollbarHover.js
 * @description Hook personnalisé permettant d'ajouter un effet de survol sur les barres de défilement (scrollbars).
 * Ce hook permet de modifier dynamiquement l'apparence des barres de défilement lorsqu'elles sont survolées par la souris.
 * Il ajoute une classe CSS "hover-scrollbar" à l'élément référencé lorsque la souris se trouve sur la barre de défilement, permettant ainsi de personnaliser son apparence.
 * 
 * @returns {React.RefObject} Une référence (`ref`) à l'élément ciblé pour appliquer l'effet de survol de la scrollbar.
 */

import { useEffect, useRef } from "react";

/**
 * Hook personnalisé permettant d'ajouter un effet de survol aux barres de défilement.
 * Lorsque la souris survole la barre de défilement, une classe "hover-scrollbar" est ajoutée, 
 * permettant de personnaliser son apparence (par exemple, en augmentant la largeur de la scrollbar).
 * 
 * Ce hook écoute les événements de mouvement de la souris pour détecter si la souris est au-dessus des barres de défilement 
 * et applique ou retire la classe en conséquence.
 * 
 * @returns {React.RefObject} La référence à l'élément dont la barre de défilement doit être surveillée pour l'ajout de la classe "hover-scrollbar".
 */
function ScrollbarHover() {
    const contentRef = useRef(null);

    useEffect(() => {
        const content = contentRef.current;

        if (content) {
            const handleMouseMove = (e) => {
                const { offsetWidth, clientWidth, offsetHeight, clientHeight, offsetLeft, offsetTop } = content;
                const scrollbarWidth = offsetWidth - clientWidth; // Largeur de la scrollbar verticale
                const scrollbarHeight = offsetHeight - clientHeight; // Hauteur de la scrollbar horizontale

                // Vérifie si la souris est sur la scrollbar verticale
                const isOnVerticalScrollbar = e.clientX > offsetLeft + clientWidth - scrollbarWidth;

                // Vérifie si la souris est sur la scrollbar horizontale
                const isOnHorizontalScrollbar = e.clientY > offsetTop + clientHeight - scrollbarHeight;

                if (isOnVerticalScrollbar || isOnHorizontalScrollbar) {
                    content.classList.add("hover-scrollbar");
                } else {
                    content.classList.remove("hover-scrollbar");
                }
            };

            const handleMouseLeave = () => {
                content.classList.remove("hover-scrollbar");
            };

            // Ajoute les écouteurs d'événements
            content.addEventListener("mousemove", handleMouseMove);
            content.addEventListener("mouseleave", handleMouseLeave);

            // Nettoyage des écouteurs d'événements à la fin
            return () => {
                content.removeEventListener("mousemove", handleMouseMove);
                content.removeEventListener("mouseleave", handleMouseLeave);
            };
        }
    }, []); // Le tableau vide [] garantit que cet effet est exécuté une fois après le montage

    return contentRef;
}

export default ScrollbarHover

/***  Explications ****/
/*  Il n'est pas possible d'ajouter :hover pour le survol de la barre de défilement
    Alors il faut créer une class "hover-scrollbar" dans le CSS comme l'exemple ci-dessous :
    "classOfMyContainer" est le nom de class de mon conteneur parent (à personnaliser) de la barre de défilement
    "::-webkit-scrollbar" est la pseudo class pour cibler la barre de défilement (pour personnaliser l'épaisseur)
    "width" pour l'épaisseur d'une barre de défilement verticale
    "height" pour l'épaisseur d'une barre de défilement horizontale
*/
/*** exemple css ***/
/* Personnaliser la largeur de la scrollbar
.classOfMyContainer::-webkit-scrollbar {
    width: 4px;
    height: 4px;
}
*/

/* Style au survol de la scrollbar avec le Hook "ScrollbarHover" javaScript
.classOfMyContainer.hover-scrollbar::-webkit-scrollbar {
    width: 12px;
    height: 12px;
}
*/

/* Appeler le Hook dans le "html" avec l'attribut "ref"
<div className="classOfMyContainer" ref={ScrollbarHover()}></div>
*/