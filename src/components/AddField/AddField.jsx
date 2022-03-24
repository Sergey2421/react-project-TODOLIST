import React from 'react';
import Css from './AddField.module.css'
import {addItemAction, addTextInputAction} from "../../state/state";

const AddField = (props) => {

    let textInput = React.createRef();

    function onFieldChange() {
        let action = addTextInputAction(textInput.current.value);
        props.state.dispatch(action);
    }

    function click() {
        let action = addItemAction(textInput.current.value);
        props.state.dispatch(action);
    }

    return (
        <div className={Css.container}>
            <input ref={textInput} className={Css.input} type={'text'} value={props.state.textField} onChange={onFieldChange}/>
            <button className={Css.button} onClick={click}>Add Item</button>
        </div>
    )
}

export default AddField;