'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Policy from '@/components/Policy';

const videos = [
  'https://youtu.be/OnaEv5KaaO4',
  '/videos/video4.mp4',
  '/videos/video5.mp4',
  'https://youtu.be/uVtGrGKS9Cg',
  'https://youtu.be/3nk-TGesrfw',
  'https://youtu.be/HTUJHHVTuJM',
];

const images = [
  '/vessel/andrienne1.jpg',
  '/vessel/andrienne005.jpg',
  '/vessel/andrienne97.jpg',
  '/vessel/catherine3.jpg',
  '/vessel/AFSS_catherine1.jpg',
  '/vessel/AFSS_catherine2.jpg',
  '/vessel/catherine2.png',
  '/vessel/augusteo1.jpg',
  '/vessel/augusteo_pic.jpg',
  '/vessel/augusteo_p.jpg',
  '/vessel/towing.jpg',
  '/vessel/andrienne_front.jpg',
  '/vessel/andrienne_bridge.jpg',
  '/vessel/andrienne_eng3.jpg',
  '/vessel/andrienne_eng.jpg',
  '/echo1/echo1.jpg',
  '/echo1/boat-services.jpg',
  '/vessel/andrienne008.jpg',
  '/vessel/andrienne013.jpg',
  '/vessel/andrienne012.jpg',
  '/vessel/andrienne007.jpg',
  '/vessel/andrienne009.jpg',
  '/vessel/andrienne014.jpg',
  '/vessel/andrienne015.jpg',
  '/vessel/andrienne66.jpg',
  '/vessel/andrienne017.jpg',
  '/vessel/andrienne01.jpg',
  '/vessel/andrienne002.jpg',
  '/vessel/andrienne003.jpg',
  '/vessel/andrienne004.jpg',
];

export default function GalleryPage() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [modalImage, setModalImage] = useState<string | null>(null);

  const isYouTube = (url: string) => url.includes('youtu');

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
          <div key={index} className="relative group">
            <div className="w-full h-48 relative cursor-pointer" onClick={() => setModalImage(src)}>
              <img
                src={src}
                alt={`Gallery Image ${index + 1}`}
                loading="lazy"
                style={{ width: '100%', height: '100%' }}
                className="rounded-lg"
              />
            </div>
          </div>
        ))}
      </section>

      {/* Modal */}
      {modalImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-center items-center">
          <div className="relative max-w-4xl w-full h-[80vh]">
            <img
              src={modalImage}
              alt="Full View"
              style={{ width: '90%', height: '100%' }}
              loading="lazy"
              className="rounded-lg"
            />
            <button
              onClick={() => setModalImage(null)}
              className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}
      <Policy />
    </div>
  );
}

