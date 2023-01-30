import { createContext, useState } from "react";

export const GamesSelectedContext = createContext();

export default function GamesSelectedProvider({ children }) {
    const [selected, setSelected] = useState([]);

    function selectItem(objectGame) {
        if (selected.includes(objectGame)) {
            const removeSelection = selected.filter((g) => g != objectGame);
            return setSelected(removeSelection);
        }
        setSelected([...selected, objectGame]);
    }

    return (
        <GamesSelectedContext.Provider value={{ selected, selected, selectItem }}>
            {children}
        </GamesSelectedContext.Provider>
    );
}