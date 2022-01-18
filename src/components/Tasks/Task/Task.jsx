import React from 'react';
import Css from './Taks.module.css'

const Task = (props) => {
    return (
        <div className={Css.container}>
            <input className={Css.input} type={'text'}/>
            <div className={Css.buttons}>
                <button className={Css.button}><img className={Css.img} src={'https://free-png.ru/wp-content/uploads/2021/06/free-png.ru-39-450x450.png'}/></button>
                <button className={Css.button}><img className={Css.img} src={'https://cdn-icons-png.flaticon.com/512/45/45706.png'}/></button>
                <button className={Css.button}><img className={Css.img} src={'https://free-png.ru/wp-content/uploads/2021/06/free-png.ru-38-450x450.png'}/></button>
            </div>
        </div>
    )
}

export default Task;