import { Component } from "react";
import styles from "./style.module.scss";
import loaderImg from "../../assets/icons/ring-inscription.png";

export default class Loader extends Component {
    render() {
        return <img className={styles.loader} src={loaderImg} alt="loader icon"></img>;
    }
}
