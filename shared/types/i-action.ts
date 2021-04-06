import { TaskActionsTypes } from "../../src/reducers/tasks/task-actions";

type ActionType = TaskActionsTypes | 'OtherTypes'

export interface IAction {
    type: ActionType;
    payload: any;
}
