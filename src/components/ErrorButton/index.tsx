import { Component } from "react";
import styles from "../SearchBar/style.module.scss";

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
            <button className={styles.searchBtn} onClick={this.handleClick}>
                Error
            </button>
        );
    }
}
