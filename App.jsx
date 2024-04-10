import React, { useState } from 'react';
import CustomForm from './Form';
import CustomCarousel from './Carousel';

const App = () => {
  const [tracks, setTracks] = useState([]);

  async function fetchData(values) {
    const { searchTerm, numSongs } = values;
    const baseURL = 'https://www.apitutor.org/spotify/simple/v1/search';
    const url = `${baseURL}?q=${searchTerm}&type=track&limit=${numSongs}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setTracks(data); 
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  const playMusic = (previewUrl) =>{
    if(previewUrl){
      const audio = new Audio(previewUrl);
      audio.play();
    }else{
      console.log("whoops something went wrong");
    }
  };
  return (
    <div>
      <CustomForm onSubmit={fetchData} />
      <CustomCarousel tracks={tracks} playMusic={playMusic} />
    </div>
  );
};

export default App;
// // const contentStyle = {
// //   height: '160px',
// //   color: '#fff',
// //   lineHeight: '160px',
// //   textAlign: 'center',
// //   background: '#364d79',
// // };


      
// //   const [dotPosition, setDotPosition] = useState('top');
// //   const handlePositionChange = ({ target: { value } }) => {
// //     setDotPosition(value);
//   };

// //   const albums = 
// //   [
// //     {
// //       "id": "1hOK2ey9W76x9GnftSRgrw",
// //       "name": "Aja",
// //       "image_url": "https://i.scdn.co/image/ab67616d0000b273cf39e4261576717ff4737bb6",
// //       "spotify_url": "https://open.spotify.com/album/1hOK2ey9W76x9GnftSRgrw"
// //     },
// //     {
// //       "id": "6DlSUW5gmq6Byc3osKDJ2p",
// //       "name": "Can't Buy A Thrill",
// //       "image_url": "https://i.scdn.co/image/ab67616d0000b2730ddd7e736f870994f4707947",
// //       "spotify_url": "https://open.spotify.com/album/6DlSUW5gmq6Byc3osKDJ2p"
// //     },
// //     {
// //       "id": "43W1ur2jhMcgnQvHuonNsv",
// //       "name": "the SteelyDanimal EP",
// //       "image_url": "https://i.scdn.co/image/ab67616d0000b273022020ffab7bd2facc6b52fd",
// //       "spotify_url": "https://open.spotify.com/album/43W1ur2jhMcgnQvHuonNsv"
// //     },
// //     {
// //       "id": "68HbhACgHQvDhfMIzQYt8P",
// //       "name": "A Decade Of Steely Dan",
// //       "image_url": "https://i.scdn.co/image/ab67616d0000b2730ff92f2df596033a0ef2b199",
// //       "spotify_url": "https://open.spotify.com/album/68HbhACgHQvDhfMIzQYt8P"
// //     },
// //     {
// //       "id": "12N6IsuqIJzbTXdIrJnc9b",
// //       "name": "Katy Lied",
// //       "image_url": "https://i.scdn.co/image/ab67616d0000b273d72ce442e7717e75315dd7a1",
// //       "spotify_url": "https://open.spotify.com/album/12N6IsuqIJzbTXdIrJnc9b"
// //     }
// //   ]

  // const albumToJSX = (album) => (
  //   <div key={album.id}>
  //     <img src={album.image_url} alt={album.name} style={{ width: '100%', height: 'auto' }} />
  //     <h3>{album.name}</h3>
  //     <a href={album.spotify_url} target="_blank" rel="noopener noreferrer">
       
  //     </a>
  //   </div>
  // );


//   const trackToJSX = (track) => (
//     <div key={track.id}>
//       <img src={track.album.images[0].url} alt={track.name} style={{ width: '100%', height: 'auto' }} />
//       <h3>{track.name}</h3>
//       <p>{track.artist.name}</p>
//       <a href={track.external_urls.spotify} target="_blank" rel="noopener noreferrer">
//       </a>
//     </div>
//   );
// return (
//   <div>
//     <Form form={form} onFinish={fetchData}>
//       <Form.Item label="Search Term" name="searchTerm" rules={[{ required: true, message: 'Please enter an artist or song name' }]}>
//         <Input placeholder="Enter artist or song name" />
//       </Form.Item>
//       <Form.Item label="Number of Songs" name="numSongs" rules={[{ required: true, message: 'Please enter the number of songs (max: 20)' }]}>
//         <Input type="number" min={1} max={20} placeholder="Enter number of songs" />
//       </Form.Item>
//       <Form.Item>
//         <Button type="primary" htmlType="submit">
//           Search
//         </Button>
//       </Form.Item>
//     </Form>

//     <Carousel>
//       {tracks.map(trackToJSX)}
//     </Carousel>
//   </div>
// );
// };

// export default App;

//   return (
//     <>
//       <Radio.Group
//         onChange={handlePositionChange}
//         value={dotPosition}
//         style={{
//           marginBottom: 8,
//         }}
//       >
//         <Radio.Button value="top">Top</Radio.Button>
//         <Radio.Button value="bottom">Bottom</Radio.Button>
//         <Radio.Button value="left">Left</Radio.Button>
//         <Radio.Button value="right">Right</Radio.Button>
//       </Radio.Group>
//       <Carousel dotPosition={dotPosition}>
//         {albums.map((album) => (
//           <div key={album.id}>
//             <img src={album.image_url} alt={album.name} style={{ width: '100%', height: 'auto' }} />
//             <h3>{album.name}</h3>
//             <a href={album.spotify_url} target="_blank" rel="noopener noreferrer">
//             </a>
//           </div>
//         ))}
//       </Carousel>
//     </>
//   );
// };
// export default App;