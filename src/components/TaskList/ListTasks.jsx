import React from "react";

const ListTasks = () => {
  return (
    <div
      id="tasklist"
      className="h-[55%] overflow-x-auto w-full py-5 mt-10 flex items-center justify-start gap-5 flex-nowrap"
    >
      <div className="flex-shrink-0 h-full p-5 w-[300px] bg-red-400 rounded-xl ">
        <div className="flex justify-between items-center">
          <h4 className="text-md bg-red-600 px-3 py-1 rounded">High</h4>
          <h4 className="text-md">14 Jan, 2025</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Chai banani hai</h2>
        <p className="text-sm mt-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
          itaque harum minus quis sunt eligendi!
        </p>
      </div>

      <div className="flex-shrink-0 h-full p-5 w-[300px] bg-green-400 rounded-xl ">
        <div className="flex justify-between items-center">
          <h4 className="text-md bg-red-600 px-3 py-1 rounded">High</h4>
          <h4 className="text-md">14 Jan, 2025</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Chai banani hai</h2>
        <p className="text-sm mt-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
          itaque harum minus quis sunt eligendi!
        </p>
      </div>

      <div className="flex-shrink-0 h-full p-5 w-[300px] bg-blue-400 rounded-xl ">
        <div className="flex justify-between items-center">
        <h4 className='text-md bg-red-600 px-3 py-1 rounded'>High</h4>

          <h4 className="text-md">14 Jan, 2025</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Chai banani hai</h2>
        <p className="text-sm mt-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
          itaque harum minus quis sunt eligendi!
        </p>
      </div>

      <div className="flex-shrink-0 h-full p-5 w-[300px] bg-yellow-400 rounded-xl ">
        <div className="flex justify-between items-center">
        <h4 className='text-md bg-red-600 px-3 py-1 rounded'>High</h4>

          <h4 className="text-md">14 Jan, 2025</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Chai banani hai</h2>
        <p className="text-sm mt-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
          itaque harum minus quis sunt eligendi!
        </p>
      </div>

      <div className="flex-shrink-0 h-full p-5 w-[300px] bg-orange-400 rounded-xl ">
        <div className="flex justify-between items-center">
        <h4 className='text-md bg-red-600 px-3 py-1 rounded'>High</h4>

          <h4 className="text-md">14 Jan, 2025</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Chai banani hai</h2>
        <p className="text-sm mt-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
          itaque harum minus quis sunt eligendi!
        </p>
      </div>

      {/* <div className="flex-shrink-0 h-full w-[300px] bg-yellow-300 rounded-xl"></div>
        <div className="flex-shrink-0 h-full w-[300px] bg-yellow-300 rounded-xl"></div>
        <div className="flex-shrink-0 h-full w-[300px] bg-yellow-300 rounded-xl"></div>
        <div className="flex-shrink-0 h-full w-[300px] bg-yellow-300 rounded-xl"></div>
        <div className="flex-shrink-0 h-full w-[300px] bg-yellow-300 rounded-xl"></div>
        <div className="flex-shrink-0 h-full w-[300px] bg-yellow-300 rounded-xl"></div> */}
    </div>
  );
};

export default ListTasks;
