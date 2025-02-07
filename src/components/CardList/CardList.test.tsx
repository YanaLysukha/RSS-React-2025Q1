import { describe, expect, it, vi } from "vitest";
import "@testing-library/jest-dom/vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CardList from "./index";
import { characterDataMock } from "../../test/mocks/mocks";

const mockCardClick = vi.fn();

describe("CardList", () => {
    it("should render no characters when the characters array is empty", () => {
        render(
            <BrowserRouter>
                <CardList characters={[]} onCardClick={mockCardClick}></CardList>
            </BrowserRouter>,
        );

        const message = screen.getByText(/characters you seek are momentarily out of reach/i);
        expect(message).toBeInTheDocument();
    });

    it("should render characters", () => {
        render(
            <BrowserRouter>
                <CardList
                    characters={characterDataMock.docs}
                    onCardClick={mockCardClick}
                ></CardList>
            </BrowserRouter>,
        );

        const list = screen.getByRole("view");
        expect(list).toBeInTheDocument();
    });
});
