import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.config';

const auth = getAuth(app);
export const AuthContext = createContext();

const AuthSource = ({ children }) => {
    const [user, setUser] = useState(null);

    const providerLogIn = provider => {
        return signInWithPopup(auth, provider);
    }

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const updateTheUser = (profile) => {
        return updateProfile(auth.currentUser, profile);
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
        providerLogIn,
        createUser,
        updateTheUser,
    }

    return (
        <AuthContext.Provider value={authInformation}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthSource;