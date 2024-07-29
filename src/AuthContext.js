import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [userid, setUserid] = useState(null); // Add userid state

  const login = (userData) => {
    setIsLoggedIn(true);
    setUser(userData);
    setUserid(userData.user_id); // Set the userid
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
    setUserid(null); // Clear the userid
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, userid, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
