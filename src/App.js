import React, { Fragment, useState } from 'react';
import './App.scss';
import SideBar from './components/SideBar';
import { BrowserRouter as Router, Switch, Route, Link, useLocation} from "react-router-dom";
import Work from './components/Work';
import Skills from './components/Skills';
import Home from './components/Home';
import Contact from './components/Contact';
import { animated, useTransition } from 'react-spring'
import { ThemeContext, ThemeProvider } from './components/LightThemeContect'



function App() {

  const [light, setLight] = useState(false);

  
  
  const location = useLocation(); 
  const transitions = useTransition(location, location => location.pathname, {
    from: {opacity: 0  },
    enter: {opacity: 1,  marginTop: "0px"},
    leave: { marginright: "900px" },
   }  )

  
  
  
  return (
    <ThemeProvider>
    <div className="app-container">
      <SideBar toggleTheme={setLight} />
      <div className={`${light ? "App App-light" : "App"}`} >

        {
          transitions.map(({item: location, props, key}) => (
            <animated.div style={props} key={key} >
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
    </ThemeProvider>


  );
}

export default App;
