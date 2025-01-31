import { Component } from "react";
import { ICharacter } from "../../api/types";
import ListItem from "../ListItem";
import styles from "./style.module.scss";

type TListViewProps = {
    characters: ICharacter[];
};

export default class ListView extends Component<TListViewProps> {
    render() {
        const { characters } = this.props;
        if (!characters.length) {
            return (
                <div className={styles.listViewMessage}>
                    Our story has hit a small snag, and the characters you seek are momentarily out
                    of reach...
                </div>
            );
        }
        return (
            <div className={styles.listViewWrapper}>
                {characters.map((character) => (
                    <ListItem character={character} key={character._id}></ListItem>
                ))}
            </div>
        );
    }
}
