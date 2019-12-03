import React from 'react';

import './Navigation.scss';

const Navigation = () => {
    return (
        <header className="App-header">
        <div class="menu-container"> 
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Work</a></li>
            <li><a href="#">Stack</a></li>
            <li><a href="#">Goals</a></li>
            <li><a href="#">Varia</a></li>
            <li><a href="#">Analytics</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </header>
    )
};

export default Navigation;