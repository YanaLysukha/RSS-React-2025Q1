import styles from "./style.module.scss";
import logoIcon from "../../assets/icons/LOTR-icon.svg";

type TSearchBarProps = {
    handleSearch: (value: string) => void;
};

export default function SearchBar({ handleSearch }: TSearchBarProps) {
    const searchValue = localStorage.getItem("value") ?? "";

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const value = localStorage.getItem("value") ?? "";
        handleSearch(value);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        localStorage.setItem("value", e.target.value);
    };

    return (
        <div className={styles.searchBarWrapper}>
            <div className={styles.logoWrapper}>
                <img className={styles.logo} src={logoIcon} alt="App Logo" />
            </div>
            <form className={styles.searchBar} onSubmit={handleSubmit}>
                <label htmlFor="search" className={styles.srOnly}>
                    Search Input
                </label>
                <input
                    id="search"
                    defaultValue={searchValue}
                    type="text"
                    placeholder="Find your favorite character..."
                    className={styles.searchInput}
                    onChange={handleChange}
                />
                <button className={styles.searchBtn}>Search</button>
            </form>
        </div>
    );
}
