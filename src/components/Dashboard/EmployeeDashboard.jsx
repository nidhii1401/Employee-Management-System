import React from 'react'
import Header from '../Common/Header'
import TaskNums from '../Common/TaskNums'
import ListTasks from '../TaskList/ListTasks'

const EmployeeDashboard = () => {
  return (
    <div>
      <div className='p-10 bg-[#1C1C1C] h-screen'>
        <Header/>
        <TaskNums/>
        <ListTasks/>
      </div>
    </div>
  )
}

export default EmployeeDashboard