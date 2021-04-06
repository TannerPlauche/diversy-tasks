import { ITask } from "../../../shared/types/i-task";
import { findIndex, lensProp, merge, prepend, propEq, remove, set, update } from 'ramda';
import { TaskActionsTypes } from "./task-actions";

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
            return set(lensProp('tasks'), action.payload, state);
        case TaskActionsTypes.CREATE_TASK:
            return set(
                lensProp('tasks'),
                prepend(action.payload, state.tasks),
                state
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
                    selectedTaskId: null
                }
            );
        case TaskActionsTypes.REMOVE_TASK:
            return set(
                lensProp('tasks'),
                remove(
                    findIndex(propEq('id', action.payload.id), state.tasks),
                    1,
                    state.tasks
                ),
                state);
        default:
            return state;
    }
}

export default taskReducer;
