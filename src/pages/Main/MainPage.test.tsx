import { describe, it, expect } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, useLocation } from "react-router-dom";
import MainPage from "./index";

const TEST_ID = "current-page-display";

function PageSearchParamDisplay() {
    const location = useLocation();
    const pageNumber = new URLSearchParams(location.search).get("page");
    return <p data-testid={TEST_ID}>{pageNumber}</p>;
}

describe("Main Page", () => {
    it("should update URL query parameter when page changes", async () => {
        const initialPage = 2;
        render(
            <MemoryRouter initialEntries={[`/?page=${initialPage}`]}>
                <MainPage></MainPage>
                <PageSearchParamDisplay />
            </MemoryRouter>,
        );

        await waitFor(() => {
            const nextPageButton = screen.getByText(">");
            fireEvent.click(nextPageButton);
        });

        expect(screen.getByTestId(TEST_ID)).toHaveTextContent(`${initialPage + 1}`);
    });
});
