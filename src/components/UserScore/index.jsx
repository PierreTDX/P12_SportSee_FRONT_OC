import './userScore.scss'
import PropTypes from 'prop-types';

function UserScore({ score }) {

  return (
    <>
      <div className='userScore'>
        <h2>Score :</h2>
        <p>Score : {score}</p>
      </div>

    </>
  )
}

UserScore.propTypes = {
  score: PropTypes.number,
};

export default UserScore