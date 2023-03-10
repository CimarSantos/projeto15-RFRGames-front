import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Context from '../contextAPI/Context.js';
import { UserContext } from "../contextAPI/UserContext.js";
import { Container, NavBar, MyItens, Item, Amount, Options, Keep, Back, Info, NoCart } from "./CartCSS.js";

export default function Carrinho() {

    const { user } = useContext(UserContext);
    const [amount, setAmount] = useState([]);
    const [products, setProducts] = useState([]);
    const [reload, setReload] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        };

        //mudar /games para /cart
        axios.get(`${process.env.REACT_APP_API_URL}/cart`, config)
            .then((res) => {

                if (res.data.length === 0 || !(res.data)) {
                    setProducts(false);
                    return;
                }

                setProducts(res.data);

                const prices = [];

                res.data.filter((i) => {
                    let price = i.value;
                    prices.push(price);
                });
                let sum = 0;
                for (let i = 0; i < prices.length; i++) {
                    sum += prices[i];
                }
                setAmount(sum.toFixed(2));
            })
            .catch((err) => console.log(err));
    }, [reload]);

    function deleteItem(id) {

        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        };

        axios.delete(`${process.env.REACT_APP_API_URL}/cart`, id, config)
            .then((res) => {
                console.log(res);
                setReload(!reload);
            })
            .catch((err) => console.log(err));

    }

    return (
        <Container>
            <NavBar>
                <div>
                    <ion-icon name="cart-outline"></ion-icon>
                    <h1>Meu carrinho</h1>
                </div>
                <img src={user.image} alt="user" />
            </NavBar>

            {!products && (<NoCart>
                <h1>Ahh... Que pena...</h1>
                <h2>O seu carrinho est?? vazio</h2>
                <h3>:(</h3>
            </NoCart>)}


            {products && <MyItens>
                {products.map((i, index) => (
                    <Item key={index}>
                        <img src={i.image} alt={i.name} />
                        <div>
                            <h1>R$ {i.value}</h1>
                            <h2>{i.type}</h2>
                            <ion-icon onClick={() => deleteItem(i._id)} name="trash-outline"></ion-icon>
                        </div>
                    </Item>
                ))}
            </MyItens>}

            <Info>

                {products && (<Amount>
                    <h1>Total:</h1>
                    <h1>R$ {amount}</h1>
                </Amount>)}

                <Options>
                    {products && (<Keep onClick={() => navigate('/checkout')}>
                        Finalizar compra
                    </Keep>)}
                    <Back position={products} onClick={() => navigate('/home')}>
                        Voltar para Home
                    </Back>
                </Options>
            </Info>

        </Container>
    );
}