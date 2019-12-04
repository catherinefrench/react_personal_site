import React from 'react';
import './Experience.scss';

const Experience = () => {

    return (
        <div className="section experience" id="experience">
        <div className="title">Experience</div>
        <div className="text-container">
            <div className="third tile">
                <div className="text">
                    <h4 class="job-title">Front End Developer and Analyst, Web Support, Q4 Inc.</h4>
                    <p class="date">Nov 2016 - Nov 2017</p>
                    <p>My first job in web was to build features on investor relations (IR) websites - the sites publically traded companies use to display their financial data. The first lines of code I shipped were CSS changes for Facebook's IR site. I loved the rush of pushing code to production and seeing it live moments later.</p>
                </div>
            </div>
            <div className="third tile">
                <div className="text">
                    <h4 class="job-title">Senior Analyst, Web Support, Q4 Inc.</h4>
                    <p class="date">Nov 2017 - Nov 2018</p>
                    <p>After 1 year, I was promoted to Senior Analyst. I was our team's senior authority on code quality, request management, and training new team members. Loving the adrenaline that stems from working at the intersections of the high-paced fields of finance and tech was a great asset.</p>
                </div>
            </div>
            <div className="third tile">
                <div className="text">
                    <h4 class="job-title">Team Lead, Web Support, Q4 Inc.</h4>
                    <p class="date">Nov 2018 - July 2019</p>
                    <p>My next promotion was 1 year later, to Team Lead. I managed half the 18 member Support team. I hired 8 team members and was the go-to on technical and after hours escalations. I also managed billable requests, ran daily stand-ups and promoted agile methodologies.</p>
                </div>
            </div>


        </div>
    </div>

    )

};


export default Experience;