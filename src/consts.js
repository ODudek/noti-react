export const colors = {
	success: '#62918C',
	info: '#72ACD6',
	error: '#EE665F',
	warn: '#FCD63F',
};

export const position = {
	bottomRight: 'bottom-right',
	bottomLeft: 'bottom-left',
	topLeft: 'top-left',
	topRight: 'top-right',
};

export const showAnimation = (time, notificationPosition) => {
	const isLeft = notificationPosition === position.topLeft || notificationPosition === position.bottomLeft;
	const animationName = isLeft ? 'moveInLeft' : 'moveIn';
	return { animation: `${animationName} ${time}ms ease-out` };
};

export const hideAnimation = (time, notificationPosition) => {
	const isLeft = notificationPosition === position.topLeft || notificationPosition === position.bottomLeft;
	const animationName = isLeft ? 'moveOutLeft' : 'moveOut';
	return { animation: `${animationName} ${time}ms ease-in` };
};
