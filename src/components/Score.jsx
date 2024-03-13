import PropTypes from 'prop-types'; // ES6

export function Score(props) {
    return (
        <h2>
            Score: {props.score}
        </h2>
    )
}

Score.propTypes = {
    score: PropTypes.number,
}