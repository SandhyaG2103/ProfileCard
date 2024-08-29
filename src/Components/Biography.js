// src/Components/Biography.js
import React from 'react';
import './BiographyCard.css';
import sandhyaImage from '../sandhya.jpg'; // Make sure this path is correct

function Biography() {
  return (
    <div className="bio-card">
      <div className="bio-card-inner">
        <div className="bio-card-front">
          <img
            src={sandhyaImage}
            alt="Sandhya Gaikwad"
            className="bio-card-img"
          />
          <h2>Sandhya Gaikwad</h2>
          <h4>Software Developer</h4>
          <h4>Web Developer | Paddionate About Web/Software Development | Proficient in MERN-Stack </h4>
          <p>Location: At post Walwa, Dist Sangli, Tal Walwa</p>
        </div>
        <div className="bio-card-back">
          <h3>About Me</h3>
          <p>
            I am a passionate web developer and MERN Stack Developer with a strong background in Computer Science.
            Check out my portfolio: 
            <a href="https://sandhya-profile.vercel.app/" target="_blank" rel="noopener noreferrer">Portfolio Link</a>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Biography;
