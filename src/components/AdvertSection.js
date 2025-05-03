// AdvertSection.js
import React from 'react';
import './AdvertSection.css'; // for styling

const ads = [
  { title: 'Nengwis electronics', imageUrl: '/images/ad1.jpg' },
  
  { title: 'Nengwis electronics', imageUrl: '/images/ad4.jpg' },
  { title: 'p3.dev- web service', imageUrl: '/images/ad5.jpg' },
];

const AdvertSection = () => {
  return (
    <div className="advert-section">
      <h2>Our Advertisers</h2>
      <div className="advert-grid">
        {ads.map((ad, index) => (
          <div key={index} className="advert-card">
            <img src={ad.imageUrl} alt={ad.title} className="advert-img" />
            <p className="advert-title">{ad.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdvertSection;
