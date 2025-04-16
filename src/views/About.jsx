import React from 'react'
import Navbar from '../components/navbar'
import About from "../components/About"
import Footer from '../components/footer'
import Keyfetures from '../components/keyFetures'

const Home = () => {
    return (
        <div>
            <Navbar />
            <About />
            <Keyfetures />
            <Footer />
        </div>
    )
}

export default Home
