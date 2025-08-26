# Noti-react

[![npm version](https://img.shields.io/npm/v/noti-react.svg?style=flat-square)](https://www.npmjs.com/package/noti-react)
[![CI](https://github.com/ODudek/noti-react/workflows/CI/badge.svg)](https://github.com/ODudek/noti-react/actions)
[![npm](https://img.shields.io/npm/dt/noti-react.svg?style=flat-square)](https://www.npmjs.com/package/noti-react)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/noti-react.svg?style=flat-square)](https://bundlephobia.com/package/noti-react)

Simple notification component for React with support for Typescript!

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

1. Import notification component

```javascript
import { Notification } from 'noti-react';
```

2. Use it in your component

```javascript
<Notification label="Example of notification" />
```

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

Run linting:

```bash
npm run lint
```

Fix linting issues automatically:

```bash
npm run lint:fix
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

## Advanced Examples

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

### Error Notification

```javascript
<Notification
  type="error"
  label="Something went wrong! Please try again."
  position="top-left"
  autoHide={false}
/>
```

### Warning with Auto-hide

```javascript
<Notification
  type="warn"
  label="This action cannot be undone"
  position="bottom-left"
  hideTime={10000}
/>
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

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- IE 11+ (with polyfills)
