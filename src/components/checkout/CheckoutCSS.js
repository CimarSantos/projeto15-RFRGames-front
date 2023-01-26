import styled from "styled-components";

export const NavBar = styled.div`
text-align: center;
margin-top: 20px;
font-size: 26px;
color: #ffffff;
font-family: 'Righteous', sans-serif;
`;
export const MyItens = styled.div`
margin: 20px 0 50px 0;
`;
export const Item = styled.div`
background-color: #F8D8D8;
width: 600px;
height: 88px;
margin: 20px auto;
display: flex;
position: relative;
@media (max-width: 600px) {
    width: 100%;
}
img {
    width: 125px;
    height: 75px;
    margin: 6px 0 0 10px;
    border-radius: 10px;
}
h1 {
    margin: 10px 0 0 10px;
    font-size: 20px;
    font-family: 'Inter', sans-serif;
}
div {
    width: 120px;
    height: 25px;
    padding: 6px;
    color: #ffffff;
    font-family: 'Inter', sans-serif;
    background-color: green;
    position: absolute;
    right: 0;
    bottom: 12px;
    text-align: center;
}
`;
export const Amount = styled.div`
margin: 0 auto;
background-color: #ffffff;
display: flex;
justify-content: space-between;
padding: 14px;
height: 50px;
width: 600px;
@media (max-width: 600px) {
    width: 90%;
}
h1{
    font-family: "Inter", sans-serif;
    font-size: 20px;
}
`;
export const Payment = styled.div`
height: 100%;
padding: 15px;
text-align: center;
h1{
    color: #ffffff;
    margin: 5px 0 0 5px;
    font-size: 22px;
    font-family: 'Righteous', sans-serif;
}
`;
export const Inputs = styled.div`
width: 303px;
margin: 0 auto;
text-align: center;
display: block;
input {
    margin-top: 10px;
    border-radius: 5px;
    width: 303px;
    height: 50px;
    border: 1px solid #d4d4d4;
    padding: 6px;
    font-family: 'Inter', sans-serif;
    font-size: 20px;
    ::placeholder{
        padding: 6px;
        font-family: 'Inter', sans-serif;
        font-size: 20px;
    }
}
button {
    margin-top: 10px;
    border: none;
    width: 252px;
    height: 49px;
    border-radius: 25px;
    font-size: 22px;
    color: #ffffff;
}
`;
export const BuyButton = styled.button`
background-color: #166F96;
`;
export const CancelButton = styled.button`
background-color: #A52E1E;
`;