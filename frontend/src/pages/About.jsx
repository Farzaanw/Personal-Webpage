import React from 'react';
import styles from '../styles/About.module.css';
import myPhoto from '../assets/my-photo.jpg'; // your photo path


function About() {
    return (
        <>
            <section id="about" className={styles.body}>
                <h2 className={styles.sectionTitle}>About Me</h2>

                {/* Left: Photo */}
                <div className={styles.photoWrapper}>
                    <img src={myPhoto} alt="Me" className={styles.photo} />
                </div>

                {/* Right: Text */}
                <div className={styles.aboutText}>
                    <p>
                        Write your about me content here. You can include your background,
                        interests, skills, or any personal statement you want to share.
                    </p>
                </div>
                
            </section>
        </>
    );
}

export default About;