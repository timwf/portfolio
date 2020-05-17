import React, {useState, useContext} from 'react'
import AnimatedHeroContent from './AnimatedHeroContent';
import {Transition} from 'react-spring/renderprops'
import { ThemeContext } from './LightThemeContect'



const Home = (props) => {
  const [light, setLight] = useContext(ThemeContext);

  const items = true;

    return (
        <>
          <div className="hero-container">
            <AnimatedHeroContent />
            
            <Transition
                items={items} keys={item => item.key}
                from={{ transform: 'translate3d(0,-500px,5000px  )' }}
                enter={{ transform: 'translate3d(0,0px,0)' }}
                leave={{ transform: 'translate3d(0,-40px,0)' }}>
                {item => props => <div style={props} className="hero-image-container">{item.text}</div>}
          </Transition>
          <div className="social-icons-container">
            <img src={`${light ? "./images/github-black.png" : "./images/github-white.png"}`} alt=""/>
            <img src={`${light ? "./images/linkedin-black.png" : "./images/linkedin-white.png"}`} alt=""/>
            <img src={`${light ? "./images/codepen-black.png" : "./images/codepen-white.png"}`} alt=""/>
            <img src={`${light ? "./images/twitter-black.png" : "./images/twitter-white.png"}`} alt=""/>
          </div>
        </div>
        </>
    )
}

export default Home