import { ICharacter } from "../../api/types";
import ListItem from "../ListItem";
import styles from "./style.module.scss";

type TListViewProps = {
    characters: ICharacter[];
    onCardClick: (id: string) => void;
};

export default function ListView({ characters, onCardClick }: TListViewProps) {
    if (!characters.length) {
        return (
            <div className={styles.listViewMessage}>
                Our story has hit a small snag, and the characters you seek are momentarily out of
                reach...
            </div>
        );
    }
    return (
        <div className={styles.listViewWrapper}>
            {characters.map((character: ICharacter) => (
                <ListItem
                    character={character}
                    key={character._id}
                    onCardClick={onCardClick}
                ></ListItem>
            ))}
        </div>
    );
}
