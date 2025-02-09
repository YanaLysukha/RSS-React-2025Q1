import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Card from "./index";
import { characterMock } from "../../test/mocks/mocks";

const mockCardClick = vi.fn();

describe("Card", () => {
    it("card component should render the relevant card data", () => {
        render(
            <MemoryRouter>
                <Card character={characterMock} onCardClick={mockCardClick}></Card>
            </MemoryRouter>,
        );
        const card = screen.getByText(characterMock.name);
        expect(card).toBeInTheDocument();
    });

    it("clicking on a card should open a detailed card component", () => {
        render(
            <MemoryRouter>
                <Card character={characterMock} onCardClick={mockCardClick}></Card>
            </MemoryRouter>,
        );
        const card = screen.getByTestId("result-card");
        fireEvent.click(card);
        expect(mockCardClick).toHaveBeenCalledWith("5cd99d4bde30eff6ebccfc36");
    });
});
