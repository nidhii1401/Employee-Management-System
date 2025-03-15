import React from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashBoard from "./components/Dashboard/AdminDashBoard";

const App = () => {
  return (
    <>
      {/* <Login /> */}
      {/* <EmployeeDashboard/> */}
      <AdminDashBoard/>
    </>
  );
};

export default App;
