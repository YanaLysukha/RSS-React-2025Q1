import { ICharacter } from './types';
import { baseURL } from './types';

export const getCharacters = async (): Promise<ICharacter[]> => {
    try {
        const response = await fetch(`${baseURL}?limit=100&page=1`, {
            headers: {
                Authorization: 'Bearer Ic5iqi0En-5oQyBlk-oH',
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
                Authorization: 'Bearer Ic5iqi0En-5oQyBlk-oH',
            },
        });
        return (await response.json()).docs;
    } catch (error) {
        console.error(error);
        return [];
    }
};
