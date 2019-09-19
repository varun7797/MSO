import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Dividers.css';

export default class Divider extends Component {

    static propTypes = {
        theme: PropTypes.oneOf(['light', 'dark']),
        spacing: PropTypes.oneOf(['default', 'dense']),
        orientation: PropTypes.oneOf(['horizontal', 'vertical']),
    };

    constructor(props) {
        super();
        this.state = {
        };
    }

    render() {

            return (
                <div className={`divider ${this.props.theme} ${this.props.spacing} ${this.props.orientation}`}/>

                )
    }

}
    
    