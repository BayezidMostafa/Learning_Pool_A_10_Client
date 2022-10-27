import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.config';

const auth = getAuth(app);
export const AuthContext = createContext();

const AuthSource = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Google and Github Popup Log in
    const providerLogIn = provider => {
        setLoading(true)
        return signInWithPopup(auth, provider);
    }

    // Sign up with email password
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // For update name and image url
    const updateTheUser = (profile) => {
        setLoading(true)
        return updateProfile(auth.currentUser, profile);
    }

    // For sign in
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    // For log out
    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }
    
    useEffect(() => { 
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setLoading(false)
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
        signInUser,
        logOut,
        loading
    }

    return (
        <AuthContext.Provider value={authInformation}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthSource;