import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

const SESSION_TIMEOUT = 24 * 60 * 60 * 1000; // 1 day in milliseconds

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [userid, setUserid] = useState(null);
  const [sessionExpiration, setSessionExpiration] = useState(null);
  const [loading, setLoading] = useState(true); // NEW

  useEffect(() => {
    const storedExpiration = localStorage.getItem("sessionExpiration");
    const storedUser = localStorage.getItem("user");
    const storedUserid = localStorage.getItem("userid");

    if (storedExpiration && storedUser && storedUserid) {
      const currentTime = new Date().getTime();
      if (currentTime < parseInt(storedExpiration, 10)) {
        setIsLoggedIn(true);
        setUser(JSON.parse(storedUser));
        setUserid(storedUserid);
        setSessionExpiration(parseInt(storedExpiration, 10));
      } else {
        logout();
      }
    }
    setLoading(false); // NEW - ensure this runs after session check
  }, []);

  useEffect(() => {
    if (isLoggedIn && sessionExpiration) {
      const currentTime = new Date().getTime();
      const timeLeft = sessionExpiration - currentTime;
      if (timeLeft > 0) {
        const timer = setTimeout(logout, timeLeft);
        return () => clearTimeout(timer);
      } else {
        logout();
      }
    }
  }, [isLoggedIn, sessionExpiration]);

  const login = (userData) => {
    const expirationTime = new Date().getTime() + SESSION_TIMEOUT;
    setIsLoggedIn(true);
    setUser(userData);
    setUserid(userData.user_id);
    setSessionExpiration(expirationTime);

    localStorage.setItem("sessionExpiration", expirationTime);
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("userid", userData.user_id);
  };

  const logout = () => {
    window.confirm("Are you sure you want to Log out?")
    setIsLoggedIn(false);
    setUser(null);
    setUserid(null);
    setSessionExpiration(null);
    localStorage.removeItem("sessionExpiration");
    localStorage.removeItem("user");
    localStorage.removeItem("userid");
    window.location.href = '/Login';
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, userid, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
