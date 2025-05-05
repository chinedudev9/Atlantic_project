'use client';

import { useState } from 'react';
import Image from 'next/image';

const videos = [
  'https://youtu.be/Fza-dWw_nsU',
];

const images = [
  '/gallery/img15.jpg',
  '/gallery/img16.jpg',
  '/gallery/img15.jpg',
  '/gallery/img14.jpg',
  '/gallery/crew1.jpg',
  '/gallery/crew.jpg',
  '/gallery/crew3.jpg',
  '/gallery/img.jpg',
  '/gallery/img2.jpg',
  '/gallery/img3.jpg',
  '/gallery/img4.jpg',
  '/gallery/img5.jpg',
  '/gallery/img6.jpg',
  '/gallery/img7.jpg',
  '/gallery/img8.jpg',
  '/gallery/img9.jpg',
  '/gallery/img10.jpg',
  '/gallery/img11.jpg',
  '/gallery/img12.jpg',
  '/gallery/img13.jpg',
  // Add more images
];

export default function GalleryPage() {
  const [currentVideo, setCurrentVideo] = useState(0);

  const nextVideo = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentVideo((prev) => (prev - 1 + videos.length) % videos.length);
  };

  return (
    <div className=" items-center">
      {/* Video Slider */}
      <section className="relative w-full md:mt-1">
      <iframe
        key={videos[currentVideo]}
        src={`https://www.youtube.com/embed/${videos[currentVideo].split("v=")[1] || videos[currentVideo].split("/").pop()}`}
        title="YouTube Video"
        className="w-full md:h-[70vh] h-[50vh] md:rounded-lg"
        frameBorder="0"
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
         allowFullScreen
         />
        <div className="absolute flex top-1/2 left-0 transform -translate-y-1/2 justify-between w-full px-4">
          <button
            onClick={prevVideo}
            className=" bg-black cursor-pointer bg-opacity-50 text-white p-2 rounded-full"
          >
            &#10094;
          </button>
          <button
            onClick={nextVideo}
            className="bg-black cursor-pointer bg-opacity-50 text-white p-2 rounded-full"
          >
            &#10095;
          </button>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-8">
        {images.map((src, index) => (
          <div key={index} className="w-full h-48 relative">
            <Image
              src={src}
              alt={`Gallery Image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        ))}
      </section>
    </div>
  );
}
