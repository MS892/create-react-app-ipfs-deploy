import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const importAll = (r) => r.keys().map(r);
    const imageFiles = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));
    setImages(imageFiles);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>CryptoCatNews NFT Gallery</h1>
      </header>
      <div className="Image-gallery">
        {images.map((image, index) => (
          <img key={index} src={image.default} alt={`Image ${index}`} className="Gallery-image" />
        ))}
      </div>
    </div>
  );
}

export default App;
