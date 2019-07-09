import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import App from "./App";

afterEach(cleanup);

describe("App", () => {
    test("displays correct title", () => {
        const { getByText } = render(<App />);

        expect(getByText("Registration page")).toBeDefined();
    });
    test("displays all form inputs", () => {
        const { getByText } = render(<App />);

        expect(getByText("Name")).toBeDefined();

        expect(getByText("Email ID:")).toBeDefined();

        expect(getByText("Mobile No:")).toBeDefined();

        expect(getByText("Password")).toBeDefined();

    });
  
    test("displays an error when no value is input", () => {
        const { getByText } = render(<App />);
        let username, mobileno, emailid, password;
        if (username === null) {
            expect(getByText("username").toThrowError("*Please enter your username."))
        }
        if (mobileno === null) {
            expect(getByText("mobileno").toThrowError("*Please enter your mobile no."))
        }
        if (emailid === null) {
            expect(getByText("emailid").toThrowError("*Please enter your email-ID."))
        }
        if (password === null) {
            expect(getByText("password").toThrowError("*Please enter your password."))
        }
    });
    test("displays error if the input doe not match requirements", () => {
        const { getByTestId } = render(<App />);

        const nameTextFieldNode = getByTestId("name-input");
        const emailTextFieldNode = getByTestId("email-input");
        const mobileTextFieldNode = getByTestId("mobile-input");
        const passwordTextFieldNode = getByTestId("pass-input");
        const submitButtonNode = getByTestId("submit-button");

        expect(getByTestId("name-input").textContent).toMatch(/^[a-zA-Z ]*$/);
        fireEvent.change(nameTextFieldNode, { target: { value: "" } });

       
        fireEvent.change(mobileTextFieldNode, { target: { value: "" } });
        fireEvent.change(emailTextFieldNode, { target: { value: "" } });
        fireEvent.change(passwordTextFieldNode, { target: { value: "" } });
        fireEvent.click(submitButtonNode);
        
        
    })
});
