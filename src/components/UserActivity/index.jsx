import './userActivity.scss'
import PropTypes from 'prop-types';

function UserActivity({ sessions }) {

  return (
    <>
      <div className="userActivity">
        <h2>Activité quotidienne</h2>
        <table aria-label="Tableau d'activité quotidienne">
          <thead>
            <tr>
              <th>Jour</th>
              <th>Poids (kg)</th>
              <th>Calories (kcal)</th>
            </tr>
          </thead>
          <tbody>
            {sessions?.length > 0 ? (
              sessions.map((session, index) => (
                <tr key={index}>
                  <td>{session.day}</td>
                  <td>{session.kilogram} kg</td>
                  <td>{session.calories} kcal</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3">Aucune activité disponible</td>
              </tr>
            )}
          </tbody>
        </table>
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