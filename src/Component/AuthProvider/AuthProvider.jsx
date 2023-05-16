import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../Firebase/firebase.config';


export const AuthContext = createContext()
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState([null]);
    const [loading, setLoading] = useState(true);



    const createUser = (email, password) => {

        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {

        setLoading(true)
        return signOut(auth)
    }


    const googleCreate = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }


    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);

        })

        return () => {
            return unsubscribe();
        }
    }, [])





    const info = {

        createUser,
        logInUser,
        googleCreate,
        user,
        loading,
        logOut

    }


    return (
        <AuthContext.Provider value={info}>

            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;