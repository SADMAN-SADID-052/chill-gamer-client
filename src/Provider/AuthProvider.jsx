

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext();

const auth = getAuth(app);


const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    console.log(user);
   
   
    // create new user
    const createUser = (email, password) =>{
        setLoading(true);
       return createUserWithEmailAndPassword(auth,email,password)
        
    }

    // user login

    const userLogin = (email,password) =>{
        
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }



    // logout user
    
    const logOut = () =>{
        
        setLoading(true);
        return signOut(auth);
    }
    const userInfo = {
    
        user,
        setUser,
        loading,
        createUser,
        userLogin,
        logOut,



    }

    // observer

    useEffect(()=>{

      const unsubscribe =  onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            setLoading(false);

        })
        return ()=>{
        unsubscribe();

        }

    },[]);

    return (
        <AuthContext.Provider value={userInfo}>

            {children}


            
        </AuthContext.Provider>
    );
};

export default AuthProvider;