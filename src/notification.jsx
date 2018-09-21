import React, { PureComponent } from 'react'
import './style.css';
import propTypes from 'prop-types';
import { colors, showAnimation, hideAnimation, position } from './consts';
import { Info, Done, Close } from './Icons';

export class Notification extends PureComponent {
	state = {
		color: colors[this.props.type],
		shouldClose: false,
        startAnimation: false,
        position: position.bottomRight,
	};
	autoHide = null;
    animationTime = null;
    
    componentWillReceiveProps(nextProps) {
        if (this.props !== nextProps) {
            if (this.props.type !== nextProps.type) {
                this.setState(() => ({ color: colors[nextProps.type] || colors.info }));
            }
            if (!nextProps.autoHide) {
                this.setState(() => ({ shouldClose: false, startAnimation: false }));
                this.clearTimeout();
            }
            if (this.props.position !== nextProps.position) {
                this.setState(() => ({ position: nextProps.position }));
            }
        }
    }

    setPosition = () => {
        switch(this.state.position) {
            case position.topRight:
                return {
                    top: '0',
                    right: '0',
                };
            case position.topLeft:
                return {
                    top: '0',
                    left: '0',
                };
            case position.bottomRight:
                return {
                    bottom: '0',
                    right: '0',
                };
            case position.bottomLeft:
                return {
                    bottom: '0',
                    left: '0',
                };
            default:
                return {
                    bottom: '0',
                    right: '0',
                }
        }
    }

    clearTimeout = () => {
        clearTimeout(this.autoHide);
        clearTimeout(this.animationTime);
    }

	autoClose = () => {
        const { hideTime, animationTime, autoHide } = this.props;
		const { startAnimation, shouldClose } = this.state;
        if (autoHide) {
            if (!shouldClose && !startAnimation) {
                this.autoHide = setTimeout(() => {
                    this.closeNotification();
                }, hideTime - animationTime);
            } else {
                this.clearTimeout();
            }
        }
    }

	componentWillUnmount() {
		this.clearTimeout();
	}

	closeNotification = () => {
		this.setState(() => ({ startAnimation: true }))
		this.animationTimeout = setTimeout(() => this.setState(() => ({ shouldClose: true })), this.props.animationTime)
	}

	getIcon = () => this.state.color === colors.success ? <Done /> : <Info />;

	render() {
		const { label, animationTime } = this.props;
		const { color, startAnimation, shouldClose } = this.state;
		const icon = this.getIcon();
        const getClass = startAnimation ? hideAnimation(animationTime) : showAnimation(animationTime);
        const getPosition = this.setPosition();
        const getStyle = { ...getClass, ...getPosition };
		this.autoClose();
		if (shouldClose) return null;

		return (
			<div className="notification" style={getStyle}>
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
    position: position.bottomRight,
}
