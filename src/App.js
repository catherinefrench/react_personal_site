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
            <li><AnchorLink href="#home" offset='50'><Link to={'/'}>Home</Link></AnchorLink></li> 
            <li><AnchorLink href="#work" offset='50'><Link to={'/work'} offset='50'>Work</Link></AnchorLink></li>
            <li><AnchorLink href="#stack" offset='50'><Link to={'/stack'} offset='50'>Stack</Link></AnchorLink></li> 
            <li><AnchorLink href="#experience" offset='50'><Link to={'/experience'} offset='50'>Experience</Link></AnchorLink></li> 
            <li><AnchorLink href="#connect" offset='50'><Link to={'/connect'} offset='50'>Connect</Link></AnchorLink></li> 
          </ul>
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
        <Switch>
              <Route exact path='/' component={Work} />
              <Route path='/stack' component={Stack} />
              <Route path='/experience' component={Experience} />
              <Route path='/connect' component={Connect} />
        </Switch>
      </div>
    </Router>

    );
  };
}

export default App;
