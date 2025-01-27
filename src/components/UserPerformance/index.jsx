import './userPerformance.scss'
import PropTypes from 'prop-types';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from "recharts";

function UserPerformance({ performances }) {

  // Correspondance des "kind" en français
  const frenchKindMap = {
    cardio: "Cardio",
    energy: "Energie",
    endurance: "Endurance",
    strength: "Force",
    speed: "Vitesse",
    intensity: "Intensité",
  };

  // Ordre préféré des sujets dans le graphique
  const preferredOrder = ["Intensité", "Vitesse", "Force", "Endurance", "Energie", "Cardio"];

  // Construire dynamiquement les données pour le graphique et les trier
  const data = performances.data
    .map((perf) => ({
      subject: frenchKindMap[performances.kind[perf.kind]], // Associer "kind" à son libellé et Traduire "kind" en français
      A: perf.value,
    }))
    .sort((a, b) => preferredOrder.indexOf(a.subject) - preferredOrder.indexOf(b.subject)); // trier selon l'ordre de préféré

  return (
    <>
      <div className='userPerformance'>
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart
            cx="50%"
            cy="50%"
            outerRadius="70%"
            data={data}
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