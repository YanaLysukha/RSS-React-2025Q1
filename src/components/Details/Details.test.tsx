import { vi, describe, it, expect } from "vitest";
import * as api from "../../api";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Details from "./index";
import { characterMock } from "../../test/mocks/mocks";

const getCharacterByIdSpy = vi.spyOn(api, "getCharactersById");

vi.mock("react-router-dom", async () => {
    const actual = await vi.importActual("react-router-dom");
    return {
        ...actual,
        useParams: () => ({ itemId: "5cd99d4bde30eff6ebccfc36" }),
    };
});

describe("Details", () => {
    it("should display loading indicator while fetching data", async () => {
        render(
            <MemoryRouter initialEntries={[`/item/${characterMock._id}`]}>
                <Details />
            </MemoryRouter>,
        );

        expect(screen.getByTestId("loader")).toBeInTheDocument();
        await waitFor(() => expect(getCharacterByIdSpy).toHaveBeenCalledWith(characterMock._id));
    });

    it("detailed card component should correctly display the detailed card data", async () => {
        render(
            <MemoryRouter initialEntries={[`/item/${characterMock._id}`]}>
                <Details />
            </MemoryRouter>,
        );

        await waitFor(() => expect(getCharacterByIdSpy).toHaveBeenCalledWith(characterMock._id));
        await waitFor(() => {
            expect(screen.getByText(characterMock.name)).toBeInTheDocument();
            expect(screen.getByText(characterMock.race)).toBeInTheDocument();
            expect(screen.getByText(characterMock.gender)).toBeInTheDocument();
        });
    });

    it("clicking the close button hides the component", async () => {
        render(
            <MemoryRouter initialEntries={[`/item/${characterMock._id}`]}>
                <Details />
            </MemoryRouter>,
        );

        await waitFor(() => expect(getCharacterByIdSpy).toHaveBeenCalledWith(characterMock._id));
        const closeButton = await screen.findByRole("button", { name: /Close/i });
        expect(closeButton).toBeInTheDocument();
        fireEvent.click(closeButton);
        expect(screen.queryByRole("button", { name: /close details/i })).not.toBeInTheDocument();
    });
});
