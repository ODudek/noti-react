# Noti-react

[![npm version](https://img.shields.io/npm/v/noti-react.svg?style=flat-square)](https://www.npmjs.com/package/noti-react)
[![CI](https://github.com/ODudek/noti-react/workflows/CI/badge.svg)](https://github.com/ODudek/noti-react/actions)
[![Storybook](https://img.shields.io/badge/Storybook-Live-brightgreen?style=flat-square)](https://odudek.github.io/noti-react/)
[![npm](https://img.shields.io/npm/dt/noti-react.svg?style=flat-square)](https://www.npmjs.com/package/noti-react)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/noti-react.svg?style=flat-square)](https://bundlephobia.com/package/noti-react)
[![Security](https://img.shields.io/badge/Security-Audited-green?style=flat-square)](https://github.com/ODudek/noti-react/security)

🔔 Simple, customizable notification component for React with TypeScript support and modern hooks architecture!

![demo](./demo.jpg)

## Install

1. Use npm

```bash
npm install noti-react
```

2. Use yarn

```bash
yarn add noti-react
```

## Notification

| property      | propType                                                        | required | default        | description                                                           |
| ------------- | --------------------------------------------------------------- | -------- | -------------- | --------------------------------------------------------------------- |
| type          | string ('error', 'info', 'success', 'warn')                     | -        | 'info'         | Deside which type of notification do you want to use!                 |
| label         | string                                                          | yes      | -              | Text which you want to display                                        |
| autoHide      | bool                                                            | -        | true           | Auto hide notification                                                |
| animationTime | number                                                          | -        | 500            | Time of animation duration in miliseconds                             |
| position      | string ('top-left', 'top-right', 'bottom-left', 'bottom-right') | -        | 'bottom-right' | Position in which corner do you want to display notification          |
| hideTime      | number                                                          | -        | 5000           | After this time notification will close if `autoHide` props is `true` |
| customColor   | string (rgb string like '#000000')                              | -        | -              | Add your custom color                                                 |
| className     | string                                                          | -        | -              | Customize style by adding custom class                                |

## Example

1. Import notification components

```javascript
import { Notification, NotificationContainer } from 'noti-react';
```

2. Use it in your component

```javascript
// Single notification
<Notification label="Example of notification" />

// Multiple notifications with proper stacking
<NotificationContainer position="bottom-right">
	<Notification label="First notification" type="success" />
	<Notification label="Second notification" type="info" />
	<Notification label="Third notification" type="error" />
</NotificationContainer>
```

## ✨ Features

- 🚀 **Modern React Hooks** - Built with functional components and React hooks
- 🎨 **4 Built-in Types** - Success, Info, Error, and Warning notifications
- 📱 **4 Position Options** - Display in any corner of the screen
- 📚 **Notification Stacking** - Container component for multiple notifications
- ⏰ **Auto-hide Support** - Configurable auto-dismiss functionality
- 🎭 **Smooth Animations** - Customizable animation timing and effects
- 🎨 **Custom Styling** - Override colors and add custom CSS classes
- 📦 **TypeScript Ready** - Full TypeScript definitions included
- 🔧 **Zero Dependencies** - Lightweight with no external dependencies
- ♿ **Accessible** - Screen reader friendly with proper ARIA attributes

## 📖 Live Examples

Check out the live [Storybook documentation](https://odudek.github.io/noti-react/) to see all examples and interact with the components.

## Development

### Prerequisites

- Node.js 18+ (see .nvmrc)
- npm 8+

### Setup

1. Clone the repository:

```bash
git clone https://github.com/ODudek/noti-react.git
cd noti-react
```

2. Install dependencies:

```bash
npm install
```

3. Start Storybook for development:

```bash
npm run dev
```

### Building

Build the library:

```bash
npm run transpile
```

### Testing

Run tests:

```bash
npm test
```

Run linting and formatting:

```bash
npm run lint
npm run format:check
```

Fix linting and formatting issues automatically:

```bash
npm run lint:fix
npm run format
```

## API Reference

### Notification Component

The main notification component with comprehensive customization options.

```typescript
import { Notification } from 'noti-react';

<Notification
  type="success"
  label="Operation completed successfully!"
  position="top-right"
  autoHide={true}
  hideTime={3000}
  animationTime={300}
  customColor="#4CAF50"
  className="my-custom-notification"
/>
```

### NotificationContainer Component

Container component for managing multiple notifications with proper positioning and stacking.

| property | propType                                                        | required | default        | description                                    |
| -------- | --------------------------------------------------------------- | -------- | -------------- | ---------------------------------------------- |
| position | string ('top-left', 'top-right', 'bottom-left', 'bottom-right') | -        | 'bottom-right' | Position where notifications will be displayed |
| children | ReactNode                                                       | yes      | -              | Notification components to display             |

```typescript
import { Notification, NotificationContainer } from 'noti-react';

<NotificationContainer position="top-right">
  <Notification type="success" label="Success message" />
  <Notification type="info" label="Info message" />
</NotificationContainer>
```

## Advanced Examples

### Multiple Notifications with Container

```javascript
import { Notification, NotificationContainer } from 'noti-react';

<NotificationContainer position="bottom-right">
	<Notification
		type="success"
		label="File uploaded successfully!"
		hideTime={3000}
	/>
	<Notification
		type="info"
		label="Processing your request..."
		autoHide={false}
	/>
	<Notification
		type="warn"
		label="Low storage space remaining"
		hideTime={8000}
	/>
</NotificationContainer>;
```

### Custom Styled Notification

```javascript
<Notification
	type="info"
	label="Custom notification with longer text and styling"
	customColor="#2196F3"
	className="custom-info-notification"
	animationTime={600}
	hideTime={7000}
/>
```

### Error Notification (Non-dismissible)

```javascript
<Notification
	type="error"
	label="Something went wrong! Please try again."
	position="top-left"
	autoHide={false}
/>
```

### Different Positions with Container

```javascript
// Top-left notifications
<NotificationContainer position="top-left">
	<Notification type="info" label="System update available" />
</NotificationContainer>

// Bottom-right notifications
<NotificationContainer position="bottom-right">
	<Notification type="success" label="Changes saved" />
	<Notification type="warn" label="Session expires in 5 minutes" />
</NotificationContainer>
```

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for details on how to contribute to this project.

## Security

For security concerns, please see [SECURITY.md](SECURITY.md).

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for a list of changes and version history.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

If you found this project helpful, please consider:

- ⭐ Starring the repository
- 🐛 Reporting bugs via [GitHub Issues](https://github.com/ODudek/noti-react/issues)
- 💡 Suggesting new features
- 🤝 Contributing to the codebase

## 🔧 Technical Stack

- **React**: 18.x with hooks architecture
- **TypeScript**: Full type definitions
- **Vite**: Modern build tooling
- **Storybook**: Component documentation and testing
- **Jest + Enzyme**: Unit testing suite
- **ESLint + Prettier**: Code quality and formatting
- **GitHub Actions**: Automated CI/CD pipeline

## 🌐 Browser Support

- **Chrome**: Latest versions
- **Firefox**: Latest versions
- **Safari**: Latest versions
- **Edge**: Latest versions
- **React**: 16.8+ (hooks support required)
