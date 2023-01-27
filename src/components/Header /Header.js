import { StyledHeader } from "./style";

export default function Header() {
    const user = { nome: "Bob", image: "https://yt3.googleusercontent.com/ytc/AL5GRJWF9DhK1icziCNSd-0dyRCDbOU3_op5GLtFSJo0WA=s900-c-k-c0x00ffffff-no-rj" };
    return (
        <StyledHeader>
            <h1>Bem-vindo(a) , {user.nome}</h1>
            <div>
                <button>
                    <ion-icon name="cart-outline"></ion-icon>
                </button>
                <img src={user.image} />
            </div>
        </StyledHeader>
    );
}