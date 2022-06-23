import React from 'react';
import Css from './CompletedTask.module.css'
import {deleteCompletedAction} from "../../../state/task_reducer";


const CompletedTask = (props) => {

    function deleteCompletedTask() {
        let action = deleteCompletedAction(props.id);
        props.state.dispatch(action);
    }

        return (
        <div className={Css.container}>
            <input disabled={true} className={Css.input} type={'text'} value={props.text}/>
            <div className={Css.buttons}>
                <button className={Css.button} onClick={deleteCompletedTask}><img alt={'Удалить'} className={Css.img} src={'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Crystal_button_cancel.svg/32px-Crystal_button_cancel.svg.png?20080403113445'}/></button>
            </div>
        </div>
    )
}

export default CompletedTask;