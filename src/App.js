import React from 'react';
import './App.css';
import './Navigation/Navigation';
import './Navigation/Navigation.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="menu-container"> 
          <div>Home</div>
          <div>Work</div>
          <div>Goals</div>
          <div>Hobbies</div>
          <div>Sports</div>
          <div>Analytics</div>
        </div>
      </header>
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
                            <div class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</div>
                            <div class="photo">
                                <img src={require('./collaboration.jpg')} alt=""/>
                            </div>
                        </div>
                    </div>
            <div class="section">
                <div class="second tile">
                    <div class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</div>
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
    </div>
  );
}

export default App;
