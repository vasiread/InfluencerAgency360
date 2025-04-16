import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { height, width } from '@fortawesome/free-brands-svg-icons/fa42Group';

const TestimonialCard = ({ text, rating, company, logoColor }) => {
    const stars = Array.from({ length: 5 }, (_, index) => (
        <span key={index} style={{ color: '#FFD700', fontSize: '1.2em' }}>★</span>
    ));

    const cardVariants = {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
    };

    return (
        <motion.div style={styles.card} variants={cardVariants} initial="initial" animate="animate">
            <p style={styles.quote}>“</p>
            <p style={styles.text}>{text}</p>
            <div style={styles.rating}>{stars}</div>
            <div style={{ ...styles.logoCircle, backgroundColor: logoColor }}>
                <span style={styles.companyText}>{company}</span>
            </div>
        </motion.div>
    );
};

const TestimonialsSection = () => {
    const testimonialsData = [
        {
            text: ' Thanks to Trend Fluence, we not only achieved our regional goals but also exceeded them, further strengthening our results',
            rating: 5,
            company: 'Jessica Chen',
            logoColor: '#E50914',
        },
        {
            text: ' With Trend Fluence’ help, we saw a significant boost in traffic, registrations, and account verifications through tagged links, plus an increase in organic traffic',
            rating: 5,
            company: ' Pocket Option',
            logoColor: '#29ABE2',
        },
        {
            text: 'Trend Fluence helped us surpass our regional targets, driving even greater success and amplifying our overall campaign performance.',
            rating: 5,
            company: 'Pin-UP ',
            logoColor: '#E50914',
        },
    ];



    const containerVariants = {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { delayChildren: 0.3, staggerChildren: 0.2 } },
    };

    const containerStyle = {
        display: 'flex',
        gap: '20px',
        justifyContent: 'center',
        padding: '20px',
        backgroundColor: '#1A1A1A',
        alignItems: 'center',
        flexDirection: window.innerWidth <= 700 ? 'column' : 'row',
        height: "auto",
        minHeight: '50vh',
    };

    const cardStyle = {
        backgroundColor: '#2E2E2E',
        color: '#FFFFFF',
        padding: '20px',
        borderRadius: '8px',
        textAlign: 'center',
        minHeight: '300px',
    };

    const quoteStyle = {
        fontSize: '2em',
        color: '#999',
        marginBottom: '10px',
    };

    const textStyle = {
        fontSize: '1em',
        lineHeight: '1.6',
        marginBottom: '15px',
    };

    const ratingStyle = {
        marginBottom: '15px',
    };

    const logoCircleStyle = {
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 auto',
    };

    const companyTextStyle = {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: '0.9em',
    };

    return (
        <motion.div style={containerStyle} variants={containerVariants} initial="initial" animate="animate">
            {testimonialsData.map((testimonial, index) => (
                <TestimonialCard
                    key={index}
                    {...testimonial}
                    style={cardStyle} // You can pass styles as props if needed for more dynamic card styling
                    quoteStyle={quoteStyle}
                    textStyle={textStyle}
                    ratingStyle={ratingStyle}
                    logoCircleStyle={logoCircleStyle}
                    companyTextStyle={companyTextStyle}
                />
            ))}
        </motion.div>
    );
};

// It's better to define styles outside the component for performance
const styles = {
    card: {
        backgroundColor: '#2E2E2E',
        color: '#FFFFFF',
        padding: '20px',
        borderRadius: '8px',
        textAlign: 'center',
        minHeight: '350px',
        width: "250px"
    },
    quote: {
        fontSize: '2em',
        color: '#999',
        marginBottom: '10px',
    },
    text: {
        fontSize: "17px",
        lineHeight: '1.6',
        marginBottom: '15px',
    },
    rating: {
        marginBottom: '15px',
    },
    logoCircle: {
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 auto',
    },
    companyText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: '0.9em',
    },
};

export default TestimonialsSection;