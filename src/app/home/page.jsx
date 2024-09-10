"use client"
import React, { useEffect, useState } from 'react';
import { getData } from '@/db/FirebaseDB';

const Page = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // This ensures that the code runs on the client side where localStorage is available
    const fetchUserData = async () => {
      const data = await getData();
      setUserData(data);
    };

    fetchUserData();
  }, []);

  return (
    <div>
      {userData ? (
        <div>
          <h1>User Data</h1>
          <p>Name: {userData.userName}</p>
          <p>UID: {userData.userUid}</p>
          <p>Email: {userData.userEmail}</p>
          <img src={userData.userPhoto} alt="" />
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default Page;
