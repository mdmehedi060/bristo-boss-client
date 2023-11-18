import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, 
  signInWithPopup, 
  signOut, updateProfile } from "firebase/auth";
import app from './../Firbase/Firebase.config';
import useAxiosPublic from './../Hooks/useAxiosPublic';



export const AuthContext = createContext(null);
const auth = getAuth(app);


const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading,setLoading]=useState(true);
  const googleProvider = new GoogleAuthProvider();
const axiosPublic=useAxiosPublic();


const createUser=(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
}

const signIn=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}

const googleSignIn=()=>{
  setLoading(true)
  return signInWithPopup(auth,googleProvider)
}

const logOut=()=>{
    setLoading(true);
    return signOut(auth)
}
const updateUserProfile=(name,profile)=>{
return  updateProfile(auth.currentUser, {
    displayName: name, photoURL: profile
  })
}

useEffect(()=>{
 const unsubscribe  = onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser);
        if (currentUser) {
          // get token and store client
          const userInfo = { email: currentUser.email };
          axiosPublic.post('/jwt', userInfo)
              .then(res => {
                  if (res.data.token) {
                      localStorage.setItem('access-token', res.data.token);
                  }
              })
      }
      else {
          // TODO: remove token (if token stored in the client side: Local storage, caching, in memory)
          localStorage.removeItem('access-token');
      }
        setLoading(false)
    })
    return ()=>{
        return unsubscribe();
    }
},[axiosPublic])

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
    updateUserProfile,
    googleSignIn
  };


  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
