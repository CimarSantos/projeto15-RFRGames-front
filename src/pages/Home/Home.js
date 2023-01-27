import Game from "../../components/Game/Game";
import Header from "../../components/Header /Header";
import { StyledGames, StyledHomeContainer, StyledProducts } from "./style";

export default function Home() {

    const games = [{
        name: "Street Fighter V",
        description: "Experimente os intensos combates um contra um de Street Fighter® V! Escolha entre 16 personagens icônicos e lute contra amigos, online ou offline, com uma robusta variedade de opções de partidas.",
        value: 16.72,
        image: "https://cdn.akamai.steamstatic.com/steam/apps/310950/header.jpg?t=1671156599",
        type: "Luta",
        category: ""
    }, {
        name: "Street Fighter V",
        description: "Experimente os intensos combates um contra um de Street Fighter® V! Escolha entre 16 personagens icônicos e lute contra amigos, online ou offline, com uma robusta variedade de opções de partidas.",
        value: 16.72,
        image: "https://cdn.akamai.steamstatic.com/steam/apps/310950/header.jpg?t=1671156599",
        type: "Luta",
        category: ""
    }, {
        name: "Street Fighter V",
        description: "Experimente os intensos combates um contra um de Street Fighter® V! Escolha entre 16 personagens icônicos e lute contra amigos, online ou offline, com uma robusta variedade de opções de partidas.",
        value: 16.72,
        image: "https://cdn.akamai.steamstatic.com/steam/apps/310950/header.jpg?t=1671156599",
        type: "Luta",
        category: ""
    }, {
        name: "Street Fighter V",
        description: "Experimente os intensos combates um contra um de Street Fighter® V! Escolha entre 16 personagens icônicos e lute contra amigos, online ou offline, com uma robusta variedade de opções de partidas.",
        value: 16.72,
        image: "https://cdn.akamai.steamstatic.com/steam/apps/310950/header.jpg?t=1671156599",
        type: "Luta",
        category: ""
    }, {
        name: "Street Fighter V",
        description: "Experimente os intensos combates um contra um de Street Fighter® V! Escolha entre 16 personagens icônicos e lute contra amigos, online ou offline, com uma robusta variedade de opções de partidas.",
        value: 16.72,
        image: "https://cdn.akamai.steamstatic.com/steam/apps/310950/header.jpg?t=1671156599",
        type: "Luta",
        category: ""
    }, {
        name: "Street Fighter V",
        description: "Experimente os intensos combates um contra um de Street Fighter® V! Escolha entre 16 personagens icônicos e lute contra amigos, online ou offline, com uma robusta variedade de opções de partidas.",
        value: 16.72,
        image: "https://cdn.akamai.steamstatic.com/steam/apps/310950/header.jpg?t=1671156599",
        type: "Luta",
        category: ""
    }, {
        name: "Street Fighter V",
        description: "Experimente os intensos combates um contra um de Street Fighter® V! Escolha entre 16 personagens icônicos e lute contra amigos, online ou offline, com uma robusta variedade de opções de partidas.",
        value: 16.72,
        image: "https://cdn.akamai.steamstatic.com/steam/apps/310950/header.jpg?t=1671156599",
        type: "Luta",
        category: ""
    }, {
        name: "Street Fighter V",
        description: "Experimente os intensos combates um contra um de Street Fighter® V! Escolha entre 16 personagens icônicos e lute contra amigos, online ou offline, com uma robusta variedade de opções de partidas.",
        value: 16.72,
        image: "https://cdn.akamai.steamstatic.com/steam/apps/310950/header.jpg?t=1671156599",
        type: "Luta",
        category: ""
    }, {
        name: "Street Fighter V",
        description: "Experimente os intensos combates um contra um de Street Fighter® V! Escolha entre 16 personagens icônicos e lute contra amigos, online ou offline, com uma robusta variedade de opções de partidas.",
        value: 16.72,
        image: "https://cdn.akamai.steamstatic.com/steam/apps/310950/header.jpg?t=1671156599",
        type: "Luta",
        category: ""
    }, {
        name: "Street Fighter V",
        description: "Experimente os intensos combates um contra um de Street Fighter® V! Escolha entre 16 personagens icônicos e lute contra amigos, online ou offline, com uma robusta variedade de opções de partidas.",
        value: 16.72,
        image: "https://cdn.akamai.steamstatic.com/steam/apps/310950/header.jpg?t=1671156599",
        type: "Luta",
        category: ""
    }, {
        name: "Street Fighter V",
        description: "Experimente os intensos combates um contra um de Street Fighter® V! Escolha entre 16 personagens icônicos e lute contra amigos, online ou offline, com uma robusta variedade de opções de partidas.",
        value: 16.72,
        image: "https://cdn.akamai.steamstatic.com/steam/apps/310950/header.jpg?t=1671156599",
        type: "Luta",
        category: ""
    }, {
        name: "Street Fighter V",
        description: "Experimente os intensos combates um contra um de Street Fighter® V! Escolha entre 16 personagens icônicos e lute contra amigos, online ou offline, com uma robusta variedade de opções de partidas.",
        value: 16.72,
        image: "https://cdn.akamai.steamstatic.com/steam/apps/310950/header.jpg?t=1671156599",
        type: "Luta",
        category: ""
    }, {
        name: "Street Fighter V",
        description: "Experimente os intensos combates um contra um de Street Fighter® V! Escolha entre 16 personagens icônicos e lute contra amigos, online ou offline, com uma robusta variedade de opções de partidas.",
        value: 16.72,
        image: "https://cdn.akamai.steamstatic.com/steam/apps/310950/header.jpg?t=1671156599",
        type: "Luta",
        category: ""
    }];
    return (
        <>
            <Header />
            <StyledHomeContainer>
                <StyledProducts>
                    <h1>Mais vendidos</h1>
                    <StyledGames>
                        {games.map((g) => <Game value={g.value} description={g.description} image={g.image} />)}
                    </StyledGames>
                </StyledProducts>

                <StyledProducts>
                    <h1>Novidades</h1>
                    <StyledGames>
                        {games.map((g) => <Game value={g.value} description={g.description} image={g.image} />)}
                    </StyledGames>
                </StyledProducts>

                <StyledProducts>
                    <h1>Em breve</h1>
                    <StyledGames>
                        {games.map((g) => <Game value={g.value} description={g.description} image={g.image} />)}
                    </StyledGames>
                </StyledProducts>
            </StyledHomeContainer>
        </>
    );
}