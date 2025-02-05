import { useCallback, useEffect, useMemo, useState } from "react";
import SearchBar from "../../components/SearchBar";
import ListView from "../../components/ListView";
import { getCharacters, searchCharacters } from "../../api";
import { ICharacter } from "../../api/types";
import Loader from "../../components/Loader";
import Pagination from "../../components/Pagination";
import useNavigateMethods from "../../hooks/useNavigateMethods";

export default function MainPage() {
    const [characters, setCharacters] = useState<ICharacter[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const { getPageValue } = useNavigateMethods();
    const currentPage = useMemo(() => getPageValue(), [getPageValue]);

    const handleCharacters = useCallback(
        async (value?: string) => {
            setIsLoading(false);
            const trimmedValue = value?.trim();
            const characters = trimmedValue
                ? await searchCharacters(trimmedValue)
                : await getCharacters(currentPage);
            setCharacters(characters);
            setIsLoading(true);
        },
        [currentPage],
    );

    useEffect(() => {
        const value = localStorage.getItem("value");
        handleCharacters(value || "");
    }, [handleCharacters]);

    return (
        <>
            <SearchBar handleSearch={handleCharacters} />
            {isLoading ? (
                <>
                    <ListView characters={characters}></ListView>
                    <Pagination></Pagination>
                </>
            ) : (
                <Loader />
            )}
        </>
    );
}
