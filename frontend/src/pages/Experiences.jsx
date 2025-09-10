import React from 'react';
import styles from '../styles/Experiences.module.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Experiences() {
  return (
    <section id="experiences" className={styles.body}>
      <h2 className={styles.sectionTitle}>Work Experience</h2>

      <div className={styles.timeline}>

        <div className={styles['timeline-item']}>
          <div className={styles['item-icon']}>
            <i class="fas fa-robot"></i>
          </div>

          <div className={styles['timeline-card']}>
            <div className={styles['card-content']}>
              <h3>Undergraduate Research Assistant</h3>
              <h4>OSU Research HCI Department - Dr. Bill Smart <span className={styles['card-date']}>April 2025 – Present</span></h4>
              <ul>
                <li>Conducting research on how verbal and non-verbal cues in human interactions can predict rapport</li>
                <li>Developing AI systems to understand social dynamics and enable more human-like behavior in robots</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles['timeline-item']}>
          <div className={styles['item-icon']}>
            <i class="fas fa-code"></i>

          </div>

          <div className={styles['timeline-card']}>
            <div className={styles['card-content']}>
              <h3>Undergraduate Research Assistant</h3>
              <h4>OSU Research SWE Department - Professor Manish Motwani <span className={styles['card-date']}>Sep. 2024 – Present</span></h4>
              <ul>
                <li>Developed a scalable LLM-based technique to infer machine-checkable program specs for code validation, improving Automated Patch Validation in software repair workflows</li>
                <li>Built optimizable automation workflows for data curation and model fine-tuning on HPC clusters; collaborated with PhD students to integrate research findings into applied systems</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles['timeline-item']}>
          <div className={styles['item-icon']}>
            <i class="fas fa-user-friends"></i>
          </div>

          <div className={styles['timeline-card']}>
            <div className={styles['card-content']}>
              <h3>Operations Representative</h3>
              <h4>Dixon Recreation Center - OSU<span className={styles['card-date']}>Apr. 2024 – Apr. 2025</span></h4>
              <ul>
                <li>Assisted facility users in person and over the phone, managed participant access and eligibility, and processed memberships and transactions efficiently</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles['timeline-item']}>
          <div className={styles['item-icon']}>
            <i class="fas fa-book-open"></i>
          </div>

          <div className={styles['timeline-card']}>
            <div className={styles['card-content']}>
              <h3>Math Teacher's Assistant</h3>
              <h4>Oregon State University, On-Campus<span className={styles['card-date']}>Sep. 2023 – May 2024</span></h4>
              <ul>
                <li>Organized classwork, supported assessments, supervised activities, and helped students collaborate and succeed in MTH 111Z and MTH 252H</li>
              </ul>
            </div>
          </div>
        </div>

        
        <div className={styles['timeline-item']}>
          <div className={styles['item-icon']}>
            <i class="fas fa-brain"></i>
          </div>

          <div className={styles['timeline-card']}>
            <div className={styles['card-content']}>
              <h3>AI Internship</h3>
              <h4>Product Manager + Data Scientist, Remote <span className={styles['card-date']}>May 2023 – Aug. 2023</span></h4>
              <ul>
                <li>Led project planning — managed sprints and coordinated parallel tasks to keep development on track</li>
                <li>Built AI-solutions — developed end-to-end pipelines, fine-tuned models, and implemented full-stack integration</li>
                <li>Showcased work — created a professional website, published a Medium article, and presented results to leadership, demonstrating real-world impact</li>
              </ul>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Experiences;