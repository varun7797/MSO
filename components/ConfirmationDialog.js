import React, { Component } from "react";
import PropTypes from 'prop-types';
import './ConfirmationDialog.css';

class ConfirmationDialog extends Component {

  static propTypes = {
    primary: PropTypes.string,
    secondary: PropTypes.string,
    primaryfunc: PropTypes.func,
    secondaryfunc: PropTypes.func,
    header: PropTypes.string,
    subheader: PropTypes.string,
  };

  static defaultProps = {
    secondary: 'cancel'
  };

  constructor(props) {
    super(props);
    this.node = React.createRef()
    this.state = {
      show: false
    };
  };

  componentWillMount() {
      document.addEventListener('mousedown', this.handleClick, false);
  }
  
  componentWillUnmount() {
      document.removeEventListener('mousedown', this.handleClick, false);
  }

  handleClick = (e) => {
      if (this.node.current.contains(e.target)) {
          return
      } else {
          if (this.state.show === true) {
              this.setState({
                  show: false,
              })
          }
      }
  }

  openModal = () => {
      this.setState({
        show: true
      })
  }

  closeModal = () => {
    this.setState({
      show: false
    })
  }

  detectMobile = () => { 
         if( navigator.userAgent.match(/Android/i)
         || navigator.userAgent.match(/webOS/i)
         || navigator.userAgent.match(/iPhone/i)
         || navigator.userAgent.match(/iPad/i)
         || navigator.userAgent.match(/iPod/i)
         || navigator.userAgent.match(/BlackBerry/i)
         || navigator.userAgent.match(/Windows Phone/i)
         ){
            return true;
        }
         else {
            return false;
        }
  }

  render() {
      
    if (!this.state.show) {
      return null;
    }


    else {
      
      if (this.detectMobile()) {
          return (
              <div className="bg">
                <div className="windowMobile" ref={this.node}>
                  <div className="textContainer">
                    <div className="Header">{this.props.header}</div>
                    <div className="subheader">{this.props.subheader}</div>
                    <div className="actions">
                      <div className="secondary" onClick={this.props.secondaryfunc}>{this.props.secondary}</div>
                      <div className="primary" onClick={this.props.primaryfunc}>{this.props.primary}</div>
                    </div>
                  </div>
                </div>
              </div>
          ); 
      }
      return (
          <div className="bg">
            <div className="windowDesktop" ref={this.node}>
              <div className="textContainer">
                <div className="Header">{this.props.header}</div>
                <div className="subheader">{this.props.subheader}</div>
                <div className="actions">
                  <div className="secondary" onClick={this.props.secondaryfunc}>{this.props.secondary}</div>
                  <div className="primary" onClick={this.props.primaryfunc}>{this.props.primary}</div>
                </div>
              </div>
            </div>
          </div>
      );
    }
  }

}

export default ConfirmationDialog;