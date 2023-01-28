import { useState } from "react";
import Context from './Context.js';

const Provider = ({ children }) => {
    const [token, setToken] = useState();
    const [id, setId] = useState(); 

    return (
        <Context.Provider value={{
            token,
            setToken,
            id, 
            setId
        }}>
            {children}
        </Context.Provider>
    )
}

export default Provider;