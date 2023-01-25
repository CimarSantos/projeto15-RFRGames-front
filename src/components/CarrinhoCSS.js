import styled from "styled-components";

export const Container = styled.div`
background-color: #1A0F47;
`;
export const NavBar = styled.div`
display: flex;
justify-content: space-between;
div{
    display: flex;
}
ion-icon {
    width: 40px;
    height: 40px;
    color: #ffffff;
    margin: 15px 8px 0 15px
}
h1 {
    margin-top: 28px;
    font-size: 22px;
    color: #ffffff;
}
img {
    margin: 12px 20px 0 0;
    width: 50px;
    height: 50px;
    border-radius: 50%;
}
`;
export const MyItens = styled.div`
margin: 10px 20px 30px 20px;
display: flex;
flex-wrap: wrap;
justify-content: space-around;
`;
export const Item = styled.div`
margin: 5px 5px 5px 5px;
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
margin: 0 auto;
width: 320px;
height: 50px;
background-color: #ffffff;
border-radius: 5px;
display: flex;
box-sizing: border-box;
padding: 6px;
justify-content: space-between;
h1 {
    margin-top: 10px;
    font-size: 22px;
}
`;
export const Options = styled.div`
display: flex;
justify-content: space-between;
margin:10px 20px 10px 20px;
div{
    width: 48%;
    height: 50px;
    border-radius: 10px;
    text-align: center;
    box-sizing: border-box;
    padding: 12px;
    font-size: 22px;
    @media (max-width: 1100px) {
        padding: 6px;
    }
}
`;
export const Keep = styled.div`
background-color: rgba(51, 255, 0, 0.6);
`;
export const Back = styled.div`
background-color: rgba(255, 0, 0, 0.6);
`;