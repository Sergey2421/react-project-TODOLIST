import React from 'react';
import Task from "./Task/Task";
import Css from "./Tasks.module.css"

const Tasks = (props) => {
    return (
        <div className={Css.container}>
            <Task/>
            <Task/>
            <Task/>
        </div>
    )
}

export default Tasks;