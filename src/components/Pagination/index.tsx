import styles from "./style.module.scss";

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
