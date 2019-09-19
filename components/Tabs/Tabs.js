import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './tabstyles.css';


class Tab extends Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    styles: PropTypes.oneOf(['primary', 'secondary', 'icon', 'header',]),
    icon: PropTypes.string
  };

  onClick = () => {
    const { label, onClick } = this.props;
    console.log({label})
    console.log(onClick)
    onClick(label);
  }

  render() {
    const { 
      onClick,
      props: {
        activeTab,
        label,
      },
    } = this;



    if (activeTab === label) {

      if (this.props.style === 'primary') {

        return (
          <li 
            className= "tabListItemActivePrimary"
            onClick={onClick}
          >
            {label}
          </li>
        )
      }
      if (this.props.style === 'secondary') {

        return (
          <li 
            className= "tabListItemActiveSecondary"
            onClick={onClick}
          >
            {label}
          </li>
        )
      }
      if (this.props.style === 'icon') {

        let url = require(`../../src/Icons/Actionable/${this.props.icon}`)


        return (
          <li 
            style={{backgroundImage: "url("+`${url}`+")",
                    backgroundRepeat: "no-repeat, repeat",
                    backgroundPosition: "right 16px top 50%"}}
            className= "tabListItemActiveIcon"
            onClick={onClick}
          >
            {label}
          </li>
        )
      }
      if (this.props.style === 'header') {

        return (
          <li 
            className= "tabListItemActiveHeader"
            onClick={onClick}
          >
            {label}
          </li>
        )
      }
    }

      if (this.props.style === 'primary') {

        return (
          <li 
            className= "tabListItemPrimary"
            onClick={onClick}
          >
            {label}
          </li>
        )
      }
      if (this.props.style === 'secondary') {

        return (
          <li 
            className= "tabListItemSecondary"
            onClick={onClick}
          >
            {label}
          </li>
        )
      }
      if (this.props.style === 'icon') {
        
        let url = require(`../../src/Icons/Actionable/${this.props.icon}`)

        return (
          <li 
            style={{backgroundImage: "url("+`${url}`+")",
                    backgroundRepeat: "no-repeat, repeat",
                    backgroundPosition: "right 16px top 50%"}}
            className= "tabListItemIcon"
            onClick={onClick}
          >
            {label}
          </li>
        )
      }
      if (this.props.style === 'header') {

        return (
          <li 
            className= "tabListItemHeader"
            onClick={onClick}
          >
            {label}
          </li>
        )
      }

  }
}


class Tabs extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
    style: PropTypes.oneOf(['primary', 'secondary', 'icon', 'header'])
  }

  constructor(props) {
    super(props);

    this.state = {
      activeTab: this.props.children[0].props.label,
    };
  }

  onClickTabItem = (tab) => {
    this.setState({ activeTab: tab });
  }

  render() {
    const {
      onClickTabItem,
      props: {
        children,
      },
      state: {
        activeTab,
      }
    } = this;

    return (
      <div className="tabs">
        <ol className="tab-list">
          {children.map((child) => {
            const { label } = child.props;
            const {icon} = child.props;
            return (
              <Tab
                activeTab={activeTab}
                label={label}
                style={this.props.style}
                onClick={onClickTabItem}
                icon={icon}
              />
            );
          })}
        </ol>
        <div className="tab-content">
          {children.map((child) => {
            if (child.props.label !== activeTab) return undefined;
            return child.props.children;
          })}
        </div>
      </div>
    );
  }
}

export default Tabs;