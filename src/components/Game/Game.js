import { StyledFooter, StyledGame } from "./style";

export default function Game({ image, description, value, name, selectItem, selected }) {
    const isSelected = selected.includes(name);

    return (
        <StyledGame>
            <img src={image} />
            <p>{description}</p>
            <span>{`R$${value}`}</span>

            <StyledFooter isSelected={isSelected}>
                <p>Adicionar ao carrinho</p>
                <button onClick={() => selectItem(name)}>
                    <ion-icon name="cart-outline"></ion-icon>
                </button>
            </StyledFooter>

        </StyledGame>
    );
}