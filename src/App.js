import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import './App.scss';
import AnchorLink from 'react-anchor-link-smooth-scroll'
// import Navigation from './Navigation/Navigation';
import Banner from './Banner/Banner';
import Work from './Work/Work';
import Stack from './Stack/Stack';
import Experience from './Experience/Experience';
import Connect from './Connect/Connect';
import Footer from './Footer/Footer';

class App extends Component {
  render() {
    return (
    <Router>
      <div className="App" id="home"> 
        <header className="app-header">
        <nav className="menu-container"> 
          <ul>
              <li><AnchorLink href="#home" offset='50'><NavLink to="/" activeClassName="selected">Home</NavLink></AnchorLink></li> 
              <li><AnchorLink href="#work" offset='50'><NavLink to="/work">Work</NavLink></AnchorLink></li>
              <li><AnchorLink href="#stack" offset='50'><NavLink to="/stack">Stack</NavLink></AnchorLink></li> 
              <li><AnchorLink href="#experience" offset='50'><NavLink to="/experience">Experience</NavLink></AnchorLink></li> 
              <li><AnchorLink href="#connect" offset='50'><NavLink to="/connect">Connect</NavLink></AnchorLink></li> 
          </ul>
        </nav>
      </header>
        <Banner />
        <div className="content-container"> 
          <div className="content-bottom">
            <Work />
            <Stack />
            <Experience />
            <Connect className="section" />
          </div>
        </div>
        <Switch>
              <Route exact path='/'> </Route> 
              <Route path='/work'></Route>   
              <Route path='/stack'></Route>   
              <Route path='/experience'></Route> 
              <Route path='/connect'></Route> 
        </Switch>
        <Footer />
      </div>
    </Router>
    );
  };
}

export default App;
