import { createContext, useState } from "react";

const Auth = createContext({})

export const AuthProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(false)
    const [user, setUser] = useState('')
    return (
        <Auth.Provider value={
            {
                isAuth,
                setIsAuth,
                user,
                setUser
            }
        } >{ children }</Auth.Provider>
    )
}

export default Auth