/**
 * @file index.jsx
 * @description Composant React qui affiche un curseur personnalisé pour les infobulles dans un graphique.
 */

import PropTypes from "prop-types";

/**
 * Composant affichant un rectangle de curseur personnalisé utilisé pour les infobulles dans un graphique.
 * Ce composant prend un tableau de points pour positionner le rectangle dans le graphique.
 *
 * @param {Object} props - Les propriétés passées au composant.
 * @param {Array} props.points - Un tableau contenant des objets avec les coordonnées des points.
 * @returns {JSX.Element} Le composant représentant un curseur personnalisé pour l'infobulle.
 */
export default function CustomToolTipCursor({ points }) {

  return (
    <rect
      x={points[0].x} // point de départ du filtre en x
      y={0} // point de départ du filtre en y
      width="100%"  // Prend toute la largeur du graphique à partir de x
      height="100%" // Prend toute la hauteur du graphique à partir de y
      fill="#000000"
      fillOpacity={0.1}
    />
  );
}

/**
 * Définition des types de propriétés attendues par le composant `CustomToolTipCursor`.
 * @type {Object}
 * @property {Array} points - Tableau des points avec les coordonnées nécessaires pour positionner le curseur.
 */
CustomToolTipCursor.propTypes = {
  points: PropTypes.array
};
