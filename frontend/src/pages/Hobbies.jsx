import React, { useState } from 'react';
import styles from '../styles/Hobbies.module.css';

import beaches from '../assets/beaches.PNG';
import concert from '../assets/concert.PNG';
import concert2 from '../assets/concert2.PNG';
import cooking from '../assets/cooking.PNG';
import fam_soccer from '../assets/family_soccer.PNG';
import football_game from '../assets/football_game.PNG';
import friends from '../assets/friends.PNG';
import golf_me from '../assets/golf_me.PNG';
import hiking from '../assets/hiking.PNG';
import hiking_zoro from '../assets/hiking_with_zoro.PNG';
import hiking2 from '../assets/hiking2.PNG';
import sightseeing from '../assets/sightseeing.PNG';
import views from '../assets/views.PNG';
import sister from '../assets/sister.PNG';
import skiing from '../assets/skiing.PNG';
import skiing2 from '../assets/skiing2.PNG';
import soccer from '../assets/soccer.PNG';
import surfing from '../assets/surfing.PNG';
import traveling from '../assets/traveling.PNG';
import theater from '../assets/theater.PNG';


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