import { Component } from "react";
import styles from "./style.module.scss";

export default class Loader extends Component {
    render() {
        return (
            <img
                className={styles.loader}
                src="src/assets/icons/ring-inscription.png"
                alt="loader icon"
            ></img>
        );
    }
}
