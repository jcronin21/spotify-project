import React from 'react';
import { Carousel } from 'antd';


const Caro = ({ tracks,playMusic }) => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  const trackToJSX = (track, index) => (
    <div key={index} style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img
          src={track.album.image_url}
          alt={track.name}
          style={{ width: '200px', height: '200px', objectFit: 'cover', marginBottom: '10px' }}
        />
        <div style={{ textAlign: 'center' }}>
          <h3 style={{ marginBottom: '5px' }}>{track.name}</h3>
          <p>{track.artist.name}</p>
          {track.preview_url && <Button onClick={() => playMusic(track.preview_url)}>Play</Button>}
        </div>
      </div>
    </div>
  );

  return (
    <Carousel afterChange={onChange}>
      {tracks.map((track, index) => trackToJSX(track, index))}
    </Carousel>
  );
};

export default Caro;
