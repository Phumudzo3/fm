import React from 'react';
import './RadioPlayer.css'; // make sure this file has the card-gallery and image-card styles
import AdvertSection from './AdvertSection';

const imageCards = [
  { title: 'lunch factor weekends 12:00 - 16:00', imageUrl: '/images/lunch factor weekends.jpg' },
  { title: 'electro club 14:00 - 18:00',          imageUrl: '/images/electro-club.jpg'          },
  { title: 'voice drive 16:00 -19:00',            imageUrl: '/images/voice drive.jpg'           },
  { title: 'vodacom vup request 18:00 - 21:00',   imageUrl: '/images/vodacom vup request.jpg'   },
  { title: 'essential nyts show 20:00 - 00:00',   imageUrl: '/images/essential nyts show.jpg'   },
];

const RadioPlayer = () => {
  return (
    <div className="radio-container">
      <h2>Live Radio</h2>
      <iframe
        src="https://zeno.fm/player/voice-fm-uoh9"
        width="100%"
        height="250"
        frameBorder="0"
        scrolling="no"
        title="Voice FM"
      ></iframe>
      <a
        href="https://zeno.fm/"
        target="_blank"
        rel="noopener noreferrer"
        className="zeno-link"
      >
        A Zeno.FM Station
      </a>
<h2>schedule</h2>
      <div className="card-gallery">
        {imageCards.map((card, idx) => (
          <div key={idx} className="image-card">
            <img src={card.imageUrl} alt={card.title} />
            <h4>{card.title}</h4>
          </div>
        ))}
      </div>
    
    </div>
  );
};

export default RadioPlayer;
