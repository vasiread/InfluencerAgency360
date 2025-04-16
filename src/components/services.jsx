import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faYoutube,
    faInstagram,
    faTwitch,
    faTiktok,
    faFacebook,
    faSnapchat,
} from '@fortawesome/free-brands-svg-icons';
import Image from "../assets/keyfetures/Image.jpg"
import logo1 from "../assets/keyfetures/Icon1.png"
import logo2 from "../assets/keyfetures/Icon2.png"
import logo3 from "../assets/keyfetures/Icon3.png"
import logo4 from "../assets/keyfetures/Icon4.png"
import logo5 from "../assets/keyfetures/Icon5.png"
import logo6 from "../assets/keyfetures/Icon6.png"
import logo7 from "../assets/keyfetures/Icon7.png"
import logo8 from "../assets/keyfetures/Icon8.png"
import { motion, useInView, useAnimationControls } from 'framer-motion';

const Services = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
    const controls = useAnimationControls();

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
            setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
        };



        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (inView) {
            controls.start({
                opacity: 1,
                y: 0,
                transition: {
                    duration: 0.6,
                    ease: "easeInOut"
                }
            });
        }
    }, [inView, controls]);


    const firstService = useRef(null);


    const scrollToSection = (service) => {
        if (service) {
            firstService.current.scrollIntoView({ behaviour: "smooth" });

        }



    }

    return (
        <div style={{
            background: "black",
            color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            overflowX: 'hidden',
            padding: isMobile ? '20px 10px' : '20px'
        }}>
            {/* Header Section */}
            <motion.div
                initial={{ opacity: 0, y: -20, }}
                animate={controls}
                style={{
                    textAlign: 'center',
                    padding: isMobile ? '10px' : '20px',
                    width: '100%',
                    maxWidth: '1200px'
                }}
            >
                <div style={{
                    fontWeight: "bold",
                    marginBottom: "30px",
                    marginTop: "80px",
                    fontSize: 'clamp(14px, 2vw, 18px)'
                }}>
                    OUR SERVICES
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: '40px'
                }}>
                    <h1 style={{
                        fontSize: 'clamp(24px, 4vw, 42px)',
                        textAlign: 'center',
                        margin: 0
                    }}>
                        TREND FLUENCE AGENCY
                    </h1>
                    <h1 style={{
                        fontSize: 'clamp(24px, 4vw, 42px)',
                        textAlign: 'center',
                        margin: 0
                    }}>
                        PROVIDES TRANSPARENT <span style={{ color: "rgba(0, 237, 231, 1)" }}>A-Z SERVICES </span>
                    </h1>
                </div>
            </motion.div>

            {/* Services Grid */}
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                style={{
                    backgroundColor: 'black',
                    color: 'white',
                    marginTop: isMobile ? "20px" : "40px"
                }}
            >
                {[
                    { left: "Influencer search", right: "Media planning" },
                    { left: "Legal & compliance services", right: "Content distribution strategy" },
                    { left: "Influencer fraud protection", right: "Payment & transaction services" }
                ].map((service, index) => (
                    <React.Fragment key={index}>
                        <div style={{
                            display: 'flex',
                            flexDirection: isMobile ? 'column' : 'row',
                            justifyContent: 'space-between',
                            alignItems: isMobile ? 'flex-start' : 'center',
                            marginBottom: '15px',
                            gap: isMobile ? '10px' : '20px',
                            padding: isMobile ? '10px' : 0,

                        }}>
                            <div style={{
                                flex: 1,
                                fontSize: "clamp(14px, 3vw, 25px)",
                                textAlign: isMobile ? 'left' : 'left',
                                width: isMobile ? '100%' : 'auto'
                            }}>
                                {service.left}
                            </div>
                            <div style={{
                                flex: 1,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: isMobile ? 'space-between' : 'flex-start',
                                gap: '10px',
                                width: isMobile ? '100%' : 'auto'
                            }}>
                                <div style={{
                                    backgroundColor: index === 0 ? '#00FFFF' : '#222',
                                    borderRadius: '50%',
                                    width: isMobile ? '35px' : 'clamp(40px, 8vw, 50px)',
                                    height: isMobile ? '35px' : 'clamp(40px, 8vw, 50px)',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginRight: '10px',
                                    flexShrink: 0,
                                    cursor: "pointer",
                                    transition: 'transform 0.2s ease'
                                }}>
                                    <span onClick={() => scrollToSection(service)} style={{
                                        color: index === 0 ? 'black' : 'white',
                                        fontSize: isMobile ? '16px' : 'clamp(16px, 4vw, 25px)',
                                        fontWeight: "bold",
                                        // color:'red'
                                    }}>
                                        ↗
                                    </span>
                                </div>
                                <div style={{
                                    fontSize: isMobile ? "14px" : "clamp(16px, 3vw, 25px)",
                                    textAlign: 'left',
                                    flex: 1
                                }}>
                                    {service.right}
                                </div>
                                {!isMobile && (
                                    <div style={{ marginLeft: 'auto' }}>
                                        <div style={{
                                            backgroundColor: '#222',
                                            borderRadius: '50%',
                                            width: 'clamp(40px, 8vw, 50px)',
                                            height: 'clamp(40px, 8vw, 50px)',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            fontSize: 'clamp(16px, 4vw, 25px)',
                                            cursor: "pointer",
                                            flexShrink: 0,
                                            transition: 'transform 0.2s ease'
                                        }} onClick={() => scrollToSection(service)}

                                        >

                                            ↗
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        {index < 2 && <hr style={{ borderColor: '#333', marginBottom: '15px', width: '100%' }} />}
                    </React.Fragment>
                ))}
            </motion.div>

            {/* Image Section */}
            <motion.img
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                src={Image}
                style={{
                    borderRadius: "20px",
                    margin: "60px 0",
                    width: '99%',
                    maxWidth: '1250px',
                    height: 'auto'
                }}
                alt="Services"
            />

            {/* Results Section */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.2 }}
                style={{
                    width: '90%',
                    maxWidth: '1200px',
                    textAlign: 'center',
                    padding: '20px',
                }}
            >
                <h1 style={{
                    fontSize: 'clamp(24px, 4vw, 42px)',
                    fontWeight: 'bold',
                    marginBottom: '20px'
                }}>
                    <span style={{ color: '#00FFFF' }}>Get real & measurable</span> business results
                    <br />
                    with turnkey Influencer Marketing <br />
                    {!isMobile && <center>solutions</center>}
                </h1>
                <p style={{
                    fontSize: 'clamp(14px, 2vw, 18px)',
                    margin: '40px 0',
                    color: '#00FFFF'
                }}>
                    we know how to enhance your presence & impact on all relevant social media
                    platforms
                </p>
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '20px',
                    marginTop: '40px'
                }}>
                    {[
                        { icon: faYoutube, text: 'YouTube' },
                        { text: 'KICK' },
                        { icon: faInstagram, text: 'Instagram' },
                        { icon: faTwitch, text: 'twitch' },
                        { icon: faTiktok, text: 'TikTok' },
                        { text: 'trovo' },
                        { icon: faFacebook, text: 'facebook' },
                        { icon: faSnapchat, text: 'SnapChat' }
                    ].map((item, index) => (
                        <div key={index} style={{
                            display: 'flex',
                            alignItems: 'center',
                            margin: '0 10px',
                            transition: 'transform 0.2s ease',
                            ':hover': { transform: 'scale(1.1)' }
                        }}>
                            {item.icon && (
                                <FontAwesomeIcon
                                    icon={item.icon}
                                    style={{
                                        fontSize: 'clamp(20px, 3vw, 24px)',
                                        marginRight: '8px'
                                    }}
                                />
                            )}
                            <span style={{
                                fontSize: 'clamp(12px, 2vw, 16px)'
                            }}>
                                {item.text}
                            </span>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Why Choose Us Section */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.4 }}
                style={{
                    textAlign: 'center',
                    width: '90%',
                    maxWidth: '1200px',
                    marginTop: "60px"
                }}
            >
                <h2 style={{
                    letterSpacing: "3px",
                    fontSize: "clamp(20px, 4vw, 30px)",
                    lineHeight: '1.4'
                }}>
                    <span style={{ color: '#00FFFF' }}>WHY</span> BRANDS CHOOSE 360 °
                    <br />
                    TRENDFLUENCE MARKETING AGENCY
                </h2>
                <p style={{
                    color: '#00FFFF',
                    marginTop: "30px",
                    fontSize: "clamp(14px, 2vw, 18px)",
                    letterSpacing: "1px",
                    lineHeight: '1.6'
                }}>
                    We provide you with a distinct combination of transparency, data-driven strategies, and a dedicated team that ensures each campaign maximizes both reach and impact.
                </p>
            </motion.div>

            {/* Feature Cards */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.6 }}
                style={{
                    display: "flex",
                    flexDirection: isMobile ? "column" : "row",
                    gap: isMobile ? "20px" : "30px",
                    marginTop: isMobile ? "30px" : "50px",
                    width: isMobile ? "95%" : "90%",
                    maxWidth: '1200px',
                    alignItems: 'center'
                }}
            >
                {[
                    {
                        logo: logo1,
                        title: "Influencer search",
                        content: "At the heart of every impactful campaign is the perfect influencer match, and for every business there is a perfect influencer. We analyze over 50 metrics to find the best influencers who fit your business goals. The TrendFluence 360* Influencer Marketing agency leverages AI alongside human insight to connect your brand with influencers who embody your values and speak directly to your audience. Our rigorous selection process and deep industry connections mean we find not just any influencer, but the right influencer to get your brand known, loved, and paid for.",
                        bgColor: "rgba(0, 237, 231, 1)",
                        textColor: "black"
                    },
                    {
                        logo: logo2,
                        title: "Creative Influencer Marketing strategy",
                        content: "We don't rely on feelings only when building a strategy that will make your brand stand out in the market. Our experts combine creativity and data-driven approach to every campaign to get measurable results – and make your target audience feel what you need them to. The TrendFluence 360*  Influencer Marketing agency doesn't just follow trends; we set them. Our creative geniuses work hand-in-hand with influencers to develop content that captivates, engages, and converts, ensuring your brand not only stands out but shines in the digital cosmos.",
                        bgColor: "white",
                        textColor: "black"
                    }
                ].map((feature, index) => (
                    <div key={index} style={{
                        width: "100%",
                        maxWidth: "550px",
                        background: feature.bgColor,
                        padding: isMobile ? "20px" : "30px",
                        display: "flex",
                        flexDirection: "column",
                        gap: isMobile ? "15px" : "20px",
                        borderRadius: "20px",
                        position: 'relative',
                        color: feature.textColor,
                        transition: 'transform 0.3s ease',
                        ':hover': { transform: 'translateY(-10px)' }
                    }}>
                        <img src={feature.logo} alt="logo" style={{ height: '50px', width: '50px' }} />
                        <h2 style={{
                            color: feature.textColor,
                            fontSize: 'clamp(18px, 3vw, 24px)'
                        }}>
                            {feature.title}
                        </h2>
                        <p style={{
                            lineHeight: "25px",
                            letterSpacing: "1px",
                            color: feature.textColor,
                            fontWeight: "800",
                            fontSize: 'clamp(14px, 2vw, 16px)'
                        }}>
                            {feature.content}
                        </p>
                        <div style={{
                            backgroundColor: index === 0 ? 'white' : 'rgba(0, 237, 231, 1)',
                            borderRadius: '50%',
                            width: '50px',
                            height: '50px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontSize: '25px',
                            position: "absolute",
                            right: "30px",
                            bottom: "30px",
                            color: "black",
                            cursor: "pointer",
                            transition: 'transform 0.2s ease',
                            ':hover': { transform: 'scale(1.1)' }
                        }}>
                            ↗
                        </div>
                    </div>
                ))}
            </motion.div>

            {/* Additional Feature Cards */}
            <motion.div ref={firstService}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.8 }}
                style={{
                    marginTop: isMobile ? "20px" : "30px",
                    width: isMobile ? "95%" : "90%",
                    maxWidth: '1200px',
                    padding: isMobile ? "10px" : "20px"
                }}
            >
                {[
                    [
                        {
                            logo: logo3,
                            title: "Media planning",
                            content: "The TrendFluence 360* Influencer Marketing agency dedicated team devises comprehensive, multi-platform media strategies that ensure your message is seen by the right people, at the right time, in the right places. From initial concept to final execution, our meticulous planning maximizes reach and engagement, driving results that exceed expectations.",
                            bgColor: "white",
                            textColor: "black"
                        },
                        {
                            logo: logo4,
                            title: "Content distribution strategy",
                            content: "The goal here is to ensure your Influencer ads not only reach but resonate with your target audience across multiple channels. This is what The TrendFluence 360* Influencer Marketing agency crafts distribution strategies for. Our approach means your campaigns benefit from optimal visibility, engagement, and impact, amplifying your brand voice across relevant platforms.",
                            bgColor: "white",
                            textColor: "black"
                        }
                    ],
                    [
                        {
                            logo: logo5,
                            title: "Influencer fraud protection",
                            content: "Your trust and security are our top priority. The TrendFluence 360* Influencer Marketing agency implements robust fraud protection measures to safeguard your investments and ensure the authenticity of your influencer partnerships. Our advanced technology and vigilant manual monitoring detect and neutralize fraudulent influencer activity, ensuring that every view, like, and share represents a genuine engagement with your brand.",
                            bgColor: "white",
                            textColor: "black"
                        },
                        {
                            logo: logo6,
                            title: "Influencer Marketing measurements & reports",
                            content: "Data drives our decision-making. The TrendFluence 360* Influencer Marketing agency provides comprehensive measurements and in-depth reports that offer clear, actionable insights into your influencer campaign's performance. Our analytics go beyond surface-level metrics, delving into audience behavior, engagement trends, and ROI, empowering you to make informed decisions and continuously optimize your strategy.",
                            bgColor: "white",
                            textColor: "black"
                        }
                    ],
                    [
                        {
                            logo: logo7,
                            title: "Legal & compliance services",
                            content: "You need confidence to succeed in Influencer Marketing. The TrendFluence 360* Influencer Marketing agency offers extensive legal and compliance services, ensuring your campaigns adhere to the latest regulations and industry standards. From influencer contracts to intellectual property rights and dispute resolutions, our expert team provides the guidance and support you need to protect your brand and operate with integrity.",
                            bgColor: "white",
                            textColor: "black"
                        },
                        {
                            logo: logo8,
                            title: "Payment & transaction services",
                            content: "Our Influencer Marketing agency streamlines your operations. Our comprehensive solutions simplify the financial aspects of influencer partnerships, from seamless payments to transparent transactions. You don't need to worry about payment methods: just choose the ones that are convenient for you, and we will pay your chosen influencers the way they like it – the job is on us, we find the best ways.",
                            bgColor: "white",
                            textColor: "black"
                        }
                    ]
                ].map((cardPair, pairIndex) => (
                    <div key={pairIndex} style={{
                        display: "flex",
                        flexDirection: isMobile ? "column" : "row",
                        gap: isMobile ? "20px" : "30px",
                        marginTop: isMobile ? "30px" : "50px",
                        width: '100%',
                        alignItems: 'center'
                    }}>
                        {cardPair.map((feature, index) => (
                            <div key={index} style={{
                                width: "100%",
                                maxWidth: isMobile ? "100%" : "550px",
                                background: feature.bgColor,
                                padding: isMobile ? "20px" : "30px",
                                display: "flex",
                                flexDirection: "column",
                                gap: isMobile ? "15px" : "20px",
                                borderRadius: "20px",
                                position: 'relative',
                                color: feature.textColor,
                                transition: 'transform 0.3s ease'
                            }}>
                                <img src={feature.logo} alt="logo" style={{ height: '50px', width: '50px' }} />
                                <h2 style={{
                                    color: feature.textColor,
                                    fontSize: 'clamp(18px, 3vw, 24px)'
                                }}>
                                    {feature.title}
                                </h2>
                                <p style={{
                                    lineHeight: "25px",
                                    letterSpacing: "1px",
                                    color: feature.textColor,
                                    fontWeight: "800",
                                    fontSize: 'clamp(14px, 2vw, 16px)'
                                }}>
                                    {feature.content}
                                </p>
                                <div style={{
                                    backgroundColor: 'rgba(0, 237, 231, 1)',
                                    borderRadius: '50%',
                                    width: '50px',
                                    height: '50px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    fontSize: '25px',
                                    position: "absolute",
                                    right: "30px",
                                    bottom: "30px",
                                    color: "black",
                                    cursor: "pointer",
                                    transition: 'transform 0.2s ease',
                                    ':hover': { transform: 'scale(1.1)' }
                                }}>
                                    ↗
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </motion.div>

            {/* Contact Section */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.3 }}
                style={{
                    margin: isMobile ? "50px 0" : "100px 0",
                    width: isMobile ? "95%" : "90%",
                    maxWidth: '1200px',
                    textAlign: isMobile ? 'center' : 'left',
                    padding: isMobile ? "0 10px" : 0
                }}
            >
                <h1 style={{
                    fontSize: "clamp(32px, 6vw, 50px)",
                    lineHeight: '1.3'
                }}>
                    Have an idea?
                    <br />
                    <span style={{ color: "rgba(0, 237, 231, 1)" }}>Let's Talk. </span>
                </h1>
                <p style={{
                    lineHeight: "25px",
                    letterSpacing: "1px",
                    fontWeight: "600",
                    fontSize: 'clamp(16px, 2vw, 18px)',
                    marginTop: '20px'
                }}>
                    We create experiences that fuel connections between <br />
                    brands and the people vital to their success.
                </p>
            </motion.div>
        </div>
    )
}

export default Services;
