import PropTypes from 'prop-types';

const Button = ({btnClass, text, onClick}) => {
    return (
        <button className={btnClass+' btn'} onClick={onClick}>{text}</button>
    )
}

Button.defaultProps = {
    btnClass: 'btn-regular',
    text: 'click',
}

Button.propTypes = {
    text: PropTypes.string,
    btnClass: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button
