import React, { useState, useEffect } from 'react';
import { ReactTyped } from "react-typed";
import styles from '../styles/Homepage.module.css';

function Homepage() {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
        if (window.scrollY > 50) {
            setVisible(false);
        } else {
            setVisible(true);
        }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <section id="home" className={styles.body}>
                <h2 style={{ color: "#333", fontSize: "25px", fontWeight: "bold" }}>Hey there, I'm</h2>
                <h1 style={{ color: "#333", fontSize: "50px", fontWeight: "bold" }}>Farzaan Wadiwalla</h1>
                <ReactTyped
                    strings={[
                        "Honors Computer Science Student",
                        "Machine Learning Researcher",
                        "Proud Beaver! 🦫",
                        "Aspiring AI Product Manager",
                        "Creative Problem Solver",
                        "Team Player",
                        "Varsity Soccer Player",
                        "Piano Enthusiast",
                        "Dog lover",
                    ]}
                    typeSpeed={60}
                    backSpeed={30}
                    loop
                    style={{ color: "#5b3510", fontSize: "25px", fontWeight: "500" }}
                />  

                <div
                    className={styles.arrow}
                    style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.5s' }}
                >
                    ↓
                </div>
                
            </section>



        </>
    );
}

export default Homepage;