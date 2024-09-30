import { createContext } from "react";

export const AuthContext = createContext(null);




const AuthProvider = ({children}) => {



    const authinfo = {user: 'helloo auth'}
    console.log(authinfo);

    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;