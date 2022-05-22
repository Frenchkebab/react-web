import PropTypes from 'prop-types';

function Button({ text }) {
  return (
    <button
      stype={{
        backgroundColor: 'tomato',
        color: 'white',
      }}>
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
