import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import React, {useContext, useRef, useState} from 'react'
import { auth } from './firebase-config';

const AuthContext=React.createContext();

export function useAuth(){
    return useContext(AuthContext);
}


export  function AuthContextProvider({children}) {
    const [currentUser, setCurrentUser]=useState()
    const signup=async (email,password)=> {
        return await createUserWithEmailAndPassword(auth, email, password)
    }
    const login= async (email,password)=>{
        return await signInWithEmailAndPassword(auth,email,password)
    }
    useRef(()=>{
        const unsubscribe= onAuthStateChanged(auth,(user)=>{
            setCurrentUser(user);
        })
        return unsubscribe;
    },[])
    const value ={ currentUser , signup, login}
  return (
      <AuthContext.Provider value={value}>
        {children}  
      </AuthContext.Provider>
  )
}