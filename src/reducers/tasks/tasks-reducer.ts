import { ITask } from "../../../shared/types/i-task";
import { append, filter, findIndex, lensProp, merge, propEq, remove, set, update } from 'ramda';
import { TaskActionsTypes } from "./task-actions";
import { filterTypes } from "../../types/filter-enum";

interface ITaskReducerState {
    tasks: ITask[];
    filteredTasks: ITask[];
    selectedTaskId: string | null;
    test?: any
}

const initialState: ITaskReducerState = {
    tasks: [],
    filteredTasks: [],
    selectedTaskId: null,
};

const taskReducer = (state: ITaskReducerState = initialState, action): ITaskReducerState => {
    switch (action.type) {
        case TaskActionsTypes.FETCH_TASKS:
            return merge(state, { tasks: action.payload, filteredTasks: action.payload });
        case TaskActionsTypes.CREATE_TASK:
            return merge(
                state,
                {
                    tasks: append(action.payload, state.tasks),
                    filteredTasks: append(action.payload, state.tasks)
                }
            );
        case TaskActionsTypes.SELECT_TASK:
            return set(lensProp('selectedTaskId'), action.payload, state);
        case TaskActionsTypes.REPLACE_TASK:
            return merge(
                state,
                {
                    tasks: update(
                        findIndex(propEq('id', action.payload.id), state.tasks),
                        action.payload,
                        state.tasks),
                    filteredTasks: update(
                        findIndex(propEq('id', action.payload.id), state.tasks),
                        action.payload,
                        state.tasks),
                    selectedTaskId: null
                }
            );
        case TaskActionsTypes.REMOVE_TASK:
            let updatedTasks = remove(
                findIndex(propEq('id', action.payload), state.tasks),
                1,
                state.tasks);
            return merge(state,
                {
                    tasks: updatedTasks,
                    filteredTasks: updatedTasks
                }
            );
        case TaskActionsTypes.FILTER_TASKS:
            switch (action.payload) {
                case filterTypes.all:
                    return set(
                        lensProp('filteredTasks'),
                        [...state.tasks],
                        state
                    );
                case filterTypes.complete:
                    return set(
                        lensProp('filteredTasks'),
                        filter((task: ITask) => task.complete, [...state.tasks]),
                        state
                    );
                case filterTypes.incomplete:
                    return set(
                        lensProp('filteredTasks'),
                        filter((task: ITask) => !task.complete, [...state.tasks]),
                        state
                    );
                default:
                    return state;
            }
        default:
            return state;
    }
}

export default taskReducer;
