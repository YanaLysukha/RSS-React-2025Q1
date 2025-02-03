import { useCallback, useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar";
import ListView from "../../components/ListView";
import { getCharacters, searchCharacters } from "../../api";
import { ICharacter } from "../../api/types";
import Loader from "../../components/Loader";

export default function MainPage() {
    const [characters, setCharacters] = useState<ICharacter[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleCharacters = useCallback(async (value?: string) => {
        setIsLoading(false);
        const trimmedValue = value?.trim();
        const characters = trimmedValue
            ? await searchCharacters(trimmedValue)
            : await getCharacters();
        setCharacters(characters);
        setIsLoading(true);
    }, []);

    useEffect(() => {
        const value = localStorage.getItem("value");
        handleCharacters(value || "");
    }, [handleCharacters]);

    return (
        <>
            <SearchBar handleSearch={handleCharacters} />
            {isLoading ? <ListView characters={characters}></ListView> : <Loader />}
        </>
    );
}
