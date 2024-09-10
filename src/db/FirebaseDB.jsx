import { db } from "@/firebase/config";
import { doc, getDoc } from "firebase/firestore";

export const getData = async () => {
  // Ensure this runs on the client-side
  if (typeof window !== 'undefined') {
    const UID = localStorage.getItem("UID"); // Make sure you are using the correct key for UID

    if (UID) {
      try {
        const docRef = doc(db, "Users", UID);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          return docSnap.data(); // Return the user data
        } else {
          console.error("No such document!");
          return null;
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
        return null;
      }
      console.log(UID)
    } else {
      console.error("UID not found in localStorage");
      return null;
    }
  }
  return null;
};
