import React from "react";
import "./Theme.css"
import {THEME_DARK, THEME_LIGHT, useTheme} from "../../context/ThemeContext";

const Theme = () => {

    const Theme = useTheme();

    return (
        <div className={'theme'}>
            <button className={'theme_swap dark'} onClick={() => {Theme.change(THEME_DARK)}}>Dark</button>
            <button className={'theme_swap light'} onClick={() => {Theme.change(THEME_LIGHT)}}>Light</button>
        </div>
    )
}

export default Theme;