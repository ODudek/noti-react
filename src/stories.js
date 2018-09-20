import React from 'react';
// Import the storybook libraries
import { storiesOf } from '@storybook/react';
import { wInfo } from "../.storybook/utils";
import { text, boolean } from "@storybook/addon-knobs/react";
// Import our component from this folder
import { Notification } from './notification';

storiesOf("Components/Button", module).addWithJSX("Primary",
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
        <Notification />
    ))
)