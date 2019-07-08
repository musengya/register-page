import React from "react";
import { render, cleanup } from "@testing-library/react";
import App from "./App";

afterEach(cleanup);

describe("App", () => {
    test("displays correct title", () => {
        const { getByText } = render(<App />);

        expect(getByText("Register Page")).toBeDefined();
    });
    test("displays all form inputs", () => {
        const { getByText } = render(<App />);
        
        expect(getByText("FirstName")).toBeDefined();

        expect(getByText("LastName")).toBeDefined();
        
        expect(getByText("Email")).toBeDefined();
        
        expect(getByText("Password")).toBeDefined();
        
        expect(getByText("Repeat Password")).toBeDefined();
    })
})