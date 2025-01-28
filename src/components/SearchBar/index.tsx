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
                    <input
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
