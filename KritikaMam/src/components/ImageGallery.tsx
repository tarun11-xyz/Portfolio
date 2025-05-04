import React from 'react';

const ImageGallery: React.FC = () => {
  const images = [
    {
      url: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg",
      alt: "Classroom Environment"
    },
    {
      url: "https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg",
      alt: "Teaching Moment"
    },
    {
      url: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg",
      alt: "Education Values"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      {images.map((image, index) => (
        <div key={index} className="image-container group">
          <img
            src={image.url}
            alt={image.alt}
            className="transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <p className="text-white text-sm">{image.alt}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;