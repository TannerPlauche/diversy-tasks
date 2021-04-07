import React, { Component } from 'react';
import { connect } from "react-redux";
import { ITask } from "../../shared/types/i-task";
import {
    createTask,
    deleteTask,
    fetchTasks,
    filterTasks,
    selectTask,
    updateTask
} from "../reducers/tasks/task-actions";
import TaskItem from "../components/Task-Item";
import TaskForm from "../components/Task-Form";
import { filterTypes } from "../types/filter-enum";

type ITaskListContainerProps = {
    tasks?: ITask[];
    selectedTaskId;
    fetchItems?: () => any;
    selectTask?: (id: string) => void;
    deleteTask?: (id: string) => void;
    createTask?: (task: ITask) => void
    updateTask?: (task: ITask) => void
    filterTasks?: (filter: string) => void
}

const styles = {
    containerStyle: {
        width: '75%'
    },
    horizontal: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 30,
        paddingBottom: 10
    },
    radioStyle: {
        marginRight: 20
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
        this.filterTasks = this.filterTasks.bind(this);
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

    filterTasks(event) {
        let filter = event.target.value;
        this.props.filterTasks(filter);
    }

    render() {
        return (
            <div style={styles.containerStyle}>
                <h1>Task list</h1>
                <div>
                    <TaskForm handleSave={this.createTask}/>
                </div>
                <div>
                    <div style={styles.horizontal}>
                        <label htmlFor="allRadio">All</label>
                        <input type="radio"
                               id="allRadio"
                               style={styles.radioStyle}
                               name="filter"
                               onChange={this.filterTasks}
                               value={filterTypes.all}/>
                        <label htmlFor="completeRadio">Complete</label>
                        <input type="radio"
                               id="completeRadio"
                               style={styles.radioStyle}
                               name="filter"
                               onChange={this.filterTasks}
                               value={filterTypes.complete}/>
                        <label htmlFor="incompleteRadio">Incomplete</label>
                        <input type="radio"
                               id="incompleteRadio"
                               style={styles.radioStyle}
                               name="filter"
                               onChange={this.filterTasks}
                               value={filterTypes.incomplete}/>
                    </div>
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
    tasks: state.tasks.filteredTasks,
    selectedTaskId: state.tasks.selectedTaskId
});

const mapDispatchToProps = (dispatch): Partial<ITaskListContainerProps> => {
    return {
        fetchItems: () => dispatch(fetchTasks(dispatch)),
        selectTask: (id: string) => dispatch(selectTask(dispatch, id)),
        createTask: (task: ITask) => dispatch(createTask(dispatch, task)),
        updateTask: (task: ITask) => dispatch(updateTask(dispatch, task)),
        deleteTask: (id: string) => dispatch(deleteTask(dispatch, id)),
        filterTasks: (filter: filterTypes) => dispatch(filterTasks(dispatch, filter)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskListContainer);
