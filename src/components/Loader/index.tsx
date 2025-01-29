import { Component } from "react";
import "./style.scss";

export default class Loader extends Component {
    render() {
        return (
            <img
                className="loader"
                src="src/assets/icons/ring-inscription.png"
                alt="loader icon"
            ></img>
        );
    }
}
