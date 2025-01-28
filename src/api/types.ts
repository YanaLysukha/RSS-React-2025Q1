export const baseURL = 'https://the-one-api.dev/v2/character';

export interface ICharacter {
    _id: string;
    name: string;
    wikiUrl: string;
    race: string;
    birth: string | null;
    gender: string;
    death: string | null;
    hair: string | null;
    height: string | null;
    realm: string | null;
    spouse: string;
}
