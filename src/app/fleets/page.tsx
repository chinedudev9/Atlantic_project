'use client';

import { useState } from 'react';
import Image from 'next/image';

const videos = [
  '/videos/video4.mp4',
  '/videos/video5.mp4',
  'https://youtu.be/uVtGrGKS9Cg',
  'https://youtu.be/3nk-TGesrfw', 
];

const images = [
  '/vessel/catherine3.jpg',
  '/vessel/AFSS_catherine1.jpg',
  '/vessel/AFSS_catherine2.jpg',
  '/vessel/catherine2.png',
  '/vessel/augusteo1.jpg',
  '/vessel/dry-dock.jpg',
  '/vessel/augusteo_pic.jpg',
  '/vessel/augusteo_p.jpg',
  '/vessel/augusteo.jpg',
  '/vessel/towing.jpg',
  '/vessel/andrienne.jpg',
  '/vessel/andrienne2.jpg',
  '/vessel/andrienne_front.jpg',
  '/vessel/andrienne_deck.jpg',
  '/vessel/andrienne_deck2.jpg',
  '/vessel/andrienne_deck3.jpg',
  '/vessel/andrienne_beam.jpg',
  '/vessel/andrienne_bridge.jpg',
  '/vessel/andrienne_eng.jpg',
  '/vessel/andrienne_eng2.jpg',
  '/vessel/andrienne_eng3.jpg',
  '/echo1/echo1.jpg',
  '/echo1/boat-services.jpg',
];

export default function GalleryPage() {
  const [currentVideo, setCurrentVideo] = useState(0);

  const isYouTube = (url: string | string[]) => url.includes('youtu');

  const nextVideo = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentVideo((prev) => (prev - 1 + videos.length) % videos.length);
  };

  const currentSrc = videos[currentVideo];
  const youtubeId = currentSrc.includes('youtu.be/')
    ? currentSrc.split('youtu.be/')[1]
    : currentSrc.includes('v=') ? currentSrc.split('v=')[1] : '';

  return (
    <div className="items-center">
      {/* Video / YouTube Section */}
      <section className="relative w-full md:mt-1">
        {isYouTube(currentSrc) ? (
          <iframe
            key={youtubeId}
            src={`https://www.youtube.com/embed/${youtubeId}`}
            className="w-full md:h-[70vh] h-[50vh] md:rounded-lg"
            title="YouTube Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <video
            key={currentSrc}
            src={currentSrc}
            muted
            controls
            autoPlay
            controlsList="nodownload"
            className="w-full md:h-[70vh] h-[50vh] md:rounded-lg"
          />
        )}
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 flex justify-between w-full px-4">
          <button
            onClick={prevVideo}
            className="bg-black bg-opacity-50 cursor-pointer text-white p-2 rounded-full"
          >
            &#10094;
          </button>
          <button
            onClick={nextVideo}
            className="bg-black bg-opacity-50 text-white p-2 rounded-full cursor-pointer"
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
