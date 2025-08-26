import React from 'react';
import { Notification } from './Notification';
import { NotificationContainer } from './NotificationContainer';

export default {
	title: 'Components/Notification',
	component: Notification,
	parameters: {
		layout: 'fullscreen',
	},
	argTypes: {
		type: {
			control: {
				type: 'select',
				options: ['info', 'success', 'warn', 'error'],
			},
		},
		position: {
			control: {
				type: 'select',
				options: ['top-left', 'top-right', 'bottom-left', 'bottom-right'],
			},
		},
		customColor: {
			control: 'color',
		},
	},
};

const Template = (args) => (
	<NotificationContainer position={args.position}>
		<Notification {...args} />
	</NotificationContainer>
);

export const Default = Template.bind({});
Default.args = {
	label: 'Let me know when you give up.',
	type: 'info',
	autoHide: true,
	position: 'bottom-right',
};

export const Success = Template.bind({});
Success.args = {
	label: 'Congratulations! You did it right.',
	type: 'success',
	autoHide: true,
	position: 'bottom-right',
};

export const Warning = Template.bind({});
Warning.args = {
	label: 'I wouldn\'t do this if I were you...',
	type: 'warn',
	autoHide: true,
	position: 'bottom-right',
};

export const Error = Template.bind({});
Error.args = {
	label: 'Oh, well. There\'s always next time.',
	type: 'error',
	autoHide: true,
	position: 'bottom-right',
};

export const CustomColor = Template.bind({});
CustomColor.args = {
	label: 'Custom colored notification',
	type: 'info',
	customColor: '#9C27B0',
	autoHide: true,
	position: 'bottom-right',
};

export const NoAutoHide = Template.bind({});
NoAutoHide.args = {
	label: 'This notification will not auto-hide',
	type: 'info',
	autoHide: false,
	position: 'bottom-right',
};

// Multiple notifications showcase
const MultipleTemplate = () => (
	<div>
		<NotificationContainer position="top-left">
			<Notification
				label="First notification - top left"
				type="info"
				position="top-left"
				autoHide={false}
			/>
		</NotificationContainer>
		<NotificationContainer position="top-right">
			<Notification
				label="Second notification - top right"
				type="success"
				position="top-right"
				autoHide={false}
			/>
		</NotificationContainer>
		<NotificationContainer position="bottom-left">
			<Notification
				label="Third notification - bottom left"
				type="warn"
				position="bottom-left"
				autoHide={false}
			/>
		</NotificationContainer>
		<NotificationContainer position="bottom-right">
			<Notification
				label="Fourth notification - bottom right"
				type="error"
				position="bottom-right"
				autoHide={false}
			/>
		</NotificationContainer>
	</div>
);

export const MultipleNotifications = MultipleTemplate.bind({});
MultipleNotifications.parameters = {
	docs: {
		description: {
			story:
				'Showcase of multiple notifications in different positions simultaneously.',
		},
	},
};

// Stack of notifications in same position
const StackTemplate = () => (
	<NotificationContainer position="bottom-right">
		<Notification
			label="First notification in stack"
			type="info"
			position="bottom-right"
			autoHide={false}
		/>
		<Notification
			label="Second notification in stack"
			type="success"
			position="bottom-right"
			autoHide={false}
		/>
		<Notification
			label="Third notification in stack"
			type="warn"
			position="bottom-right"
			autoHide={false}
		/>
	</NotificationContainer>
);

export const StackedNotifications = StackTemplate.bind({});
StackedNotifications.parameters = {
	docs: {
		description: {
			story: 'Multiple notifications stacked in the same position.',
		},
	},
};

// Mixed types showcase
const MixedTemplate = () => (
	<div>
		<NotificationContainer position="top-left">
			<Notification
				label="📢 Information: System update available"
				type="info"
				position="top-left"
				autoHide={false}
			/>
		</NotificationContainer>
		<NotificationContainer position="top-right">
			<Notification
				label="✅ Success: File uploaded successfully"
				type="success"
				position="top-right"
				autoHide={false}
			/>
		</NotificationContainer>
		<NotificationContainer position="bottom-left">
			<Notification
				label="⚠️ Warning: Low disk space"
				type="warn"
				position="bottom-left"
				autoHide={false}
			/>
		</NotificationContainer>
		<NotificationContainer position="bottom-right">
			<Notification
				label="❌ Error: Failed to save document"
				type="error"
				position="bottom-right"
				autoHide={false}
			/>
			<Notification
				label="🎨 Custom: Purple notification"
				type="info"
				position="bottom-right"
				customColor="#9C27B0"
				autoHide={false}
			/>
		</NotificationContainer>
	</div>
);

export const MixedNotifications = MixedTemplate.bind({});
MixedNotifications.parameters = {
	docs: {
		description: {
			story:
				'Real-world example with different notification types, positions, and one custom colored notification.',
		},
	},
};

// Animation and timing showcase
const AnimationTemplate = () => (
	<div>
		<NotificationContainer position="top-left">
			<Notification
				label="Fast animation (200ms)"
				type="info"
				position="top-left"
				animationTime={200}
				autoHide={true}
				hideTime={3000}
			/>
		</NotificationContainer>
		<NotificationContainer position="top-right">
			<Notification
				label="Default animation (500ms)"
				type="success"
				position="top-right"
				animationTime={500}
				autoHide={true}
				hideTime={4000}
			/>
		</NotificationContainer>
		<NotificationContainer position="bottom-left">
			<Notification
				label="Slow animation (1000ms)"
				type="warn"
				position="bottom-left"
				animationTime={1000}
				autoHide={true}
				hideTime={6000}
			/>
		</NotificationContainer>
		<NotificationContainer position="bottom-right">
			<Notification
				label="Very slow animation (1500ms) - stays longer"
				type="error"
				position="bottom-right"
				animationTime={1500}
				autoHide={true}
				hideTime={8000}
			/>
		</NotificationContainer>
	</div>
);

export const AnimationShowcase = AnimationTemplate.bind({});
AnimationShowcase.parameters = {
	docs: {
		description: {
			story:
				'Demonstrates different animation speeds and auto-hide timings. Notifications will auto-hide after different intervals.',
		},
	},
};

// Long text notifications
const LongTextTemplate = () => (
	<div>
		<NotificationContainer position="top-left">
			<Notification
				label="This is a very long notification message that demonstrates how the component handles longer text content. It should wrap appropriately and maintain good readability."
				type="info"
				position="top-left"
				autoHide={false}
			/>
		</NotificationContainer>
		<NotificationContainer position="top-right">
			<Notification
				label="Medium length notification with some important information that users need to read."
				type="success"
				position="top-right"
				autoHide={false}
			/>
		</NotificationContainer>
		<NotificationContainer position="bottom-left">
			<Notification
				label="Short text"
				type="warn"
				position="bottom-left"
				autoHide={false}
			/>
		</NotificationContainer>
		<NotificationContainer position="bottom-right">
			<Notification
				label="Another extremely long notification message that contains multiple sentences and demonstrates how the notification component behaves with extensive text content. This helps developers understand the layout behavior."
				type="error"
				position="bottom-right"
				autoHide={false}
			/>
		</NotificationContainer>
	</div>
);

export const LongTextNotifications = LongTextTemplate.bind({});
LongTextNotifications.parameters = {
	docs: {
		description: {
			story:
				'Shows how notifications handle different text lengths and content wrapping.',
		},
	},
};
