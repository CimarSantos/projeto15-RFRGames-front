import { useState } from "react";
import Context from './Context.js';

const Provider = ({ children }) => {
    const [token, setToken] = useState();
    const [name, setName] = useState(); 
    const [image, setImage] = useState();

    return (
        <Context.Provider value={{
            token,
            setToken,
            name, 
            setName,
            image,
            setImage
        }}>
            {children}
        </Context.Provider>
    )
}

export default Provider;