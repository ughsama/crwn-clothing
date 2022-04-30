import React from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

function SignIn() {
  const logGoogleUser = async () => {
    let userDocRef = {};
    const { user } = await signInWithGooglePopup();
    if (user) {
      userDocRef = await createUserDocumentFromAuth(user);
      console.log("user", userDocRef);
    }
  };

  return (
    <div>
      <h1>Sign In page</h1>
      <button onClick={logGoogleUser}>Sign in with Google popup</button>
    </div>
  );
}

export default SignIn;
