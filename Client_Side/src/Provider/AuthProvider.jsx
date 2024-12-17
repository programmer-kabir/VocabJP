import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import axios from "axios";
import { app } from "../Firebase/Firebase.config";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //   User Observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
    //   if (currentUser) {
    //     axios
    //       .post("https://trends-shop-serverr.vercel.app/jwt", {
    //         email: currentUser?.email,
    //       })
    //       .then((data) => {
    //         // console.log(data.data.token);
    //         localStorage.setItem("access-token", data.data.token);
            // setLoading(false);
    //       });
    //   } else {
    //     localStorage.removeItem("access-token");
    //     setLoading(false);
    //   }
    });
    return () => {
      return unsubscribe;
    };
  }, []);

  // New User
  const RegisterUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // exiting user sing in
  const SingInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  // User Logout
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  // User name and photo
  const updateUserProfile = (name, photo = null) => {
    const profileData = {
      displayName: name,
    };

    if (photo !== null) {
      profileData.photoURL = photo;
    }

    return updateProfile(auth.currentUser, profileData);
  };
  const authValue = {
    RegisterUser,
    user,
    SingInUser,
    logOut,
    updateUserProfile,
    setLoading,
    loading,
    signInWithGoogle
  };
  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;