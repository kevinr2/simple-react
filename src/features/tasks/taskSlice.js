import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {
        id: '1',
        title: 'tarea de casa',
        description: ' esta tarea es para la casa es organizar'
    },
    {
        id: '2',
        title: 'tarea estudio',
        description: ' tarea para el estudio'
    }
]


export const TaskSlices = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.push(action.payload)
        },
        deleteTask: (state, action) => {
            const taskFound = state.find(task => task.id === action.payload)
            if (taskFound) {
                state.splice(state.indexOf(taskFound), 1)
            }
        }
    }
})


export const { addTask, deleteTask } = TaskSlices.actions
export default TaskSlices.reducer