import { vi, describe, it, expect } from "vitest";
import * as api from "../../api";
import { render, screen, waitFor } from "@testing-library/react";
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
            <MemoryRouter initialEntries={["/item/5cd99d4bde30eff6ebccfc36"]}>
                <Details />
            </MemoryRouter>,
        );

        expect(screen.getByTestId("loader")).toBeInTheDocument();
        await waitFor(() => expect(getCharacterByIdSpy).toHaveBeenCalledWith(characterMock._id));
    });
});
