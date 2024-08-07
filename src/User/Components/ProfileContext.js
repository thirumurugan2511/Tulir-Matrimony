import React, { createContext, useState, useEffect } from 'react';

const ProfileContext = createContext();

const ProfileProvider = ({ children }) => {
  const [profileCount, setProfileCount] = useState(() => {
    const storedCount = localStorage.getItem('profileCount');
    const parsedCount = parseInt(storedCount, 10);
    return !isNaN(parsedCount) ? parsedCount : 3; // Default to 3 if no valid stored count
  });

  const [validityDate, setValidityDate] = useState(() => {
    const storedDate = localStorage.getItem('validityDate');
    return storedDate !== null ? new Date(storedDate) : null;
  });

  useEffect(() => {
    if (profileCount !== undefined && profileCount !== null && !isNaN(profileCount)) {
      localStorage.setItem('profileCount', profileCount.toString());
    }
  }, [profileCount]);

  useEffect(() => {
    if (validityDate !== undefined && validityDate !== null) {
      localStorage.setItem('validityDate', validityDate.toISOString());
    }
  }, [validityDate]);

  return (
    <ProfileContext.Provider value={{ profileCount, setProfileCount, validityDate, setValidityDate }}>
      {children}
    </ProfileContext.Provider>
  );
};

export { ProfileContext, ProfileProvider };
