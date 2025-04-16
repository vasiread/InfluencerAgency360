import React from 'react'
import Navbar from '../components/navbar'
import Hero from "../components/heroSection"
import Footer from '../components/footer'
import About from '../components/About'
import KeyFetures from '../components/keyFetures'

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <About />
            <KeyFetures />
            <Footer />
        </div>
    )
}

export default Home
