import React, { Component } from 'react';
import { connect } from "react-redux";
import { ITask } from "../../shared/types/i-task";
import { createTask, deleteTask, fetchTasks, selectTask, updateTask } from "../reducers/tasks/task-actions";
import TaskItem from "../components/Task-Item";
import TaskForm from "../components/Task-Form";

type ITaskListContainerProps = {
    tasks?: ITask[];
    selectedTaskId;
    fetchItems?: () => any;
    selectTask?: (id: string) => void;
    deleteTask?: (id: string) => void;
    createTask?: (task: ITask) => void
    updateTask?: (task: ITask) => void
}

const styles = {
    containerStyle: {
        width: '75%'
    }
}

class TaskListContainer extends Component<ITaskListContainerProps, {}> {

    public props: ITaskListContainerProps;

    constructor(props) {
        super(props);
        this.selectTaskForEditing = this.selectTaskForEditing.bind(this);
        this.updateTask = this.updateTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
        this.createTask = this.createTask.bind(this);
    }

    componentDidMount() {
        this.props.fetchItems();
    }

    selectTaskForEditing(id) {
        this.props.selectTask(id);
    }

    createTask(newTask: ITask) {
        this.props.createTask(newTask);
    }

    updateTask(task: ITask) {
        this.props.updateTask(task);
    }

    deleteTask(id: string) {
        this.props.deleteTask(id);
    }

    render() {
        return (
            <div style={styles.containerStyle}>
                <h1>Task list</h1>
                <div>
                    <TaskForm createTask={this.createTask}/>
                </div>
                <div>
                    {
                        this.props.tasks.map((task: ITask) => (
                            <TaskItem key={task.id}
                                      task={task}
                                      selectedTaskId={this.props.selectedTaskId}
                                      selectTask={this.selectTaskForEditing}
                                      updateTask={this.updateTask}
                                      deleteTask={this.deleteTask}/>
                        ))
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps): Partial<ITaskListContainerProps> => ({
    tasks: state.tasks.tasks,
    selectedTaskId: state.tasks.selectedTaskId
});

const mapDispatchToProps = (dispatch): Partial<ITaskListContainerProps> => {
    return {
        fetchItems: () => dispatch(fetchTasks(dispatch)),
        selectTask: (id: string) => dispatch(selectTask(dispatch, id)),
        createTask: (task: ITask) => dispatch(createTask(dispatch, task)),
        updateTask: (task: ITask) => dispatch(updateTask(dispatch, task)),
        deleteTask: (id: string) => dispatch(deleteTask(dispatch, id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskListContainer)
;
