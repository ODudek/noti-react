import React, { Component } from 'react'
import './style.css';
import propTypes from 'prop-types';
import { colors, showAnimation, hideAnimation } from './consts';
import { Info, Done, Close } from './Icons';

export class Notification extends Component {
	state = {
		color: colors[this.props.type] || "#72ACD6",
		shouldClose: false,
		startAnimation: false,
	};

	closeNotification = () => {
		this.setState(() => ({ startAnimation: true }))
		setTimeout(() => this.setState(() => ({ shouldClose: true })), this.props.animationTime || 500)
	}

	getIcon = () => this.state.color === colors.success ? <Done /> : <Info />;

	render() {
		const { label, animationTime } = this.props;
		const { color, startAnimation } = this.state;
		const icon = this.getIcon();
		const getClass = startAnimation ? hideAnimation(animationTime || 500) : showAnimation(animationTime || 500);
		if (this.state.shouldClose) return null;

		return (
			<div className="notification" style={getClass}>
				<div className="box flex-center" style={{ background: color }}>
					{icon}
				</div>
				<div className="message">
					<p>{label}</p>
				</div>
				<div className="box flex-center">
					<Close color={color} className="close" handleClose={this.closeNotification} />
				</div>
			</div>
		)
	}
}

Notification.propTypes = {
	type: propTypes.string,
	label: propTypes.string.isRequired,
	autoHide: propTypes.bool,
	animationTime: propTypes.number,
	position: propTypes.string
}
