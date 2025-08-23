// Defines main structure of the page
// imported into main.jsx
// Each page compnent is added here
import React, { useState } from 'react'           // use for chatIcon button (open/close chatBot)
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import About from './pages/About'
import Education from './pages/Education'
import Experiences from './pages/Experiences'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
// import ChatIcon from './components/ChatIcon'
// import Chatbot from './components/Chatbot'
import Hobbies from './pages/Hobbies'
import Footer from './components/Footer'


function App() {
    return (
        <>
            <Navbar />
            <Homepage />
            <About />
            <Education />
            <Experiences />
            <Projects />
            <Hobbies />
            <Contact />
            {/* <ChatIcon /> */}
            <Footer />
    
        </>
    );
}

export default App;

