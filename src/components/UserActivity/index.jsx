import './userActivity.scss'
import PropTypes from 'prop-types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import CustomTooltip from '../CustomToolTip';

function UserActivity({ sessions }) {

  return (
    <>
      <div className="userActivity">
        <h2>Activité quotidienne</h2>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={sessions}
            margin={{
              top: 5,
              right: 10,
              left: 43,
              bottom: 5
            }}
            barGap={8} // Personnaliser l'espace entre les barres
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="day"
              tickFormatter={(value, index) => index + 1} // afficher de 1 à x, au lieu des dates
              tickLine={false}
              tickMargin={10}
              stroke='#9B9EAC'
            />
            <YAxis
              yAxisId="Poids"
              orientation="right"
              stroke='#9B9EAC'
              domain={['dataMin - 1', 'dataMax + 1']}
              axisLine={false}
              tickLine={false}
              tickCount={4}
              tickMargin={10}
            />
            <YAxis
              yAxisId="Calories"
              orientation="left"
              stroke="#E60000"
              // domain={['dataMin - 50', 'dataMax +50']}
              hide={true}
            />
            <Tooltip
              content={<CustomTooltip type='activity' />} // Recharts passe les props nécessaires (active, payload , etc.) au composant CustomTooltip
              cursor={{
                fill: "#C4C4C480"
              }}
            />
            <Legend
              // layout="horizontal" // Disposition horizontale
              align="right"        // Alignement à droite
              verticalAlign="top"  // Alignement vertical en haut
              wrapperStyle={{
                marginRight: '15px', // Ajout d'une marge à droite
                marginTop: '23px',
                paddingBottom: '85px',
              }}
              formatter={(value) => {
                if (value === "kilogram") {
                  return "Poids (kg)"; // Texte personnalisé pour le poids
                }
                if (value === "calories") {
                  return "Calories brûlées (kCal)"; // Texte personnalisé pour les calories
                }
                return value; // Pour d'autres éléments (si nécessaires)
              }}
              iconType="circle"  // Changer la forme de l'icône en cercle
            />
            <Bar
              yAxisId="Poids"
              dataKey="kilogram"
              fill="#282D30"
              barSize={7}  // Personnaliser la largeur de la barre
              radius={[3, 3, 0, 0]} // Arrondir le haut des barres (coin supérieur gauche et droit)
            />
            <Bar
              yAxisId="Calories"
              dataKey="calories"
              fill="#E60000"
              barSize={7}  // Personnaliser la largeur de la barre 
              radius={[3, 3, 0, 0]} // Arrondir le haut des barres (coin supérieur gauche et droit)
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  )
}

UserActivity.propTypes = {
  sessions: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string,
      calories: PropTypes.number,
      kilogram: PropTypes.number,
    })
  ),
};

export default UserActivity