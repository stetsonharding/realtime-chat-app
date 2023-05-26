// import React from 'react'
import { auth, provider } from "../firebase-config.jsx";
import { signInWithPopup } from "firebase/auth";

import PropTypes from "prop-types";

import Cookies from "universal-cookie";
const cookies = new Cookies();

function Auth({ setIsAuth }) {
  //Authentication
  const signInWithGoogle = async () => {
    try {
      //Getting User info upon login
      const result = await signInWithPopup(auth, provider);
      //setting cookie so user is not logged out upon refresh
      cookies.set("auth-token", result.user.refreshToken);
      setIsAuth(cookies.get("auth-token"));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="auth">
      <p>Sign In With Google To Continue</p>
      <button onClick={signInWithGoogle}>Sign In With Google</button>
    </div>
  );
}

Auth.propTypes = {
  setIsAuth: PropTypes.string,
};

export default Auth;
