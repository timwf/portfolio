import React, {useState, useContext} from 'react'
import MenuItem from './MenuItem'
import { Link, NavLink } from 'react-router-dom'
import { ThemeContext } from './LightThemeContect'



export default function SideBar(props) {
    const [light, setLight] = useContext(ThemeContext);
    console.log(props);
    

    const toggleTheme = () => {
        setLight(!light)
        props.toggleTheme(!light)

    }

   return (
        <div className={`${light ? "sidebar-container sidebar-container-light" : "sidebar-container"}`}>
            <NavLink to="/" exact activeClassName="active">
                 <MenuItem icon="home"/>                 
            </NavLink>
            <NavLink to="/work">
                <MenuItem icon="work" />
            </NavLink>
            <NavLink to="/skills">
                <MenuItem icon="skills" />
            </NavLink>
            <NavLink to="/contact">
                <MenuItem icon="contact" />
            </NavLink>
            <div className="settings-icon" onClick={() => toggleTheme()}>
            
            </div>           
        </div>
    )
}
