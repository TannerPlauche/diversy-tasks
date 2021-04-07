import React, { useState } from 'react';
import { ITask } from "../../shared/types/i-task";
import TaskForm from "./Task-Form";

interface ITaskItemProps {
    task: ITask,
    selectedTaskId: string,
    selectTask: (id: string) => void,
    updateTask: (task: ITask) => void
    deleteTask: (id: string) => void
}

const styles = {
    itemStyle: {
        minHeight: 70,
        padding: 7,
        borderColor: 'lightgray',
        borderWidth: 1,
        borderStyle: 'solid',
    },
    headerStyle: {
        padding: 0,
        margin: 0
    },
    descStyle: {
        minHeight: 30,
        padding: 0,
        margin: 0
    },
    editButtonStyle: {
        position: 'absolute',
        right: '14%',
    } as React.CSSProperties,
    saveButtonStyle: {
        position: 'absolute',
        right: '14%',
        marginTop: -100
    } as React.CSSProperties,
    deleteButtonStyle: {
        position: 'absolute',
        right: '14%',
        marginTop: 100
    } as React.CSSProperties,
    removeButtonStyle: {
        position: 'absolute',
        right: '14%',
        marginTop: 30,
    } as React.CSSProperties,
    completeButtonStyle: {
        position: 'absolute',
        right: '14%',
        marginTop: -17
    } as React.CSSProperties,
    none: {
        display: 'none'
    },
    updateFormStyle: {
        display: 'flex',
        flexDirection: 'column',
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '20%',
        backgroundColor: 'lightgray'
    } as React.CSSProperties
}

const TaskItem = (props: ITaskItemProps) => {
    let { task } = props;
    let [updatedTask, setUpdatedTask] = useState({ ...task });
    updatedTask = updatedTask as ITask;
    let isSelected = props.task.id === props.selectedTaskId;

    const selectTask = () => props.selectTask(task.id);

    const cancelSelection = () => props.selectTask(null);

    const toggleComplete = (event) => {
        updatedTask = { ...updatedTask, complete: event.target.checked };
        setUpdatedTask(updatedTask);
        updateTask(updatedTask);
    }

    const updateTask = (task?: ITask) => {
        props.updateTask(task);
    }

    const deleteTask = () => {
        props.deleteTask(task.id);
    }

    const handleEmitUpdate = (task: ITask) => {
        updatedTask = { ...task };
        setUpdatedTask(updatedTask);
    }

    return (
        <div>
            {
                isSelected ?
                    < div style={styles.updateFormStyle}>
                        <button className="btn btn-xs btn-success"
                                style={styles.saveButtonStyle}
                                onClick={() => updateTask(updatedTask)}>save
                        </button>
                        <button className="btn btn-xs btn-secondary"
                                style={styles.editButtonStyle}
                                onClick={cancelSelection}>cancel
                        </button>
                        <button className="btn btn-xs btn-danger"
                                style={styles.deleteButtonStyle}
                                onClick={deleteTask}>Delete
                        </button>
                        <TaskForm handleEmitUpdate={handleEmitUpdate}
                                  task={updatedTask}/>
                    </div>
                    :
                    <div className="task-item"
                         style={styles.itemStyle}>
                        <button className="btn btn-xs btn-primary"
                                style={isSelected ? styles.none : styles.editButtonStyle}
                                onClick={selectTask}>edit
                        </button>
                        {updatedTask.complete &&  <button className="btn btn-xs btn-danger"
                                style={styles.removeButtonStyle}
                                onClick={deleteTask}>Delete
                        </button>}
                        < div>
                            < h3 className="task-title"
                                 style={{
                                     ...styles.headerStyle,
                                     color: task.complete ? 'darkred' : 'none',
                                     textDecoration: task.complete ? 'line-through' : 'none',
                                     textDecorationColor: task.complete ? 'black' : 'white',
                                     textDecorationThickness: task.complete ? 3 : 0,
                                 }}>{task.title}</h3>
                            <p style={styles.descStyle}>{task.description}</p>
                        </div>
                        <input type="checkbox"
                               checked={updatedTask.complete}
                               onChange={toggleComplete}
                               style={isSelected ? styles.none : styles.completeButtonStyle}/>
                    </div>
            }
        </div>

    );
};

export default TaskItem;
