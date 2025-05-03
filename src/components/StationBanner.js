// components/StationBanner.js
import React from 'react';
import './StationBanner.css';

const StationBanner = () => {
  return (
    <div className="station-banner">
      <img
        src="/images/station.jpg"
        alt="Voice FM Station Banner"
        className="station-banner-img"
      />

      <div className="banner-overlay">
        <div className="banner-text">
          <b>
            Welcome to the innovation of tomorrow today,<br/>
            feel the pulse of the city—an accompaniment for life.<br/>
            <em>VOICE FM “ANCHOR OF THE NATION”</em>
          </b>
        </div>

        <div className="manager-container">
          <img
            src="/images/station manager.jpg"
            alt="Station Manager"
            className="manager-photo"
          />
          <div className="manager-name">Mrs.Murovhi E.P — Station Manager</div>
        </div>
      </div>
    </div>
  );
};

export default StationBanner;
