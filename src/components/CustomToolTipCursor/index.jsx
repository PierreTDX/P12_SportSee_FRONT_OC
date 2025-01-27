import PropTypes from "prop-types";

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

CustomToolTipCursor.propTypes = {
  points: PropTypes.array
};
