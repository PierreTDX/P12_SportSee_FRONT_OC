/**
 * @file index.jsx
 * @description Composant React affichant une carte de statistique utilisateur avec une icône, une valeur et un libellé.
 */

import './userSatatistics.scss'
import PropTypes from 'prop-types';

/**
 * Composant affichant une carte de statistique utilisateur.
 * @param {Object} props - Les propriétés du composant.
 * @param {string} props.icon - URL de l'icône représentant la statistique.
 * @param {string} props.value - Valeur numérique ou textuelle de la statistique.
 * @param {string} props.label - Libellé de la statistique.
 * @returns {JSX.Element} Composant UserStatisticCard.
 */
const UserStatisticCard = ({ icon, value, label }) => {
  return (
    <div className='statistic'>
      <img src={icon} alt={`icon ${label.toLowerCase()}`} />
      <div className='statisticData'>
        <p>{value}</p>
        <h2>{label}</h2>
      </div>
    </div>
  );
};

/**
 * Définition des types de propriétés attendues par le composant UserStatisticCard.
 * @type {Object}
 * @property {string} icon - URL de l'icône représentant la statistique.
 * @property {string} value - Valeur de la statistique affichée.
 * @property {string} label - Libellé de la statistique.
 */
UserStatisticCard.propTypes = {
  icon: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
};

export default UserStatisticCard