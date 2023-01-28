import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { StyledBackGround, StyledBodyDescription, StyledButtonsBuyCar, StyledDescription, StyledGoBackHome } from "./syle";

export default function Description() {
    const [games, setGames] = useState();
    const params = useParams();
    let name, image, backImage, description, value;

    const currentGame = games?.filter((g) => g._id === params.id);


    if (currentGame) {
        name = currentGame[0].name;
        image = currentGame[0].image;
        backImage = currentGame[0].backImage;
        description = currentGame[0].description;
        value = currentGame[0].value.toLocaleString("pt-br", { minimumFractionDigits: 2 });
    }

    useEffect(() => {
        axios.get("http://localhost:5000/games")
            .then((res) =>
                setGames(res.data
                ))
            .catch((error) => alert(error.response.data));
    }, []);

    return (
        <>
            <StyledBackGround backImage={backImage} />
            <StyledDescription>
                <h1>{name}</h1>
                <StyledBodyDescription>
                    <p>{description}</p>
                    <div>
                        <img src={image} />
                    </div>
                </StyledBodyDescription>

                <StyledButtonsBuyCar>
                    <button>
                        <p>Comprar por</p>
                        <span>{`R$${value}`}</span>
                    </button>
                    <button>
                        <ion-icon name="cart-outline"></ion-icon>
                        <p>Adicionar ao carrinho</p>
                    </button>
                </StyledButtonsBuyCar>

                <Link to="/home">
                    <StyledGoBackHome>Voltar para Home</StyledGoBackHome>
                </Link>


            </StyledDescription>
        </>
    );
}
