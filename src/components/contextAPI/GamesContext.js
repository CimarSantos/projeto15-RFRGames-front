import { createContext, useEffect, useState } from "react";
import { getGames } from "../../services/rfrgames";

export const GamesContext = createContext();

export default function GamesProvider({ children }) {
    const [games, setGames] = useState(undefined);

    useEffect(() => {
        getGames()
            .then((res) => {
                setGames(res.data);
            })
            .catch((error) => {
                console.log(error.response);
            });
    }, []);

    return (
        <GamesContext.Provider value={{ games, setGames }}>
            {children}
        </GamesContext.Provider>
    );
}