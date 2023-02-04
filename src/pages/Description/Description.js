import { useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { GamesContext } from "../../components/contextAPI/GamesContext";
import { GamesSelectedContext } from "../../components/contextAPI/GamesSelectedContext";
import { postCart } from "../../services/rfrgames";
import { StyledBackGround, StyledBodyDescription, StyledButtonsBuyCar, StyledDescription, StyledGoBackHome } from "./syle";

export default function Description() {
    const { selected, selectItem } = useContext(GamesSelectedContext);
    const { games } = useContext(GamesContext);
    const navigate = useNavigate();

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

    function selectedByDescription() {
        if (selected.includes(currentGame[0])) {
            navigate("/home");
        }
        else {
            selectItem(currentGame[0]);
            navigate("/home");
        }
    }

    function buy() {
        postCart(currentGame[0])
            .then((res) => {
                console.log(res.data);
                navigate("/checkout");
            })
            .catch((err) => {
                alert("Não foi possível redirecionar à compra");
                console.log(err.response.data);
            });
    }

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
                    <button onClick={buy} >
                        <p>Comprar por</p>
                        <span>{`R$${value}`}</span>
                    </button>
                    <button onClick={() => selectedByDescription()}>
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
