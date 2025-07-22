// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";
import {
//  auth,
  signInWithGooglePopup,
//  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.js";

const SignIn = () => {
/* This commented code is for signing in with Google Redirect */
//   useEffect(() => {
//     getResponse();
//   }, []);

//   const getResponse = async () => {
//     const response = await getRedirectResult(auth);
//     if (response) {
//       const userDocRef = await createUserDocumentFromAuth(response.user);
//     }
//   };

  // Awaiting the response for user when google popup is open.
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <div>Sign In</div>
      <button onClick={logGoogleUser}>Sign In with Google Popup</button>
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign In with Google Redirect
      </button> */}
    </div>
  );
};

export default SignIn;
