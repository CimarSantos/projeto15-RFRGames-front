import styled from "styled-components";

export const Container = styled.div`
width: 100vw;
height: 100vh;
background-color: #1A0F47;
`;
export const NavBar = styled.div`
background-color: #1A0F47;
width: 100%;
display: flex;
justify-content: space-between;
z-index: 1;
position: fixed;
top: 0;
left: 0;
div{
    display: flex;
}
ion-icon {
    width: 40px;
    height: 40px;
    color: #ffffff;
    margin: 15px 12px 0 18px
}
h1 {
    margin-top: 23px;
    font-size: 25px;
    color: #ffffff;
    font-family: 'Righteous';
}
img {
    margin: 12px 20px 8px 0;
    width: 50px;
    height: 50px;
    border-radius: 50%;
}
`;
export const MyItens = styled.div`
margin: 80px auto;
margin-bottom: 10px;
width: 88%;
display: flex;
flex-wrap: wrap;
justify-content: space-around;
overflow-y: scroll;
height: 78%;
`;
export const Item = styled.div`
margin: 6px 5px 6px 5px;
background-color: #ffffff;
width: 335px;
height: 234px;
border-radius: 3px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
img {
    margin: 10px 8px 0 8px;
    width: 309px;
    height: 159px;
    border-radius: 10px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.3);
}
h1 {
    width: 120px;
    font-size: 20px;
    color: #ffffff;
    margin-top: 10px;
    padding: 5px;
    box-sizing: border-box;
    text-align: center;
    background-color: #309700;
}
div {
    display: flex;
    justify-content: space-between;
}
ion-icon {
    width: 28px;
    height: 28px;
    margin: 12px 12px 0 0;
    color: #979797;
}
`;
export const Amount = styled.div`
margin: 10px 0 10px 0;
height: 50px;
background-color: #ffffff;
border-radius: 5px;
display: flex;
padding: 6px;
justify-content: space-between;
h1 {
    margin-top: 10px;
    font-size: 22px;
}
`;
export const Options = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
div{
    width: 48%;
    border-radius: 5px;
    padding: 12px;
    height: 50px;
    text-align: center;
    font-size: 22px;
    font-family: 'Righteous';
    color: #ffffff;
    @media (max-width: 1100px) {
        font-size: 16px;
        padding: 15px;
    }
}
`;
export const Keep = styled.div`
background-color: green;
`;
export const Back = styled.div`
background-color: #A52E1E;
`;
export const Info = styled.div`
width: 100%;
position: fixed;
bottom: 0;
padding: 12px;
background-color: #1A0F47;
`;