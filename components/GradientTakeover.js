import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './GradientTakeover.css';

export default class GradientTakeover extends Component {

    static propTypes = {
        text: PropTypes.string
    };

    constructor(props) {
        super();

        this.state = {

        };
    }



    render() {

            return (
                <div className="gradientTakeoverBg">
                    <div className="gradientTakeoverLoadBar">
                        <div className="gradientTakeoverLoadBubble1"/>
                        <div className="gradientTakeoverLoadBubble2"/>
                        <div className="gradientTakeoverLoadBubble3"/>
                    </div>
                    <div className="gradientTakeoverText">{this.props.text}</div>
                </div>

                )
    }

}
    
    