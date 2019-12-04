import React from 'react';

import './Navigation.scss';

const Navigation = () => {
    return (
        <header className="app-header">
        <div className="menu-container"> 
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#stack">Stack</a></li>
            <li><a href="#bio">Goals</a></li>
            <li><a href="#varia">Varia</a></li>
            <li><a href="#">Analytics</a></li>
            <li><a href="#connect">Connect</a></li>
          </ul>
        </div>
      </header>
    )
};

export default Navigation;