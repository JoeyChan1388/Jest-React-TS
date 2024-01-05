//@ts-nocheck
// Jest Testing for Login Form

/* 
    Notes:
    Extension must be .tsx for jest to work on other TSX files!!
    Must import '@testing-library/jest-dom' to use jest-dom functions such as toBeInTheDocument()
    Must create and config the jest.config.cjs file
    Must config the tsconfig.json file to include setupTests.ts
    Must create and config the .babelrc file
    Refer to https://maous.medium.com/setup-testing-environment-for-react-typescript-with-jest-1f5eb453aa2 for initial setup steps.
*/

import LoginForm from "../components/LoginForm/LoginForm";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'

describe('Login', () => {
    it('should render a login form with username and password fields without crashing', () => {
        // Render the component
        render(<LoginForm/>);

        // Variables for testing elements
        const usernameInput = screen.getByLabelText('Username:');
        const passwordInput = screen.getByLabelText('Password:');
        const submitButton = screen.getByTestId('login-submit');

        // Run tests
        expect(usernameInput).toBeInTheDocument();
        expect(passwordInput).toBeInTheDocument();
    });
});