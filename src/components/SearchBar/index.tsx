import { Component } from 'react';
import './style.scss';

type TSearchBarProps = {
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default class SearchBar extends Component<TSearchBarProps> {
    constructor(props: TSearchBarProps) {
        super(props);
    }

    render() {
        const searchValue = localStorage.getItem('value') ?? '';

        return (
            <div className="search-bar-wrapper">
                <div className="logo-wrapper">
                    <img className="logo" src="src/assets/icons/LOTR-icon.svg" alt="App Logo" />
                </div>
                <form className="search-bar" onSubmit={this.props.handleSubmit}>
                    <label htmlFor="search" className="sr-only">
                        Search Input
                    </label>
                    <input
                        id="search"
                        defaultValue={searchValue}
                        type="text"
                        placeholder="Find your favorite character..."
                        className="search-input"
                        onChange={this.props.handleChange}
                    />
                    <button className="search-btn">Search</button>
                </form>
            </div>
        );
    }
}
