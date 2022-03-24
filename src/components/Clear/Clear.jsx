import React from 'react';
import Css from './Clear.module.css'
import {clearAction} from "../../state/state";

const Clear = (props) => {

    let disable = !(props.state.completedTasks.length || props.state.taskElements.length);

    function click() {
        let action = clearAction();
        props.state.dispatch(action);
    }

    return (
        <div className={Css.container}>
            <button disabled={disable} className={Css.button} onClick={click}>Clear Items</button>
        </div>
    )
}

export default Clear;