import { Component } from 'react';
import './style.scss';

export default class SearchBar extends Component {
    render() {
        return (
            <div className="search-bar-wrapper">
                <div className="logo-wrapper">
                    <img className="logo" src="src/assets/icons/LOTR-icon.svg" alt="App Logo" />
                </div>
                <form className="search-bar">
                    <label htmlFor="search" className="sr-only">
                        Search Input
                    </label>
                    <input
                        id="search"
                        type="text"
                        placeholder="Find your favorite character..."
                        className="search-input"
                    />
                    <button className="search-btn">Search</button>
                </form>
            </div>
        );
    }
}
