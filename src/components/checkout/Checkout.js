import { useNavigate } from "react-router-dom"
import { NavBar, MyItens, Item, Amount, Payment, Inputs, CancelButton, BuyButton } from "./CheckoutCSS.js"

export default function Checkout() {
    const navigate = useNavigate(); 
    const cartItens = [{ image: 'https://cdn.akamai.steamstatic.com/steam/apps/1593500/capsule_616x353.jpg?t=1642526157', name: 'God of War', price: 99.99 },
    { image: 'https://cdn.akamai.steamstatic.com/steam/apps/1593500/capsule_616x353.jpg?t=1642526157', name: 'God of War', price: 99.99 }]

    return (
        <>
            <NavBar>
                Confirme seu pedido
            </NavBar>
            <MyItens>

                {cartItens.map((i, index) => (
                    <Item key={index}>
                        <img src={i.image} alt="" />
                        <h1>{i.name}</h1>
                        <div>R$ {i.price}</div>
                    </Item>)
                )}

            </MyItens>
            <Amount>
                <h1>Total:</h1>
                <h1>R$ 198.98</h1>
            </Amount>

            <Payment>
                <h1>Dados de pagamento</h1>
                <form>
                    <Inputs>
                        <input 
                        keyboardType="numeric"
                        min={1}
                        max={16}
                        type='number' 
                        placeholder="Número do cartão">
                        </input>
                        <input 
                        keyboardType="numeric"
                        maxLength={4} 
                        type='password' 
                        placeholder="Senha"></input>
                        <BuyButton onClick={() => navigate('/')}>Comprar</BuyButton>
                        <CancelButton onClick={() => navigate('/cart')}>Ver meu carrinho</CancelButton>
                    </Inputs>
                </form>
            </Payment>

        </>
    )
}
