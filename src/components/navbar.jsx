import React from 'react';
import { motion } from 'framer-motion';
import Logo from "../assets/logo.png";

function Navbar() {
    return (
        <nav style={navbarStyle}>
            <motion.div
                style={logoStyle}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                <span style={{ fontWeight: 'normal' }}>
                    <img
                        src={Logo}
                        alt="Logo"
                        style={logoImageStyle}
                    />
                </span>
            </motion.div>
            <motion.ul
                style={linksStyle}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <li>
                    <a href="/" style={linkStyle}>
                        Home
                    </a>
                </li>
                <li>
                    <a href="services" style={linkStyle}>
                        Services
                    </a>
                </li>
                <li>
                    <a href="portfolis" style={linkStyle}>
                        Portfolios
                    </a>
                </li>
                <li>
                    <a href="contactus" style={linkStyle}>
                        Contact Us
                    </a>
                </li>
                <li>
                    <a href="industries" style={linkStyle}>
                        Industries
                    </a>
                </li>
                <li>
                    <a href="platforms" style={linkStyle}>
                        Platforms
                    </a>
                </li>
                <li>
                    <a href="ForCreators" style={linkStyle}>
                        ForCreators
                    </a>
                </li>
                <li>
                    <a href="cases" style={linkStyle}>
                        Cases
                    </a>
                </li>
                <li>
                    <a href="blog" style={linkStyle}>
                        Blog
                    </a>
                </li>
                <li>
                    <a href="Testomonials" style={linkStyle}>
                        Testomonials
                    </a>
                </li>
            </motion.ul>
            <motion.button
                style={buttonStyle}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
                <a href="/contactus" style={linkStyle}>
                    Book a Demo
                </a>
            </motion.button>
        </nav>
    );
}

const navbarStyle = {
    backgroundColor: 'black',
    color: 'white',
    padding: '15px 20px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap', // Allow items to wrap on smaller screens
};

const logoStyle = {
    fontSize: '1em',
    fontWeight: 'bold',
    color: 'cyan',
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px', // Add some space below the logo on smaller screens
};

const logoImageStyle = {
    height: '55px',
    width: "98px",
    position: 'relative',
    // Removed fixed left positioning for responsiveness
};

const linksStyle = {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    alignItems: 'center',
    fontWeight: "bold",
    marginBottom: '10px', // Add some space below the links on smaller screens
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: "20px"
};

const linkStyle = {
    textDecoration: 'none',
    color: 'white',
    fontSize: '1em',
    marginLeft: '20px',
};

const buttonStyle = {
    backgroundColor: 'cyan',
    color: 'black',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '25px',
    cursor: 'pointer',
    fontWeight: 'bold',
};

export default Navbar;
