import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTask } from '../features/tasks/taskSlice'
import { Link } from 'react-router-dom'

const Tasks = () => {
    const taskState = useSelector(state => state.tasks)
    console.log(taskState)
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteTask(id))
    }
    return (
        <div className='w-4/6 '>
            <header className='flex justify-between items-center py-4'>
                <h1>TASKS - {taskState.length}</h1>
                <Link to="/create-task" className='bg-indigo-800 px-2 py-1 text-sm rounded-sm'>Create Tasks</Link>
            </header>
            <div className='grid grid-cols-3 gap-4'>
                {taskState.map(tasks => (
                    <div key={tasks.id} className="bg-neutral-800 rounded-md p-4 ">
                        <header className='flex justify-between'>
                            <h3>{tasks.title}</h3>
                            <div className='flex gap-2'>
                                <Link
                                    to={`/edit-task/${tasks.id}`}
                                    className="bg-zinc-600 px-2 py-1 text-sm rounded-md"
                                >edit
                                </Link>
                                <button onClick={() => handleDelete(tasks.id)}
                                    className="bg-red-500 px-2 py-1 text-sm rounded-md"
                                >delete</button>
                            </div>
                        </header>
                        <p>{tasks.description}</p>
                    </div>

                ))
                }
            </div>
        </div>
    )
}

export default Tasks