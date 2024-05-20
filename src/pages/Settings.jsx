// src/components/UserSettings.jsx
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

const UserSettings = () => {
  const [userData, setUserData] = useState(null);
  const userInfo = useSelector((state) => state.auth.userInfo);

  useEffect(() => {
    const fetchUserData = async () => {
      if (!userInfo || !userInfo.token) return;
      try {
        const response = await axios.get('/api/user/settings', {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        });
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data', error);
      }
    };

    fetchUserData();
  }, [userInfo]);

  if (!userInfo) {
    return <Navigate to="/login" />;
  }

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>User Settings</h1>
      <p>Email: {userData.email}</p>
      <p>Full Name: {userData.fullname}</p>
      {/* Add more user-specific settings here */}
    </div>
  );
};

export default UserSettings;
