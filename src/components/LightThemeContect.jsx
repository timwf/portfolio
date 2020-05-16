import React, {createContext, useState} from 'react'

export const ThemeContext = createContext();

export const ThemeProvider = (props) => {
    const [light, setLight] = useState(false);

    return (
        <ThemeContext.Provider value={[light, setLight]}>
            {props.children}
        </ThemeContext.Provider>
    )
}


