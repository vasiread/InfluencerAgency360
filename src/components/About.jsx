import React from 'react';
import { motion } from 'framer-motion';
import spiderman from "../assets/about/spiderman.jpg";
import Mobile from "../assets/about/mobile.jpg";
import boy from "../assets/about/boy.jpg";
import music from "../assets/about/music.jpeg";

const About = () => {
    const imageVariants = (index) => {
        const direction = index % 4; // Cycle through 4 directions
        switch (direction) {
            case 0: return { initial: { x: '-100%', opacity: 0 }, animate: { x: 0, opacity: 1 } }; // Left
            case 1: return { initial: { y: '-100%', opacity: 0 }, animate: { y: 0, opacity: 1 } }; // Top
            case 2: return { initial: { x: '100%', opacity: 0 }, animate: { x: 0, opacity: 1 } };  // Right
            case 3: return { initial: { y: '100%', opacity: 0 }, animate: { y: 0, opacity: 1 } };  // Bottom
            default: return { initial: { opacity: 0 }, animate: { opacity: 1 } };
        }
    };

    const transition = { duration: 0.5, ease: 'easeInOut', };

    return (
        <motion.div style={aboutContainer} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <div style={headerSection}>
                <p style={aboutUsText}>About Us</p>
            </div>
            <div style={imageRow}>
                <motion.img src={spiderman} alt="" style={imageStyle} variants={imageVariants(0)} initial="initial" animate="animate" transition={transition} whileHover={{ scale: 1.02 }} />
                <div style={philosophySection}>
                    <h3 style={philosophyTitle}> Our philosophy</h3>
                    <p style={philosophyText}>The TrendFluence 360*  Influencer Marketing agency exists to bring actual results for businesses and do the work fast, effectively, and smartly. We are a team of professionals, passionate about Influencer Marketing campaigns that actually have a meaning and a real impact. We nurture genuine connections and strengthen the bonds between brands and influencers, and ultimately – brands and their target audiences.</p>
                </div>
                <motion.img src={Mobile} alt="" style={imageStyle} variants={imageVariants(1)} initial="initial" animate="animate" transition={transition} whileHover={{ scale: 1.02 }} />

            </div>

            <div style={imageRow} className='flexRow' >
                <motion.img src={music} alt="" style={imageStyle} variants={imageVariants(2)} initial="initial" animate="animate" transition={transition} whileHover={{ scale: 1.02 }} />

                <motion.img src={boy} alt="" style={imageStyle} variants={imageVariants(7)} initial="initial" animate="animate" transition={transition} whileHover={{ scale: 1.02 }} />
            </div>
            <div style={lastRow}>
                <div style={lastParagraphSection}>
                    <p style={lastParagraphText}>
                        We believe that true success in Influencer
                        Marketing is achieved through a
                        combination of experience, data- driven
                        insights, and genuine relationships. With
                        over 3+ years of expertise, we harness the
                        power of data to craft strategies that
                        deliver tangible, measurable outcomes.
                        We value transparency just as you do and
                        make sure that you always know what
                        you're paying for and can clearly see the
                        benefits.
                    </p>
                </div>
            </div>
        </motion.div >
    )
}

const aboutContainer = {
    background: "black",
    color: "white",
    padding: "20px",
    fonstsize: "17px",
};

const headerSection = {
    height: "auto",
    padding: "40px 20px",
    textAlign: "center",
};

const aboutUsText = {
    position: "static",
    marginTop: "0",
    color: "white",
    fontWeight: "bold",
    fontSize: "24px",
};

const industriesTitle = {
    margin: "20px auto",
    fontWeight: "bold",
    fontSize: "28px",
    textAlign: "center",
    maxWidth: "80%",
};

const industriesHighlight = {
    color: "rgba(0, 237, 231, 1)",
};

const descriptionSection = {
    margin: "20px auto",
    maxWidth: "80%",
    textAlign: "center",
};

const descriptionText = {
    fontFamily: "Inter, sans-serif",
    fontSize: "16px",
    letterSpacing: "0.3px",
    lineHeight: "24px",
    marginBottom: "40px",
};

const imageRow = {
    display: "flex",
    flexWrap: "wrap",
    margin: "20px auto",
    gap: "15px",
    maxWidth: "90%",
    // flexDirection:"column",
    justifyContent: "center",
};

const imageStyle = {
    width: "100%",
    maxWidth: "500px",
    height: "auto",
    marginBottom: "15px",
};

const philosophySection = {
    flex: "1 1 350px",
    maxWidth: "500px",
    margin: "0 0",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
};

const philosophyTitle = {
    color: "rgba(0, 237, 231, 1)",
    fontSize: "18px",
    marginBottom: "15px",
    textAlign: "center",
};

const philosophyText = {
    lineHeight: "24px",
    letterSpacing: "0.5px",
    width: "100%",
    textAlign: "center",
    maxWidth: "550px",
    fontSize: "17px"
};

const lastRow = {
    display: "flex",
    flexWrap: "wrap",
    margin: "20px auto",
    gap: "15px",
    justifyContent: "center",
    alignItems: "stretch",
};

const lastParagraphSection = {
    flex: "1 1 350px",
    maxWidth: "500px",
    margin: "0 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
};

const lastParagraphText = {
    fontFamily: "Inter, sans-serif",
    letterSpacing: "0.3px",
    lineHeight: "24px",
    width: "100%",
    fontSize: "17px"
};

export default About;