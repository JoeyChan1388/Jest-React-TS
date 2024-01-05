# Jest Testing in a React Typescript Environment

This template provides a minimal setup to get React working in Vite with Jest testing and a sample test file.

## Some notes to get this working...
- Extension of the test file must be .tsx for jest to work on other TSX files!
- Must import '@testing-library/jest-dom' to use jest-dom functions such as toBeInTheDocument()
- Must create and config the jest.config.cjs file as shown.
- Must config the tsconfig.json file to include setupTests.ts as shown.
- Must create and config the .babelrc file as shown.
- Must npm install the jsdom environment manually.
- Refer to https://maous.medium.com/setup-testing-environment-for-react-typescript-with-jest-1f5eb453aa2 for initial setup steps.
