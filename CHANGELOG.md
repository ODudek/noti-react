# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.2.0] - 2025-08-26

### 🚀 Major Features

- **NotificationContainer Component** - New container component for managing multiple notifications with proper positioning and stacking
- **Modern React Hooks Architecture** - Converted from class components to functional components using React hooks (useState, useEffect, useRef, useCallback)
- **Notification Stacking** - Multiple notifications now stack properly without overlapping

### 🔧 Technical Improvements

- **Dependency Updates** - Updated all dependencies to latest versions for security and compatibility
- **Babel Migration** - Migrated from Babel 6 to Babel 7 with modern presets
- **Storybook 8.x** - Updated Storybook with comprehensive examples and live documentation
- **Modern Build Pipeline** - Added Vite 6.x for faster development and building
- **Code Quality** - Added Prettier for consistent code formatting with tab-based indentation
- **Security Fixes** - Resolved all npm audit vulnerabilities with dependency overrides

### 🎨 Enhanced Documentation

- **Live Storybook** - Deployed live documentation with interactive examples
- **Comprehensive README** - Updated with NotificationContainer usage and modern examples
- **API Documentation** - Complete prop tables and TypeScript examples for both components

### 🔒 Infrastructure

- **GitHub Actions CI/CD** - Automated testing, linting, building, and Storybook deployment
- **Security Policy** - Added SECURITY.md for vulnerability reporting
- **Contributing Guidelines** - Added CONTRIBUTING.md with development setup instructions

### ⚡ Breaking Changes

- Components now use React hooks (requires React 16.8+)
- For multiple notifications, `NotificationContainer` is recommended for proper stacking
- Updated peer dependencies and build tooling

### 🐛 Bug Fixes

- Fixed notification positioning and stacking issues
- Resolved test suite compatibility with React 18 and modern testing tools
- Fixed ESLint and Prettier configuration conflicts

## [0.1.0] - 2018-XX-XX

### Added

- Initial release of noti-react
- Basic notification component with customizable types
- Support for different positions (top-left, top-right, bottom-left, bottom-right)
- Auto-hide functionality with configurable timeout
- Custom color support
- TypeScript definitions
- Storybook documentation
- Unit tests with Jest and Enzyme
- ESLint configuration
- MIT License

### Features

- Simple notification component for React
- Support for notification types: error, info, success, warn
- Configurable animation time
- Custom CSS class support
- Auto-hide with configurable timeout
- Position customization
- Custom color theming
