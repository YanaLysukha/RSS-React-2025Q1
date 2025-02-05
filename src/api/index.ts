import { ICharacter } from "./types";
import { baseURL } from "./types";

export const getCharacters = async (page: number): Promise<ICharacter[]> => {
    try {
        const response = await fetch(`${baseURL}?limit=100&page=${page}`, {
            headers: {
                Authorization: "Bearer Ic5iqi0En-5oQyBlk-oH",
            },
        });
        return (await response.json()).docs;
    } catch (error) {
        console.error(error);
        return [];
    }
};

export const searchCharacters = async (searchValue: string): Promise<ICharacter[]> => {
    try {
        const response = await fetch(`${baseURL}?name=/${searchValue}/i`, {
            headers: {
                Authorization: "Bearer Ic5iqi0En-5oQyBlk-oH",
            },
        });
        return (await response.json()).docs;
    } catch (error) {
        console.error(error);
        return [];
    }
};
