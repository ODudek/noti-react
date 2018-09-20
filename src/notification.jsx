import React, { Component } from 'react'
import './style.css';
import propTypes from 'prop-types';

export class Notification extends Component {
	render() {
		const { label } = this.props;

		return (
			<div>
				<h1>{label}</h1>
			</div>
		)
	}
}

Notification.propTypes = {
	type: propTypes.string,
	label: propTypes.string.isRequired,
	autoHide: propTypes.bool,
	hideTime: propTypes.number,
}
