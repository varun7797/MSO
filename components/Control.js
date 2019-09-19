import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Control.css';

export default class Control extends React.Component {
  static propTypes = {
    hover: PropTypes.bool,
    label: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['default', 'switch', 'indeterminate', 'radio']),
    onChange: PropTypes.func,
  };
  static defaultProps = {
    hover: false,
    type: 'default',
  };



  render() {
    const { hover, label, type, indeterminate, ...inputProps } = this.props;

    let style;
    
    if (this.props.type === 'switch') {
        if (this.props.hover) {
            style = 'checkbox--switchInput'
        } else {
            style = 'checkbox--switchInputnohover'
        }  
    }

    if (this.props.type === 'indeterminate') {
        style = 'checkbox--indeterminate'
    }

    
    const inputClassname = `
      checkboxInput
      ${style}
    `;


    if (type === 'radio') {
        return (
              <div className={`checkbox ${hover}`}>
                <input

                  type="radio"
                  id={label}
                  className="radio"
                  {...inputProps}
                />
                {this.props.hover ? <div className="Chover"/> : <div className="Cnohover"/>}
                    <label className="checkLabel">{label}</label>
              </div>

            )
    }

    return (
      <div className={`checkbox ${hover}`}>
        <input
         onChange={this.props.onChange}
          type="checkbox"
          id={label}
          className={inputClassname}
          {...inputProps}
        />
        {this.props.hover ? <div className="Chover"/> : <div className="Cnohover"/>}
        {this.props.type === "switch" ? 
                        <label className="checkSwitchLabel">{label}</label> :
                        <label className="checkLabel">{label}</label>}
      </div>
    );
  }

}
    
    