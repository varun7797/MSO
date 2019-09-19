import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './HelpDrawer.css';
import Button from './Button.js'

export default class HelpDrawer extends Component {

	
	static propTypes = {
		title: PropTypes.string,
		body: PropTypes.string,
		footer: PropTypes.string,
		view: PropTypes.oneOf(['fullScreen', 'modal'])
	};
 

	constructor(props) {
		super();
		this.state = {
			show: false,
			width: 0,
			height: 0,
			startPositionX: 0,
			startPositionY: 0,
			display: 'none',
			screenHeight: 0,
			offsetY: 0

		};
	
	}

	componentDidMount() {
		let x = document.getElementById(`helpdrawer${this.props.title}`).clientWidth
		let y = screen.height
		if (this.props.view === 'modal') {
			let offY = this.parentHeight()
			this.setState({
				offsetY: offY
			})
		}
		this.setState({
			startPositionX: (x + 200),
			startPositionY: y,
			screenHeight: y,
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

	open = () => {
		this.setState({
			show: true
		})
		if (this.detectMobile()) {
			this.openHeight()
		} else {
			this.openWidth()	
		}

	}

	openWidth = () => {
		let x = document.getElementById(`helpdrawer${this.props.title}`).clientWidth
		this.setState({
			width: -x,
			startPositionX: x
		})
	}

	openHeight = () => {
		let y = this.state.startPositionY
		y = 0 - y
		this.setState({
			height: y
		})

	}



	close = () => {
		this.setState({
			show: true
		})
		if (this.detectMobile()) {
			this.closeHeight()
		} else {
			this.closeWidth()	
		}
	}

	closeWidth = () => {
		let x = document.getElementById(`helpdrawer${this.props.title}`).clientWidth
		this.setState({
			width: x,
			startPositionX: x
		})

	}

	closeHeight = () => {
		this.setState({
			height: this.state.startPositionY,
		})

	}

	parentHeight = () => {
		let y = document.getElementById(`helpdrawer${this.props.title}`).parentNode.parentElement.getBoundingClientRect()
		let y2 = document.getElementById(`helpdrawer${this.props.title}`).getBoundingClientRect()
		let top = y.top
		let top2 = y2.top
		let diff = top2 - top
		return diff
	}

	render() {

		const { view, body, title, footer, ...inputProps } = this.props;

		if (this.detectMobile()) {
				return (
					<div style={{pointerEvents: 'none', top: '0', bottom: '0', left:'0', right:'0', position: 'absolute', height: `100%`, overflowY: 'hidden'}}>
						<div
							style={{
							transform: `translateY(${this.state.height}px)`, 
							transition: 'transform 0.3s ease',
							top: `${this.state.startPositionY}px`,
							height: `calc(100% - 104px)`,
							width: `calc(100% - 48px)`,
							pointerEvents: 'all'
							}}
							id={`helpdrawer${title}`} 
							className="helpDrawerMobile">
								<Button 
									id="hdButton" 
									theme="light" 
									priority="transparent" 
									text="Close" 
									onClick={this.close}/>
								<div className={`hdTitle ${this.detectMobile()}`}>
									{title}
								</div>
								<div className="hdBody">
									{body}
								</div>
								<div className={`hdFooter ${view}`}>
									{footer}
								</div>
						</div>
					</div>


				)			
		}

		if (view === 'fullScreen') {
			return (

				<div style={{
					transform: `translateX(${this.state.width}px)`, 
					transition: 'transform 0.3s ease', 
					right: `-${this.state.startPositionX}px`}} 
					id={`helpdrawer${title}`} 
					className={`helpDrawerWrapper ${view}`}>
						<Button 
							id="hdButton" 
							theme="light" 
							priority="transparent" 
							text="Close" 
							onClick={this.close}/>
						<div className={`hdTitle ${this.detectMobile()}`}>
							{title}
						</div>
						<div className="hdBody">
							{body}
						</div>
						<div className={`hdFooter ${view}`}>
							{footer}
						</div>
				</div>
			)			
		}



		return (
			
			<div style={{ overflow: 'hidden', pointerEvents: 'none', position: 'relative', top: `-${this.state.offsetY}px`, height: '100%', width: '100%'}}>
				<div style={{
					pointerEvents: 'all',
					right: `-${this.state.startPositionX}px`,
					position: 'absolute',
					transform: `translateX(${this.state.width}px)`,					 
					transition: 'transform 0.3s ease', 

				}} 
					id={`helpdrawer${title}`} 

					className={`helpDrawerWrapper ${view}`}>
						<Button 
							id="hdButton" 
							theme="light" 
							priority="transparent" 
							text="Close" 
							onClick={this.close}/>
						<div className={`hdTitle ${this.detectMobile()}`}>
							{title}
						</div>
						<div className="hdBody">
							{body}
						</div>
						<div className={`hdFooter ${view}`}>
							{footer}
						</div>
				</div>
			</div>

			)
	}
	

}

