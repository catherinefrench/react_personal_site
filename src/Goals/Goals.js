import React from 'react';
import './Goals.scss';

const Goals = () => {

    return (
        <div className="section" id="goals">
        <div className="title">Goals</div>
        <div className="third tile">
            <div className="text">
                <p>Although when entering this role I was new to web development, with my strong work ethic within 6 months I was the most productive team member. I was promoted the fastest out of 18 team members for my ability to learn quickly, create solid processes that helped us scale, and for my leadership mindset. In my next role I’d like to gain more exposure with React, a library I've been working with this year.</p>
            </div>
            <div className="photo">
              {/* <img src={require('./collaboration.jpg')} alt=""/> */}
            </div>
        </div>
    </div>

    )

};


export default Goals;