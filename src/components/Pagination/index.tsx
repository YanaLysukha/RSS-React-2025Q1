import styles from "./style.module.scss";
// import { useLocation, useNavigate } from "react-router-dom";
// import useNavigateMethods from "../../hooks/useNavigateMethods";
// import { useMemo } from "react";

// const TOTAL_PAGES = 10;

type TPaginationProps = {
    totalPages: number;
    currentPage: number;
    handlePageChange: (page: number) => void;
};

export default function Pagination({
    totalPages,
    currentPage,
    handlePageChange,
}: TPaginationProps) {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
    // const navigate = useNavigate();
    // const { pathname } = useLocation();
    // const { getPageValue } = useNavigateMethods();
    // const currentPage = useMemo(() => getPageValue(), [getPageValue]);

    // const handlePageChange = (page: number) => {
    //     navigate(`${pathname}?page=${page}`);
    // };

    return (
        <div className={styles.wrapper}>
            <button
                className={styles.btn}
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                {"<"}
            </button>
            <div>
                page {currentPage} of {totalPages}
            </div>
            <button
                className={styles.btn}
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === pages.length}
            >
                {">"}
            </button>
        </div>
    );
}
