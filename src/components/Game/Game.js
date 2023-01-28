import { Link } from "react-router-dom";
import { StyledFooter, StyledGame } from "./style";

export default function Game(props) {
    const { objectGame } = props;
    const { selectItem, selected } = props;
    console.log(objectGame);

    const isSelected = selected?.includes(objectGame);

    return (
        <StyledGame>
            <Link to={`/description/${objectGame._id}`}>
                <img src={objectGame.image} />
            </Link>
            <p>{objectGame.description}</p>
            <span>{`R$${objectGame.value.toLocaleString("pt-br", { minimumFractionDigits: 2 })}`}</span>

            <StyledFooter isSelected={isSelected}>
                <p>Adicionar ao carrinho</p>
                <button onClick={() => selectItem(objectGame)}>
                    <ion-icon name="cart-outline"></ion-icon>
                </button>
            </StyledFooter>

        </StyledGame>
    );
}