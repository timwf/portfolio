import React, { Fragment } from 'react';
import './App.scss';
import SideBar from './components/SideBar';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Work from './components/Work';
import Skills from './components/Skills';
import Home from './components/Home';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
    <div className="app-container">

      <SideBar />

      <div className="App">
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/work" component={Work}/>
          <Route path="/skills" component={Skills}/>
          <Route path="/contact" component={Contact}/>
        </Switch>

      </div>

    </div>

    </Router>

  );
}

export default App;
