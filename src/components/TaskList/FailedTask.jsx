import React from "react";

const FailedTask = ({data}) => {
  return (
    <div className="flex-shrink-0 h-full p-5 w-[300px] bg-yellow-400 rounded-xl ">
      <div className="flex justify-between items-center">
        <h4 className="text-md bg-red-600 px-3 py-1 rounded">{data.category}</h4>

        <h4 className="text-md">{data.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{data.taskTitle}</h2>
      <p className="text-sm mt-4">
        {data.taskDescription}
      </p>
      <div className=" flex itmes-center justify-center m-5">
        <button className="bg-red-600 w-full rounded-lg py-1 px-2 text-md">
          Failed
        </button>
      </div>
    </div>
  );
};

export default FailedTask;
