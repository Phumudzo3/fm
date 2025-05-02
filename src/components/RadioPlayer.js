import React from 'react';

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
    </div>
  );
};

export default RadioPlayer;
