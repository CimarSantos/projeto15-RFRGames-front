import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Context from '../contextAPI/Context.js'
import { Container, NavBar, MyItens, Item, Amount, Options, Keep, Back, Info } from "./CartCSS.js";

export default function Carrinho() {
    const { token } = useContext(Context)
    const [amount, setAmount] = useState([]);
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };

        axios.get(`${process.env.REACT_APP_API_URL}/cart`, config)
            .then((res) => {
                setProducts(res.data.itens)
                const prices = [];

                res.data.itens.filter((i) => {
                    let price = i.value; 
                    prices.push(price)
                })
                let sum = 0;
                for (let i = 0; i < prices.length; i++) {
                    sum += prices[i];
                }
                setAmount(sum.toFixed(2));
            })
            .catch((err) => console.log(err))
    }, [])

    function deleteItem(id) {

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };

        axios.delete(`${process.env.REACT_APP_API_URL}/cart`, id, config)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));

    }

    return (
        <Container>
            <NavBar>
                <div>
                    <ion-icon name="cart-outline"></ion-icon>
                    <h1>Meu carrinho</h1>
                </div>
                <img src="https://img.quizur.com/f/img6241820be92f48.80631095.jpg?lastEdited=1648460306" alt="user" />
            </NavBar>

            <MyItens>
                {products.map((i, index) => (
                    <Item key={index}>
                        <img src={i.image} alt={i.name} />
                        <div>
                            <h1>R$ {i.value}</h1>
                            <ion-icon onClick={() => deleteItem(i._id)} name="trash-outline"></ion-icon>
                        </div>
                    </Item>
                ))}
            </MyItens>

            <Info>

                <Amount>
                    <h1>Total:</h1>
                    <h1>R$ {amount}</h1>
                </Amount>

                <Options>
                    <Keep onClick={() => navigate('/checkout')}>
                        Finalizar compra
                    </Keep>
                    <Back onClick={() => navigate('/home')}>
                        Voltar para Home
                    </Back>
                </Options>
            </Info>

        </Container>
    )
}