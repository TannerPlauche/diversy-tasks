import React, { useState } from 'react';
import { ITask } from "../../shared/types/i-task";

interface ITaskFormProps {
    task?: ITask,
    handleSave?: (task: ITask) => void,
    handleEmitUpdate?: (task: ITask) => void
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
    saveButtonStyle: {
        marginTop: 7
    },
    updateFormStyle: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '60%',
        alignItems: 'center',
        marginLeft: '20%',
        marginBottom: 20,
    } as React.CSSProperties
}

const TaskForm = (props: ITaskFormProps) => {
    let emptyTask: ITask = { title: '', description: '', complete: false };
    let [newTask, setNewTask] = useState(props.task ? props.task : emptyTask);

    const save = () => {
        props.handleSave(newTask);
        setNewTask(emptyTask);
    }

    const handleFormUpdate = (event) => {
        let field = event.target.name;
        newTask = { ...newTask, [field]: event.target.value }
        if (props.handleEmitUpdate) {
            emitUpdate(newTask)
        }
        setNewTask(newTask);
    }

    const emitUpdate = (task: ITask) => {
        props.handleEmitUpdate(task);
    }

    return (
        <div>
            < div style={styles.updateFormStyle}>

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
                {!props.task &&
                <button className="btn btn-xs btn-success"
                        style={styles.saveButtonStyle}
                        onClick={save}>Save
                </button>
                }
            </div>
        </div>
    );
};

export default TaskForm;
