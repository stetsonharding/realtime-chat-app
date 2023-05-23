// import React from 'react'
import { auth, provider } from "../firebase-config.jsx";
import { signInWithPopup } from "firebase/auth";
import Cookies from "universal-cookie";

function Auth() {
  //Authentication
  const signInWithGoogle = async () => {
    try {
      //Getting User info upon login
      const result = await signInWithPopup(auth, provider);
      //setting cookie so user is not logged out upon refresh
      const cookies = new Cookies();
      cookies.set("auth-token", result.user.refreshToken);
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

export default Auth;
