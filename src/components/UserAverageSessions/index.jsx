/**
 * @file index.jsx
 * @description Composant React affichant la durée moyenne des sessions d'un utilisateur sous forme de graphique en aires.
 */

import './userAverageSessions.scss'
import PropTypes from 'prop-types';
import CustomTooltip from '../CustomToolTip';
import CustomToolTipCursor from '../CustomToolTipCursor';
import { XAxis, YAxis, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";
import ModelUserAverageSessions from './modelUserAverageSessions';

/**
 * Composant affichant la durée moyenne des sessions d'un utilisateur sous forme de graphique.
 * @param {Object} props - Les propriétés du composant.
 * @param {Array} props.sessions - Tableau des sessions utilisateur.
 * @returns {JSX.Element} Composant UserAverageSessions.
 */
function UserAverageSessions({ sessions }) {

  // Utilisation de la classe pour formater les données
  const formattedSessions = new ModelUserAverageSessions(sessions).getFormattedData();

  return (
    <>
      <div className='userAverage'>
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <AreaChart
            syncId="anyId"
            data={formattedSessions}
            margin={{ top: 50, bottom: -30 }}
            style={{ backgroundColor: "#FF0000" }}
          >
            <XAxis
              dataKey="day"
              padding={{ left: -20, right: -20 }}
              axisLine={false}
              tickLine={false}
              stroke='#FFFFFF50'
              tick={{ dy: -30 }}
            />
            <YAxis
              domain={['dataMin - 20', 'dataMax + 20']}
              hide={true}
            />
            <Tooltip
              // cursor={{ stroke: "none" }}
              content={<CustomTooltip type='averageSessions' />} // Recharts passe les props nécessaires (active, payload , etc.) au composant CustomTooltip
              cursor={<CustomToolTipCursor />} // Recharts passe les props nécessaires (points, height, etc.) au composant CustomToolTipCursor
            />
            <Area
              type="natural"
              dataKey="sessionLength"
              stroke="#FFFFFF"
              strokeOpacity={0.7}
              strokeWidth={2}
              dot={false}
              fill="#FFFFFF"
              fillOpacity={0.1}
              activeDot={{
                r: 4, // taille du point au survol
                stroke: "#FFFFFF30", // Bordure semi-transparente
                strokeWidth: 9,
                fill: "#FFFFFF", // Fond blanc
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
        <h2>Durée moyenne des sessions</h2>
      </div>
    </>
  )
}

/**
 * Définition des types de propriétés attendues par le composant UserAverageSessions.
 * @type {Object}
 * @property {Array<Object>} sessions - Tableau des sessions utilisateur formatées.
 * @property {number} sessions[].day - Jour de la session sous forme de nombre.
 * @property {number} sessions[].sessionLength - Durée de la session en minutes.
 */
UserAverageSessions.propTypes = {
  sessions: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.number.isRequired,
      sessionLength: PropTypes.number,
    })
  ),
};

export default UserAverageSessions