import React from 'react'
import styled,  { keyframes } from 'styled-components'

function SkillsDonut(props) {

    console.log(props.value);
    

const pulse = keyframes`
  from {
    stroke-dasharray: 0, 135;
  }
  to {
    stroke-dasharray: ${props.value}, 135;
  }
`

const DonutSVG = styled.svg`
    stroke: ${props => props.value > 100 ? "#25ff25" : "orange"};
    transform: rotate(-90deg);
    stroke-dasharray:  ${props.value}, 135;
    animation: ${pulse} 1.2s ease-in-out;
    ${props.value }
`





    return (
        <div className="skills-donut">
            <p>{props.title}</p>
            <DonutSVG  value={props.value} width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24" cy="24" r="21.5" 
           
            stroke-width="4"
            />
            </DonutSVG>
        </div>
    )
}

export default SkillsDonut
