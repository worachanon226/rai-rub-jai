import { createContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import PropTypes from "prop-types"

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [cookies, setCookie, removeCookie] = useCookies(["user-cookies"]);
    const [user, setUser] = useState(cookies["user-cookies"] || null);

    useEffect(() => {
        if (user) {
            setCookie("user-cookies", user);
        } else {
            removeCookie("user-cookies");
        }
    }, [user, setCookie, removeCookie]);

    const userContextValue = {
        user, setUser
    }

    return (
        <UserContext.Provider value={userContextValue}>
            {children}
        </UserContext.Provider>
    )
}
UserProvider.prototype = {
    children: PropTypes.isRequired
}