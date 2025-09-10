import React from 'react';
import styles from '../styles/About.module.css';
import myPhoto from '../assets/myPhoto2.jpg'; // your photo path


function About() {
    return (
        <>
            <section id="about" className={styles.body}>
                <h2 className={styles.sectionTitle}>About Me</h2>

                <div className={styles.contentRow}>
                    {/* Left: Photo */}
                    <div className={styles.photoWrapper}>
                        <img src={myPhoto} alt="Me" className={styles.photo} />
                    </div>

                    {/* Right: Text */}
                    <div className={styles.aboutText}>
                        <p>
                            I'm an undergraduate Honors student at Oregon State University pursuing Computer Science with a specialization in AI and Machine Learning.
                        </p>
                        <p>
                            Beyond the technical side, what truly fuels me is making a positive impact wherever I go. Since I was a kid, I've always loved building positive communities and being part of team endeavors. Whether through sports or volunteer events, I've always worked to create inclusive, collaborative environments. I'm a people-person at heart, and that drives my passion for teamwork, meaningful conversations, and bringing out the best in everyone around me.
                        </p>
                        <p>
                            This passion for empowering others led me to see technology not just as code, but as a powerful tool to enhance human experiences and solve real problems – ultimately helping build a better, more inclusive world. It's also why I'm constantly seeking opportunities to grow both technically and professionally. Whether through exciting AI-focused research, entrepreneurial business programs, personal projects, or even front-desk work – I like to see every experience as a chance to learn something new, and grow from it. 
                        </p>

                        <p>
                            At the end of the day, I believe the best technology comes from understanding people and I'm excited to keep learning, growing, and building solutions that truly make a difference in people's lives.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;

                            
                            
                            
                            