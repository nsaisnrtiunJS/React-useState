import React from 'react'
import { useState } from 'react'

const ToDoApp = () => {

    const [task, setTask] = useState('')
    const [value, setValue] = useState([])
    const [deleteTask, setDeleteTask] = useState('')
    const [editIndex, setEditIndex] = useState(null)
    const [editText, setEditText] = useState('')

    const handleTask = (e) => {
        setTask(e.target.value)
    }

    const handleValue = () => {
        setValue([...value, task])
        setTask('')
    }

    const handleDelete = (indexToDelete) => {
        let newValue = value.filter((item, index) => index !== indexToDelete)
        setValue(newValue)
    }

    const handleEdit = (index) => {
        setEditIndex(index)
        setEditText(value[index])
    }

    const handleSave = () => {
        const updatedTasks = [...value]

        updatedTasks[editIndex] = editText

        setValue(updatedTasks)
        setEditIndex(null)
        setEditText('')
    }




    return (
        <div className='max-w-xl mx-auto mt-10 bg-gray-200 shadow-xl rounded-2xl p-6'>

            <input value={task} onChange={handleTask} className='border border-gray-300 w-full px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500' placeholder='Enter a task' />

            <button onClick={task.length > 0 ? handleValue : () => alert('Please enter a task')} className='mt-3 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl font-semibold transition cursor-pointer'>Add Task</button>

            <ol>
                {
                    value.filter((item, index) =>
                        value.indexOf(item) === index).map((item, index) =>
                            <li key={index} className='flex justify-between items-center bg-gray-100 p-3 rounded-xl my-3 shadow-sm'>
                                {
                                    editIndex === index ? (
                                        <>
                                            <input
                                                value={editText}
                                                onChange={(e) => setEditText(e.target.value)}
                                                className='border px-2 py-1 rounded'
                                            />

                                            <button
                                                onClick={handleSave}
                                                className='bg-green-600 text-white px-3 py-1 rounded cursor-pointer'
                                            >
                                                Save
                                            </button>
                                        </>
                                    ) : (
                                        <>
                                            <span>{item}</span>

                                            <button
                                                onClick={() => handleEdit(index)}
                                                className='bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded cursor-pointer'
                                            >
                                                Edit
                                            </button>

                                            <button
                                                onClick={() => handleDelete(index)}
                                                className='bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded cursor-pointer'
                                            >
                                                Delete
                                            </button>
                                        </>
                                    )
                                }</li>)
                }
            </ol>

        </div>
    )
}

export default ToDoApp
