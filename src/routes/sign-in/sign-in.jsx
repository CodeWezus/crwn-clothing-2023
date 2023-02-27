import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.js";

const SignIn = () => {

    // Awaiting the response for user when google popup is open.
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user)
    }

    return (
        <div>
            <div>Sign In</div>
            <button onClick={logGoogleUser}>Sign In with Google Popup</button>
        </div>
    )
}

export default SignIn;