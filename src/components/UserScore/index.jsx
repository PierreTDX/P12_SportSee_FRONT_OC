import './userScore.scss'
import PropTypes from 'prop-types';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";


function UserScore({ score }) {

  const data = [
    { name: "Score+", value: score * 100 },
    { name: "Score-", value: 100 - (score * 100) }
  ];
  const COLORS = ["#FF0000", "#FFFFFF00"];


  return (
    <>
      <div className='userScore'>
        <ResponsiveContainer>
          <PieChart width={270} height={270}>
            <Pie // Rond plein du centre
              data={[{ value: 100 }]}
              cx='50%'
              cy='50%'
              innerRadius={0}
              outerRadius={80}
              fill="#FFFFFF" // couleur
              paddingAngle={0}
              dataKey="value"
              stroke="none"
              startAngle={180}
              endAngle={-180}
            >
            </Pie>
            <Pie // Arc de cercle exterieur
              data={data}
              cx='50%'
              cy='50%'
              innerRadius={80} // diametre int
              outerRadius={90} // diametre ext
              fill="#FF0000"    // ecrasé par const COLOR
              paddingAngle={0}
              dataKey="value"
              cornerRadius={10} // arrondi au bout de l'arc
              stroke="none" // pas de contour
              startAngle={180} // départ à gauche
              endAngle={-180} // dans le sens Horaire
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        <h2>Score</h2>
        <div className='scoreResult'>

          <p className='score'>{score * 100}%</p>
          <p>de votre</p>
          <p>objectif</p>
        </div>
      </div >

    </>
  )
}

UserScore.propTypes = {
  score: PropTypes.number,
};

export default UserScore