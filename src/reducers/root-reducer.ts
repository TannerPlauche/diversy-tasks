import {combineReducers} from 'redux'
import taskReducer from "./tasks/tasks-reducer";


const rootReducer = combineReducers({
    tasks: taskReducer
})

export default rootReducer;
