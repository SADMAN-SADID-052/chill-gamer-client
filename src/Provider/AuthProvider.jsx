

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext();

const auth = getAuth(app);


const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null);
    console.log(user);
    const [loading,setLoading] = useState(true);
   
    // create new user
    const createUser = (email, password) =>{
        setLoading(true);
       return createUserWithEmailAndPassword(auth,email,password)
        
    }

    // user login

    const userLogin = (email,password) =>{

        return signInWithEmailAndPassword(auth,email,password);
    }



    // logout user

    const logOut = () =>{

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