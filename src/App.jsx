import React, { useState, useEffect, useContext } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashBoard from "./components/Dashboard/AdminDashBoard";
import { getLocalStorge, setLocalStorage } from "./utils/LocalStorage";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useContext(AuthContext);
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }
  }, []);

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser("admin");
      console.log(user);
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (userData) {
      const employee = userData.find(
        (e) => email == e.email && password == e.password
      );
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data:employee})
        );
      }
    } else {
      alert("Invalid Credentials!");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? (
        <AdminDashBoard changeUser = {setUser} />
      ) : user == "employee" ? (
        <EmployeeDashboard changeUser = {setUser} data={loggedInUserData} />
      ) : null}
    </>
  );
};

export default App;
