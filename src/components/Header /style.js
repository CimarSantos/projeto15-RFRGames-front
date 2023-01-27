import styled from "styled-components";

export const StyledHeader = styled.div`
    width: 100%;
    height: 50px;
    padding: 0 20px;
    
    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: #1A0F47;

    h1{
        color: #FFFFFF;
        font-size: 20px;
        font-family: 'Righteous', cursive;
    }
    img{
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }
    ion-icon {
        width: 30px;
        height: 30px;
        color: #FFFFFF;
    }
    button{ 
        cursor: pointer;
        width: 40px;
        height: 40px;
        border-radius:50%;
        background-color: #166F96;
        border: none;

        display: flex;
        justify-content: center;
        align-items: center;

        margin-right: 10px;


    }
    div{
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;