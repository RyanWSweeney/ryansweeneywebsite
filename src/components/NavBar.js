import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import {faBars, faTimes} from "@fortawesome/free-solid-svg-icons";
import './NavBar.css';

function NavBar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    window.addEventListener('resize', showButton);

    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMenu}>
                    ryansweeney.org
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <FontAwesomeIcon icon={click ? faTimes : faBars} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={closeMenu}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/custom-computers" className="nav-links" onClick={closeMenu}>
                            Custom Computers
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/projects" className="nav-links" onClick={closeMenu}>
                            Projects
                        </Link>
                    </li>
                </ul>
                </div>
        </nav>
        </>
    );
}

export default NavBar;