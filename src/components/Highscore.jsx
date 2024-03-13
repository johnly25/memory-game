import PropTypes from 'prop-types'; // ES6

export function Highscore(props) {
    return (
        <h2>
            highscore: {props.highscore}
        </h2>
    )
}

Highscore.propTypes = {
    highscore: PropTypes.number,
}