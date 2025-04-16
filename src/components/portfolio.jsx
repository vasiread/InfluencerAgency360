import React, { useState } from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Background1 from "../assets/portfoilo/background1.mp4"; // Assuming these are now video files
import Background2 from "../assets/portfoilo/background2.mp4";
import Background3 from "../assets/portfoilo/background3.mp4";
import Background4 from "../assets/portfoilo/background4.mp4";
import Background5 from "../assets/portfoilo/background5.mp4";
import './Portfolio.css'; // Create this CSS file for custom styles
import Win1 from "../assets/hero/1win.jpg";
import Bet1x from "../assets/hero/1xbet.png";
import BattetBet from "../assets/hero/batterybet.PNG";
import Iqoption from "../assets/hero/iqoption.PNG";
import PinUp from "../assets/hero/pinup.png";
import Pocket from "../assets/hero/pocket.png";
import { width } from '@fortawesome/free-brands-svg-icons/fa42Group';

const Portfolio = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            }
        ]
    };

    const clientsData = [
        { logo: Win1, name: "1Win" },
        { logo: Bet1x, name: "1xBet" },
        { logo: BattetBet, name: "Battet Bet" },
        { logo: Iqoption, name: "Iq-option" },
        { logo: PinUp, name: "Pin Up" },
        { logo: Pocket, name: "Pocket options" },
    ];

    const clientSliderVariants = {
        initial: { x: 0 },
        animate: {
            x: `-${clientsData.length * 140}px`, // Adjust 140px based on logo width + margin
            transition: {
                repeat: Infinity,
                duration: 10, // Adjust duration for speed
                ease: "linear",
            },
        },
    };

    const infoContainerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const infoSectionVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.div
            className="portfolio-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="portfolio-header">
                <motion.p
                    className="portfolio-title"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    PORTFOLIO
                </motion.p>
                <div className="portfolio-header-content">
                    <motion.h1
                        className="portfolio-headline"
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        We create beautiful,<br />
                        <span className="highlight">practical works </span>
                    </motion.h1>
                </div>
            </div>

            <motion.div
                className="portfolio-slider-container"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                <Slider {...settings}>
                    <PortfolioSlide
                        video={Background1}
                        title="Hublot Watch"
                        subtitle="play a video"
                    />
                    <PortfolioSlide
                        video={Background2}
                        title="Cool App Design"
                        subtitle="Mobile Application"
                    />
                    <PortfolioSlide
                        video={Background3}
                        title="Pizza Company"
                        subtitle="play a Video"
                    />
                    <PortfolioSlide
                        video={Background4}
                        title="Chanel Promotion"
                        subtitle="play a Video"
                    />
                    <PortfolioSlide
                        video={Background5}
                        title="Logistics Promo"
                        subtitle="play a Video"
                    />
                </Slider>
            </motion.div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "20px", gap: "20px" }}>

                <motion.div
                    style={{
                        display: "flex",
                        flexWrap: "nowrap",
                        width: "auto",
                    }}
                    variants={clientSliderVariants}
                    initial="initial"
                    animate="animate"
                >
                    {clientsData.map((client, index) => (
                        <motion.div
                            key={index}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                minWidth: "120px",
                                marginRight: "20px",
                                "@media (min-width: 768px)": {
                                    minWidth: "auto"
                                }
                            }}
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                        >
                            <img
                                src={client.logo}
                                alt={client.name}
                                style={{
                                    width: "70px",
                                    height: "30px",
                                    marginRight: "10px",
                                    "@media (min-width: 768px)": {
                                        width: "32px",
                                        height: "32px"
                                    }
                                }}
                            />
                            <span style={{
                                color: "rgba(108, 114, 117, 1)",
                                fontSize: "12px",
                                fontWeight: "bold",
                                "@media (min-width: 768px)": {
                                    fontSize: "16px"
                                }
                            }}>
                                {client.name}
                            </span>
                        </motion.div>
                    ))}
                    {/* Duplicate logos for seamless loop */}
                    {clientsData.map((client, index) => (
                        <motion.div
                            key={`duplicate-${index}`}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                minWidth: "120px",
                                marginRight: "20px",
                                "@media (min-width: 768px)": {
                                    minWidth: "auto"
                                }
                            }}
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                        >
                            <img
                                src={client.logo}
                                alt={client.name}
                                style={{
                                    width: "70px",
                                    height: "30px",
                                    marginRight: "10px",
                                    "@media (min-width: 768px)": {
                                        width: "32px",
                                        height: "32px"
                                    }
                                }}
                            />
                            <span style={{
                                color: "rgba(108, 114, 117, 1)",
                                fontSize: "12px",
                                fontWeight: "bold",
                                "@media (min-width: 768px)": {
                                    fontSize: "16px"
                                }
                            }}>
                                {client.name}
                            </span>
                        </motion.div>
                    ))}
                    {clientsData.map((client, index) => (
                        <motion.div
                            key={`duplicate-2-${index}`}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                minWidth: "120px",
                                marginRight: "20px",
                                "@media (min-width: 768px)": {
                                    minWidth: "auto"
                                }
                            }}
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                        >
                            <img
                                src={client.logo}
                                alt={client.name}
                                style={{
                                    width: "70px",
                                    height: "30px",
                                    marginRight: "10px",
                                    "@media (min-width: 768px)": {
                                        width: "32px",
                                        height: "32px"
                                    }
                                }}
                            />
                            <span style={{
                                color: "rgba(108, 114, 117, 1)",
                                fontSize: "12px",
                                fontWeight: "bold",
                                "@media (min-width: 768px)": {
                                    fontSize: "16px"
                                }
                            }}>
                                {client.name}
                            </span>
                        </motion.div>
                    ))}
                    {clientsData.map((client, index) => (
                        <motion.div
                            key={`duplicate-3-${index}`}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                minWidth: "120px",
                                marginRight: "20px",
                                "@media (min-width: 768px)": {
                                    minWidth: "auto"
                                }
                            }}
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                        >
                            <img
                                src={client.logo}
                                alt={client.name}
                                style={{
                                    width: "70px",
                                    height: "30px",
                                    marginRight: "10px",
                                    "@media (min-width: 768px)": {
                                        width: "32px",
                                        height: "32px"
                                    }
                                }}
                            />
                            <span style={{
                                color: "rgba(108, 114, 117, 1)",
                                fontSize: "12px",
                                fontWeight: "bold",
                                "@media (min-width: 768px)": {
                                    fontSize: "16px"
                                }
                            }}>
                                {client.name}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
            <motion.div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "flex-start", marginTop: "20px", gap: "20px" }}
                variants={infoContainerVariants}
                initial="hidden"
                animate="visible"
                delay={0.6}
            >
                <motion.div style={styles.container} variants={infoSectionVariants}>
                    <div style={styles.infoSection}>
                        <div style={styles.infoTitle}>Brand:</div>
                        <div>1XBET</div>
                    </div>

                    <div style={styles.infoSection}>
                        <div style={styles.infoTitle}>Objectives:</div>
                        <div>Increase brand visibility and attract new users.</div>
                    </div>

                    <div style={styles.infoSection}>
                        <div style={styles.infoTitle}>Target Countries:</div>
                        <div>
                            African Nations: Morocco, Algeria, Tunisia, Nigeria
                            <br />
                            Asian Continent
                        </div>
                    </div>

                    <div style={styles.infoSection}>
                        <div style={styles.infoTitle}>Platforms:</div>
                        <div>YouTube, Facebook, Instagram, Kick</div>
                    </div>

                    <div style={styles.infoSection}>
                        <div style={styles.infoTitle}>Results:</div>
                        <div>Total Videos Published: 300</div>
                        <div>Total Reach and Exposure: 15M</div>
                    </div>
                </motion.div>

                <motion.div style={styles.container} variants={infoSectionVariants}>
                    <div style={styles.infoSection}>
                        <div style={styles.infoTitle}>Brand:</div>
                        <div>Binomo</div>
                    </div>

                    <div style={styles.infoSection}>
                        <div style={styles.infoTitle}>Objectives:</div>
                        <div>Awareness and bring active Users</div>
                    </div>

                    <div style={styles.infoSection}>
                        <div style={styles.infoTitle}>Target Countries:</div>
                        <div>
                            Ashia specillay India, Pakistan, Bangledes
                            <br />
                            Asian Continent
                        </div>
                    </div>

                    <div style={styles.infoSection}>
                        <div style={styles.infoTitle}>Platforms:</div>
                        <div>YouTube Videos = 60M,<br />Reach and Exposure = 20M
                        </div>
                    </div>

                    <div style={styles.infoSection}>
                        <div style={styles.infoTitle}>Results:</div>
                        <div>Total Videos Published: 300</div>
                        <div>Total Reach and Exposure: 15M</div>
                    </div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

// Slide component with video
const PortfolioSlide = ({ video, title, subtitle }) => {

    return (
        <motion.div
            className="portfolio-slide"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
        >
            <div className="slide-video-container">
                <motion.video
                    height="100%"
                    width="100%"
                    src={video}
                    alt={title}
                    className="slide-video"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                    loop
                    muted
                    autoPlay
                    style={{ borderRadius: "20px" }}
                />
                <motion.div
                    className="slide-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    <p className="slide-title">{title}</p>
                    <p className="slide-subtitle">{subtitle}</p>
                </motion.div>

            </div>
        </motion.div>
    );
};


const styles = {
    container: {
        margin: '20px',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        fontFamily: 'sans-serif',
        width: "400px"
    },
    imageContainer: {
        marginBottom: '20px',

    },
    image: {
        width: '100%',
    },
    imageCaption: {
        fontSize: 'small',
        color: '#777',
        marginTop: '5px',
    },
    infoSection: {
        marginBottom: '15px',
    },
    infoTitle: {
        fontWeight: 'bold',
        marginBottom: '5px',
    },
};

export default Portfolio;