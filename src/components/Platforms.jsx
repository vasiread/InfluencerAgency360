import React from 'react';
import { motion } from 'framer-motion';

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } },
    hover: { scale: 1.03, boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", transition: { duration: 0.2 } },
};

const Platforms = () => {
    return (
        <div style={{ background: "black", display: "flex", flexDirection: "column", alignItems: 'center', paddingBottom: '30px' }}>
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                style={{ color: 'white' }}
            >
                Social Media
            </motion.h1>

            <motion.h2
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                style={{ marginTop: "30px", color: 'white' }}
            >
                INSTAGRAM
            </motion.h2>

            <div style={{
                display: "flex",
                flexDirection: window.innerWidth <= 1000 ? 'column' : 'row',
                gap: "30px",
                marginTop: "50px",
                width: '90%',
                maxWidth: '95%',
                alignItems: 'center',
                height: "auto",
            }}>
                {[
                    {
                        title: "Leverage Instagram Influencer Marketing to increase your ROI and drive sales.  ",
                        content: "The Trend Fluence, we’re here to handle the research, connect you with the right Instagram influencers at the best rates, and oversee your next impactful Influencer Marketing campaign.",
                        bgColor: "rgba(0, 237, 231, 1)",
                        textColor: "black"
                    },
                    {
                        title: `Why partner with Trend Fluence for your Instagram Influencer Marketing?  TAILORED STRATEGY FOR EVERY BRAND `,
                        content: " No matter the industry, Instagram Influencer Marketing can work wonders for your business. Trend Fluence specializes in crafting personalized strategies that perfectly showcase your brand, product, or service, maximizing your returns from influencer collaborations.",
                        bgColor: "white",
                        textColor: "black",
                        overflow: "scroll"
                    },
                    {
                        title: "UNBEATABLE RATES FOR INFLUENCER PARTNERSHIPS",
                        content: " With data-driven insights guiding our decisions, we ensure that the influencer rates we secure are fair and competitive. This means you can trust us to negotiate the best deals, maximizing your ROI and making every dollar spent count.",
                        bgColor: "white",
                        textColor: "black"
                    },
                    {
                        title: "INSIGHT-LED STRATEGY",
                        content: "Instagram Influencer Marketing knows no limits, and neither do we. Whether you're venturing into new markets or looking to dominate a familiar one, our experts, fluent in 15 languages, have the cultural expertise to ensure success in any region",
                        bgColor: "white",
                        textColor: "black"
                    }
                ].map((feature, index) => (
                    <motion.div
                        key={index}
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover="hover"
                        style={{
                            width: "100%",
                            maxWidth: "600px",
                            background: feature.bgColor,
                            padding: "30px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "20px",
                            borderRadius: "20px",
                            position: 'relative',
                            color: feature.textColor,
                            height: "280px",
                            overflow: feature.overflow
                        }}>
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

                    </motion.div>
                ))}
            </div>
            <motion.h2
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                style={{ marginTop: "30px", color: 'white' }}

            >
                YOUTUBE
            </motion.h2>

            <div style={{
                display: "flex",
                flexDirection: window.innerWidth <= 1000 ? 'column' : 'row',
                gap: "30px",
                marginTop: "50px",
                width: '90%',
                maxWidth: '95%',
                alignItems: 'center',
                height: "auto",
            }}>
                {[
                    {
                        title: "YouTube Influencer Marketing Agency to Make Your Brand a Global Sensation ",
                        content: "With over 120 million active daily users, YouTube offers a massive audience eager to discover your brand and products! We specialize in connecting you with your ideal audience quickly and effortlessly.",
                        bgColor: "rgba(0, 237, 231, 1)",
                        textColor: "black"
                    },
                    {
                        title: `Reasons Why Brands Opt for Trend Fluence in YouTube Influencer Marketing  IDEAL FOR  ANY INDUSTRY `,
                        content: "We collaborate with brands across various sectors, including gaming, fintech, mobile, digital services, e-commerce, and more. Whether you're a startup, growing business, or established enterprise, our tailored approach ensures you get the most out of Influencer Marketing.",
                        bgColor: "white",
                        textColor: "black",
                        overflow: "scroll"
                    },
                    {
                        title: "PERFECT PARTNERSHIPS WITH CONTENT CREATORS",
                        content: "Trend Fluence is your matchmaker for brand partnerships, but with a twist. We connect you with the right influencers from all fields (gaming, lifestyle, beauty, sports, education, and beyond) in all categories, whether they're mega-, macro-, micro-influencers, or even top-tier celebrities",
                        bgColor: "white",
                        textColor: "black"
                    },
                    {
                        title: "INSIGHT-DRIVEN STRATEGY",
                        content: "We support every recommendation and decision with solid data. This makes our work with brands clear, reliable, and effective while helping us avoid missteps and optimizing success.",
                        bgColor: "white",
                        textColor: "black"
                    }
                ].map((feature, index) => (
                    <motion.div
                        key={index}
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover="hover"
                        style={{
                            width: "100%",
                            maxWidth: "600px",
                            background: feature.bgColor,
                            padding: "30px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "20px",
                            borderRadius: "20px",
                            position: 'relative',
                            color: feature.textColor,
                            height: "280px",
                            overflow: feature.overflow || "hidden",
                        }}>
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

                    </motion.div>
                ))}
            </div>

            <motion.h2
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                style={{ marginTop: "30px", color: 'white' }}

            >
                TikTok
            </motion.h2>

            <div style={{
                display: "flex",
                flexDirection: window.innerWidth <= 1000 ? 'column' : 'row',
                gap: "30px",
                marginTop: "50px",
                width: '90%',
                maxWidth: '95%',
                alignItems: 'center',
                height: "auto",
            }}>
                {[
                    {
                        title: "TikTok Influencer Marketing: We turn your brand into a sensation ",
                        content: "Here’s why your brand needs a TikTok Influencer Marketing agency. TikTok is the platform where users spend the most time – averaging over 23 hours per month. At Trend Fluence, we help you leverage that time for your brand’s benefit through TikTok Influencer Marketing. Our agency ensures that your brand gets the spotlight it deserves on one of the world’s most engaging and widely used social media platforms!",
                        bgColor: "rgba(0, 237, 231, 1)",
                        textColor: "black",
                        overflow: "scroll"
                    },
                    {
                        title: `Trend Fluence Influencer Marketing agency understands the secret to dominating the market through TikTok.  PERFECT FOR COMPANIES OF ALL SIZES
`,
                        content: " We blend our expertise with current trends to help businesses of any scale achieve significant visibility on TikTok. By crafting innovative strategies alongside influencers, we ensure your campaign stands out. Together, we and our clients set trends and win the hearts of audiences across the globe with TikTok Influencer Marketing.",
                        bgColor: "white",
                        textColor: "black",
                        overflow: "scroll"
                    },
                    {
                        title: "PRECISE INFLUENCER SELECTION",
                        content: " To make your TikTok influencer campaign as impactful as possible, we identify influencers with engaged and loyal audiences who are already curious about what your brand has to offer. TikTok Influencer Marketing is about creating the right connections with people who can help you reach your specific audience—whether you're looking for niche micro-influencers or high-profile mega-influencers.",
                        bgColor: "white",
                        textColor: "black",
                        overflow: "scroll"
                    },
                    {
                        title: "RESULTS-DRIVEN APPROACH",
                        content: "When partnering with our TikTok Influencer Marketing agency, you gain access to a dedicated team of professionals who are experts in Influencer Marketing and have valuable connections with TikTok creators. We act as your in-house department, ensuring all aspects of your campaign are covered. With our comprehensive approach, we deliver maximum performance and results from your TikTok influencer campaigns.",
                        bgColor: "white",
                        textColor: "black",
                        overflow: "scroll"
                    }
                ].map((feature, index) => (
                    <motion.div
                        key={index}
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover="hover"
                        style={{
                            width: "100%",
                            maxWidth: "600px",
                            background: feature.bgColor,
                            padding: "30px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "20px",
                            borderRadius: "20px",
                            position: 'relative',
                            color: feature.textColor,
                            height: "280px",
                            overflow: feature.overflow
                        }}>
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

                    </motion.div>
                ))}
            </div>
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                style={{ marginTop: "30px", color: 'white' }}

            >
                We work with Twitch , Kick and Streaming Networks !
            </motion.h1>
        </div>


    )
}

export default Platforms
