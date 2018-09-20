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
	autoHide = null;

	getTimeout = () => this.props.hideTime - this.props.animationTime;

	autoClose = () => {
		const { startAnimation, shouldClose } = this.state;
		if (!shouldClose && !startAnimation) {
			this.autoHide = setTimeout(() => {
				this.closeNotification();
			}, this.getTimeout());
		} else {
			clearTimeout(this.autoHide);
		}
	}

	closeNotification = () => {
		this.setState(() => ({ startAnimation: true }))
		setTimeout(() => this.setState(() => ({ shouldClose: true })), this.props.animationTime)
	}

	getIcon = () => this.state.color === colors.success ? <Done /> : <Info />;

	render() {
		const { label, animationTime } = this.props;
		const { color, startAnimation, shouldClose } = this.state;
		const icon = this.getIcon();
		const getClass = startAnimation ? hideAnimation(animationTime) : showAnimation(animationTime);
		this.autoClose();
		if (shouldClose) return null;

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
	position: propTypes.string,
	hideTime: propTypes.number,
};

Notification.defaultProps = {
	type: 'info',
	autoHide: true,
	animationTime: 500,
	hideTime: 5000,
}
