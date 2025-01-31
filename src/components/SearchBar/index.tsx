import { Component } from "react";
import styles from "./style.module.scss";
import ErrorButton from "../ErrorButton";

type TSearchBarProps = {
    handleSearch: (value: string) => void;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default class SearchBar extends Component<TSearchBarProps> {
    constructor(props: TSearchBarProps) {
        super(props);
    }

    private handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { handleSearch } = this.props;
        const value = localStorage.getItem("value") ?? "";
        handleSearch(value);
    };

    render() {
        const searchValue = localStorage.getItem("value") ?? "";

        return (
            <div className={styles.searchBarWrapper}>
                <div className={styles.logoWrapper}>
                    <img
                        className={styles.logo}
                        src="src/assets/icons/LOTR-icon.svg"
                        alt="App Logo"
                    />
                </div>
                <form className={styles.searchBar} onSubmit={this.handleSubmit}>
                    <label htmlFor="search" className={styles.srOnly}>
                        Search Input
                    </label>
                    <input
                        id="search"
                        defaultValue={searchValue}
                        type="text"
                        placeholder="Find your favorite character..."
                        className={styles.searchInput}
                        onChange={this.props.handleChange}
                    />
                    <button className={styles.searchBtn}>Search</button>
                    <ErrorButton></ErrorButton>
                </form>
            </div>
        );
    }
}
