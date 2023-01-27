import { StyledFooter, StyledGame } from "./style";

export default function Game({ image, description, value }) {
    return (
        <StyledGame>
            <img src={image} />
            <p>{description}</p>
            <span>{`R$${value}`}</span>
            <StyledFooter>
                <p>Adicionar ao carrinho</p>
                <button>
                    <ion-icon name="cart-outline"></ion-icon>
                </button>
            </StyledFooter>
        </StyledGame>
    );
}