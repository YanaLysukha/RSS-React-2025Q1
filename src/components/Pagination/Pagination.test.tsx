import { describe, expect, it, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";
import Pagination from "./index";
import { fireEvent, render, screen } from "@testing-library/react";

const handlePageChangeMock = vi.fn();

describe("Pagination", () => {
    it("should render correctly with given props", () => {
        render(
            <MemoryRouter>
                <Pagination
                    totalPages={5}
                    currentPage={3}
                    handlePageChange={handlePageChangeMock}
                />
            </MemoryRouter>,
        );

        expect(screen.getByText("page")).toBeInTheDocument();
        expect(screen.getByText("3")).toBeInTheDocument();
        expect(screen.getByText("of")).toBeInTheDocument();
        expect(screen.getByText("5")).toBeInTheDocument();
    });

    it("should navigate to the correct page on button click", () => {
        render(
            <MemoryRouter>
                <Pagination
                    totalPages={5}
                    currentPage={3}
                    handlePageChange={handlePageChangeMock}
                />
            </MemoryRouter>,
        );

        const prevBtn = screen.getByText("<");
        fireEvent.click(prevBtn);

        expect(handlePageChangeMock).toHaveBeenCalledWith(2);
    });
});
