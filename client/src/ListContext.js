import { createContext, useEffect } from "react";

export const ListContext = createContext

export const ListProvider = ({ children }) => {

    useEffect(() => { })


    return (
        <ListContext.Provider>
            {children}
        </ListContext.Provider>)
}