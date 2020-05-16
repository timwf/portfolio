import React, {useState, useContext} from 'react'
import MenuItem from './MenuItem'
import { Link, NavLink } from 'react-router-dom'
import { ThemeContext } from './LightThemeContect'
import styled from 'styled-components'


export default function SideBar(props) {
    const [light, setLight] = useContext(ThemeContext);

    const ThemeDiv = styled.div`
        background-color: ${light ? "#dbd4d4" : "#333333"};
            p{
                color: ${light ? "black" : "#767676"};
            }
        `;
        

  
 

    return (
        <ThemeDiv className="sidebar-container">
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
            <div className="settings-icon" onClick={() => setLight(!light)}>
            <MenuItem icon="settings"  />              
            </div>


            
        </ThemeDiv>


    

    )
}
