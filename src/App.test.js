import React from "react";
import { render, cleanup } from "@testing-library/react";
import App from "./App";

afterEach(cleanup);

describe("App", () => {
    test("displays correct title", () => {
        const { getByText } = render(<App />);

        expect(getByText("Register Page")).toBeDefined();
    });
})