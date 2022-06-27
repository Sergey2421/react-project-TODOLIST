import React from "react";
import "./Theme.css"

const Theme = ({theme, setTheme}) => {
    return (
        <div className={theme ? "light" : "dark"}>
            <input type={"checkbox"} id={'dark'} value={'dark'} onClick={() => setTheme(!theme)}/>
                <label for={'dark'}>Dark</label>
        </div>
    )
}

export default Theme;