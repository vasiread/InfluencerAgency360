import React from 'react';
import { motion } from 'framer-motion';
import Background from "../assets/portfoilo/background4.png";

const containerVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } },
};

const headingVariants = {
  initial: { y: -20, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.2 } },
};

const paragraphVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5, delay: 0.4 } },
};

const formVariants = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1, transition: { duration: 0.5, delay: 0.6, type: "spring", stiffness: 100 } },
};

const inputVariants = {
  initial: { x: -20, opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { duration: 0.4, delay: 0.7 } },
};

const textareaVariants = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.4, delay: 0.8 } },
};

const buttonVariants = {
  initial: { scale: 0.9, opacity: 0 },
  animate: { scale: 1, opacity: 1, transition: { duration: 0.3, delay: 0.9 } },
  hover: { scale: 1.05, boxShadow: "0 0 10px rgba(0, 237, 231, 0.7)" },
  tap: { scale: 0.95 },
};

const styles = {
  container: {
    background: `URL(${Background})`,
    backgroundRepeat: "no-repeat",
    color: "black",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    width: "100%",
    padding: "2rem 1rem",
    minHeight: "100vh", // Use vh for viewport height
    boxSizing: "border-box",
    backgroundSize: "cover",
    borderRadius: "20px",
  },
  heading: {
    fontSize: "clamp(1.5rem, 5vw, 2.5rem)",
    textAlign: "center",
    marginBottom: "0.5rem"
  },
  paragraph: {
    fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
    textAlign: "center",
    maxWidth: "600px",
    margin: "0 auto 1rem"
  },
  form: {
    width: "70%",
    maxWidth: "500px",
    padding: "0 1rem",
  },
  inputWrapper: {
    marginBottom: "1.5rem"
  },
  input: {
    color: "black",
    border: "none",
    padding: "12px 20px",
    width: "100%", // Make input take full width of wrapper
    borderRadius: "20px",
    fontSize: "1rem",
    boxSizing: "border-box", // Ensure padding doesn't affect width
  },
  textarea: {
    color: "black",
    border: "none",
    padding: "12px 20px",
    width: "100%", // Make textarea take full width of wrapper
    height: "150px", // Adjust height as needed
    borderRadius: "10px",
    fontSize: "1rem",
    resize: "vertical",
    minHeight: "50px",
    boxSizing: "border-box", // Ensure padding doesn't affect width
  },
  button: {
    color: "black",
    background: "rgba(0, 237, 231, 1)",
    outline: "none",
    border: "none",
    padding: "12px 24px",
    borderRadius: "20px",
    width: "100%", // Make button take full width
    fontWeight: "bold",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxSizing: "border-box", // Ensure padding doesn't affect width
    ':hover': {
      transform: "scale(1.02)",
      boxShadow: "0 0 10px rgba(0, 237, 231, 0.7)"
    }
  }
};

function ContactUs() {
  return (
    <motion.div
      style={styles.container}
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      <motion.h1 style={styles.heading} variants={headingVariants} initial="initial" animate="animate">
        Contact Us
      </motion.h1>
      <motion.p style={styles.paragraph} variants={paragraphVariants} initial="initial" animate="animate">
        We'd love to hear from you! Please fill out the form below.
      </motion.p>

      <motion.form style={styles.form} variants={formVariants} initial="initial" animate="animate">
        <motion.div style={styles.inputWrapper} variants={inputVariants} initial="initial" animate="animate">
          <input
            type="text"
            id="name"
            name="name"
            placeholder='Name...'
            style={styles.input}
          />
        </motion.div>

        <motion.div style={styles.inputWrapper} variants={inputVariants} initial="initial" animate="animate">
          <input
            type="email"
            id="email"
            name="email"
            placeholder='YourEmail@gmail.com'
            style={styles.input}
          />
        </motion.div>

        <motion.div style={styles.inputWrapper} variants={textareaVariants} initial="initial" animate="animate">
          <textarea
            id="message"
            name="message"
            placeholder='Type Your Message Here.....'
            style={styles.textarea}
          ></textarea>
        </motion.div>

        <motion.button
          type="submit"
          style={styles.button}
          variants={buttonVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
          whileTap="tap"
        >
          Send Message
        </motion.button>
      </motion.form>
    </motion.div>
  );
}

export default ContactUs;