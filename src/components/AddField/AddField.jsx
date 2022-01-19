import React from 'react';
import Css from './AddField.module.css'
import Task from "../Tasks/Task/Task";

function addField() {
    this.context.push(<Task text={}/>)
}

class AddField extends React.Component {
    static contextType = Context;
    render() {
        return (
            <div className={Css.container}>
                <input className={Css.input} type={'text'}/>
                <button className={Css.button} onClick={addField}>Add Item</button>
            </div>
        )
    }
}

export default AddField;