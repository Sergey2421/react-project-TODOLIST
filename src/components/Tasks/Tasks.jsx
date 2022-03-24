import React from 'react';
import Css from "./Tasks.module.css"
import Task from "./Task/Task";
import CompletedTask from "./CompletedTask/CompletedTask";


const Tasks = (props) => {

    let taskElements = props.state.taskElements.map((e, i) => <Task text={e} state={props.state} id={i}/>)

    let completedTasks = props.state.completedTasks.map((e, i) => <CompletedTask text={e} state={props.state} id={i}/>)

    return (
        <div className={Css.container}>
            <div className={Css.block}>
                {taskElements.length ? <p>Tasks:</p> : null}
                {taskElements}
            </div>
            {taskElements.length ? <hr className={Css.line}/> : null}
            <div className={Css.block}>
                {completedTasks.length ? <p>Completed:</p>: null}
                {completedTasks}
            </div>
        </div>
    )
}

export default Tasks;