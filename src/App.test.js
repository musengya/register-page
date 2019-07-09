import React from "react";
import { render, cleanup } from "@testing-library/react";
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
            expect(getByText("username").toThrow("*Please enter your username."))
        }
        if (mobileno === null) {
            expect(getByText("mobileno").toThrow("*Please enter your mobile no."))
        }
        if (emailid === null) {
            expect(getByText("emailid").toThrow("*Please enter your email-ID."))
        }
        if (password === null) {
            expect(getByText("password").toThrow("*Please enter your password."))
        }
    });
    test("ensures the input meets the requirements", () => {
        const { getByTestId } = render(<App />);
        let username;
        let expected = [
            expect.stringMatching(/^[a-zA-Z ]*$/)
        ]
        if (username!==expected){
            expect(getByTestId("user")).toThrow("*Please enter alphabet characters only.")
            
        }
      
    })
})