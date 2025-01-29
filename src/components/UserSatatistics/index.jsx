import './userSatatistics.scss'
import PropTypes from 'prop-types';

const UserStatisticCard = ({ icon, value, label }) => {
  return (
    <div className='statistic'>
      <img src={icon} alt={`icon ${label.toLowerCase()}`} />
      <div className='statisticData'>
        <p>{value}</p>
        <h2>{label}</h2>
      </div>
    </div>
  );
};

UserStatisticCard.propTypes = {
  icon: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
};

export default UserStatisticCard