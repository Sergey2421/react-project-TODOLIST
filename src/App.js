import React from 'react';
import './App.css';
import AddField from "./components/AddField/AddField";
import Tasks from "./components/Tasks/Tasks";
import CLear from "./components/Clear/Clear";

const Context = React.createContext([])

function App() {
    return (
        <div className="app">
            <div className={'container'}>
                <Context.Provider value={[]}>
                    <AddField.Consumer/>
                    <Tasks.Consumer/>
                    <CLear.Consumer/>
                </Context.Provider>
            </div>
        </div>
    );
}

export default App;
