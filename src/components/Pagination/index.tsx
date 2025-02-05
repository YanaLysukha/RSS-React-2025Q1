import styles from "./style.module.scss";

const TOTAL_PAGES = 10;

export default function Pagination() {
    const pages = Array.from({ length: TOTAL_PAGES }, (_, i) => i + 1);

    return (
        <div className={styles.wrapper}>
            <button className={styles.btn}>{"<"}</button>
            {pages.map((page) => (
                <button className={styles.btn} key={page}>
                    {page}
                </button>
            ))}
            <button className={styles.btn}>{">"}</button>
        </div>
    );
}
