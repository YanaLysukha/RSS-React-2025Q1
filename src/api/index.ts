import { ICharacterResponse } from "./types";
import { baseURL } from "./types";

export const getCharacters = async ({
    page,
    searchValue,
}: {
    page: number;
    searchValue?: string;
}): Promise<ICharacterResponse> => {
    try {
        const queryParams = new URLSearchParams({ limit: "20" });

        if (page) queryParams.append("page", page.toString());
        if (searchValue) queryParams.append("name", `/${searchValue}/i`);

        const response = await fetch(`${baseURL}?${queryParams.toString()}`, {
            headers: {
                Authorization: "Bearer Ic5iqi0En-5oQyBlk-oH",
            },
        });

        return await response.json();
    } catch (error) {
        console.error(error);
        return {
            docs: [],
            total: 0,
            limit: 0,
            offset: 0,
            page: 0,
            pages: 0,
        };
    }
};
