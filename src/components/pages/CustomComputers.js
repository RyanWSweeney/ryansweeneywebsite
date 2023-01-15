import React from 'react';
import '../../App.css';
import './CustomComputers.css';
import'../ContactForm.js';
import computer1 from '../../computer1.png';
import computer2 from '../../computer2.png';
import computer3 from '../../computer3.png';
import ContactForm from "../ContactForm";

function CustomComputers(){
    const [button, setButton] = React.useState(true);
    return (
        <>
            <div className="container">
                <div className="header">
                    <text className="header-text">Custom Computers</text>
                </div>
                <div className="body">
                    <div className="body-text">
                        <text className="body-text">In today's tech-driven world, having a computer is essential for work, gaming, or anything else. Sadly, most manufacturers price-gouge their products. Building a computer yourself is often cheaper, but requires technical knowledge. That's why I'm here; my quotes are lower than most, and I offer levels of customization that pre-built computers can't match, like custom lighting and cooling, out of box overclocking, and small form factor builds! Request a quote today, and I'll respond as soon as I can!</text>
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
                 <ContactForm/>
            </div>
        </>
    );
}

export default CustomComputers;