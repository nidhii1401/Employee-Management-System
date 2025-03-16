import React from 'react'
import Header from '../Common/Header'
import TaskNums from '../Common/TaskNums'
import ListTasks from '../TaskList/ListTasks'

const EmployeeDashboard = (props) => {
  // console.log(props.data)
  return (
    <div>
      <div className='p-10 bg-[#1C1C1C] h-screen'>
        <Header changeUser = {props.changeUser} data = {props.data}/>
        <TaskNums data = {props.data}/>
        <ListTasks data = {props.data}/>
      </div>
    </div>
  )
}

export default EmployeeDashboard