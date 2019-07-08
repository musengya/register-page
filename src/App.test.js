import React from "react";
import { render, cleanup } from "@testing-library/react";
import App from "./App";

afterEach(cleanup);

describe("App", () => {
    test("displays correct title", () => {
        const { getByText } = render(<App />);

        expect(getByText("Registration Page")).toBeDefined();
    });
    test("displays all form inputs", () => {
        const { getByText } = render(<App />);
        
        expect(getByText("Name")).toBeDefined();

        expect(getByText("Email ID:")).toBeDefined();
        
        expect(getByText("Mobile No:")).toBeDefined();
        
        expect(getByText("Password")).toBeDefined();
        
    })
})