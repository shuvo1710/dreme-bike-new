import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../Firebase/Firebase.init';

export const AuthContext = createContext() 
const auth = getAuth(app);
const UseContext = ({children}) => {
    const googleProvider = new GoogleAuthProvider();

    const [user,setUser] = useState('')
    const [loading, setLoading] = useState(true)


    // createUser
    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // google Login
    const googleLogIn = ()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }


    // signin user
    const signInUser = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    
    // logout
    const LogOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }
    // updateuser

    const updateUser = (name,photoUrl)=>{
        return updateProfile(auth.currentUser,{
            displayName:name,
            photoURL:photoUrl
        })
    }
   


    useEffect(()=>{
        const unsubscribed = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoading(false)
            
        })

        return ()=>unsubscribed();
    },[])



    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        LogOut,
        updateUser,
        googleLogIn
        
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UseContext;