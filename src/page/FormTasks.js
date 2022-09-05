import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTask, updateTask } from '../features/tasks/taskSlice';
import { v4 as uuid } from 'uuid'
import { useNavigate, useParams } from 'react-router-dom';

const FormTasks = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const params = useParams();
    const tasks = useSelector(state => state.tasks)
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
        if (params.id) {
            dispatch(updateTask(task))
        } else {
            dispatch(addTask({
                ...task,
                id: uuid()
            }))
        }
        navigate("/");
    }
    useEffect(() => {
        if (params.id) {
            setTaks(tasks.find((task) => task.id === params.id))
        }
    }, [tasks, params])
    return (
        <div>
            <form onSubmit={handleSubmit} className="bg-zinc-800 max-w-sm p-4">
                <label className="block text-sm font-bold">Task:</label>
                <input
                    type="text"
                    name="title"
                    placeholder="name tasks"
                    onChange={handleChange}
                    value={task.title}
                    className="w-full p-2 rounded-md bg-zinc-600 mb-2"
                />
                <label>
                    Description:
                    <textarea
                        type="text"
                        name="description"
                        onChange={handleChange}
                        value={task.description}
                        className="w-full p-2 rounded-md bg-zinc-600 mb-2"
                        placeholder="Write a description"
                    />
                </label>
                <button type='submit' className="bg-indigo-600 px-2 py-1">save</button>
            </form>
        </div>
    )
}

export default FormTasks