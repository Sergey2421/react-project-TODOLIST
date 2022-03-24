import React from 'react';
import Css from './CompletedTask.module.css'
import {deleteCompletedAction} from "../../../state/state";


const CompletedTask = (props) => {

    function deleteCompletedTask() {
        let action = deleteCompletedAction(props.id);
        props.state.dispatch(action);
    }

        return (
        <div className={Css.container}>
            <input disabled={true} className={Css.input} type={'text'} value={props.text}/>
            <div className={Css.buttons}>
                <button className={Css.button} onClick={deleteCompletedTask}><img className={Css.img} src={'https://free-png.ru/wp-content/uploads/2021/06/free-png.ru-38-450x450.png'}/></button>
            </div>
        </div>
    )
}

export default CompletedTask;