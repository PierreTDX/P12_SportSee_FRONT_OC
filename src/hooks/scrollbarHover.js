import { useEffect, useRef } from "react";

// Hook personnalisé pour ajouter un pseudo hover sur la scrollbar (explication à la fin)
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