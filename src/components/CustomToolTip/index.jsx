import PropTypes from 'prop-types';

// Composant personnalisé pour le Tooltip
function CustomTooltip({ active, payload }) {
    if (active && payload && payload.length) {
        return (
            <div style={{ backgroundColor: "#FBFBFB", padding: "10px" }}>
                <p style={{ color: "#000000" }}>{payload[0].value - 20} min</p>
            </div>
        );
    }
    return null;
};

CustomTooltip.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.array,
    // label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // Accepter string ou number
    // numberOfValues: PropTypes.number,
};

export default CustomTooltip