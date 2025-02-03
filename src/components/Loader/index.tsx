import styles from "./style.module.scss";
import loaderImg from "../../assets/icons/ring-inscription.png";

export default function Loader() {
    return <img className={styles.loader} src={loaderImg} alt="loader icon"></img>;
}
