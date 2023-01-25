import { Container, NavBar, MyItens, Item, Amount } from "./CarrinhoCSS.js";

export default function Carrinho() {
    const products = [{
        name: 'God of War',
        description: 'A very good game. Really cool.',
        price: 99.99,
        image: 'https://files.tecnoblog.net/wp-content/uploads/2022/01/god-of-war-2018-004-1060x596.jpg',
        type: 'action-adventura'
    }, {
        name: 'God of War',
        description: 'A very good game. Really cool.',
        price: 99.99,
        image: 'https://files.tecnoblog.net/wp-content/uploads/2022/01/god-of-war-2018-004-1060x596.jpg',
        type: 'action-adventura'
    }, {
        name: 'God of War',
        description: 'A very good game. Really cool.',
        price: 99.99,
        image: 'https://files.tecnoblog.net/wp-content/uploads/2022/01/god-of-war-2018-004-1060x596.jpg',
        type: 'action-adventura'
    }, {
        name: 'God of War',
        description: 'A very good game. Really cool.',
        price: 99.99,
        image: 'https://files.tecnoblog.net/wp-content/uploads/2022/01/god-of-war-2018-004-1060x596.jpg',
        type: 'action-adventura'
    }, {
        name: 'God of War',
        description: 'A very good game. Really cool.',
        price: 99.99,
        image: 'https://files.tecnoblog.net/wp-content/uploads/2022/01/god-of-war-2018-004-1060x596.jpg',
        type: 'action-adventura'
    }, {
        name: 'God of War',
        description: 'A very good game. Really cool.',
        price: 99.99,
        image: 'https://files.tecnoblog.net/wp-content/uploads/2022/01/god-of-war-2018-004-1060x596.jpg',
        type: 'action-adventura'
    }];

    return (
        <Container>
            <NavBar>
                <div>
                    <ion-icon name="cart-outline"></ion-icon>
                    <h1>Meu carrinho</h1>
                </div>
                <img src="https://w7.pngwing.com/pngs/340/956/png-transparent-profile-user-icon-computer-icons-user-profile-head-ico-miscellaneous-black-desktop-wallpaper.png" alt="user" />
            </NavBar>

            <MyItens>
                {products.map((i, index) => (
                    <Item key={index}>
                        <img src={i.image} alt={i.name} />
                        <div>
                            <h1>R$ {i.price}</h1>
                            <ion-icon name="trash-outline"></ion-icon>
                        </div>
                    </Item>
                ))}
            </MyItens>

            <Amount>
                <h1>Total:</h1>
                <h1>R$ 197.98</h1>
            </Amount>

        </Container>
    )
}