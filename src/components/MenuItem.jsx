import React from 'react'
import SVGIcon from './HomeIcon'

export default function MenuItem(props) {
    console.log(props);
    
    return (
        <>
        <div className="menu-icon-cont">
        {props.icon == "settings" ? <SVGIcon  name={props.icon} fill="#767676"/>:
          <SVGIcon  name={props.icon} fill="#767676"/> 
        } 
        </div>
        {props.icon == "settings" ? <p></p>:
          <p className="icon-subs">{props.icon} </p>    
        }
        </>
    )
}
