import React, {useContext, useState} from "react";
import {changeCssVariables} from "../components/Theme/changeCssVariables";
export const THEME_LIGHT = 'light';
export const THEME_DARK = 'dark';

const ThemeContext = React.createContext();

export const ThemeProvider = ({children, ...props}) => {

    const [theme, setTheme] = useState(THEME_LIGHT);

    const change = name => {
        setTheme(name);
        changeCssVariables(name);
    }

    return (
        <ThemeContext.Provider
            value={
                {
                    theme,
                    change,
                }
            }
            {...props}
        >
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext);