import React from 'react';
import { useState } from 'react';

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <button onClick={toggleMusic}>
        {isPlaying ? 'Pause Music🔇' : 'Play Music🎵'}
      </button>
      {isPlaying && (
        <audio autoPlay loop>
          <source src="./public/Assets/audio/allmine.mp3" type="audio/mpeg"/>
          Your browser does not support the audio element.
        </audio>
      )}
    </div>
  );
};

export default BackgroundMusic;
