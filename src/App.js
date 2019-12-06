import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
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
        {/* <Navigation /> */}
        <header className="app-header">
        <div className="menu-container"> 
          <ul>

              <li><AnchorLink href="#home" offset='50'><Link to="/">Home</Link></AnchorLink></li> 
              <li><AnchorLink href="#work" offset='50'><Link to="/work">Work</Link></AnchorLink></li>
              <li><AnchorLink href="#stack" offset='50'><Link to="/stack">Stack</Link></AnchorLink></li> 
              <li><AnchorLink href="#experience" offset='50'><Link to="/experience">Experience</Link></AnchorLink></li> 
              <li><AnchorLink href="#connect" offset='50'><Link to="/connect">Connect</Link></AnchorLink></li> 


          </ul>
          {/* <ul>
            <li><AnchorLink href="#home" offset='50'><Link to={'/'}>Home</Link></AnchorLink></li> 
            <li><AnchorLink href="#work" offset='50'><Link to={'/work'} offset='50'>Work</Link></AnchorLink></li>
            <li><AnchorLink href="#stack" offset='50'><Link to={'/stack'} offset='50'>Stack</Link></AnchorLink></li> 
            <li><AnchorLink href="#experience" offset='50'><Link to={'/experience'} offset='50'>Experience</Link></AnchorLink></li> 
            <li><AnchorLink href="#connect" offset='50'><Link to={'/connect'} offset='50'>Connect</Link></AnchorLink></li> 
          </ul> */}
        </div>
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
        <Footer />

      </div>
        <Switch>
              <Route exact path='/'> </Route> 
              <Route path='/work'><Work /></Route>   
              <Route path='/stack'><Stack /></Route>   
              <Route path='/experience'> <Experience /></Route> 
              <Route path='/connect'> <Connect /></Route> 
        </Switch>
    </Router>

    );
  };
}

export default App;
