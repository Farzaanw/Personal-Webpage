import React from 'react';
import styles from '../styles/Education.module.css';


function Education() {
  return (
    <section id="education" className={styles.body}>
      <h2 className={styles.sectionTitle}>Education</h2>

      <div className={styles.container}>

        <div className={styles.educationHeader}>
            <div className={styles.gradIcon}>🎓</div>
            <div className={styles.schoolBlock}>
              <p className={styles.school}>Oregon State University</p>
              <p className={styles.degree}>Honors Computer Science — AI Focus</p>
            </div>

            <p className={styles.date}>Aug. 2023 – Dec. 2027</p>
        </div>

        <div className={styles.coursework}>
          <h4>Relevant Coursework:</h4>
          <ul className={styles.courseList}>
            <li>Data Structures and Algorithms</li>
            <li>Software Engineering</li>
            <li>Programming in Unix</li>
            <li>Artificial Intelligence</li>
            <li>Computer Architecture</li>
            <li>Discrete Mathematics</li>
            <li>Machine Learning</li>
            <li>Databases</li>
          </ul>
        </div>  
            
     
      </div>

    </section>
  )  
}

export default Education;