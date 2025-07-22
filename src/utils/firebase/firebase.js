import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDu97TxGnXhx5JN5Nx7UjHXg1woJHx8KFc",
  authDomain: "crwn-clothing-db-2023-bd999.firebaseapp.com",
  projectId: "crwn-clothing-db-2023-bd999",
  storageBucket: "crwn-clothing-db-2023-bd999.appspot.com",
  messagingSenderId: "243014455787",
  appId: "1:243014455787:web:58f5b0abcbc3b40f5e49ae",
};

// Initialize Firebase with above config
const app = initializeApp(firebaseConfig);

// Allows for the Google Sign-In popup functionality.
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

// Points to our database in Firestore.
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  // Create a snapshot based on the properties in user document reference
  const userSnapshot = await getDoc(userDocRef);

  // If a snapshot doesn't exist, ie. a user does not have an account, we want to create that piece of data at the userRef location.
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("Error occured creating user...", error.message);
    }
  }

  return userDocRef;
};
