import React from 'react';
import './App.css';
import TaskListContainer from "./containers/Task-List-Container";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <TaskListContainer/>
            </header>
        </div>
    );
}

export default App;
