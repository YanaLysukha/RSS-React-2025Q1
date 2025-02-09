import styles from "./style.module.scss";
import { ICharacter } from "../../api/types";

type TListItemProps = {
    character: ICharacter;
    onCardClick: (id: string) => void;
};

export default function Card({ character, onCardClick }: TListItemProps) {
    return (
        <div
            className={styles.listItem}
            onClick={() => onCardClick(character._id)}
            data-testid="result-card"
        >
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
