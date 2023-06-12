import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from '../Firebase/firebase.config'
import axios from "axios";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)

  const googleSignIn = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }

  const registerUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const updateUserProfile = (name, url) => {
    return updateProfile(auth.currentUser, { displayName: name, photoURL: url })
  }

  const loginUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      console.log(currentUser);
      setLoading(false)
      setUser(currentUser);
      if (currentUser) {
        axios.post('https://summer-sports-server.vercel.app/jwt', { email: currentUser.email })
          .then(data => {
            localStorage.setItem('access-token', data.data.token)
            setLoading(false)
          })
      }
      else{
        localStorage.removeItem('access-token')
        setLoading(false)
      }
    })
    return () => {
      return unsubscribe();
    }
  }, [])

  const exitUser = () => {
    setLoading(true)
    return signOut(auth)
  }

  const authInfo = {
    user,
    loading,
    googleSignIn,
    registerUser,
    loginUser,
    updateUserProfile,
    exitUser
  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;