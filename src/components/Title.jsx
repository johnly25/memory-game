import PropTypes from 'prop-types'; // ES6

export function Title(props) {
    return(
    <h1>{props.title}</h1>
    );
}

Title.propTypes = {
    title: PropTypes.string,
}
