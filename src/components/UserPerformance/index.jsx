/**
 * @file index.jsx
 * @description Composant React affichant la performance d'un utilisateur sous forme de graphique radar.
 */

import './userPerformance.scss'
import PropTypes from 'prop-types';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, Tooltip } from "recharts";
import CustomTooltip from '../CustomToolTip';
import ModelUserPerformance from './modelUserPerformance';

/**
 * Composant affichant la performance d'un utilisateur sous forme de graphique radar.
 * @param {Object} props - Les propriétés du composant.
 * @param {Object} props.performances - Données de performance.
 * @returns {JSX.Element} Composant UserPerformance.
 */
function UserPerformance({ performances }) {

  // Utilisation de la classe pour formater les données
  const formattedPerformances = new ModelUserPerformance(performances).getFormattedData();

  return (
    <>
      <div className='userPerformance'>
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart
            cx="50%"
            cy="50%"
            outerRadius="70%"
            data={formattedPerformances}
            style={{ backgroundColor: "#282D30" }}
          >
            <PolarGrid radialLines={false} stroke="#FFFFFF" />
            <PolarAngleAxis
              dataKey="subject"
              fill="#282D30"
              stroke="#FFFFFF"
              tickLine={false}
            />
            <Radar
              name="Performance"
              dataKey="A"
              stroke="#E60000"
              fill="#E60000"
              fillOpacity={0.6}
              activeDot={{
                r: 4, // taille du point au survol
                stroke: "#FFFFFF30", // Bordure semi-transparente
                strokeWidth: 9,
                fill: "#FFFFFF", // Fond blanc
              }}
            />
            <Tooltip
              content={<CustomTooltip type='performance' />}
              contentStyle={{
                backgroundColor: "#FBFBFB",
                border: "none",
                color: "#FFFFFF",
              }}
              labelStyle={{ color: "#282D30" }}
              cursor={{ stroke: "none" }}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </>
  )
}

/**
 * Définition des types de propriétés attendues par le composant UserPerformance.
 * @type {Object}
 * @property {Object} performances - Données de performance formatées.
 * @property {Object.<number, string>} performances.kind - Association des types de performance.
 * @property {Array<Object>} performances.data - Tableau des performances.
 * @property {number} performances.data[].kind - Identifiant du type de performance.
 * @property {number} performances.data[].value - Valeur de la performance.
 */
UserPerformance.propTypes = {
  performances: PropTypes.shape({
    kind: PropTypes.objectOf(PropTypes.string).isRequired,
    data: PropTypes.arrayOf(
      PropTypes.shape({
        kind: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default UserPerformance