import React from 'react';
import { motion } from 'framer-motion';
import Logo from "../assets/logo.png";
import Facebook from "../assets/footer/facebook.png"
import Twiter from "../assets/footer/twiter.png"
import Mail from "../assets/footer/mail.png"
import Youtube from "../assets/footer/youtube.png"
import Vlogo from "../assets/footer/v.png"
import { useNavigate } from 'react-router-dom';


function Footer() {
    // Get window width for responsive design
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
    const navigate = useNavigate();


    React.useEffect(() => {

        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isMobile = windowWidth <= 768;
    const isSmallScreen = windowWidth <= 480;

    return (
        <footer style={{
            ...footerStyle,
            flexDirection: isMobile ? 'column' : 'row',
        }}>
            <div style={{
                ...leftSectionStyle,
                maxWidth: isMobile ? '100%' : '40%',
                textAlign: isMobile ? 'center' : 'left',
            }}>
                <div style={logoStyle}>
                    <motion.span
                        style={logoTextStyle}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <img src={Logo} alt="logo" height={100} />
                    </motion.span>
                </div>
                <motion.p
                    style={descriptionStyle}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    360° Influencer Marketing Agency - a creative agency specializing in making videos <br /> for strategy, marketing and production.
                </motion.p>
                <div style={socialIconsStyle}>
                    <motion.div
                        style={iconCircle}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <a href="https://www.facebook.com/share/16QHYUdpbo/" target="_blank" rel="noopener noreferrer">
                            <img src={Facebook} alt=" facebook logo" />
                        </a>

                    </motion.div>
                    <motion.div
                        style={iconCircle}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <a href="https://x.com/TrendFluenc?t=HS15ILMdL-CbUiQsA4Dbvw&s=09" target="_blank" rel="noopener noreferrer">

                        <img src={Twiter} alt=" twitter logo" />
                        </a>
                    </motion.div>
                    <motion.div
                        style={iconCircle}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <a href="https://www.instagram.com/trendfluenc?igsh=b3d3ZG9wMjh4c3E0" target="_blank" rel="noopener noreferrer">

                            <img src={Mail} alt=" mail logo" />
                        </a>
                    </motion.div>
                    <motion.div
                        style={iconCircle}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <a href="#" target="_blank" rel="noopener noreferrer">

                            <img src={Youtube} alt=" youtube logo" />
                        </a>
                    </motion.div>
                    {/* <motion.div
                        style={iconCircle}
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <img src={Vlogo} alt=" v logo" />
                    </motion.div> */}
                </div>
            </div>
            <div style={{
                ...rightSectionStyle,
                flexDirection: isMobile ? 'column' : 'row',
                width: isMobile ? '100%' : 'auto',
            }}>
                <ul style={{
                    ...menuColumnStyle,
                    width: isMobile ? '80%' : '100%',
                    textAlign: isMobile ? 'center' : 'left',
                }}>
                    <motion.li
                        style={menuItemStyle}
                        onClick={() => navigate('/')}

                        whileHover={{ scale: 1.1, x: 10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <span style={linkStyle} >Home</span>
                        <span style={arrowStyle}>&#x2197;</span>
                    </motion.li>
                    <hr style={linestyle} />
                    <motion.li
                        style={menuItemStyle}
                        onClick={() => navigate('/')}
                        whileHover={{ scale: 1.1, x: 10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <span style={linkStyle}>About Us</span>
                        <span style={arrowStyle}>&#x2197;</span>
                    </motion.li>
                    <hr style={linestyle} />
                    <motion.li
                        style={menuItemStyle}
                        onClick={() => navigate('/portfolis')}

                        whileHover={{ scale: 1.1, x: 10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <span style={linkStyle}>Portfolios</span>
                        <span style={arrowStyle}>&#x2197;</span>
                    </motion.li>
                    <hr style={linestyle} />
                    <motion.li
                        style={menuItemStyle}
                        onClick={() => navigate('/services')}

                        whileHover={{ scale: 1.1, x: 10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <span style={linkStyle}>Services</span>
                        <span style={arrowStyle}>&#x2197;</span>
                    </motion.li>
                    <hr style={linestyle} />
                    <motion.li
                        style={menuItemStyle}
                        onClick={() => navigate('/contactus')}

                        whileHover={{ scale: 1.1, x: 10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <span style={linkStyle}>Contact Us</span>
                        <span style={arrowStyle}>&#x2197;</span>
                    </motion.li>
                    <hr style={linestyle} />
                </ul>
                <ul style={{
                    ...menuColumnStyle,
                    width: isMobile ? '80%' : '100%',
                    textAlign: isMobile ? 'center' : 'left',
                }}>
                    <motion.li
                        style={comingSoonItemStyle}
                        whileHover={{ scale: 1.1, x: 10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <span style={comingSoonTextStyle}>Coming Soon...</span>
                        <span style={arrowStyle}>&#x2197;</span>
                    </motion.li>
                    <hr style={linestyle} />
                    <motion.li
                        style={comingSoonItemStyle}
                        whileHover={{ scale: 1.1, x: 10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <span style={comingSoonTextStyle}>Coming Soon...</span>
                        <span style={arrowStyle}>&#x2197;</span>
                    </motion.li>
                    <hr style={linestyle} />
                    <motion.li
                        style={comingSoonItemStyle}
                        whileHover={{ scale: 1.1, x: 10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <span style={comingSoonTextStyle}>Coming Soon...</span>
                        <span style={arrowStyle}>&#x2197;</span>
                    </motion.li>
                    <hr style={linestyle} />
                    <motion.li
                        style={comingSoonItemStyle}
                        whileHover={{ scale: 1.1, x: 10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <span style={comingSoonTextStyle}>Coming Soon...</span>
                        <span style={arrowStyle}>&#x2197;</span>
                    </motion.li>
                    <hr style={linestyle} />
                </ul>
            </div>
        </footer>
    );
}

// CSS-in-JS styles
const footerStyle = {
    backgroundColor: '#000',
    color: '#fff',
    padding: '40px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    fontFamily: 'sans-serif',
    flexWrap: 'wrap',
};

const leftSectionStyle = {
    maxWidth: '40%',
    marginBottom: '30px',
};

const logoStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
};

const logoTextStyle = {
    marginLeft: '10px',
    fontSize: '1.5em',
    fontWeight: 'bold',
};

const descriptionStyle = {
    fontSize: '0.9em',
    lineHeight: '1.6',
    marginBottom: '20px',
};

const socialIconsStyle = {
    display: 'flex',
    gap: '10px',
    marginTop: '20px',
    cursor: 'pointer',
    justifyContent: 'center',
};

const iconCircle = {
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '0.8em',
    transition: 'transform 0.3s ease',
};

const rightSectionStyle = {
    display: 'flex',
    gap: '50px',
    justifyContent: 'space-around',
};

const menuColumnStyle = {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
    width: '100%',
};

const menuItemStyle = {
    marginBottom: '15px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    transition: 'transform 0.3s ease',
};

const comingSoonItemStyle = {
    marginBottom: '15px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#aaa',
    marginTop: '10px',
    transition: 'transform 0.3s ease',
};

const linkStyle = {
    textDecoration: 'none',
    color: '#fff',
};

const comingSoonTextStyle = {
    textDecoration: 'none',
    color: '#aaa',
};

const arrowStyle = {
    fontSize: '0.8em',
    cursor: 'pointer',
    marginLeft: '10px',
    color: '#aaa',
    borderRadius: '50%',
    width: '30px',
    height: '30px',
    border: '1px solid #333',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
};

const linestyle = {
    marginBottom: '20px',
    border: '0',
    height: '1px',
    backgroundColor: '#333',
    width: '100%',
};

export default Footer;
