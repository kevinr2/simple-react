import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTask } from '../features/tasks/taskSlice'

const Tasks = () => {
    const taskState = useSelector(state => state.tasks)
    console.log(taskState)
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteTask(id))
    }
    return (
        <div>
            {
                taskState.map(tasks => (
                    <div key={tasks.id}>
                        <h3>{tasks.title}</h3>
                        <p>{tasks.description}</p>
                        <button onClick={() => handleDelete(tasks.id)}>delete</button>
                    </div>
                ))
            }
        </div>
    )
}

export default Tasks