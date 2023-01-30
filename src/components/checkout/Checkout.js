import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import Context from "../contextAPI/Context.js";
import { NavBar, MyItens, Item, Amount, Payment, Inputs, CancelButton, BuyButton } from "./CheckoutCSS.js"

export default function Checkout() {
    const navigate = useNavigate(); 
    const { token, id } = useContext(Context)
    const [amount, setAmount] = useState([]);
    const [products, setProducts] = useState([]);
    const [cardNumber, setCardNumber] = useState();
    const [cardPassword, setCardPassword] = useState();

    
    useEffect(() => {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
        //mudar /games para /cart
        axios.get(`${process.env.REACT_APP_API_URL}/cart`, config)
            .then((res) => {
                if (res.data.length === 0 || !(res.data)) {
                    navigate('/cart')
                    return; 
                }
                //setProducts(res.data.itens)
                setProducts(res.data)
                const prices = [];
                //res.data.itens
                res.data.filter((i) => {
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

    function buy(e) {
        e.preventDefault(); 

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };

        axios.post(`${process.env.REACT_APP_API_URL}/saled`, { id, cardNumber, cardPassword, products }, config) 
        .then((res) => {
            console.log(res.data)
            navigate('/success')
        })
        .catch((err) =>  console.log(err))
    }

    return (
        <>
            <NavBar>
                Confirme seu pedido
            </NavBar>
            <MyItens>

                {products.map((i, index) => (
                    <Item key={index}>
                        <img src={i.image} alt="" />
                        <h1>{i.name}</h1>
                        <h2>{i.type}</h2>
                        <div>R$ {i.value}</div>
                    </Item>)
                )}

            </MyItens>
            <Amount>
                <h1>Total:</h1>
                <h1>R$ {amount}</h1>
            </Amount>

            <Payment>
                <h1>Dados de pagamento</h1>
                <form onSubmit={buy}>
                    <Inputs>
                        <input 
                        onChange={(e) => setCardNumber(e.target.value)}
                        value={cardNumber}
                        keyboardType="numeric"
                        min={1}
                        type='number' 
                        placeholder="Número do cartão"
                        required>
                        </input>

                        <input 
                        onChange={(e) => setCardPassword(e.target.value)}
                        value={cardPassword}
                        keyboardType="numeric"
                        maxLength={4} 
                        type='password' 
                        placeholder="Senha"
                        required>
                        </input>
                        <BuyButton type="submit">Comprar</BuyButton>
                        <CancelButton onClick={() => navigate('/cart')}>Ver meu carrinho</CancelButton>
                    </Inputs>
                </form>
            </Payment>

        </>
    )
}
