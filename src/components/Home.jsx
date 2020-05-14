import React, {useState} from 'react'
import eye from '../images/i-tim.png'
import AnimatedHeroContent from './AnimatedHeroContent';
import { useTransition, animated } from 'react-spring'






const Home = (props) => {

    console.log(props);
    
    const [show, set] = useState(false)
const transitions = useTransition(show, null, {
from: { marginTop: '-700px' },
enter: { marginTop: "0px" },
leave: { marginTop: '-700px' },
})



    return (
        <>
          <div className="hero-container">

                <AnimatedHeroContent />

                {
          transitions.map(({item: location, props, key}) => (
            <animated.div style={props} key={key} className="hero-image-container">

            </animated.div>
          ))
        }  


            

                <div className="social-icons-container">

                </div>
            </div>

        </>
    )
}

export default Home