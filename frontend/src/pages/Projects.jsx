import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import image1 from '../assets/medicalAssistant.png'; 
import image2 from '../assets/sentimentBot.png'; 
import image3 from '../assets/sudoku2.png'; 
import image4 from '../assets/loadingClip4.png'; 


import styles from '../styles/Projects.module.css';

function Projects() {
  const projects = [
    {
      title: "AMANDA - AI Medical Assistant",
      description: "An AI-powered healthcare tool designed to improve access to medical support. It combines image classification with a YOLO-based detection model to accurately identify cellulitis and different degrees of burns (1st–3rd). Alongside diagnosis, AMANDA integrates a chatbot assistant that delivers personalized treatment recommendations, helping patients understand and manage their condition while easing the burden on healthcare providers.",
      tech: ["Python", "Deep Learning", "Object Detection", "NLP", "Full-Stack", "DBMS"],
      image: image1,
      link: "https://github.com/Farzaanw/AMANDA-Medical-Assistant",
    },
    {
      title: "Sentiment Analysis Detector - Online Reviews",
      description: "Developed an AI-powered tool to enhance online shopping by automatically analyzing the sentiment of product reviews. The model processes user-submitted reviews, aggregates the findings, and provides actionable insights to guide purchasing decisions. Built using NLTK and deployed via Flask, this solution simplifies decision-making for users while demonstrating practical applications of AI in e-commerce.",
      tech: ["PyTorch", "NLTK", "Flask", "ML", "Text Analytics", "UX/UI Design"],
      image: image2,
      link: "https://github.com/Farzaanw/sentiment-analysis-detector",
    },
    {
      title: "Sudoku Interactive Game + Solver",
      description: "Developed a dynamic Sudoku game that lets players select difficulty, fill in boards, and instantly see which moves are correct or incorrect using an intelligent solver algorithm.",
      tech: ["Algorithm Design", "Python", "Turtle", "Debugging/Testing"],
      image: image3,
      link: "https://github.com/Farzaanw/sudokuGame",
    },
    {
      title: "Sports Form Analyzer + Coach",
      description: "Concept: An AI-powered sports form analyzer and coach that uses computer vision to evaluate athletes' techniques in real-time. By analyzing video footage, the system provides instant feedback on form, highlights areas for improvement, and offers personalized coaching tips to enhance performance and reduce injury risk.",
      tech: ["CV", "ML/DP", "Video Handling", "NumPy", "Pandas", "Matplotlib", "App Development", "DBMS"],
      image: image4,
      link: "#",
    },
  ];

  return (
    <section id="projects" className={styles.body}>
      <h2 className={styles.sectionTitle}>Projects</h2>

      <div className={styles.projectsWrapper}>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={100}
          slidesPerView={1}
          centeredSlides={true}   
          navigation
          // pagination={{ clickable: true }}
          className={styles.carousel}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className={styles.projectCard}>
                  <h3 style={{ marginTop: "-5px" }}>{project.title}</h3>
                  <img
                    src={project.image}
                    alt={project.title}
                    className={styles.projectImage}
                  />
                  <p style={{ color: "#4a5568"}}>{project.description}</p>
                  <div className={styles.techList}>
                    {project.tech.map((t, i) => (
                      <span key={i} className={styles.techTag}>
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  {project.title !== "Sports Form Analyzer + Coach" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.projectLink}
                    >
                      View Project
                    </a>
                  )}

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}

export default Projects;