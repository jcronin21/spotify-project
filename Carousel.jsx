import React from 'react';
import { Carousel,Button } from 'antd';


const Caro = ({ tracks,playMusic, stopMusic }) => {
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

        </div>
      </div>
    </div>
  );

  return (
    <div>
      <div style={{ textAlign: 'center', marginBottom: '5px' }}>
        {tracks.length > 0 && tracks[0].preview_url && (
          <>
  <Button onClick={() => playMusic(tracks[0].preview_url)}>Play</Button>
  <Button onClick={stopMusic} style={{ marginLeft: '8px' }}>Stop</Button>
         </>
        )}
      </div>
      <Carousel afterChange={onChange}>
        {tracks.map((track, index) => trackToJSX(track, index))}
      </Carousel>
    </div>
  );
};

export default Caro;
