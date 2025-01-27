import PropTypes from 'prop-types';

// Composant personnalisé pour le Tooltip
function CustomTooltip({ active, payload, type }) {

    if (active && payload && payload.length) {
        switch (type) {
            case 'activity':
                return (
                    <div style={{ backgroundColor: "#E60000", color: "#FFFFFF", textAlign: "center", fontWeight: "400" }}>
                        <p style={{ padding: "15px 10px" }}>{`${payload[0].value} kg`}</p>
                        <p style={{ padding: "15px 10px" }}>{`${payload[1].value} kCal`}</p>
                    </div>
                );

            case 'averageSessions':
                return (
                    <div style={{ backgroundColor: "#FBFBFB", padding: "10px", textAlign: "center" }}>
                        <p style={{ color: "#000000" }}>{`${payload[0].value} min`}</p>
                    </div>
                );

            case 'performance':
                return (
                    <div style={{ backgroundColor: "#FBFBFB", padding: "10px", textAlign: "center" }}>
                        <p style={{ color: "#000000" }}>{`${payload[0].value} points`}</p>
                    </div>
                );

            default:
                return null;
        }
    }

    return null;
}

CustomTooltip.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.array,
    type: PropTypes.string,
};

export default CustomTooltip;