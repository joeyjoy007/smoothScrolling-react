import React, { useState } from 'react'
import HeroSection from '../components/HeroSection/HeroSection'

import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const Home = () => {

const [isopen, setIsOpen] = useState(false)

const toggle = ()=>{
    setIsOpen(!isopen)
}

    return (
        <>
        <Sidebar isopen={isopen}  toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <HeroSection/>
            
        </>
    )
}

export default Home
