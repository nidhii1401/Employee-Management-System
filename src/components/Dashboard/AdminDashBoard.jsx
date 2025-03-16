import React from "react";
import Header from "../Common/Header";
import CreateTask from "../Common/CreateTask";
import AllTasks from "../Common/AllTasks";

const AdminDashBoard = (props) => {
  return (
    <div className="h-screen w-full p-10">
      <Header changeUser = {props.changeUser} />
      <CreateTask/>
      <AllTasks/>

    </div>
  );
};

export default AdminDashBoard;
