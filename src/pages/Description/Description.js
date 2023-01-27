import { StyledBackGround, StyledBodyDescription, StyledButtonsBuyCar, StyledDescription, StyledGoBackHome } from "./syle";

export default function Description() {
    const games = {
        name: "GOD OF WAR: RAGNAROK",
        description: "Com a vingança contra os deuses do Olimpo em um passado distante, Kratos agora vive como um mortal no reino dos deuses e monstros nórdicos.",
        value: 16.72,
        image: "https://i.ytimg.com/vi/6fNUO23I_BA/maxresdefault.jpg",
        type: "Luta",
        category: "",
        backgroundImage: "https://image.api.playstation.com/vulcan/ap/rnd/202109/2821/LK1BOGkl8D9asemyQTPNAp69.jpg"
    };

    const { name, image, backgroundImage, description, value } = games;
    return (
        <>
            <StyledBackGround backgroundImage={backgroundImage} />
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

                <StyledGoBackHome>Voltar para Home</StyledGoBackHome>


            </StyledDescription>
        </>
    );
}
