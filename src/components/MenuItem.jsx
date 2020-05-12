import React from 'react'
import SVGIcon from './HomeIcon'

export default function MenuItem(props) {
    console.log(props.icon);
    
    return (
        <>
        <div className="menu-icon-cont">
            <SVGIcon name={props.icon} fill="#767676"/>
  
        </div>
        <p className="icon-subs">{props.icon}</p>
        </>
    )
}
