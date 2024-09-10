"use client"
import { auth, googleProvider, db } from '@/firebase/config'
import { message } from 'antd'
import { signInWithPopup } from 'firebase/auth'
import { setDoc, doc, getDoc } from 'firebase/firestore'


const GoogleLogin = async () => {
    try {
        const result = await signInWithPopup(auth, googleProvider);
        const user = result.user;
        const docRef = doc(db, "Users", user.uid);
        const docSnap = await getDoc(docRef);

        localStorage.setItem("Name", user.displayName);
        localStorage.setItem("Email", user.email);
        localStorage.setItem("Photo", user.photoURL);
        localStorage.setItem("UID", user.uid);
        if (!docSnap.exists()) {
            await setDoc(docRef, {
                userName: user.displayName,
                userEmail: user.email,
                userPhoto: user.photoURL,
                userUid: user.uid
            });
        }
        window.location.href = "/home"
        message.success("Successfully logged in")
    } catch (error) {
        message.error(error.message);
    }
};

export default GoogleLogin;