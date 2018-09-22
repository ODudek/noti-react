// eslint-disable-next-line no-unused-vars
import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs/react';
// eslint-disable-next-line no-unused-vars
import { Notification } from '../src/Notification';

storiesOf('Components/Notification', module).addWithJSX('Default/Info',
	(() => (
		<Notification
			label={text('label', 'Let me know when you give up.')}
			type={text('type', 'info')}
			autoHide={boolean('autoHide', true)}
			position={text('position', 'bottom-right')}
		/>
	))
).addWithJSX('Success',
	(() => (
		<Notification
			label={text('label', 'Congratulations! You did it right.')}
			type={text('type', 'success')}
			autoHide={boolean('autoHide', true)}
			position={text('position', 'bottom-right')}
		/>
	))
).addWithJSX('Warn',
	(() => (
		<Notification
			label={text('label', 'I wouldn\'t do this if I were you...')}
			type={text('type', 'warn')}
			autoHide={boolean('autoHide', true)}
			position={text('position', 'bottom-right')}
		/>
	))
).addWithJSX('Error',
	(() => (
		<Notification
			label={text('label', 'Oh, well. There\'s always next time.')}
			type={text('type', 'error')}
			autoHide={boolean('autoHide', true)}
			position={text('position', 'bottom-right')}
		/>
	))
);
