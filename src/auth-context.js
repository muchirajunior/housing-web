import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import React, {useContext, useRef, useState} from 'react'
import { auth } from './firebase-config';

const AuthContext=React.createContext();

export function useAuth(){
    return useContext(AuthContext);
}


export  function AuthContextProvider({children}) {
    const [currentUser, setCurrentUser]=useState()
    const signup=(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    useRef(()=>{
        const unsubscribe= onAuthStateChanged(auth,(user)=>{
            setCurrentUser(user);
        })
        return unsubscribe;
    },[])
    const value ={ currentUser , signup}
  return (
      <AuthContext.Provider value={value}>
        {children}  
      </AuthContext.Provider>
  )
}
