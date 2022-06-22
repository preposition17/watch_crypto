import { createContext } from "react";

const UserContext = createContext({
    isLoaded: false,
    user: null,
    token: null,
    refresh_token: null,
    setUser: () => {},
    setToken: () => {},
    setRefreshToken: () => {},
    logOut: () => {},
});

export default UserContext;
