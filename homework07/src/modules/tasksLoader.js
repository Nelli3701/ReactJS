import {createAsyncThunk} from "@reduxjs/toolkit";
import {tasks} from "../data/tasks";

export const tasksLoader = createAsyncThunk(
    'task/tasksLoader', async () => {
        return await new Promise(
            resolve => setTimeout(() => resolve(tasks), 1000)
        ).then(tasks => tasks);
    }
);