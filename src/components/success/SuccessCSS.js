import styled from "styled-components";

export const Box = styled.div`
background-color: red;
width: 400px;
height: 335px;
border-radius: 5px;
margin: 60px auto;
color: #ffffff;
padding: 50px;
text-align: center;
font-family: "Righteous", sans-serif;
@media (max-width: 400px) {
    width: 100%;
}
@media (max-width: 300px) {
    padding: 30px;
}
h1 {
    font-size: 40px;
}
h2 {
    margin-top: 20px;
}
`;
export const Thanks = styled.div`
margin: 0 auto;
width: 500px;
height: 200px;
background-color: #166F96;
font-family: "Righteous", sans-serif;
color: #ffffff;
padding: 25px;
text-align: center;
border-radius: 3px;
@media (max-width: 500px) {
    width: 100%;
    height: 165px;
}
h1 {
    font-size: 20px;
}
h2 {
    margin-top: 20px;
    font-size: 75px;
    box-shadow: #ffffff;
    @media (max-width: 400px) {
    font-size: 55px;
}@media (max-width: 300px) {
    font-size: 40px;
}
}
`;