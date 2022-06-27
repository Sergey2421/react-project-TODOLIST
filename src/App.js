import React, {useState} from 'react';
import './App.css';
import AddField from "./components/AddField/AddField";
import Tasks from "./components/Tasks/Tasks";
import Clear from "./components/Clear/Clear";
import Modal from "./components/Modal/Modal";
import Theme from "./components/Theme/Theme";


function App(props) {
    const [modalActive, setModalActive] = useState(false);
    const [theme, setTheme] = useState(false);
    return (
        <div className={theme ? "app light" : "app dark"}>
            <div className={'container'}>
                    <p>To Do List</p>
                    <AddField setActive={setModalActive} state={props.state}/>
                    <Tasks state={props.state}/>
                    <Clear state={props.state}/>
            </div>
            <Modal active={modalActive} setActive={setModalActive}>
                <p>Введите текст!</p>
            </Modal>
            <Theme theme={theme} setTheme={setTheme}/>
        </div>
    );
}

export default App;
