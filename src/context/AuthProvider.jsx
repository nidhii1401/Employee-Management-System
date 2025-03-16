import React, { createContext, useEffect, useState } from "react";
import { getLocalStorge, setLocalStorage } from "../utils/LocalStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    // localStorage.clear()
  const [userdata, setUserData] = useState(null);

  useEffect(() => {
    setLocalStorage()
    const { employees } = getLocalStorge();
    setUserData(employees);
  }, []);

  return (
    <div>
      <AuthContext.Provider value={[userdata,setUserData]}>
        {children}
        </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
