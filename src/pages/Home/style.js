import styled from "styled-components";


export const StyledHomeContainer = styled.div`
    width: 100%;
    min-height: 100vh;
    padding:30px;

    display: flex;
    flex-direction: column;
    gap: 20px;

    background-color: #1A0F47;
`;

export const StyledProducts = styled.div`
    width: 100%;
    height: 300px;
    
    display: flex;
    flex-direction: column;
    gap: 10px;

    h1{
        font-family: 'Righteous', cursive;
        color: #FFFFFF;
    }
`;

export const StyledGames = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    overflow-x: scroll;
    
    gap: 15px;
`;