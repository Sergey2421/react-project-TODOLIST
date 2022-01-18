import React from 'react';
import './App.css';
import AddField from "./components/AddField/AddField";
import Tasks from "./components/Tasks/Tasks";
import CLear from "./components/Clear/Clear";

function App() {
  return (
    <div className="app">
        <div className={'container'}>
            <AddField/>
            <Tasks/>
            <CLear/>
        </div>
    </div>
  );
}

export default App;
