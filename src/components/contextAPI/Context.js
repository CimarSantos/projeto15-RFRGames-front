import { createContext } from "react";

const Context = createContext({
    token: null,
    name: null,
    image: null
});

export default Context; 