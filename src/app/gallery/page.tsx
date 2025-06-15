'use client';

import { useState } from 'react';
import Image from 'next/image';
import Policy from '@/components/Policy';
import Link from 'next/link';

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
    const [modalImage, setModalImage] = useState<string | null>(null);
    const [likes, setLikes] = useState<{ [key: string]: number }>({});
  
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
  
    const handleLike = (src: string) => {
      setLikes((prev) => ({
        ...prev,
        [src]: (prev[src] || 0) + 1,
      }));
    };

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
                  <Image
                    src={src}
                    alt={`Gallery Image ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                                  <div className="flex justify-between items-center px-2 mt-1">
                  <button
                    onClick={() => handleLike(src)}
                    className="text-sm text-blue-600 hover:underline"
                  >
                    ❤️ {likes[src] || 0}
                  </button>
                </div>
                </div>
              </div>
            ))}
          </section>
    
          {/* Modal */}
          {modalImage && (
            <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-center items-center">
              <div className="relative max-w-4xl w-full h-[80vh]">
                <Image
                  src={modalImage}
                  alt="Full View"
                  layout="fill"
                  objectFit="contain"
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
    
          {/* Links */}
          <div className="flex md:gap-10 gap-3 justify-center items-center mt-4 mb-4 text-sm px-2 md:px-0">
            <Link
              href="https://www.youtube.com/channel/UCwlwl7U73ta6afKo4ahADJQ"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-800 text-white px-3 py-2 rounded hover:bg-blue-600 transition duration-300"
            >
              Watch More Videos
            </Link>
            <Link
              href="https://www.playbook.com/s/elijahphotography/Kt9RFjhQeL8CKrC1AgAwLXRc"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-800 text-white px-3 py-2 rounded hover:bg-blue-600 transition duration-300"
            >
              View More Images
            </Link>
          </div>
          <Policy />
        </div>
  );
}
