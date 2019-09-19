import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './VerticalOptions.css';

export default class VerticalOptions extends Component {

	static propTypes = {
		style: PropTypes.oneOf(['small', 'big']),
		optionText: PropTypes.string,
		contextText: PropTypes.string
	};

	constructor(props) {
		super();
		this.state = {
			selected: false
		};
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
		    return 'mobile';
	  	}
		 else {
		    return 'desktop';
	  	}
	}

	selectOption = () => {
		this.setState({
			selected: !this.state.selected
		})
	}



	render() {


		if (this.detectMobile() === 'mobile') {

			return (

					<div onClick={this.selectOption} className={`verticalOptionWrapperMobile ${this.props.style} ${this.state.selected}`}>
							<div className={`verticalOptionText ${this.props.style}`}>
								{this.props.optionText}
							</div>
							{this.props.style === 'big' ?
								<div className="verticalOptionContextText">
									{this.props.contextText}
								</div>
								:
								(null)
							}
					</div>	

				)

		}

			return (

					<div onClick={this.selectOption} className={`verticalOptionWrapperDesktop ${this.props.style} ${this.state.selected}`}>
							<div className={`verticalOptionText ${this.props.style}`}>
								{this.props.optionText}
							</div>
							{this.props.style === 'big' ?
								<div className="verticalOptionContextText">
									{this.props.contextText}
								</div>
								:
								(null)
							}
					</div>	


				)			

	}

}
	
	