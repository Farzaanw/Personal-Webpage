import React, { useState } from 'react';
import styles from '../styles/Hobbies.module.css';

import beaches from '../assets/beaches.png';
import concert from '../assets/concert.png';
import concert2 from '../assets/concert2.png';
import cooking from '../assets/cooking.png';
import fam_soccer from '../assets/family_soccer.png';
import football_game from '../assets/football_game.png';
import friends from '../assets/friends.png';
import golf_me from '../assets/golf_me.png';
import hiking from '../assets/hiking.png';
import hiking_zoro from '../assets/hiking_with_zoro.png';
import hiking2 from '../assets/hiking2.png';
import sightseeing from '../assets/sightseeing.png';
import views from '../assets/views.png';
import sister from '../assets/sister.png';
import skiing from '../assets/skiing.png';
import skiing2 from '../assets/skiing2.png';
import soccer from '../assets/soccer.png';
import surfing from '../assets/surfing.png';
import traveling from '../assets/traveling.png';
import theater from '../assets/theater.png';


const hobbiesData = [
  { title: "Golfing", image: golf_me },
  { title: "Hiking", image: hiking },
  { title: "Traveling", image: traveling },
  { title: "Cooking", image: cooking },
  { title: "Soccer", image: soccer },
  { title: "Concerts", image: concert },
  { title: "Theater", image: theater },
  { title: "Beaches", image: beaches },
  { title: "Friends", image: friends },
  { title: "Family", image: fam_soccer },
  { title: "Sightseeing", image: sightseeing },
  { title: "Views", image: views },
  { title: "Skiing 2", image: skiing2 },
  { title: "Hiking 2", image: hiking2 },
  { title: "Concert 2", image: concert2 },
  { title: "Sister", image: sister },
  { title: "Football Game", image: football_game },
  { title: "Hiking with Zoro", image: hiking_zoro }
];

function Hobbies() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flippedIndexes, setFlippedIndexes] = useState([]);

  const prevCard = () => {
    setCurrentIndex((prev) => (prev - 1 + hobbiesData.length) % hobbiesData.length);
  };

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % hobbiesData.length);
  };

  const toggleFlip = (index) => {
    setFlippedIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const getPositionClass = (index) => {
    const leftIndex = (currentIndex + 1) % hobbiesData.length;
    const rightIndex = (currentIndex - 1 + hobbiesData.length) % hobbiesData.length;

    if (index === currentIndex) return styles.centerCard;
    if (index === leftIndex) return styles.leftCard;
    if (index === rightIndex) return styles.rightCard;
    return styles.hiddenCard;
  };

  return (
    <section id="hobbies" className={styles.body}>
      <h2 className={styles.sectionTitle}>Hobbies</h2>
      
      <div className={styles.carouselContainer}>
        {/* Left arrow */}
        <div className={styles.carouselButtonsLeft}>
            <button onClick={prevCard}>◀</button>
        </div>
        {hobbiesData.map((hobby, index) => (
          <div
            key={index}
            className={`${styles.carouselCard} ${getPositionClass(index)} ${flippedIndexes.includes(index) ? styles.flipped : ''}`}
            onClick={() => toggleFlip(index)}
          >
            <div className={styles.cardFront}>
              <img src={hobby.image} alt={hobby.title} className={styles.cardImage} />
            </div>
            <div className={styles.cardBack}>
              <h3>{hobby.title}</h3>
              <p>{hobby.description}</p>
            </div>
          </div>
        ))}

        <div className={styles.carouselButtonsRight}>
            <button onClick={nextCard}>▶</button>
        </div>
      </div>
    </section>
  );
}

export default Hobbies;