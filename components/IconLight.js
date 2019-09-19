import React, { Component } from "react";
import cx from 'classnames';
import { Button } from "react-bootstrap";
import PropTypes from 'prop-types';
import './Icon.css';
import light from '../src/Icons/Actionable/CloseLight.svg';
import dark from '../src/Icons/Actionable/CloseDark.svg';


const icon = ({
    theme,
    ...otherProps
}) => {


    return (
        <div className={`wrap ${theme}`}>
        <Button className={`Icon ${theme}`} theme={theme} {...otherProps}>
        <img className={`icon ${theme}`} src={light}/> 
        </Button>
        </div>
    );
};

Button.defaultProps = {
    theme: 'light',
};

Button.propTypes = {
    theme: PropTypes.oneOf(['light', 'dark']),
    priority: PropTypes.oneOf(['primary', 'secondary', 'transparent']),
    disabled: PropTypes.bool,
};

export default icon;