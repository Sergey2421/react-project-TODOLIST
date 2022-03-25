import React from 'react';
import Css from './Taks.module.css'
import {confirmAction, deleteAction, disableAction, editAction} from "../../../state/task_reducer";

const Task = (props) => {

    let taskText = React.createRef();

    function onTaskChange() {
        let action = editAction(taskText.current.value, props.id);
        props.state.dispatch(action);
    }

    function edit() {
        let action = disableAction(props.id);
        props.state.dispatch(action);
    }

    function confirm() {
        let action = confirmAction(props.id);
        props.state.dispatch(action);
    }

    function deleteTask() {
        let action = deleteAction(props.id);
        props.state.dispatch(action);
    }

    return (
        <div className={Css.container}>
            <input disabled={props.state.disabled[props.id]} ref={taskText} className={Css.input} type={'text'} value={props.text} onChange={onTaskChange}/>
            <div className={Css.buttons}>
                <button className={Css.button} onClick={confirm}><img className={Css.img} src={'https://free-png.ru/wp-content/uploads/2021/06/free-png.ru-39-450x450.png'}/></button>
                <button className={Css.button} onClick={edit}><img className={Css.img} src={'https://cdn-icons-png.flaticon.com/512/45/45706.png'}/></button>
                <button className={Css.button} onClick={deleteTask}><img className={Css.img} src={'https://free-png.ru/wp-content/uploads/2021/06/free-png.ru-38-450x450.png'}/></button>
            </div>
        </div>
    )
}

export default Task;