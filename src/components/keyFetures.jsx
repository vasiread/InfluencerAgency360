import React from 'react';
import { motion } from 'framer-motion';
import image from "../assets/keyfetures/background.jpeg";


// Variants for the main header text animation
const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } },
};

// Variants for the feature boxes animation
const featureBoxVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeInOut" } },
};

// Variants for the logos animation
const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeInOut", delay: 0.3 } },
};

function App() {
    return (
        <>
            <motion.div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    color: "white",
                    padding: "40px 20px",
                    background: "black",
                    marginTop: "-10px",
                    alignItems: "center",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <header style={{
                    width: "100%",
                    maxWidth: "1200px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                }}>
                    <motion.h2
                        variants={headerVariants}
                        initial="hidden"
                        animate="visible"
                        style={{
                            fontWeight: "700",
                            lineHeight: "1.2",
                            letterSpacing: "0",
                            margin: "40px 0px",
                            fontSize: "1.5rem",
                        }}
                    >
                        KEY FEATURES
                    </motion.h2>
                    <motion.div
                        className="main-text"
                        style={{ width: "100%", padding: "0 20px" }}
                        variants={headerVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.2 }}
                    >
                        <h1 style={{
                            margin: "40px 0",
                            fontSize: "2rem",
                            lineHeight: "1.3",
                        }}>
                            Crafting <span style={{ color: "rgba(0, 237, 231, 1)" }}> Visual Stories</span> <br /> That Captivate
                        </h1>
                        <p style={{
                            lineHeight: "1.6",
                            fontWeight: "400",
                            font: "Inter",
                            marginBottom: "20px",
                            fontSize: "17px"

                        }}>
                            We are in the thick of the digital age, and video has become one of the most
                            powerful storytelling and brand communication tools. But did you know that
                            behind every captivating video lies a creative team skilled in the art of
                            professional video production?
                        </p>
                        <p style={{
                            lineHeight: "1.6",
                            fontWeight: "400",
                            font: "Inter",
                            marginBottom: "20px",
                            fontSize: "17px"
                        }}>
                            At Kaleidoscope Studio, we're at the forefront of this art. We bring individuals'
                            and organizations' visions to life through high-quality, professional video
                            production that shakes things up.
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                outline: "none",
                                border: "none",
                                background: "rgba(0, 237, 231, 1)",
                                padding: "12px 20px",
                                color: "black",
                                borderRadius: "25px",
                                fontWeight: "bold",
                                cursor: "pointer",
                                marginTop: "25px",
                                fontSize: "0.9rem",
                            }}
                        >
                            Learn more <span style={{ background: "rgba(0, 237, 231, 1)", marginLeft: "5px", color: "black" }}>→</span>
                        </motion.button>
                    </motion.div>
                </header>
                <main style={{
                    marginTop: "40px",
                    width: "100%",
                    maxWidth: "1250px",
                    display: "flex",
                    flexDirection: window.innerWidth <= 700 ? 'column' : 'row',
                    gap: "20px",
                    padding: "0 20px",
                }}>
                    <motion.div
                        variants={featureBoxVariants}
                        initial="hidden"
                        animate="visible"
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px",
                            background: "rgba(0, 237, 231, 1)",
                            justifyContent: "center",
                            alignItems: "flex-start",
                            borderRadius: "20px",
                            padding: "20px",
                        }}
                        whileHover={{ scale: 1.3 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 style={{ lineHeight: "1.3", color: "black", fontWeight: "900", fontSize: "1.2rem" }}>Make Your Product Stand Out <br />With A Custom Video</h2>
                        <p style={{ color: "black", fontSize: "17px" }} >Make your Product launch stand out <br />from the rest.</p>
                    </motion.div>
                    <motion.div
                        variants={featureBoxVariants}
                        initial="hidden"
                        animate="visible"
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px",
                            background: "white",
                            justifyContent: "center",
                            alignItems: "flex-start",
                            color: "black",
                            borderRadius: "20px",
                            padding: "20px",
                        }}
                        whileHover={{ scale: 1.3 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 style={{ lineHeight: "1.3", color: "black", fontWeight: "900", fontSize: "1.2rem" }}>Super-fast delivery <br />(Unlike most agencies)</h2>
                        <p style={{ color: "black", fontSize: "17px" }} >No more slow agencies or freelancers. <br /> We send your video within 7 to 10 days.</p>
                    </motion.div>
                    <motion.div
                        variants={featureBoxVariants}
                        initial="hidden"
                        animate="visible"
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px",
                            background: "white",
                            justifyContent: "center",
                            alignItems: "flex-start",
                            color: "black",
                            borderRadius: "20px",
                            padding: "20px",
                        }}
                        whileHover={{ scale: 1.3 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 style={{ lineHeight: "1.3", color: "black", fontWeight: "900", fontSize: "1.2rem" }}>Turn visitors into customers. <br /> Boost your conversion rate.</h2>
                        <p style={{ color: "black", fontSize: "17px" }} >Showcase features of your SaaS to potential <br />users within seconds.</p>
                    </motion.div>
                    <motion.div
                        variants={featureBoxVariants}
                        initial="hidden"
                        animate="visible"
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px",
                            background: "white",
                            justifyContent: "center",
                            alignItems: "flex-start",
                            color: "black",
                            borderRadius: "20px",
                            padding: "20px",
                        }}
                        whileHover={{ scale: 1.3 }}
                        transition={{ duration: 0.5 }}

                    >
                        <h2 style={{ lineHeight: "1.3", color: "black", fontWeight: "900", fontSize: "1.2rem" }}>Script. Voiceover. Animation. <br />Start to finish.</h2>
                        <p style={{ color: "black", fontSize: "17px" }} >We handle everything: researching, writing the <br /> script, voiceover & animation.</p>
                    </motion.div>
                </main >
            </motion.div >
        </>
    );
}

export default App;
