import { createContext, useContext, useState } from "react";

const default_values = {
    token: null,
    login: () => { },
    logout: () => { }
}
const AuthContxet = createContext(default_values);

export function useAuth() {
    return useContext(AuthContxet)
}

export function AuthProvider({ children }) {
    const default_Token = localStorage.getItem('token')
    const [token, setToken] = useState(default_Token);
    
    const login = (token) => {
        setToken(token)
        localStorage.setItem('token', token)
    }
    const logout = () => {
        setToken(null)
        localStorage.removeItem('token')
    }
    const value = {
        token,
        login,
        logout
    }
    return (
        <AuthContxet.Provider value={value}>
            {children}
        </AuthContxet.Provider>
    )
}