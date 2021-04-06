import React, { useState } from 'react';
import { ITask } from "../../shared/types/i-task";

interface ITaskFormProps {
    createTask: (task: ITask) => void
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
        marginLeft: '20%'
    } as React.CSSProperties
}

const TaskForm = (props: ITaskFormProps) => {
    let [newTask, setNewTask] = useState({title: '', description: '', complete: false});

    const createTask = () => {
        props.createTask(newTask);
    }

    const handleFormUpdate = (event) => {
        let field = event.target.name;
        newTask = {...newTask, [field]: event.target.value}
        setNewTask(newTask);
    }

    return (
        <div>
            < div style={styles.updateFormStyle}>
                <button className="btn btn-xs btn-success"
                        style={styles.saveButtonStyle}
                        onClick={createTask}>Create
                </button>
                <label htmlFor="title">Task</label>
                <input id="title"
                       name="title"
                       type="text"
                       value={newTask.title}
                       onChange={handleFormUpdate}/>
                <label htmlFor="desc">Description</label>
                <input id="desc"
                       name="description"
                       type="text"
                       value={newTask.description}
                       onChange={handleFormUpdate}/>
                <label htmlFor="date">Due</label>
            </div>
        </div>
    );
};

export default TaskForm;
