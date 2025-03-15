import React from 'react'

const CreateTask = () => {
  return (
    
    <div className="bg-[#1c1c1c] mt-10 p-5 rounded">
    <form className="flex flex-wrap w-full items-start justify-between">
      <div className="w-1/2">
        <div>
          <h3 className="text-md text-gray-300 mb-0.5">Task Title</h3>
          <input
            type="text"
            placeholder="Enter your task"
            className="text-md py-1 px-2 w-4/5 rounded outline-none border-[1px] border-gray-400 mb-4 "
          />
        </div>

        <div>
          <h3 className="text-md text-gray-300 mb-0.5">Date</h3>
          <input
            type="date"
            className="text-md py-1 px-2 w-4/5 rounded outline-none border-[1px] border-gray-400 mb-4 "
          />
        </div>
        <div>
          <h3 className="text-md text-gray-300 mb-0.5">Assing to</h3>
          <input
            type="text"
            placeholder="Enter employee name"
            className="text-md py-1 px-2 w-4/5 rounded outline-none border-[1px] border-gray-400 mb-4 "
          />
        </div>
        <div>
          <h3 className="text-md text-gray-300 mb-0.5">Category</h3>
          <input
            className="text-md py-1 px-2 w-4/5 rounded outline-none border-[1px] border-gray-400 mb-4 "
            type="text"
            placeholder="Enter employee category"
          />
        </div>
      </div>

      <div className="w-1/2">
        <h3 className="w-full h-44 text-md py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400">
          {" "}
          Description{" "}
        </h3>
        <textarea
          className="w-full h-[15px] text-md py-2 px-4 rounded outline-none borderte"
          rows="10"
          cols="10"
        ></textarea>
        <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">
          Create Task
        </button>
      </div>
    </form>
  </div>
  )
}

export default CreateTask