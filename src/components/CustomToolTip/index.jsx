/**
 * @file index.jsx
 * @description Composant React affichant un tooltip personnalisé en fonction du type de données pour un graphique.
 */

import PropTypes from 'prop-types';

/**
 * Composant personnalisé pour l'affichage d'un tooltip dans un graphique.
 * Le contenu du tooltip change en fonction du type de données (activité, sessions moyennes, performance).
 *
 * @param {Object} props - Les propriétés passées au composant.
 * @param {boolean} props.active - Indique si le tooltip doit être affiché ou non.
 * @param {Array} props.payload - Un tableau contenant les données à afficher dans le tooltip.
 * @param {string} props.type - Le type de données à afficher dans le tooltip (par exemple, 'activity', 'averageSessions', 'performance').
 * @returns {JSX.Element|null} Le tooltip avec le contenu correspondant au type de données, ou `null` si aucune donnée active n'est présente.
 */
function CustomTooltip({ active, payload, type }) {

    if (active && payload && payload.length) {
        switch (type) {
            case 'activity':
                return (
                    <div style={{ backgroundColor: "#E60000", color: "#FFFFFF", textAlign: "center", fontWeight: "400" }}>
                        <p style={{ padding: "15px 10px" }}>{`${payload[0].value} kg`}</p>
                        <p style={{ padding: "15px 10px" }}>{`${payload[1].value} kCal`}</p>
                    </div>
                );

            case 'averageSessions':
                return (
                    <div style={{ backgroundColor: "#FBFBFB", padding: "10px", textAlign: "center" }}>
                        <p style={{ color: "#000000" }}>{`${payload[0].value} min`}</p>
                    </div>
                );

            case 'performance':
                return (
                    <div style={{ backgroundColor: "#FBFBFB", padding: "10px", textAlign: "center" }}>
                        <p style={{ color: "#000000" }}>{`${payload[0].value} points`}</p>
                    </div>
                );

            default:
                return null;
        }
    }

    return null;
}

/**
 * Définition des types de propriétés attendues par le composant `CustomTooltip`.
 * @type {Object}
 * @property {boolean} active - Indique si le tooltip doit être affiché ou non.
 * @property {Array} payload - Tableau contenant les données à afficher dans le tooltip.
 * @property {string} type - Type de données à afficher (par exemple, 'activity', 'averageSessions', 'performance').
 */
CustomTooltip.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.array,
    type: PropTypes.string,
};

export default CustomTooltip;