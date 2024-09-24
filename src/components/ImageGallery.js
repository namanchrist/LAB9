// src/components/ImageGallery.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('https://api.unsplash.com/search/photos', {
        params: { query: 'tourism', per_page: 10 },
        headers: {
          Authorization: 'Client-ID dicI6UrzIScN4vSfVWYDYgYBUA7UyImVIKGdpo9kFG8', 
        },
      })
      .then((response) => {
        setImages(response.data.results);
      })
      .catch((err) => setError('Error fetching images'));
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="image-gallery">
      {images.map((image) => (
        <img key={image.id} src={image.urls.small} alt={image.description} />
      ))}
    </div>
  );
};

export default ImageGallery;
