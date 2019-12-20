import React from 'react';
import './Stack.scss';

const Stack = () => {

    return (
        <div className="section stack" id="stack"> 
            <div className="title">Stack</div>
            <div className="second tile">
                <div class="front">
                    <h3 className="sub-heading">Front-End</h3>
                    <div className="logos">
                        <i className="devicon-javascript-plain" title="javascript!"></i>
                        <i className="devicon-react-original"></i>
                        <i className="devicon-typescript-plain"></i>
                        <i className="devicon-html5-plain"></i>
                        <i className="devicon-css3-plain"></i>
                        <i className="devicon-angularjs-plain"></i>
                        <i className="devicon-babel-plain"></i>
                        <i className="devicon-webpack-plain"></i>
                    </div>
                </div>
                <div class="back">
                    <h3 className="sub-heading">Back-End</h3>
                    <div className="logos">
                        <i className="devicon-ruby-plain"></i>
                        <i className="devicon-rails-plain"></i>
                        <i className="devicon-nodejs-plain"></i>
                    </div>
                </div>
                <div class="other">
                    <h3 className="sub-heading">Other</h3>
                    <div className="logos">
                        <i className="devicon-trello-plain"></i>
                        <i className="devicon-postgresql-plain"></i>
                        <i className="devicon-amazonwebservices-original"></i>
                        <i className="devicon-visualstudio-plain"></i>
                        <i className="devicon-github-plain"></i>
                        <i className="devicon-git-plain"></i>
                    </div>
                </div>
            </div>
        </div>

    )

};


export default Stack;