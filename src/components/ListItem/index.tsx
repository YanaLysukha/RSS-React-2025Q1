import { Component } from "react";
import styles from "./style.module.scss";
import { ICharacter } from "../../api/types";

type TListItemProps = {
    character: ICharacter;
};

export default class ListItem extends Component<TListItemProps> {
    render() {
        const { character } = this.props;

        return (
            <div className={styles.listItem}>
                <h1 className={styles.title}>{character.name}</h1>
                <p>Race: {character.race}</p>
                <p>Gender: {character.gender}</p>
                <p>Spouse: {character.spouse}</p>
            </div>
        );
    }
}
