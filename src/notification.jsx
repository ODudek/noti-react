import React, { Component } from 'react'
import './style.css';
import propTypes from 'prop-types';
import { colors } from './consts';
import { Info, Done, Close } from './Icons';

export class Notification extends Component {
	state = {
		color: colors[this.props.type] || '#72ACD6',
		shouldClose: false,
	};

	closeNotification = () => {
		this.setState(() => ({ shouldClose: true }))
	}

	getIcon = () => this.state.color === colors.success ? <Done /> : <Info />;

	render() {
		const { label } = this.props;
		const icon = this.getIcon();
		if (this.state.shouldClose) return null;

		return (
			<div className="notification show">
				<div className="box flex-center" style={{ background: this.state.color }}>
					{icon}
				</div>
				<div className="message">
					<p>{label}</p>
				</div>
				<div className="box flex-center">
					<Close color={this.state.color} className="close" handleClose={this.closeNotification} />
				</div>
			</div>
		)
	}
}

Notification.propTypes = {
	type: propTypes.string,
	label: propTypes.string.isRequired,
	autoHide: propTypes.bool,
	hideTime: propTypes.number,
	position: propTypes.string
}
