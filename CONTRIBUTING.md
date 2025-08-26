# Contributing to noti-react

Thank you for your interest in contributing to noti-react! We welcome contributions from everyone.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/ODudek/noti-react.git`
3. Install dependencies: `npm install`
4. Create a new branch for your feature: `git checkout -b feature/your-feature-name`

## Development Setup

```bash
# Install dependencies
npm install

# Start development server with Storybook
npm run dev

# Run tests
npm test

# Run linter
npm run lint

# Fix linting issues automatically
npm run lint:fix
```

## Making Changes

1. Make your changes in the appropriate files
2. Add or update tests as necessary
3. Ensure all tests pass: `npm test`
4. Ensure linting passes: `npm run lint`
5. Build the project: `npm run transpile`

## Commit Guidelines

- Use clear and meaningful commit messages
- Follow the format: `type(scope): description`
  - `feat`: A new feature
  - `fix`: A bug fix
  - `docs`: Documentation only changes
  - `style`: Changes that do not affect the meaning of the code
  - `refactor`: A code change that neither fixes a bug nor adds a feature
  - `test`: Adding missing tests or correcting existing tests
  - `chore`: Changes to the build process or auxiliary tools

## Pull Request Process

1. Update the README.md with details of changes if applicable
2. Update the TypeScript definitions if you've changed the API
3. Ensure your code follows the existing code style
4. Make sure all tests pass
5. Update documentation as needed
6. Create a pull request with a clear title and description

## Code Style

- Use meaningful variable and function names
- Follow existing code formatting
- Add JSDoc comments for new public APIs
- Keep functions small and focused
- Write tests for new functionality

## Reporting Issues

When reporting issues, please include:

- Description of the issue
- Steps to reproduce
- Expected behavior
- Actual behavior
- Browser/environment information
- Screenshots if applicable

## Questions?

If you have questions about contributing, feel free to:

- Open an issue with the "question" label
- Contact the maintainers

Thank you for contributing! 🎉
