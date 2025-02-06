import styles from "./style.module.scss";
import logoIcon from "../../assets/icons/LOTR-icon.svg";
import useLocalStorage from "../../hooks/useLocalStorage";

type TSearchBarProps = {
    handleSearch: (value: string) => void;
};

export default function SearchBar({ handleSearch }: TSearchBarProps) {
    const searchValue = localStorage.getItem("value") ?? "";
    const [savedValue, setSavedValue] = useLocalStorage("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const trimmedValue = savedValue.trim();
        setSavedValue(trimmedValue);
        handleSearch(trimmedValue);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSavedValue(e.target.value);
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
