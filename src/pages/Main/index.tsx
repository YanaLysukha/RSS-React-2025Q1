import { useCallback, useEffect, useMemo, useState } from "react";
import SearchBar from "../../components/SearchBar";
import ListView from "../../components/ListView";
import { getCharacters } from "../../api";
import { ICharacter } from "../../api/types";
import Loader from "../../components/Loader";
import Pagination from "../../components/Pagination";
import { Outlet, useNavigate, useSearchParams } from "react-router-dom";
import styles from "./style.module.scss";

export default function MainPage() {
    const [characters, setCharacters] = useState<ICharacter[]>([]);
    const [totalPages, setTotalPages] = useState<number>(1);
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    const getPageValue = useCallback(() => Number(searchParams.get("page") || 1), [searchParams]);
    const getSearchValue = useCallback(() => searchParams.get("search") || "", [searchParams]);

    const currentPage = useMemo(() => getPageValue(), [getPageValue]);
    const searchQuery = useMemo(() => getSearchValue(), [getSearchValue]);

    const fetchCharacters = useCallback(async () => {
        setIsLoading(false);
        const data = await getCharacters({ page: currentPage, searchValue: searchQuery });
        setCharacters(data.docs);
        setTotalPages(data.pages);
        setIsLoading(true);
    }, [currentPage, searchQuery]);

    const onPageChange = (newPage: number) => {
        setSearchParams((prev) => {
            const params = new URLSearchParams(prev);
            params.set("page", newPage.toString());
            return params;
        });
    };

    const handleCharacters = useCallback(
        (value?: string) => {
            const trimmedValue = value?.trim() || "";
            setSearchParams((prevParams) => {
                const params = new URLSearchParams(prevParams);
                if (trimmedValue) {
                    params.set("search", trimmedValue);
                } else {
                    params.delete("search");
                }
                params.set("page", "1");
                return params;
            });
        },
        [setSearchParams],
    );

    const handleCardOpening = (id: string) => {
        navigate(`/item/${id}?${searchParams}`);
    };

    useEffect(() => {
        fetchCharacters();
    }, [fetchCharacters]);

    return (
        <div className={styles.wrapper}>
            <div className={styles.charactersBlock}>
                <SearchBar handleSearch={handleCharacters} />
                {isLoading ? (
                    <>
                        <ListView
                            onCardClick={handleCardOpening}
                            characters={characters}
                        ></ListView>
                        <Pagination
                            totalPages={totalPages}
                            currentPage={currentPage}
                            handlePageChange={onPageChange}
                        ></Pagination>
                    </>
                ) : (
                    <Loader />
                )}
            </div>
            <Outlet></Outlet>
        </div>
    );
}
