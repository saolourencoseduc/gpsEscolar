import { useContext, createContext, useState } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const handleLogin = ({phone}) => {
        const phoneNumber = Number(phone)
        setUser({phoneNumber, id:'123345'})
    };

    return (
        <AuthContext.Provider value={{
            handleLogin,
            user: user,
            isAuthenticate: !!user,
            isNumber: user ? typeof user.phoneNumber === 'number' : false
        }}>
            {children}
        </AuthContext.Provider>
    );    
};

export const useAuth = () => {
    return useContext(AuthContext);
};
