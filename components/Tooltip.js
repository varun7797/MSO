import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Tooltip.css';

export default class Tooltip extends Component {

	static propTypes = {
		type: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
		text: PropTypes.string,
		children: PropTypes.element.isRequired
	};

	static defaultProps = {
		type: 'top',
	};

	constructor(props) {
		super();
		this.state = {
			show: 'hidden',
			componentWidth: 0,
			componentHeight: 0,
			tooltipHeight: 0,
			componentHalfHeight: 0,
			tooltipWidth: 0,
		};
	}

	componentDidMount() {
		let x = document.getElementById(this.props.text).clientWidth
		let y = document.getElementById(this.props.text).clientHeight
		let y2 = y/2
		let tag = `tooltip${this.props.text}`
		let Ty = document.getElementById(tag).clientHeight
		Ty = Ty/2
		console.log(Ty)
		let Tx = document.getElementById(tag).clientWidth
		if (Tx > x) {
			Tx = (Tx - x)/2	
		}
		else {
			Tx = 0
		}
		this.setState({
			componentWidth: x,
			componentHeight: y,
			componentHalfHeight: y2,
			tooltipHeight: Ty,
			tooltipWidth: Tx
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

	show = () => {
		this.setState({
			show: ''
		})
	}

	hide = () => {
		this.setState({
			show: 'hidden'
		})
	}


	render() {
	    
	    const children = this.props.children;
		const {text, type} = this.props;

		if (this.detectMobile()) {
				if (this.props.type === 'top') {

					return (

							<div id={text} style={{position: 'relative'}}>
								<div onFocus={this.show} onBlur={this.hide} onMouseOver={this.show} onMouseLeave={this.hide} >{children}</div>

									<div 
										id={`tooltip${text}`}
										style={{left: `-${this.state.tooltipWidth}px`, minWidth: '96px', maxWidth: '312px', maxHeight: '96px', visibility: `${this.state.show}`, pointerEvents: 'none', bottom: `calc(8px + ${this.state.componentHeight}px)`}} 
										className="tooltip">
										<span className="tooltipTop"/>
										{text}
									</div> 
							</div>	


						)			
				}

				if (this.props.type === 'right') {
					
					return (

							<div id={text} style={{position: 'relative'}}>
								<div onFocus={this.show} onBlur={this.hide} onMouseOver={this.show} onMouseLeave={this.hide} >{children}</div>

									<div 
										id={`tooltip${text}`}
										style={{top: `calc(${this.state.componentHalfHeight}px - ${this.state.tooltipHeight}px)`, minWidth: '96px', maxWidth: '312px', maxHeight: '96px', visibility: `${this.state.show}`,pointerEvents: 'none', left: `calc(8px + ${this.state.componentWidth}px)`}} 
									    className="tooltip">
									    <span className="tooltipRight"/>
								     	{text}
								     </div> 

							</div>	


						)			
				}

				if (this.props.type === 'bottom') {
					
					return (

							<div id={text} style={{position: 'relative'}}>
								<div onFocus={this.show} onBlur={this.hide} onMouseOver={this.show} onMouseLeave={this.hide} >{children}</div> 
									<div 
										id={`tooltip${text}`}
										style={{left: `-${this.state.tooltipWidth}px`,minWidth: '96px', maxWidth: '312px', maxHeight: '96px', visibility: `${this.state.show}`,pointerEvents: 'none',  top: `calc(8px + ${this.state.componentHeight}px)`}} 
										className="tooltip">
										<span className="tooltipBottom"/>
										{text}
									</div> 
							</div>	


						)			
				}

				if (this.props.type === 'left') {
					
					return (

							<div id={text} style={{position: 'relative'}}>
								<div onFocus={this.show} onBlur={this.hide} onMouseOver={this.show} onMouseLeave={this.hide} >{children}</div>

									<div 
										id={`tooltip${text}`}
										style={{minWidth: '96px', maxWidth: '312px', maxHeight: '96px', top:`calc(${this.state.componentHalfHeight}px - ${this.state.tooltipHeight}px)`, visibility: `${this.state.show}`, pointerEvents: 'none', right: `calc(8px + ${this.state.componentWidth}px)`}} 
										className="tooltip">
										<span className="tooltipLeft"/>
										{text}
										</div> 

							</div>	


						)			
				}			
		}

		if (this.props.type === 'top') {

			return (

					<div id={text} style={{position: 'relative'}}>
						<div onFocus={this.show} onBlur={this.hide} onMouseOver={this.show} onMouseLeave={this.hide} >{children}</div>

							<div 
								id={`tooltip${text}`}
								style={{left: `-${this.state.tooltipWidth}px`, minWidth: '96px', maxWidth: '400px', maxHeight: '136px', visibility: `${this.state.show}`, pointerEvents: 'none', bottom: `calc(8px + ${this.state.componentHeight}px)`}} 
								className="tooltip">
								<span className="tooltipTop"/>
								{text}
							</div> 
					</div>	


				)			
		}

		if (this.props.type === 'right') {
			
			return (

					<div id={text} style={{position: 'relative'}}>
						<div onFocus={this.show} onBlur={this.hide} onMouseOver={this.show} onMouseLeave={this.hide} >{children}</div>

							<div 
								id={`tooltip${text}`}
								style={{top: `calc(${this.state.componentHalfHeight}px - ${this.state.tooltipHeight}px)`, minWidth: '96px', maxWidth: '400px', maxHeight: '136px', visibility: `${this.state.show}`,pointerEvents: 'none', left: `calc(8px + ${this.state.componentWidth}px)`}} 
							    className="tooltip">
							    <span className="tooltipRight"/>
						     	{text}
						     </div> 

					</div>	


				)			
		}

		if (this.props.type === 'bottom') {
			
			return (

					<div id={text} style={{position: 'relative'}}>
						<div onFocus={this.show} onBlur={this.hide} onMouseOver={this.show} onMouseLeave={this.hide} >{children}</div> 
							<div 
								id={`tooltip${text}`}
								style={{left: `-${this.state.tooltipWidth}px`,minWidth: '96px', maxWidth: '400px', maxHeight: '136px', visibility: `${this.state.show}`,pointerEvents: 'none',  top: `calc(8px + ${this.state.componentHeight}px)`}} 
								className="tooltip">
								<span className="tooltipBottom"/>
								{text}
							</div> 
					</div>	


				)			
		}

		if (this.props.type === 'left') {
			
			return (

					<div id={text} style={{position: 'relative'}}>
						<div onFocus={this.show} onBlur={this.hide} onMouseOver={this.show} onMouseLeave={this.hide} >{children}</div>

							<div 
								id={`tooltip${text}`}
								style={{minWidth: '96px', maxWidth: '400px', maxHeight: '136px', top:`calc(${this.state.componentHalfHeight}px - ${this.state.tooltipHeight}px)`, visibility: `${this.state.show}`, pointerEvents: 'none', right: `calc(8px + ${this.state.componentWidth}px)`}} 
								className="tooltip">
								<span className="tooltipLeft"/>
								{text}
								</div> 

					</div>	


				)			
		}

	}

}

	
	