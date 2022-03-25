import React from 'react';
import Css from './AddField.module.css'
import {addItemAction, addTextInputAction} from "../../state/add_reducer";

const AddField = (props) => {

    function onFieldChange(e) {
        let action = addTextInputAction(e.target.value);
        props.state.dispatch(action);
    }

    function click() {
        let action = addItemAction();
        props.state.dispatch(action);
    }

    return (
        <div className={Css.container}>
            <input className={Css.input} type={'text'} value={props.state.textField} onChange={onFieldChange}/>
            <button className={Css.button} onClick={click}>Add Item</button>
        </div>
    )
}

export default AddField;