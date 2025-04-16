import React from 'react'
import { motion } from 'framer-motion';

const Blog = () => {
    return (
        <motion.div
            style={{
                display: "flex",
                background: "black",
                flexDirection: "column",
                height: "50vh",
                alignItems: "center",
                justifyContent: "center"
            }}
            initial={{ opacity: 0, y: 50 }} // Start from below and faded out
            animate={{ opacity: 1, y: 0 }}   // Move to its original position and fade in
            transition={{ duration: 0.8, ease: "easeInOut" }} // Smooth transition
        >
            <motion.h1
                style={{  }}
                initial={{ scale: 0.5 }}      // Start scaled down
                animate={{ scale: 1 }}        // Scale up to normal size
                transition={{ duration: 0.6, delay: 0.5 }} // Add a delay for sequential animation
            >
                Comming Soon....
            </motion.h1>
        </motion.div >
    )
}

export default Blog
