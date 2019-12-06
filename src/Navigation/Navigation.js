import React from 'react'; 
import './Navigation.scss';
import AnchorLink from 'react-anchor-link-smooth-scroll';


const Navigation = () => {
    return (
        <header className="app-header">
        <div className="menu-container"> 
          <ul>
            <li><AnchorLink href="#home">Home</AnchorLink></li> 
            <li><AnchorLink href="#work" offset='50'>Work</AnchorLink></li>
            <li><AnchorLink href="#stack" offset='50'>Stack</AnchorLink></li> 
            <li><AnchorLink href="#experience" offset='50'>Experience</AnchorLink></li> 
            <li><AnchorLink href="#connect" offset='50'>Connect</AnchorLink></li> 
          </ul>
        </div>
      </header>
    )
}; 

export default Navigation;