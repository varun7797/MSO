import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './MessageFlash.css';
import $ from 'jquery'; 

export default class MessageFlash extends Component {

	static propTypes = {
		label: PropTypes.string,
		primaryFuncLabel: PropTypes.string,
		secondaryFuncLabel: PropTypes.string,
		primaryFunc: PropTypes.func,
		secondaryFunc: PropTypes.func,
		type: PropTypes.oneOf(['simple', 'lostconnection', 'actionsinline', 'actionsonbottom']),
	};
	static defaultProps = {
		type: 'simple',
	};


	constructor(props) {
		super();
		this.state = {
			show: false,
		};
	}

	showMessage = () => {
		this.setState({
			show: true
		})
		let x = document.getElementById(`messageflash${this.props.label}`)
		console.log(x)
		$(x).fadeIn()
		if (this.props.type === 'lostconnection') {
			$(x).delay(5000).fadeOut()
		}
	}

	closeMessage = () => {
		this.setState({
			show: false
		})
		let x = document.getElementById(`messageflash${this.props.label}`)
		console.log(x)
		$(x).fadeOut()			
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
		
			const {label, primaryFunc, primaryFuncLabel, secondaryFunc, secondaryFuncLabel, type } = this.props

			if (this.detectMobile()) {
				return (
					<div id={`messageflash${label}`} style={{zIndex: '9999', display: 'none', position: 'fixed', left: '0px', bottom: '0px', right: '0px', width: '100%'}}>
						<div className={`mfWrapper ${type}`}>
							{type === 'lostconnection' ? (null) : <button onClick={this.closeMessage} className="mfClose"/>}
							{type === 'actionsonbottom' ?
								<div className={`mfTextWrapper ${type}`}>
									{label}
									<div className="mfTextBottom">
										<div onClick={primaryFunc} className="mfButton">
											{primaryFuncLabel}
										</div>
										<div onClick={secondaryFunc} className="mfButton">
											{secondaryFuncLabel}
										</div>
									</div>
								</div>
							: 
							<div className={`mfTextWrapper ${type}`}>
								{label}
								<div onClick={primaryFunc} className="mfButton">
									{primaryFuncLabel}
								</div>
								<div onClick={secondaryFunc} className="mfButton">
									{secondaryFuncLabel}
								</div>
							</div>
							}	
						</div>
					</div>
				)
			}

			return (
					<div id={`messageflash${label}`} style={{zIndex: '9999', display: 'none', position: 'fixed', left: '16px', bottom: '16px', maxWidth: '640px'}}>
						<div className={`mfWrapper ${type}`}>
							{type === 'lostconnection' ? (null) : <button onClick={this.closeMessage} className="mfClose"/>}
							{type === 'actionsonbottom' ?
								<div className={`mfTextWrapper ${type}`}>
									{label}
									<div className="mfTextBottom">
										<div onClick={primaryFunc} className="mfButton">
											{primaryFuncLabel}
										</div>
										<div onClick={secondaryFunc} className="mfButton">
											{secondaryFuncLabel}
										</div>
									</div>
								</div>
							: 
							<div className={`mfTextWrapper ${type}`}>
								{label}
								<div onClick={primaryFunc} className="mfButton">
									{primaryFuncLabel}
								</div>
								<div onClick={secondaryFunc} className="mfButton">
									{secondaryFuncLabel}
								</div>
							</div>
							}	
						</div>
					</div>


			)


		}

	

}		