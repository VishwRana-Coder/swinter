import { auth, db } from '@/firebase/config'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { message } from "antd";


const SignInLogin = async({email, password}) => {
    try {
        const result = await signInWithEmailAndPassword(auth, email, password);
        const user = result.user;
        const docRef = doc(db, "Users", user.uid);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
            localStorage.setItem("UID", docSnap.data().userUid);
            window.location.href = '/home'
        } else {
            message.error("Please Sign up first");
        }
    } catch (error) {
        message.error(error.message || "An error occurred during sign in");
    }
}
export default SignInLogin;
