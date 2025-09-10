import React from 'react';
import styles from '../styles/Contact.module.css';

function Contact() {
  return (
    <section id="contact" className={styles.body}>
      <h2 className="sectionTitle">Get In Touch</h2>
      <p>Thanks for checking out my page!</p>
      <p>
        Feel free to reach out as I'm always open to new opportunities to build,
        collaborate, and make new connections!
      </p>

      <div className={styles.cardsContainer}>
        <a 
          href="mailto:farzaanw@gmail.com" 
          className={styles.card}
        >
          <h3>Email</h3>
          <p>Shoot me a message!</p>
        </a>

        <a 
          href="https://www.linkedin.com/in/fw-35a844245" 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.card}
        >
          <h3>LinkedIn</h3>
          <p>Connect with me!</p>
        </a>

        <a 
          href="https://github.com/farzaanw" 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.card}
        >
          <h3>GitHub</h3>
          <p>View my projects!</p>
        </a>

        <div className={styles.card}>
          <h3>Phone</h3>
          <p>(971)-279-0464</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;