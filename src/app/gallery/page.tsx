'use client';

import { useState } from 'react';
import Policy from '@/components/Policy';

const videos = [
  'https://youtu.be/Fza-dWw_nsU',
];

const images = [
  '/gallery/img16.jpg',
  '/gallery/img15.jpg',
  '/gallery/img14.jpg',
  '/gallery/crew1.jpg',
  '/gallery/crew.jpg',
  '/gallery/crew3.jpg',
  '/gallery/csr1.jpg',
  '/gallery/csr2.jpg',
  '/gallery/csr3.jpg',
  '/gallery/img17.jpg',
  '/gallery/csr5.jpg',
  '/gallery/csr4.jpg',
  '/gallery/csr6.jpg',
  '/gallery/img.jpg',
  '/gallery/img2.jpg',
  '/gallery/img3.jpg',
  '/gallery/img4.jpg',
  '/gallery/img5.jpg',
  '/gallery/img7.jpg',
  '/gallery/img8.jpg',
  '/gallery/img9.jpg',
  '/gallery/img11.jpg',
  '/gallery/img12.jpg',
  '/gallery/img13.jpg',
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
                    style={{ width: '90%', height: '100%' }}
                  //  loading="lazy"
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
                  style={{ width: '100%', height: '100%' }}
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
