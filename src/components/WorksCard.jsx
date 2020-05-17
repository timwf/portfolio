import React, { useState, useRef, useEffect} from 'react'
import brain from '../images/brain-map.png'
import WorkCardBadges from './WorkCardBadges'
import github from '../images/github-white.png'
import { Popover, Button, OverlayTrigger, Tooltip, Overlay } from 'react-bootstrap';









function WorksCard(props) {
  

  console.log(props.details);
  
  

    return (
      <div className="Works-card-cont">
        <div className="work-card-image">
          <h3 className="word-card-header">{props.title}</h3>
          <img src={props.image} alt=""/>
          <p className="work-card-desc">{props.description}</p>
          <WorkCardBadges badges={props.badges} designBadges={props.designBadges} miscBadges={props.miscBadges} />          
        </div>
        <div className="works-card-links">
          <a href={props.gitLink}><img src={github} alt=""/></a>   
          <a href={props.webLink}><img src="./images/link-white.png" alt=""/></a>
      <OverlayTrigger x-placement='bottom' overlay={<Tooltip >
      <Popover id="popover-contained" x-placement='bottom'>
      <Popover.Title as="h2">{props.title}</Popover.Title>
                <Popover.Content>
                 {props.details.split("\n").map((i,key) => {
                   return <p style={{marginTop: "12px"}} key={key}>{i}</p>;
                 })}
                 <h3>Features</h3>
                 {props.features.split("\n").map((i,key) => {
                   return <p style={{marginTop: "-10px"}} key={key}>{i}</p>;
                 })}
                 
                 </Popover.Content>
              </Popover>
            </Tooltip>}>
            <span className="d-inline-block">
              <div disabled style={{ pointerEvents: 'none' }}>
              <img src="./images/info-white.png" />
              </div>
            </span>
      </OverlayTrigger>
    </div>
        </div>


    )
}

export default WorksCard
