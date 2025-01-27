import './userAverageSessions.scss'
import PropTypes from 'prop-types';
import CustomTooltip from '../CustomToolTip';
import CustomToolTipCursor from '../CustomToolTipCursor';
import { XAxis, YAxis, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";

function UserAverageSessions({ sessions }) {
  console.log("🚀 ~ UserAverageSessions ~ sessions:", sessions)

  // Calcul des moyennes avant Lundi et après Dimanche
  const beforeMonday = (sessions[0].sessionLength + sessions[1].sessionLength) / 2; // Moyenne de Lundi et Mardi
  const afterSunday = (sessions[5].sessionLength + sessions[6].sessionLength) / 2; // Moyenne de Samedi et Dimanche

  // Mapper les jours (1 à 7) en lettres (L, M, M, J, V, S, D) + ajouter les nouveaux points avant et après (pour simuler une continuité des données)
  // le +20 est pour tromper le remplissage de l'air sous 0, qui ne se fait pas à l'origine (-20 est retranché au ToolTip, pour afficher la bonne valeur)
  const data = [
    { day: "L-", sessionLength: beforeMonday + 20 },  // Ajouter 20 à la moyenne avant lundi
    ...sessions.map((session) => ({
      day: ["L", "M", "M", "J", "V", "S", "D"][session.day - 1], // Utilise les jours correspondants
      sessionLength: session.sessionLength + 20,  // Ajouter 20 à la valeur de sessionLength
    })),
    { day: "D+", sessionLength: afterSunday + 20 },  // Ajouter 20 à la moyenne après dimanche
  ];
  console.log("🚀 ~ data ~ data:", data)

  return (
    <>
      <div className='userAverage'>
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <AreaChart
            syncId="anyId"
            data={data}
            margin={{ top: 50, bottom: -30 }}
            style={{ backgroundColor: "#FF0000" }}
          >
            <XAxis
              dataKey="day"
              padding={{ left: -20, right: -20 }}
              axisLine={false}
              tickLine={false}
              stroke='#FFFFFF50'
              tickFormatter={(tick) => {
                // N'afficher les labels que pour les jours de la semaine (L, M, M, J, V, S, D)
                if (tick === "L-" || tick === "D+") {
                  return "";
                }
                return tick;
              }}
              tick={{ dy: -30 }}
            />
            <YAxis
              domain={['dataMin - 20', 'dataMax + 20']}
              hide={true}
            />
            <Tooltip
              // cursor={{ stroke: "none" }}
              content={<CustomTooltip />} // Recharts passe les props nécessaires (active, payload , etc.) au composant CustomTooltip
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

UserAverageSessions.propTypes = {
  sessions: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.number.isRequired,
      sessionLength: PropTypes.number,
    })
  ),
};

export default UserAverageSessions