// eslint-disable-next-line no-unused-vars
import React from 'react';
// Import the storybook libraries
import { storiesOf } from '@storybook/react';
import { wInfo } from '../.storybook/utils';
// import { text, boolean } from "@storybook/addon-knobs/react";
// Import our component from this folder
// eslint-disable-next-line no-unused-vars
import { Notification } from './Notification';


storiesOf('Components/Notification', module).addWithJSX('Default',
	wInfo(`
    ### Notes
    This is a button
    ### Usage
    ~~~js
    <Button
        label={'Enroll'}
        disabled={false}
        onClick={() => alert('hello there')}
    />
	~~~`)
	(() => (
		<Notification
			label="Let me know when you give up."
		/>
	))
).addWithJSX('Success',
	wInfo(`
### Notes
This is a button
### Usage
~~~js
<Button
    label={'Enroll'}
    disabled={false}
    onClick={() => alert('hello there')}
/>
~~~`)
	(() => (
		<Notification
			label="Congratulations! You did it right."
		/>
	))
);
