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
                <p className={styles.highlighted}>
                    Race: <span>{character.race}</span>
                </p>
                <p className={styles.highlighted}>
                    Gender: <span>{character.gender}</span>
                </p>
                <p className={styles.highlighted}>
                    Spouse: <span>{character.spouse}</span>
                </p>
            </div>
        );
    }
}
