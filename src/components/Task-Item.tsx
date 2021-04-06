import React, { useState } from 'react';
import { ITask } from "../../shared/types/i-task";
import { type } from "os";

interface ITaskItemProps {
    task: ITask,
    selectedTaskId: string,
    selectTask: (id: string) => void,
    updateTask: (task: ITask) => void
    deleteTask: (id: string) => void
}

const styles = {
    itemStyle: {
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
    let {task} = props;
    let [updatedTask, setUpdatedTask] = useState({...task});
    let isSelected = props.task.id === props.selectedTaskId;

    const selectTask = () => props.selectTask(task.id);

    const cancelSelection = () => props.selectTask(null);

    const handleFormUpdate = (event) => {
        let field = event.target.name;
        updatedTask = {...updatedTask, [field]: event.target.value}
        setUpdatedTask(updatedTask);
    }

    const toggleComplete = (event) => {
        updatedTask = {...updatedTask, complete: event.target.checked};
        setUpdatedTask(updatedTask);
        updateTask();
    }

    const updateTask = () => {
        props.updateTask(updatedTask);
    }

    const deleteTask = () => {
        props.deleteTask(task.id);
    }

    return (
        <div>
            {
                isSelected ?
                < div style={styles.updateFormStyle}>
                    <button className="btn btn-xs btn-success"
                            style={styles.saveButtonStyle}
                            onClick={updateTask}>save
                    </button>
                    <button className="btn btn-xs btn-secondary"
                            style={styles.editButtonStyle}
                            onClick={cancelSelection}>cancel
                    </button>
                    <button className="btn btn-xs btn-danger"
                            style={styles.deleteButtonStyle}
                            onClick={deleteTask}>Delete
                    </button>
                    <label htmlFor="title">Task</label>
                    <input id="title"
                           name="title"
                           type="text"
                           value={updatedTask.title}
                           onChange={handleFormUpdate}/>
                    <label htmlFor="desc">Description</label>
                    <input id="desc"
                           name="description"
                           type="text"
                           value={updatedTask.description}
                           onChange={handleFormUpdate}/>
                    <label htmlFor="date">Due</label>
                </div>
                           :
                <div className="task-item"
                     style={styles.itemStyle}>
                    <button className="btn btn-xs btn-primary"
                            style={isSelected ? styles.none : styles.editButtonStyle}
                            onClick={selectTask}>edit
                    </button>
                    < div>
                        < h3 className="task-title"
                             style={{
                                 ...styles.headerStyle,
                                 textDecoration: task.complete ? 'strikethrough' : 'none'
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
