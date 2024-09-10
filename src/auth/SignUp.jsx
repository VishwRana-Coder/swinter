import { auth, db } from "@/firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { message } from "antd";

const SignUpLogin = async ({ email, password, name }) => {
  try {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    const user = result.user;
    const docRef = doc(db, "Users", user.uid);
    const docSnap = await getDoc(docRef);

    localStorage.setItem("UID", user.uid);

    if (!docSnap.exists()) {
      await setDoc(docRef, {
        userName: user.displayName || name,  // Use provided name if displayName is null
        userEmail: user.email,
        userPhoto: user.photoURL || "https://firebasestorage.googleapis.com/v0/b/swinter-500.appspot.com/o/image-removebg-preview%20(1).png?alt=media&token=1964fc41-b894-4fe3-8c1b-17cba31200c0", // Use default if photoURL is null
        userUid: user.uid
      });
    }

    window.location.href = "/home";
    message.success("Successfully logged in");
  } catch (error) {
    message.error(error.message);  // Ensure the error message is displayed correctly
  }
};

export default SignUpLogin;
