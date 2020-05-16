import React, {useState, useContext} from 'react'
import AnimatedHeroContent from './AnimatedHeroContent';
import {Transition} from 'react-spring/renderprops'
import { ThemeContext } from './LightThemeContect'
import styled from 'styled-components'


const Home = (props) => {
  const [light, setLight] = useContext(ThemeContext);
const ThemeDiv = styled.div`    
        *{
            color: ${light ? "black" : "white"};
        }
    `;
  const items = true;

    return (
        <>
          <ThemeDiv className="hero-container">
            <AnimatedHeroContent />
            
            <Transition
                items={items} keys={item => item.key}
                from={{ transform: 'translate3d(0,-500px,5000px  )' }}
                enter={{ transform: 'translate3d(0,0px,0)' }}
                leave={{ transform: 'translate3d(0,-40px,0)' }}>
                {item => props => <div style={props} className="hero-image-container">{item.text}</div>}
          </Transition>
          <div className="social-icons-container">
            <a href="https://github.com/timwf"><img src="./images/github-white.png" alt=""/></a>
            <img src="./images/linkedin-white.png" alt=""/>
            <img src="./images/codepen-white.png" alt=""/>
            <img src="./images/twitter-white.png" alt=""/>
          </div>
        </ThemeDiv>
        </>
    )
}

export default Home