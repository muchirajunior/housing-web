import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React, {useContext} from 'react'
import { auth } from './firebase-config';

const AuthContext=React.createContext();

export function useAuth(){
    return useContext(AuthContext);
}


export  function AuthContextProvider({children}) {
    const currentUser=auth.currentUser;
    const signup=(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const login=(email,password)=>{
        console.log("logiing in");
        return signInWithEmailAndPassword(auth,email,password)
    }
   
    const value ={ currentUser , signup, login}
  return (
      <AuthContext.Provider value={value}>
        {children}  
      </AuthContext.Provider>
  )
}
