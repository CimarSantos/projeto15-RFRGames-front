import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { postCart } from "../../services/rfrgames";
import { GamesSelectedContext } from "../contextAPI/GamesSelectedContext";
import { UserContext } from "../contextAPI/UserContext";
import { StyledHeader } from "./style";

export default function Header() {
    const { user } = useContext(UserContext);
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
            <h1>Bem-vindo(a) , {user.name}</h1>
            <div>
                <button onClick={postCartByHeader}>
                    <ion-icon name="cart-outline"></ion-icon>
                </button>
                <img src={user.image} />
            </div>
        </StyledHeader>
    );
}