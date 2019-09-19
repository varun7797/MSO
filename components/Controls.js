import React from 'react';
import PropTypes from 'prop-types';
import './Checkbox.css';
import './Radio.css';
import './Indeterminate.css';
import './Switch.css';

export default class Controls extends React.Component {
  static propTypes = {
    onlick: PropTypes.func,
    checked: PropTypes.oneOf(['on', 'off']),
    disabled: PropTypes.bool,
    type: PropTypes.oneOf(['checkbox', 'indeterminate', 'radio', 'switch']),
    label: PropTypes.string,
  };
  static defaultProps = {
    disabled: false,
    label: '',
    checked: 'off'
  };
  constructor(props) {
    super(props);
    this.state = {
      checked: props.checked,
    };
  };

  handleChange = () => {
    if (this.state.checked === 'on') {
        this.setState({ checked: 'off'})
    } else {
        this.setState({checked: 'on'})
    }
  };

  deselectAll = () => {
    this.setState ({ checked: 'off'})
  }

  render() {
    const { disabled } = this.props;
    const { checked } = this.state;


    /* radio */

    if(this.props.type === 'radio') {
        
            if (disabled === true) {
                    return (
                        <div className="controlContainer">
                            <div className="buttonContainer">       
                                <button
                                    className={`disabledState ${this.props.type}`}
                                    disabled={disabled}
                                    onClick={this.handleChange}>
                                    <div className={`disabledButtonState ${this.props.type} ${this.props.checked}`}/>
                                </button>
                            </div>
                            <div className="controlLabel">{this.props.label}</div>
                        </div>
                                        
                        );
                }

            return (
                <div className="controlContainer">
                    <div className="buttonContainer">       
                        <button
                            className={`state ${this.props.type}`}
                            disabled={disabled}
                            onClick={this.handleChange}>
                            <div onClick={this.props.onclick} className={`buttonState ${this.props.type} ${this.state.checked}`}/>
                        </button>
                    </div>
                    <div className="controlLabel">{this.props.label}</div>
                </div>
                );

    }
    
    /* switch */

    if(this.props.type === 'switch') {
        
            if (disabled === true) {
                    return (
                        <div className="controlContainer">
                            <div className="buttonContainer"> 
                                <div className={`switchContainer ${this.state.checked} ${this.props.disabled}`}>  
                                    <button
                                        className={`disabledState ${this.props.type} ${this.state.checked}`}
                                        disabled={disabled}
                                        onClick={this.handleChange}>
                                        <div className={`disabledButtonState ${this.props.type} ${this.props.checked}`}/>
                                    </button>
                                </div>
                            </div>
                            <div className="controlLabel">{this.props.label}</div>
                        </div>
                                        
                        );
                }

            return (
                <div className="controlContainer">
                    <div className="buttonContainer">  
                        <div className={`switchContainer ${this.state.checked} ${this.props.disabled}`}>       
                            <button
                                className={`state ${this.props.type} ${this.state.checked}`}
                                disabled={disabled}
                                onClick={this.handleChange}>
                                <div onClick={this.props.onclick} className={`buttonState ${this.props.type} ${this.state.checked}`}/>
                            </button>
                        </div>
                    </div>
                    <div className="controlLabel">{this.props.label}</div>
                </div>
                );

    }

        
    /* checkbox */    

    if(this.props.type === 'checkbox') {

            if (disabled === true) {

                if (this.state.checked === 'on') {
                        return (
                            <div className="controlContainer">
                                <div className="buttonContainer">       
                                    <button
                                        className={`disabledState ${this.props.type}`}
                                        disabled={disabled}
                                        onClick={this.handleChange}>
                                        <div className={`disabledButtonState ${this.props.type} ${this.props.checked}`}>
                                            <img className={`disabledButtonStateIcon ${this.props.type} ${this.state.checked}`} src={require('../src/Icons/Actionable/Checkbox-disabled-checked.svg')}/>
                                        </div>
                                    </button>
                                </div>
                                <div className="controlLabel">{this.props.label}</div>
                            </div>
                      );

                }

                return (
                    <div className="controlContainer">
                        <div className="buttonContainer">       
                            <button
                                className={`disabledState ${this.props.type}`}
                                disabled={disabled}
                                onClick={this.handleChange}>
                                <div className={`disabledButtonState ${this.props.type} ${this.state.checked}`}/>
                            </button>
                        </div>
                        <div className="controlLabel">{this.props.label}</div>
                    </div>
                );
                        
            }
                
                if (this.state.checked === 'on') {
                    return (
                        <div className="controlContainer">
                            <div className="buttonContainer">       
                                <button
                                    className={`state ${this.props.type}`}
                                    disabled={disabled}
                                    onClick={this.handleChange}>
                                    <div onClick={this.props.onclick} className={`buttonState ${this.props.type} ${this.state.checked}`}>
                                        <img className={`buttonStateIcon ${this.props.type} ${this.state.checked}`} src={require('../src/Icons/Actionable/Checkbox-checked.svg')}/>
                                    </div>
                                </button>
                            </div>
                            <div className="controlLabel">{this.props.label}</div>
                        </div>
                  );

                } 

                return (
                    <div className="controlContainer">
                        <div className="buttonContainer">       
                            <button
                                className={`state ${this.props.type}`}
                                disabled={disabled}
                                onClick={this.handleChange}>
                                <div onClick={this.props.onclick} className={`buttonState ${this.props.type} ${this.state.checked}`}/>
                            </button>
                        </div>
                        <div className="controlLabel">{this.props.label}</div>
                    </div>
                );

    }

    /* indeterminate */    

    if(this.props.type === 'indeterminate') {

            if (disabled === true) {

                if (this.state.checked === 'on') {
                        return (
                            <div className="controlContainer">
                                <div className="buttonContainer">       
                                    <button
                                        className={`disabledState ${this.props.type}`}
                                        disabled={disabled}
                                        onClick={this.handleChange}>
                                        <div className={`disabledButtonState ${this.props.type} ${this.props.checked}`}>
                                            <img className={`disabledButtonStateIcon ${this.props.type} ${this.state.checked}`} src={require('../src/Icons/Actionable/Indeterminate-disabled-checked.svg')}/>
                                        </div>
                                    </button>
                                </div>
                                <div className="controlLabel">{this.props.label}</div>
                            </div>
                      );

                }

                return (
                    <div className="controlContainer">
                        <div className="buttonContainer">       
                            <button
                                className={`disabledState ${this.props.type}`}
                                disabled={disabled}
                                onClick={this.handleChange}>
                                <div className={`disabledButtonState ${this.props.type} ${this.state.checked}`}/>
                            </button>
                        </div>
                        <div className="controlLabel">{this.props.label}</div>
                    </div>
                );
                        
            }
                
                if (this.state.checked === 'on') {
                    return (
                        <div className="controlContainer">
                            <div className="buttonContainer">       
                                <button
                                    className={`state ${this.props.type}`}
                                    disabled={disabled}
                                    onClick={this.handleChange}>
                                    <div onClick={this.props.onclick} className={`buttonState ${this.props.type} ${this.state.checked}`}>
                                        <img className={`buttonStateIcon ${this.props.type} ${this.state.checked}`} src={require('../src/Icons/Actionable/Indeterminate-checked.svg')}/>
                                    </div>
                                </button>
                            </div>
                            <div className="controlLabel">{this.props.label}</div>
                        </div>
                  );

                } 

                return (
                    <div className="controlContainer">
                        <div className="buttonContainer">       
                            <button
                                className={`state ${this.props.type}`}
                                disabled={disabled}
                                onClick={this.handleChange}>
                                <div onClick={this.props.onclick} className={`buttonState ${this.props.type} ${this.state.checked}`}/>
                            </button>
                        </div>
                        <div className="controlLabel">{this.props.label}</div>
                    </div>
                );

    }


    }
}


