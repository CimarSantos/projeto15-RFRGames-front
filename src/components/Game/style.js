import styled from "styled-components";

export const StyledGame = styled.div`
    position: relative;

    width: 335px;

    display: flex;
    flex-direction: column;
    background-color: #FFFFFF;

    padding: 15px;
    border-radius: 3px;
    gap: 5px;

    font-family: 'Inter';
    font-weight: 400;


    img{
        width: 305px;
        height: 160px;
        border-radius: 10px;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.3);
    }
    p{  
        margin-top: 5px;
        font-size: 12px;
        color: rgba(0, 0, 0, 0.5);
    }

    span{
        width: 111px;
        height: 24px;

        display: flex;
        justify-content: center;
        align-items: center;

        background-color: #479A06;

        font-size: 15px;
        color: #FFFFFF;

        position: absolute;
        top: 87%;
        left: 0;

    }
`;

export const StyledFooter = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;

    margin-top:5px;
    width: 100%;
    height: 25px;
    gap: 7px;

    font-size: 12px;

    p{
        color:#000000;
    }
    button{
        cursor: pointer;
        width: 30px;
        height: 30px;
        background-color:${props => props.isSelected ? "#4BA81F" : "#ACACAC"};
        border: none;
        border-radius: 50%;

        display: flex;
        justify-content: center;
        align-items: center;
    }
    ion-icon{
        width: 20px;
        height: 20px;
    }

`;