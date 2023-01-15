import React from 'react';
import '../../App.css';
import headshot from "../../Headshot.jpg";
import './Home.css';

function Home(){
    const [button, setButton] = React.useState(true);


    return (
        <>
            <div className="home-container">
                <div className="home-layout">
                    <div className="introduction">
                        <div className="child">
                            <div className="text-field">
                                <text className="text-h1">Ryan Sweeney</text>
                                <text className="text-h3">Computer Science B.S. Candidate</text>
                                <text className="text-h3">Southern Methodist University</text>
                                <a className="button" href="mailto:rsweeney@smu.edu">Contact Me</a>
                            </div>
                        </div>
                        <div className="child">
                            <div className="vertical-spacer">
                            </div>
                        </div>
                        <div className="child">
                            <img src={headshot} className="headshot" alt="headshot" />
                        </div>
                    </div>
                    <div className="layout-colorful">
                        <div className="text-field-2">
                            <text className="text-h2-light">About Me</text>
                            <text className="text-h4-light">Energetic 2025 Computer Science Bachelor of Science Candidate studying at Southern Methodist University. Born and raised in San Diego California before attending college in Dallas, TX. Known for my outstanding and unique problem solving abilities, where I have a keen ability to identify approaches to resolve and address challenges, including day to day issues that arise. Software programming is one of my many passions. When I'm not on the computer
                                developing code for a computer project, you will find me outside either running or surfing or skiing. I enjoy cross country running. If I am close to an ocean you probably will find me trying to catch a wave. In the winter, when I am in the mountains you will find me on a ski lift taking on the ski trails. </text>
                            <a className="button-2" href="https://www.linkedin.com/in/ryan-sweeney-4185a824b/" target="_blank">Linked In</a>
                        </div>
                    </div>
                    <div className="skills-section">
                        <div className="text-field-3">
                            <text className="text-h2">Programming Skills</text>
                        </div>
                        <div className="row">
                            <div className="column">
                                <div className="text-field-4">
                                    <text className={"text-h5-color"}>Coding Proficiencies</text>
                                    <text className={"text-h4"}>Proficient in Arm-Assembly, C/C++, C#, Dart, HTML, Java, JavaScript, Matlab, PHP, Python, R, SQL</text>
                                </div>
                            </div>
                            <div className="column">
                                <div className="text-field-4">
                                    <text className={"text-h5-color"}>Computer Proficiencies</text>
                                    <text className={"text-h4"}>Proficient in Adobe Illustrator, AutoCAD, Matlab, Microsoft Office (Excel, PowerPoint, Word), OnShape, QGIS, Unity, Unreal Engine 5</text>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="column">
                                <div className="text-field-4">
                                    <text className={"text-h5-color"}>Networking experience</text>
                                    <text className={"text-h4"}>Deployment of server-side applications. Installation of network hardware. Installation of client hardware. Years of experience assembling personal computers.</text>
                                </div>
                            </div>
                            <div className="column">
                                <div className="text-field-4">
                                    <text className={"text-h5-color"}>A Natural Leader</text>
                                    <text className={"text-h4"}>Through leading various projects in the past such as my Eagle Scout service project, and being team captain of cross country, I have developed many useful leadership skills that make me the perfect project leader.</text>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="layout-colorful-2">
                    <div className="organizations-section">
                        <div className="text-field-3">
                            <text className="text-h2">Organizations</text>
                        </div>
                        <div className="row">
                            <div className="column">
                                <div className="text-field-4">
                                    <text className={"text-h5-color"}>Theta Tau- Tau Beta Chapter</text>
                                </div>
                            </div>
                            <div className="column">
                                <div className="text-field-4">
                                    <text className={"text-h5-color"}>Catholic Campus Ministry at SMU</text>
                                </div>
                            </div>
                            <div className="column">
                                <div className="text-field-4">
                                    <text className={"text-h5-color"}>Boy Scouts of America</text>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="interests-section">
                        <div className="text-field-3">
                            <text className="text-h2">Interests</text>
                        </div>
                        <div className="row">
                            <div className="column">
                                <div className="text-field-4">
                                    <text className={"text-h5-color"}>Long-Distance Running</text>
                                    <text className={"text-h4"}>Before I started running I was very skeptical, because it did not sound like something enjoyable. Luckily my older brother Tyler pushed me to join the high school cross country and track team where I lettered four years in a row. My favorite event was the 800m where I ran a 1:57.01 during my senior year. Since high-school I continue to enjoy running as a hobby and stress relief from everyday life.</text>
                                </div>
                            </div>
                            <div className="column">
                                <div className="text-field-4">
                                    <text className={"text-h5-color"}>Surfing</text>
                                    <text className={"text-h4"}>Growing up in San Diego, California gave me the opportunity to learn how to surf on some pretty challenging waves. I have enjoyed the past time of surfing since I was in first grade taking lessons during summer.</text>
                                </div>
                            </div>
                            <div className="column">
                                <div className="text-field-4">
                                    <text className={"text-h5-color"}>Skiing</text>
                                    <text className={"text-h4"}>Skiing is by far one of my favorite sports to enjoy. I started skiing with my family when I was 7 years old. I have skied in Canada, Colorado, and Utah. My favorite resort to ski at is Whistler, because there is so much variety in terrain, and the lower-elevation makes it harder to get altitude sick. This season I skied at Park City, Utah, where we received 65" of snow for a very fun powder week.</text>
                                </div>
                            </div>
                            <div className="column">
                                <div className="text-field-4">
                                    <text className={"text-h5-color"}>Hiking</text>
                                    <text className={"text-h4"}>
                                        Hiking has been a major part of my life since I joined Boy Scouts. In Boy Scouts, I hiked over 500 miles through the wilderness. I have fond memories of backpacking the High Sierra loop in Yosemite National Park with my troop, and that experience sparked my love for the outdoors. Since then, I have gone on many other hikes, big and small, and I look forward to exploring the trails on my next vacation. I find that taking time to immerse myself in nature is refreshing and often leads to a more fulfilling break.</text>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="awards-section">
                        <div className="text-field-3">
                            <text className="text-h2">Awards</text>
                        </div>
                        <div className="row">
                            <div className="column">
                                <div className="text-field-4">
                                    <text className={"text-h5-color"}>Eagle Scout</text>
                                </div>
                            </div>
                            <div className="column">
                                <div className="text-field-4">
                                    <text className={"text-h5-color"}>SMU Distinguished Scholar</text>
                                </div>
                            </div>
                            <div className="column">
                                <div className="text-field-4">
                                    <text className={"text-h5-color"}>SMU Discovery Scholar</text>
                                </div>
                            </div>
                            <div className="column">
                                <div className="text-field-4">
                                    <text className={"text-h5-color"}>SMU Hilltop Scholar Honors Student</text>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Home;