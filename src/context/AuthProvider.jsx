import { createContext } from "react";

export const AuthContext = createContext()

export default function AuthProvider({children}) {

    return (
        <AuthContext.Provider value={{user: 1}}>
            {children}
        </AuthContext.Provider>
    )
}