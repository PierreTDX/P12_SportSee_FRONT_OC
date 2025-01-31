/**
 * @file index.jsx
 * @description Composant React affichant le score d'un utilisateur sous forme de graphique circulaire.
 */

import './userScore.scss'
import PropTypes from 'prop-types';
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import ModelUserScore from './modelUserScore';

/**
 * Composant affichant le score d'un utilisateur sous forme de graphique circulaire.
 * @param {Object} props - Les propriétés du composant.
 * @param {number} props.score - Score de l'utilisateur sous forme de valeur numérique.
 * @returns {JSX.Element} Composant UserScore.
 */
function UserScore({ score }) {

  // Utilisation de la classe pour formater les données
  const formattedScore = new ModelUserScore(score).getChartData();
  const percentage = new ModelUserScore(score).getPercentage(); // Récupérer le score en pourcentage

  const COLORS = ["#FF0000", "#FFFFFF00"];

  return (
    <>
      <div className='userScore'>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
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
              data={formattedScore}
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
              {formattedScore.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <h2>Score</h2>
        <div className='scoreResult'>
          <p className='score'>{percentage}%</p>
          <p>de votre</p>
          <p>objectif</p>
        </div>
      </div >
    </>
  )
}

/**
 * Définition des types de propriétés attendues par le composant UserScore.
 * @type {Object}
 * @property {number} score - Score de l'utilisateur sous forme numérique.
 */
UserScore.propTypes = {
  score: PropTypes.number,
};

export default UserScore