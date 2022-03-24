import React from 'react';
import './App.css';
import AddField from "./components/AddField/AddField";
import Tasks from "./components/Tasks/Tasks";
import CLear from "./components/Clear/Clear";


function App(props) {
    return (
        <div className="app">
            <div className={'container'}>
                    <p>To Do List</p>
                    <AddField state={props.state}/>
                    <Tasks state={props.state}/>
                    <CLear state={props.state}/>
            </div>
        </div>
    );
}

export default App;
