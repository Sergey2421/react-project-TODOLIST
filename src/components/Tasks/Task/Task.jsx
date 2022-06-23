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
                <button className={Css.button} onClick={confirm}><img alt={'Подтвердить'} className={Css.img} src={'https://cdn.pixabay.com/photo/2016/02/02/05/52/confirm-1174801_960_720.png'}/></button>
                <button className={Css.button} onClick={edit}><img alt={'Редактировать'} className={Css.img} src={'https://cdn-icons-png.flaticon.com/512/45/45706.png'}/></button>
                <button className={Css.button} onClick={deleteTask}><img alt={'Удалить'} className={Css.img} src={'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Crystal_button_cancel.svg/32px-Crystal_button_cancel.svg.png?20080403113445'}/></button>
            </div>
        </div>
    )
}

export default Task;