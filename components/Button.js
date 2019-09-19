import React, { Component } from "react";
import PropTypes from 'prop-types';
import './Button.css'

const Button = ({
    theme,
    priority,
    disabled,
    text,
    onClick,
    ...otherProps
}) => {

    return (
        <button className={`Button ${theme} ${priority} ${disabled}`} theme={theme} onClick={onClick} {...otherProps}>
        <label className="label">{text}</label>
        </button>
    );
};

Button.defaultProps = {
    theme: 'light',
    priority: 'primary',
    disabled: false,
    text: 'Button'
};

Button.propTypes = {
    theme: PropTypes.oneOf(['light', 'dark']),
    priority: PropTypes.oneOf(['primary', 'secondary', 'transparent']),
    disabled: PropTypes.bool,
    text: PropTypes.string,
    onClick: PropTypes.onClick,
};

export default Button;