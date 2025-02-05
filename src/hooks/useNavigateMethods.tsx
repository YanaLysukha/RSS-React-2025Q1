import { useSearchParams } from "react-router-dom";
import { useCallback } from "react";

export default function useNavigateMethods() {
    const [searchParams] = useSearchParams();

    const getPageValue = useCallback(() => Number(searchParams.get("page") || 1), [searchParams]);

    const createSearchParams = (page: number = 1) => {
        const newSearchParams = new URLSearchParams(searchParams);
        if (page) {
            newSearchParams.set("page", page.toString());
        }
        return newSearchParams.toString();
    };

    return { getPageValue, createSearchParams };
}
