import React, { useState, useEffect, useRef, useCallback } from 'react';
import './style.css';
import propTypes from 'prop-types';
import { colors, showAnimation, hideAnimation, position } from './consts';
import { Info, Done, Close } from './Icons';

export const Notification = ({
	type = 'info',
	label,
	autoHide = true,
	animationTime = 500,
	hideTime = 5000,
	position: notificationPosition = position.bottomRight,
	customColor,
	className,
}) => {
	const [color, setColor] = useState(customColor || colors[type]);
	const [shouldClose, setShouldClose] = useState(false);
	const [startAnimation, setStartAnimation] = useState(false);

	const autoHideRef = useRef(null);
	const animationTimeRef = useRef(null);

	const isRgb = (color) => /^#[0-9A-F]{6}$/i.test(color);

	const clearTimeouts = useCallback(() => {
		clearTimeout(autoHideRef.current);
		clearTimeout(animationTimeRef.current);
	}, []);

	const closeNotification = useCallback(() => {
		setStartAnimation(true);
		animationTimeRef.current = setTimeout(() => {
			setShouldClose(true);
		}, animationTime);
	}, [animationTime]);

	const autoClose = useCallback(() => {
		if (autoHide && !shouldClose && !startAnimation) {
			autoHideRef.current = setTimeout(() => {
				closeNotification();
			}, hideTime - animationTime);
		} else if (!autoHide) {
			clearTimeouts();
		}
	}, [
		autoHide,
		shouldClose,
		startAnimation,
		closeNotification,
		hideTime,
		animationTime,
		clearTimeouts,
	]);

	// Handle prop changes
	useEffect(() => {
		if (type) {
			setColor(customColor || colors[type] || colors.info);
		}
	}, [type, customColor]);

	useEffect(() => {
		if (!autoHide) {
			setShouldClose(false);
			setStartAnimation(false);
			clearTimeouts();
		}
	}, [autoHide, clearTimeouts]);

	useEffect(() => {
		if (customColor && isRgb(customColor)) {
			setColor(customColor);
		}
	}, [customColor]);

	// Auto close effect
	useEffect(() => {
		autoClose();
		return clearTimeouts;
	}, [autoClose, clearTimeouts]);

	// Cleanup on unmount
	useEffect(() => {
		return clearTimeouts;
	}, [clearTimeouts]);

	const getIcon = () => (color === colors.success ? <Done /> : <Info />);

	if (shouldClose) return null;

	const icon = getIcon();
	const animationStyle = startAnimation
		? hideAnimation(animationTime, notificationPosition)
		: showAnimation(animationTime, notificationPosition);
	const classes = className ? `notification ${className}` : 'notification';

	return (
		<div className={classes} style={animationStyle}>
			<div className="box flex-center" style={{ background: color }}>
				{icon}
			</div>
			<div className="message">
				<p>{label}</p>
			</div>
			<div className="box flex-center">
				<Close
					color={color}
					className="close"
					handleClose={closeNotification}
				/>
			</div>
		</div>
	);
};

Notification.propTypes = {
	type: propTypes.string,
	label: propTypes.string.isRequired,
	autoHide: propTypes.bool,
	animationTime: propTypes.number,
	position: propTypes.string,
	hideTime: propTypes.number,
	customColor: propTypes.string,
	className: propTypes.string,
};
