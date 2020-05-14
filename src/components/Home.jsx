import React, {useState} from 'react'
import AnimatedHeroContent from './AnimatedHeroContent';
import {Transition} from 'react-spring/renderprops'


const Home = (props) => {
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
          </div>
        </div>
        </>
    )
}

export default Home