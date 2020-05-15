import React from 'react'
import brain from '../images/brain-map.png'
import WorkCardBadges from './WorkCardBadges'
import github from '../images/github-white.png'







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
          <img src={github} alt=""/>
        </div>

      </div>
    )
}

export default WorksCard
