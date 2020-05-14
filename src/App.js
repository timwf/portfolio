import React, { Fragment } from 'react';
import './App.scss';
import SideBar from './components/SideBar';
import { BrowserRouter as Router, Switch, Route, Link, useLocation} from "react-router-dom";
import Work from './components/Work';
import Skills from './components/Skills';
import Home from './components/Home';
import Contact from './components/Contact';
import { animated, useTransition } from 'react-spring'


function App() {

   const location = useLocation();  

  const transitions = useTransition(location, location => location.pathname, {
    from: {opacity: 0},
    enter: {opacity: 1}, 
    leave: {opacity: 0, marginLeft: "-500px"} 
  }  )
  
  return (
 
    <div className="app-container">

      <SideBar />

      <div className="App">

        {
          transitions.map(({item: location, props, key}) => (
            <animated.div style={props} key={key} special={props}>
                             <Switch location={location}>
                    <Route path="/" exact component={Home}/>
                    <Route path="/work" component={Work}/>
                    <Route path="/skills" component={Skills}/>
                    <Route path="/contact" component={Contact}/>
                  </Switch>
            </animated.div>
          ))
        }   
      </div>
    </div>



  );
}

export default App;
