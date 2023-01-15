import React from "react";
import "./footer.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faLinkedinIn} from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-links">
                        <div className="footer-link-wrapper">
                            <div className="footer-link-items">
                                <a className = "github" href={"https://github.com/RyanWSweeney"} target = "_blank">
                                <FontAwesomeIcon icon={faGithub} />
                                </a>
                                <a className="linked-in" href={"https://www.linkedin.com/in/ryanwsweeney/"} target="_blank">
                                <FontAwesomeIcon icon={faLinkedinIn} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            </>
    );
}

export default Footer;