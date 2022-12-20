import React from 'react';
import '../../App.css';
import headshot from "../../Headshot.jpg";
import './Home.css';

function Home(){
    const [button, setButton] = React.useState(true);


    return (
        <>
        <div className="layout">
            <div className="child">
            <div className="text-field">
                <text className="layout-h1">Ryan Sweeney</text>
                <text className="layout-h3">Computer Science B.S. Candidate</text>
                <text className="layout-h3">Southern Methodist University</text>
                    <a className="button" href="mailto:rsweeney@smu.edu">Contact Me</a>
            </div>
            </div>
            <div className="child">
                <img src={headshot} className="headshot" alt="headshot" />
            </div>
        </div>
                <div className="layout-colorful">
                    <div className="text-field-2">
                        <text className="layout-h2-light">About Me</text>
                        <text className="layout-h4-light">I am a computer science student from San Diego, California studying at Southern Methodist University. When I'm not working on a computer project you will find me outside either running or surfing. I am very good at problem solving, and finding a unique solution to any problem that arises in my life. </text>
                        <a className="button-2" href="https://www.linkedin.com/in/ryan-sweeney-4185a824b/" target="_blank">Linked In</a>
                    </div>
                </div>
            <div className="layout">
                <div className="text-field-3">
                <text className="layout-h2">My Skills</text>
                </div>
            <div className="row">
                <div className="column">
                    <div className="text-field-4">
                        <text className={"layout-h5-color"}>Coding Proficiencies</text>
                        <text className={"layout-h4"}>Proficient in Java, C++, Python, JavaScript, HTML, C#, PHP, Matlab, R</text>
                    </div>
                </div>
                <div className="column">
                    <div className="text-field-4">
                        <text className={"layout-h5-color"}>Computer Proficiencies</text>
                        <text className={"layout-h4"}>Proficient in Microsoft Office, Onshape, AutoCAD, Adobe Photoshop, Adobe Illustrator, QGIS, Unity, Matlab</text>
                    </div>
                </div>
            </div>
                <div className="row">
                    <div className="column">
                        <div className="text-field-4">
                            <text className={"layout-h5-color"}>Networking experience</text>
                            <text className={"layout-h4"}>Deployment of server-side applications. Installation of network hardware. Installation of client hardware. Years of experience assembling personal computers.</text>
                        </div>
                    </div>
                    <div className="column">
                        <div className="text-field-4">
                            <text className={"layout-h5-color"}>A Natural Leader</text>
                            <text className={"layout-h4"}>Through leading various projects in the past such as my Eagle Scout service project, and being team captain of cross country, I have developed many useful leadership skills that make me the perfect project leader.</text>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Home;