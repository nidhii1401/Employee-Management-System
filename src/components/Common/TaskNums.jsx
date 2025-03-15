import React from 'react'

const TaskNums = () => {
  return (
    <div className='flex mt-10 justify-between gap-5 w-full'>

        <div className='bg-red-400 py-6 px-9 w-[25%] rounded-xl'>
            <h2 className='text-4xl font-semibold'>0</h2>
            <h3 className='text-2xl font-medium'>New Task</h3>
        </div>

        <div className='bg-green-400 py-6 px-9 w-[25%] rounded-xl'>
            <h2 className='text-4xl font-semibold'>0</h2>
            <h3 className='text-2xl font-medium'>New Task</h3>
        </div>
        <div className='bg-yellow-400 py-6 px-9 w-[25%] rounded-xl'>
            <h2 className='text-4xl font-semibold'>0</h2>
            <h3 className='text-2xl font-medium'>New Task</h3>
        </div>
        <div className='bg-blue-400 py-6 px-9 w-[25%] rounded-xl'>
            <h2 className='text-4xl font-semibold'>0</h2>
            <h3 className='text-2xl font-medium'>New Task</h3>
        </div>

    </div>
  )
}

export default TaskNums