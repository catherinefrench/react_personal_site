import React from 'react';
import './App.scss';
import Navigation from './Navigation/Navigation';
import Work from './Work/Work';
import Stack from './Stack/Stack';
import Goals from './Goals/Goals';
import Connect from './Connect/Connect';
import Footer from './Footer/Footer';
import AnchorLink from 'react-anchor-link-smooth-scroll';

function App() {
  return (
    <div className="App" id="home">
      <Navigation />
      <div className="content-container">
        <div className="banner-container">
          <div className="name-container">
            <div className="name">Catherine French</div>
            <div className="title">I'm a Front-End Developer</div>
          </div>
        </div>
        <div className="content-bottom">
          <Work />
          <Stack />
          <Goals />
          <Connect className="section" id="connect" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
