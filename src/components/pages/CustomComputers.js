import React from 'react';
import '../../App.css';
import './CustomComputers.css';
import'../contactForm.js';
import computer1 from '../../computer1.png';
import computer2 from '../../computer2.png';
import computer3 from '../../computer3.png';
import ContactForm from "../contactForm";

function CustomComputers(){
    return (
        <>
            <div className="container">
                <div className="header">
                    <text className="header-text">Custom Computers</text>
                </div>
                <div className="body">
                    <div className="body-text">
                        <text className="body-text">In today's world everyone needs a computer, whether for work, video games, or anything in between. Manufacturers mark-up prices, and often times building a computer is cheaper for the consumer, but this requires technical skills. My quotes are cheaper than most manufacturers, and offer a level of customization no pre-built computer offers (small form factor, custom lighting, custom cooling, out of box overclocking etc.). Request a quote below and I will get back to you as soon as possible!</text>
                    </div>
                </div>
                <div className="images">
                    <div className="image">
                        <img src={computer1} className="computer-img" alt="computer-img" />
                        <text className="image-text">Inside of a custom PC</text>
                    </div>
                    <div className="image">
                        <img src={computer2} className="computer-img" alt="computer-img" />
                        <text className="image-text">Computer with custom water-cooling and lighting</text>
                    </div>
                    <div className="image">
                        <img src={computer3} className="computer-img" alt="computer-img" />
                        <text className="image-text">Small form factor PC that fits inside a carry-on for easy travel</text>
                    </div>
                </div>
                <div className="form">
                    <ContactForm />
                </div>
            </div>
        </>
    );
}

export default CustomComputers;