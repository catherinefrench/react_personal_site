import React from 'react';
import './Connect.scss';

const Connect = () => {
    return (
        <div className="connect">
            <div className="container"> 
                <div className="title">Let's<br/>Connect</div>
                <div className="logos">
                    <a href="https://github.com/catherinefrench" target="_blank"><img src={require('./github.png')} alt="github"></img></a>
                    <a href="https://www.linkedin.com/in/cfrnch/" target="_blank"><img src={require('./linkedin.png')} alt="linkedin"></img></a>
                    <a href="https://twitter.com/cfrnch" target="_blank"><img src={require('./twitter.png')} alt="twitter"></img></a>
                </div>
            </div>
      </div>
    )
};

export default Connect;