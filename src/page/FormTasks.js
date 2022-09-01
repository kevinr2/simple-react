import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../features/tasks/taskSlice';
import { v4 as uuid } from 'uuid'

const FormTasks = () => {
    const dispatch = useDispatch();
    const [task, setTaks] = useState({
        title: "",
        description: ""
    })
    const handleChange = (e) => {
        setTaks({
            ...task,
            [e.target.name]: e.target.value
        });

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTask({
            ...task,
            id: uuid()
        }))
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="name tasks" onChange={handleChange} />
                <textarea name="description" placeholder="description" onChange={handleChange} />
                <button type='submit'>save</button>
            </form>
        </div>
    )
}

export default FormTasks