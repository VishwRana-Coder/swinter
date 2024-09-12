// /app/config/uploadImages.js

import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "@/firebase/config"; // Ensure Firebase config is set up

// Function to upload multiple images to Firebase Storage and get their download URLs
export const uploadImages = async (fileList) => {
  const uploadPromises = fileList.map(async (fileWrapper) => {
    const file = fileWrapper.originFileObj; // Extract the actual file from the wrapper
    const storageRef = ref(storage, `posts/${file.name}`);
    const snapshot = await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(snapshot.ref);
    return downloadURL; // Return the download URL
  });

  const downloadURLs = await Promise.all(uploadPromises); // Wait for all uploads
  return downloadURLs; // Return array of URLs
};
