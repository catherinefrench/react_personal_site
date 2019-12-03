import React from 'react';
import './App.scss';
import Navigation from './Navigation/Navigation';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
        <div class="content-container">
          <div class="banner-container">
              <div class="name-container">
                  <div class="name">Catherine French</div>
                  <div class="title">I'm a Front-End Developer</div>
              </div>
          </div>
          <div class="content-bottom">
              <div class="section">
                    <div class="first tile">
                        <div>Work</div>
                        <div class="text work">
                          <p>I'm currently looking for a job as a front-end developer. I have 3 years experience working in Web Support for Q4 Inc, a Toronto-based fintech and global leader in capital markets solutions. I led a team of 9 people using HTML5, CSS3, and JavaScript on a daily basis for 850+ clients including Facebook, Apple, Oracle and Intel.</p>
                        </div>
                        <div class="photo">
                            <img src={require('./collaboration.jpg')} alt=""/>
                        </div>
                    </div>

              </div>
              <div class="section">
                  <div class="second tile">
                      <div class="text">
                          <p>Although when entering this role I was new to web development, with my strong work ethic within 6 months I was the most productive team member. I was promoted the fastest out of 18 team members for my ability to learn quickly, create solid processes that helped us scale, and for my leadership mindset. In my next role I’d like to gain more exposure with React, a library I have taught myself this year.</p>
                      </div>
                      
                      <div class="photo">
                        <img src={require('./collaboration.jpg')} alt=""/>
                      </div>
                  </div>
              </div>
              <div class="section">
                  <div class="third tile">
                      <div class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</div>
                      <div class="photo">
                        <img src={require('./collaboration.jpg')} alt=""/>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
