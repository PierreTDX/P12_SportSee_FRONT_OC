import './userAverageSessions.scss'
import PropTypes from 'prop-types';

function UserAverageSessions({ sessions }) {

  return (
    <>
      <div className='userAverage'>
        <h2>Durée moyenne des sessions :</h2>
        <ul>
          {sessions.length > 0 ? (
            sessions.map((session) => (
              <li key={session.day}>Jour {session.day} : {session.sessionLength} min</li>
            ))
          ) : (
            <li>Aucune session disponible</li>
          )}
        </ul>
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