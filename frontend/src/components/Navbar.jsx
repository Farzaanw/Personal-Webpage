import React from 'react'
import styles from './Navbar.module.css'

function Navbar() {

    return (
        <>
            <nav className={styles.bar}>
                <div className={styles.logo}><a href="#home">FW</a></div>
                <ul className={styles.navLinks}>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#education">Education</a></li>
                    <li><a href="#experiences">Experiences</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#hobbies">Hobbies</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;
