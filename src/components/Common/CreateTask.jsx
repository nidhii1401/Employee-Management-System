import React,{useState, useContext} from "react";
import { AuthContext } from "../../context/AuthProvider";
const CreateTask = () => {

  const [userData, setUserData] = useContext(AuthContext);
  

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [taskDesc, setTaskDesc] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");
  const [newTask, setNewTask] = useState({})

  const submitHandler = (e) => {
    e.preventDefault()

    setNewTask({ taskTitle, setTaskDesc, taskDate, category, active: false, newTask: true, failed: false, completed: false })

    const data = userData

    data.forEach(function (elem) {
        if (assignTo == elem.firstName) {
            elem.tasks.push(newTask)
            elem.taskCounts.newTask = elem.taskCounts.newTask + 1
        }
    })
    setUserData(data)
    console.log(data);

    setTaskTitle('')
    setCategory('')
    setAssignTo('')
    setTaskDate('')
    setTaskDesc('')

}
  return (
    <div className="bg-[#1c1c1c] mt-10 p-5 rounded">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex flex-wrap w-full items-start justify-between"
      >
        <div className="w-1/2">
          <div>
            <h3 className="text-md text-gray-300 mb-0.5">Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e) => {
                setTaskTitle(e.target.value);
              }}
              type="text"
              placeholder="Enter your task"
              className="text-md py-1 px-2 w-4/5 rounded outline-none border-[1px] border-gray-400 mb-4 "
            />
          </div>

          <div>
            <h3 className="text-md text-gray-300 mb-0.5">Date</h3>
            <input
              value={taskDate}
              onChange={(e) => {
                setTaskDate(e.target.value);
              }}
              type="date"
              className="text-md py-1 px-2 w-4/5 rounded outline-none border-[1px] border-gray-400 mb-4 "
            />
          </div>
          <div>
            <h3 className="text-md text-gray-300 mb-0.5">Assing to</h3>
            <input
              value={assignTo}
              onChange={(e) => {
                setAssignTo(e.target.value);
              }}
              type="text"
              placeholder="Enter employee name"
              className="text-md py-1 px-2 w-4/5 rounded outline-none border-[1px] border-gray-400 mb-4 "
            />
          </div>
          <div>
            <h3 className="text-md text-gray-300 mb-0.5">Category</h3>
            <input
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              className="text-md py-1 px-2 w-4/5 rounded outline-none border-[1px] border-gray-400 mb-4 "
              type="text"
              placeholder="Enter employee category"
            />
          </div>
        </div>

        <div className="w-1/2">
          <h3 className="text-md text-gray-300 mb-0.5"> Description </h3>
          <textarea
          value={taskDesc}
          onChange={(e)=>{
            setTaskDesc(e.target.value)
          }}
            className="w-full h-[15px] text-md py-2 px-4 rounded outline-none border-2 border-white"
            rows="10"
            cols="30"
          ></textarea>
          <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
