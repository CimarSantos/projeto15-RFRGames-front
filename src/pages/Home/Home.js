import { useState } from "react";
import Game from "../../components/Game/Game";
import Header from "../../components/Header /Header";
import { StyledGames, StyledHomeContainer, StyledProducts } from "./style";

export default function Home() {
    const [selected, setSelected] = useState([]);
    console.log(selected);

    const games = [{
        name: "Street Fighter V 1",
        description: "Experimente os intensos combates um contra um de Street Fighter® V! Escolha entre 16 personagens icônicos e lute contra amigos, online ou offline, com uma robusta variedade de opções de partidas.",
        value: 16.72,
        image: "https://cdn.akamai.steamstatic.com/steam/apps/310950/header.jpg?t=1671156599",
        backImage: "https://s2.glbimg.com/0jTgVwaX3DvUqJQdhizzZ6eQtpU=/0x0:640x315/984x0/smart/filters:strip_icc()/s.glbimg.com/es/ge/f/original/2018/01/17/263404_1a.jpg",
        type: "Luta",
        category: ""
    }, {
        name: "Street Fighter V 2",
        description: "Experimente os intensos combates um contra um de Street Fighter® V! Escolha entre 16 personagens icônicos e lute contra amigos, online ou offline, com uma robusta variedade de opções de partidas.",
        value: 16.72,
        image: "https://cdn.akamai.steamstatic.com/steam/apps/310950/header.jpg?t=1671156599",
        backImage: "https://s2.glbimg.com/0jTgVwaX3DvUqJQdhizzZ6eQtpU=/0x0:640x315/984x0/smart/filters:strip_icc()/s.glbimg.com/es/ge/f/original/2018/01/17/263404_1a.jpg",
        type: "Luta",
        category: ""
    }, {
        name: "Street Fighter V 3",
        description: "Experimente os intensos combates um contra um de Street Fighter® V! Escolha entre 16 personagens icônicos e lute contra amigos, online ou offline, com uma robusta variedade de opções de partidas.",
        value: 16.72,
        image: "https://cdn.akamai.steamstatic.com/steam/apps/310950/header.jpg?t=1671156599",
        backImage: "https://s2.glbimg.com/0jTgVwaX3DvUqJQdhizzZ6eQtpU=/0x0:640x315/984x0/smart/filters:strip_icc()/s.glbimg.com/es/ge/f/original/2018/01/17/263404_1a.jpg",
        type: "Luta",
        category: ""
    }, {
        name: "Street Fighter V 4",
        description: "Experimente os intensos combates um contra um de Street Fighter® V! Escolha entre 16 personagens icônicos e lute contra amigos, online ou offline, com uma robusta variedade de opções de partidas.",
        value: 16.72,
        image: "https://cdn.akamai.steamstatic.com/steam/apps/310950/header.jpg?t=1671156599",
        backImage: "https://s2.glbimg.com/0jTgVwaX3DvUqJQdhizzZ6eQtpU=/0x0:640x315/984x0/smart/filters:strip_icc()/s.glbimg.com/es/ge/f/original/2018/01/17/263404_1a.jpg",
        type: "Luta",
        category: ""
    }, {
        name: "Street Fighter V 5",
        description: "Experimente os intensos combates um contra um de Street Fighter® V! Escolha entre 16 personagens icônicos e lute contra amigos, online ou offline, com uma robusta variedade de opções de partidas.",
        value: 16.72,
        image: "https://cdn.akamai.steamstatic.com/steam/apps/310950/header.jpg?t=1671156599",
        backImage: "https://s2.glbimg.com/0jTgVwaX3DvUqJQdhizzZ6eQtpU=/0x0:640x315/984x0/smart/filters:strip_icc()/s.glbimg.com/es/ge/f/original/2018/01/17/263404_1a.jpg",
        type: "Luta",
        category: ""
    },];

    function selectItem(name) {
        console.log(name);
        if (selected.includes(name)) {
            const removeSelection = selected.filter((i) => i != name);
            return setSelected(removeSelection);
        }
        setSelected([...selected, name]);
    }
    return (
        <>
            <Header />
            <StyledHomeContainer>
                <StyledProducts>
                    <h1>Mais vendidos</h1>
                    <StyledGames>
                        {games.map((g) =>
                            <Game
                                key={g.name}
                                value={g.value}
                                description={g.description}
                                image={g.image}
                                name={g.name}
                                selectItem={selectItem}
                                selected={selected}
                            />)}
                    </StyledGames>
                </StyledProducts>

                <StyledProducts>
                    <h1>Novidades</h1>
                    <StyledGames>
                        {games.map((g) =>
                            <Game
                                key={g.name}
                                value={g.value}
                                description={g.description}
                                image={g.image}
                                name={g.name}
                                selectItem={selectItem}
                                selected={selected}
                            />)}
                    </StyledGames>
                </StyledProducts>

                <StyledProducts>
                    <h1>Em breve</h1>
                    <StyledGames>
                        {games.map((g) =>
                            <Game
                                key={g.name}
                                value={g.value}
                                description={g.description}
                                image={g.image}
                                name={g.name}
                                selectItem={selectItem}
                                selected={selected}
                            />)}
                    </StyledGames>
                </StyledProducts>
            </StyledHomeContainer>
        </>
    );
}