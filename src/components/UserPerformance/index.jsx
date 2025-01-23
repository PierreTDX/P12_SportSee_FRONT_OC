import './userPerformance.scss'
import PropTypes from 'prop-types';

function UserPerformance({ performances }) {

  return (
    <>
      <div className='userPerformance'>
        <h2>Performances :</h2>
        <ul>
          {performances.data.length > 0 ? (
            performances.data.map((perf) => (
              <li key={perf.kind}>
                {performances.kind[perf.kind]} : {perf.value}
              </li>
            ))
          ) : (
            <li>Aucune performance disponible</li>
          )}
        </ul>
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