import React, { createContext } from 'react';

export const AuthContext = createContext();

const AuthSource = ({children}) => {

    const authInformation = {}

    return (
        <AuthContext.Provider value={authInformation}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthSource;