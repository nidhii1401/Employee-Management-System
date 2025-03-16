import React from "react";

const AcceptTask = ({data}) => {
  return (
    <div className="flex-shrink-0 h-full p-5 w-[300px] bg-red-400 rounded-xl ">
      <div className="flex justify-between items-center">
        <h4 className="text-md bg-red-600 px-3 py-1 rounded">{data.category}</h4>
        <h4 className="text-md">{data.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{data.taskTitle}</h2>
      <p className="text-sm mt-4">
        {data.taskDescription}
      </p>
      <div className="m-5 flex items-center justify-evenly gap-4 mb-5">
        <button className="bg-green-500 w-full rounded-lg py-1 px-2 text-md">Mark as Completed</button>
        <button className="bg-red-500 w-full rounded-lg py-1 px-2 text-md">Mark as Failed</button>
      </div>
    </div>
  );
};

export default AcceptTask;
