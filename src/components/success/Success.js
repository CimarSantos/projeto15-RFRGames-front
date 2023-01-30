import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { InfinitySpin } from "react-loader-spinner";
import { Box, Thanks } from "./SuccessCSS.js";
import axios from "axios";
import Context from "../contextAPI/Context.js";

export default function Success() {
    const { token } = useContext(Context);
    const navigate = useNavigate(); 

    useEffect(() => {

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };

        axios.delete(`${process.env.REACT_APP_API_URL}/saled`, config)
        .then((res) => {console.log(res.data)})
        .catch((err) => {console.log(err)})


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