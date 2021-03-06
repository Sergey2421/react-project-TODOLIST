import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from "./state/state";
import {ThemeProvider} from "./context/ThemeContext";

let rerender = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <ThemeProvider>
                <App state={state}/>
            </ThemeProvider>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerender(state);

state.subscribe(rerender);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
