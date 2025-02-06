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
            <div className={styles.pages}>
                <span className={styles.common}>page</span>{" "}
                <span className={styles.highlighted}>{currentPage}</span>{" "}
                <span className={styles.common}>of</span>{" "}
                <span className={styles.highlighted}>{totalPages}</span>
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
