import React from 'react';
import propTypes from 'prop-types';
import './container.css';

export const NotificationContainer = ({ position, children }) => {
	const containerClass = `notification-container ${position}`;

	return <div className={containerClass}>{children}</div>;
};

NotificationContainer.propTypes = {
	position: propTypes.oneOf([
		'top-left',
		'top-right',
		'bottom-left',
		'bottom-right',
	]).isRequired,
	children: propTypes.node.isRequired,
};
