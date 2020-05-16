import React, { useState, useRef, useEffect} from 'react'
import brain from '../images/brain-map.png'
import WorkCardBadges from './WorkCardBadges'
import github from '../images/github-white.png'
import { Popover, Button, OverlayTrigger, Tooltip, Overlay } from 'react-bootstrap';









function WorksCard(props) {
  

  
  

    return (
      <div className="Works-card-cont">
        <div className="work-card-image">
          <h3 className="word-card-header">{props.title}</h3>
          <img src={props.image} alt=""/>
          <p className="work-card-desc">{props.description}</p>
          <WorkCardBadges badges={props.badges} />          
        </div>
        <div className="works-card-links">
          <a href={props.gitLink}><img src={github} alt=""/></a>   
          <a href={props.webLink}><img src="./images/link-white.png" alt=""/></a>
      <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">
      <Popover id="popover-contained">
      <Popover.Title as="h3">{props.title}</Popover.Title>
                <Popover.Content>
                  {props.details}
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
