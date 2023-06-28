import React, { createContext, useEffect, useState } from 'react';
export const authContext = createContext();
import app from '../firebase.config';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth"



const auth = getAuth(app);
const UserContext = ({ children }) => {

    const [user, setUser] = useState({ displayName: 'Naim Hasan' });

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }



    const authInfo = { user, createUser, signIn };



    return (
        <div>
            <authContext.Provider value={authInfo}>
                {children}
            </authContext.Provider>
        </div>
    );
};

export default UserContext;