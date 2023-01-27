import { useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { InfinitySpin } from "react-loader-spinner";
import { Box, Thanks } from "./SuccessCSS.js";

export default function Success() {
    const navigate = useNavigate(); 
    useEffect(() => {
        setTimeout(() => {
            navigate('/home')
        }, 4500);
    }, [])

    return (
        <>
            <Box>
                <h1>Compra realizada com sucesso!</h1>
                <h2>Estamos te redirecionando para a Home</h2>
                <InfinitySpin
                    width='200'
                    color="#ffffff"
                />
            </Box>
            <Thanks>
                <h1>Obrigada por comprar na</h1>
                <h2>RFRGames</h2>
            </Thanks>
        </>
    )
}