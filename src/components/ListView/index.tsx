import { ICharacter } from "../../api/types";
import ListItem from "../ListItem";
import styles from "./style.module.scss";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useRef } from "react";

type TListViewProps = {
    characters: ICharacter[];
    onCardClick: (id: string) => void;
};

export default function ListView({ characters, onCardClick }: TListViewProps) {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const listRef = useRef(null);

    const handleListClick = (e: React.MouseEvent): void => {
        if (e.target === listRef.current) {
            navigate(`/?${searchParams}`);
        }
    };

    if (!characters.length) {
        return (
            <div className={styles.listViewMessage}>
                Our story has hit a small snag, and the characters you seek are momentarily out of
                reach...
            </div>
        );
    }
    return (
        <div className={styles.listViewWrapper} ref={listRef} onClick={handleListClick}>
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
