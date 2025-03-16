import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTasks = () => {
  const [userData, setUserData] = useContext(AuthContext);
  // console.log(userData.employees);

  return (
    <div id="allTasks" className="bg-[#1c1c1c] p-4 mt-10 rounded ">
      <div className="bg-red-400 py-2 px-4 mb-2 flex justify-between rounded">
        <h3 className="text-lg font-medium underline w-1/5">Employee Name</h3>
        <h3 className="text-lg font-medium underline w-1/5">New Task</h3>
        <h3 className="text-lg font-medium underline w-1/5">Active Task</h3>
        <h3 className="text-lg font-medium underline w-1/5">Completed</h3>
        <h3 className="text-lg font-medium underline w-1/5">Failed</h3>
      </div>

      <div className="h-[80%]">
        {userData.map(function (elem, idx) {
          return (
            <div
              key={idx}
              className="border-2 border-emerald-600 py-2 px-4 mb-2 flex justify-between rounded"
            >
              <h3 className="text-lg font-medium w-1/5 ">{elem.firstName}</h3>
              <h3 className="text-lg font-medium w-1/5 ">
                {elem.taskCounts.newTask}
              </h3>
              <h3 className="text-lg font-medium  w-1/5 ">
                {elem.taskCounts.newTask}
              </h3>
              <h3 className="text-lg font-medium  w-1/5 ">
                {elem.taskCounts.completed}
              </h3>
              <h3 className="text-lg font-medium  w-1/5 ">
                {elem.taskCounts.failed}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTasks;
