import React from 'react';
import './Stack.scss';

const Stack = () => {

    return (

        <div class="section">
            <div class="title">Stack</div>
            <div class="second tile">
                <div>
                    <h3 class="sub-heading">Front-End</h3>
                    <div class="logos">
                        <i class="devicon-javascript-plain" title="javascript!"></i>
                        <i class="devicon-react-original"></i>
                        <i class="devicon-typescript-plain"></i>
                        <i class="devicon-html5-plain"></i>
                        <i class="devicon-css3-plain"></i>
                        <i class="devicon-angularjs-plain"></i>
                        <i class="devicon-babel-plain"></i>
                        <i class="devicon-webpack-plain"></i>
                    </div>
                </div>
                <div>
                    <h3 class="sub-heading">Back-End</h3>
                    <div class="logos">
                        <i class="devicon-ruby-plain"></i>
                        <i class="devicon-rails-plain"></i>
                        <i class="devicon-nodejs-plain"></i>
                        
                    </div>
                </div>
                <div>
                    <h3 class="sub-heading">Other</h3>
                    <div class="logos">
                        <i class="devicon-trello-plain"></i>
                        <i class="devicon-postgresql-plain"></i>
                        <i class="devicon-amazonwebservices-original"></i>
                        <i class="devicon-visualstudio-plain"></i>
                        <i class="devicon-github-plain"></i>
                        <i class="devicon-git-plain"></i>
                        
                    </div>
                </div>
            </div>
        </div>

    )

};


export default Stack;