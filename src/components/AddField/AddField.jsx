import React from 'react';
import Css from './AddField.module.css'

const AddField = (props) => {
    return (
        <div className={Css.container}>
            <input className={Css.input} type={'text'}/>
            <button className={Css.button}>Add Item</button>
        </div>
    )
}

export default AddField;