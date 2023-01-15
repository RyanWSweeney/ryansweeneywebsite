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
                                developing code for a computer project, you will find me outside either running, surfing or skiing. I enjoy cross country running. If I am close to an ocean you probably will find me trying to catch a wave. In the winter, I like to spend time in the mountains enjoying the ski trails. </text>
                            <a className="button-2" href="https://www.linkedin.com/in/ryanwsweeney/" target="_blank">Linked In</a>
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
                                    <a className={"text-h5-color"} href={"https://thetatau.org/"} target={"_blank"}>Theta Tau- Tau Beta Chapter</a>
                                </div>
                            </div>
                            <div className="column">
                                <div className="text-field-4">
                                    <a className={"text-h5-color"} href={"https://www.smucatholic.org/"} target={"_blank"}>Catholic Campus Ministry at SMU</a>
                                </div>
                            </div>
                            <div className="column">
                                <div className="text-field-4">
                                    <a className={"text-h5-color"} href={"https://www.scouting.org/"} target={"_blank"}>Boy Scouts of America</a>
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
                                    <text className={"text-h4"}>I discovered the sport of long distance running through my brother. Originally, I was skeptical of taking on long distance running as an activity, but luckily my older brother, Tyler, encouraged me to join high school cross country and track teams. I was very successful and lettered all four high school years. My favorite event is the 800 meter, where I set a time of 1:57.01 in my senior year. After high school I continue to enjoy running as a fun activity and stress relief.</text>
                                </div>
                            </div>
                            <div className="column">
                                <div className="text-field-4">
                                    <text className={"text-h5-color"}>Surfing</text>
                                    <text className={"text-h4"}>Surfing is a unique sport which I learned growing up in San Diego, California. I had the opportunity to learn how to surf in the pacific ocean on some pretty challenging waves. I first learned how to surf in first grade taking lessons each summer. I enjoy spending time on the ocean and catching that perfect wave to ride into shore.</text>
                                </div>
                            </div>
                            <div className="column">
                                <div className="text-field-4">
                                    <text className={"text-h5-color"}>Skiing</text>
                                    <text className={"text-h4"}>Skiing is by far one of my favorite sporting activities. I started skiing with my family when I was seven years old. I have been fortunate to have spent family vacations at ski resorts, including Whistler in BC, Canada, resorts in Colorado and various ski mountains in Utah. My favorite resort is Whistler, BC because of the variety of terrain and the lower-elevation reduces the potential of altitude sickness. This past winter I skied at Park City, Utah where almost every day was a powder day since we received over 65” of snow over the ten days.</text>
                                </div>
                            </div>
                            <div className="column">
                                <div className="text-field-4">
                                    <text className={"text-h5-color"}>Hiking</text>
                                    <text className={"text-h4"}>
                                        Hiking and camping have been a major part of my summer activities, since I joined Boy Scouts at eleven years old, I have hiked over 500 miles through the wilderness with Scouts. I have great memories of backpacking the High Sierra Loop in Yosemite National Park with Troop 301. I have a passion for the outdoors and have conducted many hikes, long and short, as ways to explore and enjoy the national parks and outdoor life. Taking time to immerse myself in nature is refreshing and provides a fulfilling break from the day-to-day stresses.</text>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="layout-colorful-2">
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
            </div>
        </>

    );
}

export default Home;