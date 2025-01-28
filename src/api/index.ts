import { ICharacter } from './types';
import { baseURL } from './types';

export const getCharacters = async (): Promise<ICharacter[]> => {
    try {
        const firstPageURL = `${baseURL}?limit=100&page=1`;
        const response = await fetch(firstPageURL, {
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
