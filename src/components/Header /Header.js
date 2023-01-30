import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { postCart } from "../../services/rfrgames";
import { GamesSelectedContext } from "../contextAPI/GamesSelectedContext";
import { StyledHeader } from "./style";

export default function Header() {
    const user = { nome: "Bob", image: "https://yt3.googleusercontent.com/ytc/AL5GRJWF9DhK1icziCNSd-0dyRCDbOU3_op5GLtFSJo0WA=s900-c-k-c0x00ffffff-no-rj" };
    const { selected } = useContext(GamesSelectedContext);
    const navigate = useNavigate();

    function postCartByHeader() {
        if (selected.length === 0) {
            return navigate("/cart");
        }

        postCart(selected)
            .then((res) => {
                alert("Produto adicionado ao carrinho");
                console.log(res.data);
                navigate("/cart");
            })
            .catch((err) => {
                console.log(err);
            });;
    }

    return (
        <StyledHeader>
            <h1>Bem-vindo(a) , {user.nome}</h1>
            <div>
                <button onClick={postCartByHeader}>
                    <ion-icon name="cart-outline"></ion-icon>
                </button>
                <img src={user.image} />
            </div>
        </StyledHeader>
    );
}