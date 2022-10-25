import React, { createContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import app from '../firebase/firebase.confiq';

const auth = getAuth(app);
export const AuthContext = createContext();

const AuthSource = ({ children }) => {
    const [user, setUser] = useState(null);

    const providerLogIn = provider => {
        return signInWithPopup(auth, provider);
    }

    useEffect(() => { 
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
        })
        return () => {
            unsubscribe();
        }
    }, [])

    const authInformation = {
        user,
        providerLogIn
    }

    return (
        <AuthContext.Provider value={authInformation}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthSource;