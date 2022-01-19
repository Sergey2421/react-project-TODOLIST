import React from 'react';
import Css from './Clear.module.css'

const Clear = (props) => {
    return (
        <div className={Css.container}>
            <button className={Css.button}>Clear</button>
        </div>
    )
}

export default Clear;