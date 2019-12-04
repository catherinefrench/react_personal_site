import React from 'react';
import './App.scss';
import Navigation from './Navigation/Navigation';
import Banner from './Banner/Banner';
import Work from './Work/Work';
import Stack from './Stack/Stack';
import Experience from './Experience/Experience';
import Connect from './Connect/Connect';
import Footer from './Footer/Footer';
import AnchorLink from 'react-anchor-link-smooth-scroll';

function App() {
  return (
    <div className="App" id="home">
      <Navigation />
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
  );
}

export default App;
