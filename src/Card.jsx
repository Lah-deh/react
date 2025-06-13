import React from 'react';
import './App.css'
import Image from './assets/Image/IMG_5262.jpg';

const Card = ({ name, bio }) => {
  return (
    <div className="container">
      <div className="mainn">
        <section>
          <img src={Image} alt={`${name}'s profile`} />
          <main>
            <h1>{name}</h1>
            <p>{bio}</p>
          </main>
        </section>
      </div>
    </div>
  );
};

export default Card;