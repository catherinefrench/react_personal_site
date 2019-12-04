import React from 'react';
import './Work.scss';
import collaboration from '../collaboration.jpg'

const Work = () => {

    return (
        <div className="section" id="work">
        <div className="title">Work</div>
        <div className="first tile"> 
            <div className="text work">
              <p>I'm currently looking for a role as a front-end developer. I have 3 years experience working in Web Support for Q4 Inc, a Toronto-based fintech and global leader in capital markets solutions. I led a team of 9 people using HTML5, CSS3, and JavaScript on a daily basis for 850+ clients including Facebook, Apple, Oracle and Intel.</p>
            </div>
            <div className="photo">
                <img src={require('../collaboration.jpg')} alt=""/>
            </div>
        </div>
  </div>

    )

};


export default Work;