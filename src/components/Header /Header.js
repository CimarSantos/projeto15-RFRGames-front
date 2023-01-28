import axios from "axios";
import { config } from "localforage";
import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Context from "../contextAPI/Context";
import { StyledHeader } from "./style";

export default function Header({ selected }) {
    const user = { nome: "Bob", image: "https://yt3.googleusercontent.com/ytc/AL5GRJWF9DhK1icziCNSd-0dyRCDbOU3_op5GLtFSJo0WA=s900-c-k-c0x00ffffff-no-rj" };
    const navigate = useNavigate();
    const token = 1235847352;

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    function postCart() {
        if (selected.length === 0) {
            return navigate('/cart');
        };
        axios.post("http://localhost:5000/cart", selected, config)
            .then(() => {
                navigate('/cart');
            })
            .catch((err) => {
                alert(err.response.data);
            });
    }

    return (
        <StyledHeader>
            <h1>Bem-vindo(a) , {user.nome}</h1>
            <div>
                <button onClick={postCart}>
                    <ion-icon name="cart-outline"></ion-icon>
                </button>
                <img src={user.image} />
            </div>
        </StyledHeader>
    );
}