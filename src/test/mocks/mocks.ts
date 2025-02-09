import { ICharacter, ICharacterResponse } from "../../api/types";

export const characterMock: ICharacter = {
    _id: "5cd99d4bde30eff6ebccfc36",
    name: "Barahir (Steward)",
    wikiUrl: "http://lotr.wikia.com//wiki/Barahir_(Steward)",
    race: "Human",
    birth: "TA 2290",
    gender: "Male",
    death: "TA 2412",
    hair: null,
    height: null,
    realm: "Gondor",
    spouse: "Unnamed wife",
};

export const characterDataMock: ICharacterResponse = {
    docs: [
        {
            _id: "5cd99d4bde30eff6ebccfc37",
            name: "Bifur",
            wikiUrl: "http://lotr.wikia.com//wiki/Bifur",
            race: "Dwarf",
            birth: "TA 2814",
            gender: "Male",
            death: "UnknownFourth Age",
            hair: "Black/ Grey (film)",
            height: "4'5\" (film)",
            realm: null,
            spouse: null,
        },
        {
            _id: "5cd99d4bde30eff6ebccfc38",
            name: "Bilbo Baggins",
            wikiUrl: "http://lotr.wikia.com//wiki/Bilbo_Baggins",
            race: "Hobbit",
            birth: "22 September ,TA 2890",
            gender: "Male",
            death: "Unknown (Last sighting 29 SeptemberTA 3021,) (,SR 1421,)",
            hair: "Brown, later white",
            height: "1.25m (4'1\")",
            realm: null,
            spouse: null,
        },
    ],
    total: 2,
    limit: 20,
    page: 1,
    pages: 1,
};
