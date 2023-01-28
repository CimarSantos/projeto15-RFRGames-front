import axios from "axios";
import { useEffect, useState } from "react";
import Game from "../../components/Game/Game";
import Header from "../../components/Header /Header";
import { StyledGames, StyledHomeContainer, StyledProducts } from "./style";

export default function Home() {
    const [selected, setSelected] = useState([]);
    const [games, setGames] = useState(undefined);

    const maisVendidos = games?.filter((g) => g.category === "M");
    const novidades = games?.filter((g) => g.category === "N");
    const emBreve = games?.filter((g) => g.category === "E");

    function selectItem(objectGame) {
        if (selected.includes(objectGame)) {
            const removeSelection = selected.filter((g) => g != objectGame);
            return setSelected(removeSelection);
        }
        setSelected([...selected, objectGame]);
    }

    useEffect(() => {
        axios.get("http://localhost:5000/games")
            .then((res) => {
                setGames(res.data);
            })
            .catch((error) => {
                console.log(error.response);
            });
    }, []);
    return (
        <>
            <Header />
            <StyledHomeContainer>
                <StyledProducts>
                    <h1>Mais vendidos</h1>
                    <StyledGames>
                        {maisVendidos?.map((g) =>
                            <Game
                                key={g._id}
                                objectGame={g}
                                selectItem={selectItem}
                                selected={selected}
                            />)}
                    </StyledGames>
                </StyledProducts>

                <StyledProducts>
                    <h1>Novidades</h1>
                    <StyledGames>
                        {novidades?.map((g) =>
                            <Game
                                key={g._id}
                                objectGame={g}
                                selectItem={selectItem}
                                selected={selected}
                            />)}
                    </StyledGames>
                </StyledProducts>

                <StyledProducts>
                    <h1>Em breve</h1>
                    <StyledGames>
                        {emBreve?.map((g) =>
                            <Game
                                key={g._id}
                                objectGame={g}
                                selectItem={selectItem}
                                selected={selected}
                            />)}
                    </StyledGames>
                </StyledProducts>
            </StyledHomeContainer>
        </>
    );
}