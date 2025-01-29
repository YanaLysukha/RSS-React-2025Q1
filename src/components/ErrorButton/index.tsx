import { Component } from "react";
import "../SearchBar/style.scss";

type TErrorBtnState = {
    error: boolean;
};

export default class ErrorButton extends Component {
    state: TErrorBtnState = { error: false };

    handleClick = () => {
        this.setState({ error: true });
    };

    componentDidUpdate = () => {
        if (this.state.error) {
            throw new Error("Oops, something went wrong!");
        }
    };

    render() {
        return (
            <button className="search-btn" onClick={this.handleClick}>
                Error
            </button>
        );
    }
}
