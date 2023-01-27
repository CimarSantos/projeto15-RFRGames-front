import styled from "styled-components";

export const StyledBackGround = styled.div`
    position: absolute;
    width: 100%;
    min-height: 100vh;
    background-image: url(${props => props.backgroundImage});
    background-size:cover;
    background-repeat: no-repeat;
    background-position: center center;
    opacity: 50%;
`;

export const StyledDescription = styled.div`
    position: relative;
    width: 100%;
    min-height: 100vh;

    padding:20px;
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    font-family: 'Inter';
    font-weight: 400;

    h1{
        font-size: 30px;
        
        color: #FFFFFF;
    }
`;

export const StyledBodyDescription = styled.div`
    width: 100%;
    padding: 0 20px;
    height: auto;

    display: flex;
    justify-content: center;

    gap: 10%;

    p{
        width: 148px;
        max-height: 200px;

        font-size: 18px;

        color: #FFFFFF;
    }
    div{
        width: 130px;
        height: 200px;
    }

    img{
        width: 100%;
        border-radius: 6px;
    }
`;

export const StyledButtonsBuyCar = styled.div`
    min-width: 50%; 
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 10px;

    button{
        cursor: pointer;
        width: 100%;
        height: 44px;
        display: flex;
        justify-content:center;
        align-items: center;
        gap: 5px;

        
        background-color: #4BA81F;
        border-radius: 7px;

        font-size: 15px;

        color: #FFFFFF;
        border: none;

    }
    span{
        font-size: 27px;
    }
`;

export const StyledGoBackHome = styled.button`
    cursor: pointer;

    min-width: 50%;
    height: 44px;

    background-color: #BA2B2BD4;
    border-radius: 7px;

    font-size: 20px;
    text-align: center;
    
    color: #FFFFFF;
    border: none;
`;