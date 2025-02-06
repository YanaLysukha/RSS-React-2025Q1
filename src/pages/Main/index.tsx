import { useCallback, useEffect, useMemo, useState } from "react";
import SearchBar from "../../components/SearchBar";
import ListView from "../../components/ListView";
import { getCharacters, searchCharacters } from "../../api";
import { ICharacter, ICharacterResponse } from "../../api/types";
import Loader from "../../components/Loader";
import Pagination from "../../components/Pagination";
import { useSearchParams } from "react-router-dom";

export default function MainPage() {
    const [characters, setCharacters] = useState<ICharacter[]>([]);
    const [totalPages, setTotalPages] = useState<number>(1);
    const [isLoading, setIsLoading] = useState(false);

    const [searchParams, setSearchParams] = useSearchParams();
    const getPageValue = useCallback(() => Number(searchParams.get("page") || 1), [searchParams]);
    const currentPage = useMemo(() => getPageValue(), [getPageValue]);

    const handleCharacters = useCallback(
        async (value?: string) => {
            setIsLoading(false);
            const trimmedValue = value?.trim();
            const data: ICharacterResponse = trimmedValue
                ? await searchCharacters(trimmedValue)
                : await getCharacters(currentPage);
            setCharacters(data.docs);
            setTotalPages(data.pages);
            setIsLoading(true);
        },
        [currentPage],
    );

    const onPageChange = (newPage: number) => {
        setSearchParams({ ...searchParams, page: newPage.toString() });
    };

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
                    <Pagination
                        totalPages={totalPages}
                        currentPage={currentPage}
                        handlePageChange={onPageChange}
                    ></Pagination>
                </>
            ) : (
                <Loader />
            )}
        </>
    );
}
