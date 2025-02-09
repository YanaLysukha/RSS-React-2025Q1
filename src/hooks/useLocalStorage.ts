import { SetStateAction, useEffect, useState } from "react";

export default function useLocalStorage(savedValue: string) {
    const getValue = () => {
        const storageValue = localStorage.getItem("value");
        if (storageValue) return storageValue;
        return savedValue;
    };

    const [value, setValue] = useState(getValue);

    useEffect(() => {
        localStorage.setItem("value", value);
    }, [value]);

    return [value, setValue] as unknown as [string, React.Dispatch<SetStateAction<string>>];
}
