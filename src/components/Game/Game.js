import { StyledFooter, StyledGame } from "./style";

export default function Game(props) {
    const { objectGame } = props;
    const { selectItem, selected } = props;

    const isSelected = selected?.includes(objectGame);

    return (
        <StyledGame>
            <img src={objectGame.image} />
            <p>{objectGame.description}</p>
            <span>{`R$${objectGame.value}`}</span>

            <StyledFooter isSelected={isSelected}>
                <p>Adicionar ao carrinho</p>
                <button onClick={() => selectItem(objectGame)}>
                    <ion-icon name="cart-outline"></ion-icon>
                </button>
            </StyledFooter>

        </StyledGame>
    );
}