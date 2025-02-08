import { describe, it, vi, beforeEach, expect } from "vitest";
import { useEffect, useState } from "react";
import SearchBar from "./index";
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

vi.mock("../hooks/useLocalStorage", () => {
    return {
        useLocalStorage: (initialValue: string) => {
            const [value, setValue] = useState(() => {
                return localStorage.getItem("value") || initialValue;
            });

            useEffect(() => {
                localStorage.setItem("value", value);
            }, [value]);

            return [value, setValue];
        },
    };
});

const handleSearch = vi.fn();

describe("SearchBar", () => {
    beforeEach(() => {
        localStorage.clear();
    });

    it("Verify that clicking the Search button saves the entered value to the local storage", () => {
        render(
            <MemoryRouter>
                <SearchBar handleSearch={handleSearch}></SearchBar>
            </MemoryRouter>,
        );

        const input = screen.getByPlaceholderText("Find your favorite character...");
        const btn = screen.getByText("Search");

        fireEvent.change(input, { target: { value: "Barahir" } });
        fireEvent.click(btn);

        expect(localStorage.getItem("value")).toBe("Barahir");
        expect(handleSearch).toHaveBeenCalledWith("Barahir");
    });

    it("should retrieve the value from local storage upon mounting", () => {
        localStorage.setItem("value", "Barahir");

        render(
            <MemoryRouter>
                <SearchBar handleSearch={handleSearch}></SearchBar>
            </MemoryRouter>,
        );

        const input = screen.getByPlaceholderText("Find your favorite character...");
        expect(input).toHaveValue("Barahir");
    });
});
