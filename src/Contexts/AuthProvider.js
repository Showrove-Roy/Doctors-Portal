import React, { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/firebase.config";
import toast from "react-hot-toast";

const AuthContext = createContext(); // create context

const auth = getAuth(app); //get auth with passing app from firebase config

export const useAuth = () => useContext(AuthContext); //use context and export for use enter website

const AuthProvider = ({ children }) => {
  // stored login user
  const [user, setUser] = useState();

  //Create a new user's using email address and password
  const createNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in user
  const logIN = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Logout user
  const logOut = () => {
    return signOut(auth);
  };

  // Get current user info
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  // Update User Profile

  const updateUserProfile = (userDetails) => {
    return updateProfile(auth.currentUser, userDetails);
  };

  // Google login
  const googleProvider = new GoogleAuthProvider();
  const googleLogIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // Tost handel
  const notify = (alertMess) =>
    toast.custom((t) => (
      <div
        className={`bg-gradient-to-l from-primary to-secondary px-6 py-4 shadow-md rounded-xl text-white font-semibold ${
          t.visible ? "animate-enter" : "animate-leave"
        }`}>
        {alertMess}
      </div>
    ));
  // create a object for sharing function and data from one place
  const authInfo = {
    createNewUser,
    logIN,
    user,
    logOut,
    updateUserProfile,
    notify,
    googleLogIn,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
