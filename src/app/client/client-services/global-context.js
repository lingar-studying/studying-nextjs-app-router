import {createContext} from "react";

const GlobalContext = createContext({
    loggedUser: null,
});

export default GlobalContext;