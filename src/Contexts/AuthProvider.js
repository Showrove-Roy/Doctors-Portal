import React, { createContext, useContext } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../Firebase/firebase.config";

const AuthContext = createContext(); // create context

const auth = getAuth(app); //get auth with passing app from firebase config

export const useAuth = () => useContext(AuthContext); //use context and export for use enter website

const AuthProvider = ({ children }) => {
  //Create a new user's using email address and password
  const createNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // create a object for sharing function and data from one place
  const authInfo = { createNewUser };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
