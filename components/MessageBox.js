import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './MessageBox.css';

export default class MessageBox extends Component {

	static propTypes = {
		header: PropTypes.string,
		body: PropTypes.string,
		primaryFuncLabel: PropTypes.string,
		secondaryFuncLabel: PropTypes.string,
		primaryFunc: PropTypes.func,
		secondaryFunc: PropTypes.func,
		type: PropTypes.oneOf(['info', 'warning', 'error']),
	};

	constructor(props) {
		super();
		this.state = {
		};
	}

	render() {
		
		let style

		if ((this.props.header) && (this.props.primaryFuncLabel) && (this.props.secondaryFuncLabel)) {
				return (

					<div className={`messageBoxContainer ${this.props.type}`}>
						<div className="messageBoxHeader">{this.props.header}</div>
						<div className="messageBoxBody">{this.props.body}</div>
						<div className="messageBoxActionsWrapper">
							<div className="messageBoxAction" onClick={this.props.primaryFunc}>
								{this.props.primaryFuncLabel}
							</div>
							<div className="messageBoxAction" onClick={this.props.secondaryFunc}>
								{this.props.secondaryFuncLabel}
							</div>
						</div>
					</div>
					);

		} else if (this.props.header) {
				return (

					<div className={`messageBoxContainer ${this.props.type}`}>
						<div className="messageBoxHeader">{this.props.header}</div>
						<div className="messageBoxBody">{this.props.body}</div>
					</div>
					);
		} else {
			return (
				<div className={`messageBoxContainer ${this.props.type}`}>
							<div className="messageBoxBody">{this.props.body}</div>
						</div>
			)



		}

	}

}
	
	