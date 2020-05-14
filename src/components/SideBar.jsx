import React from 'react'
import MenuItem from './MenuItem'
import { Link, NavLink } from 'react-router-dom'





export default function SideBar() {

    
    return (

        <div className="sidebar-container">
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

            
        </div>


    

    )
}
