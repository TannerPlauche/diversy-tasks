import axios from 'axios';
import { AxiosResponse } from 'axios';
import { ITask } from "../../../shared/types/i-task";
import { IAction } from "../../../shared/types/i-action";
import { filterTypes } from "../../types/filter-enum";

export enum TaskActionsTypes {
    CREATE_TASK = 'CREATE_TASK',
    FETCH_TASKS = 'FETCH_TASKS',
    SELECT_TASK = 'SELECT_TASK',
    REPLACE_TASK = 'REPLACE_TASK',
    REMOVE_TASK = 'REMOVE_TASK',
    FILTER_TASKS = 'FILTER_TASKS',
}

export const fetchTasks = (dispatch) => {
    return async () => {
        axios.get("/api/tasks").then(response => {
            dispatch(setTasks(response.data));
        });
    };
};

const setTasks = (payload: ITask[]) => ({type: TaskActionsTypes.FETCH_TASKS, payload: payload});

export const createTask = (dispatch, newTask: ITask) => {
    return async (): Promise<void> => {
        axios.post('api/tasks', newTask).then((response: AxiosResponse<ITask>) => {
            dispatch(addTask(response.data))
        })
    }
}

const addTask = (newTask: ITask): IAction => ({type: TaskActionsTypes.CREATE_TASK, payload: newTask});

export const selectTask = (dispatch, id: string) => dispatch({type: TaskActionsTypes.SELECT_TASK, payload: id});

export const updateTask = (dispatch, updatedTask: ITask) => {
    return async () => {
        axios.put(`api/tasks/${updatedTask.id}`, updatedTask).then((response: AxiosResponse<ITask>) => {
            dispatch(replaceTask(updatedTask));
        })
    }
}

const replaceTask = (updatedTask: ITask): IAction => ({type: TaskActionsTypes.REPLACE_TASK, payload: updatedTask});


export const deleteTask = (dispatch, id: string) => {
    return async () => {
        axios.delete(`api/tasks/${id}`).then((response: AxiosResponse<ITask>) => {
            dispatch(removeTask(id));
        })
    }
}

const removeTask = (id: string): IAction => ({type: TaskActionsTypes.REMOVE_TASK, payload: id});

export const filterTasks = (dispatch, filter: filterTypes) => dispatch({type: TaskActionsTypes.FILTER_TASKS, payload: filter});
