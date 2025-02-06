import styles from "./style.module.scss";
import { useCallback, useEffect, useState } from "react";
import { ICharacter } from "../../api/types";
import Loader from "../Loader";
import { useParams, useSearchParams } from "react-router-dom";
import { getCharactersById } from "../../api";

export default function Details() {
    const [characterData, setCharacterData] = useState<ICharacter | null>(null);
    const [isLoading] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();

    const { itemId } = useParams<{ itemId: string }>();

    const handleClose = () => {
        searchParams.delete("itemId");
        setSearchParams(searchParams);
    };

    const handleCharacter = useCallback(async (id: string) => {
        const data = await getCharactersById(id);
        setCharacterData(data);
    }, []);

    useEffect(() => {
        console.log(itemId);
        if (itemId) handleCharacter(itemId);
    }, [handleCharacter, itemId]);

    return (
        <div className={styles.detailsWrapper} data-testid="details-component">
            {isLoading ? (
                <Loader data-testid="detailed-loader"></Loader>
            ) : (
                <div className={styles.container}>
                    <button data-testid="close-btn" className={styles.button} onClick={handleClose}>
                        Close
                    </button>
                    <div className={styles.wrapper}>
                        <h2 className={styles.title}>{characterData?.name}</h2>
                        <p>
                            <span className={styles.highlighted}>Race:</span> {characterData?.race}
                        </p>
                        <p>
                            <span className={styles.highlighted}>Gender:</span>{" "}
                            {characterData?.gender}
                        </p>
                        <p>
                            <span className={styles.highlighted}>Spouse:</span>{" "}
                            {characterData?.spouse}
                        </p>
                        <p>
                            <span className={styles.highlighted}>Birth:</span>{" "}
                            {characterData?.birth}
                        </p>
                        <p>
                            <span className={styles.highlighted}>Death:</span>{" "}
                            {characterData?.death}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}
