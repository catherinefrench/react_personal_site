import React from 'react';
import './Work.scss';
// import collaboration from '../collaboration.jpg'

const Work = () => {

    return (
        <div className="section work" id="work">
        <div className="title">Work</div>
        <div className="first tile"> 
            <div className="text work">
              <p>I'm currently looking for a role as a front-end developer. I have 3 years experience working in Web Support for Q4 Inc, a Toronto-based fintech and global leader in capital markets solutions. I led a team of 9 people using HTML5, CSS3, and JavaScript on a daily basis for 850+ clients including Facebook, Apple, Oracle and Intel.</p>
              <p>Although when entering this role I was new to web development, with my strong work ethic within 6 months I was the most productive team member. I was promoted the fastest out of 18 team members for my ability to learn quickly, create solid processes that helped us scale, and for my leadership mindset. In my next role I’d like to gain more exposure with React, a library I've been working with this year.</p>
            </div>
            {/* <div className="photo">
                <img src={require('../collaboration.jpg')} alt=""/>
            </div> */}
        </div>
  </div>

    )

};


export default Work;