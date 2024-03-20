import { useContext, createContext, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const handleLogin = ({email, password}) => {
        setUser({email, password})
    };

    return (
        <AuthContext.Provider value={{
            handleLogin,
            user: user,
            isAuthenticate: !!user,
           
        }}>
            {children}
        </AuthContext.Provider>
    );    
};

export const useAuth = () => {
    return useContext(AuthContext);
};
