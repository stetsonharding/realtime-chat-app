// import React from 'react'
import { auth, provider } from "../firebase-config.jsx";
import { signInWithPopup } from "firebase/auth";

function Auth() {
  const signInWithGoogle = async () => {
    await signInWithPopup(auth, provider);
  };

  return (
    <div className="auth">
      <p>Sign In With Google To Continue</p>
      <button onClick={signInWithGoogle}>Sign In With Google</button>
    </div>
  );
}

export default Auth;
