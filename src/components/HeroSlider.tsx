'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type slides = {
  image?: string;
  video?: string;
  title: string;
  subtitle: string;
  description: string;
};

const slides = [
  {
    video: '/videos/video2.mp4',
    title: 'Dynamic Offshore Operations',
    subtitle: 'Experience our work at sea.',
    description: 'Contact Us'
  },
  {
    image: '/vessel/vessel.jpg',
    title: 'Crew Support in Action',
    subtitle: 'From onboarding to offloading, we support your mission at every step.',
    description: 'Get a Quote',
  },
  {
    video: '/videos/video4.mp4',
    title: 'Atlantic Fenders & Support Services',
    subtitle: 'Efficient and reliable STS service provider. We provide end-to-end support across West Africa offshores, ensuring safe and timely operations',
    description: 'Contact Us',
  },
  {
    image: '/vessel/andrienne66.jpg',
    title: 'We Celebrate over 1,000,000 Man-hours of Operations without a Lost-time Incident',
    subtitle: 'This milestone reflects our strong safety culture, rigorous procedures, and the ongoing vigilance of our team — demonstrating AFSS’ s ability to execute complex operations safely, efficiently, and responsible.',
    description: 'Get a Quote',
  },
  {
    video: '/videos/video5.mp4',
    title: 'Complete Services at Your Fingertips',
    subtitle: 'We go the extra nautical mile for our clients. From reliable Mooring Masters to offshore crew, we are guided.',
    description: 'Contact Us',
  },
  {
    image: '/headerImage/greener.jpg',
    title: 'Sustainable Offshore Solutions',
    subtitle: 'Committed to a greener future. Backed by years of experience',
    description: 'More Enquiries',
  },
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 10000);
    return () => clearInterval(interval);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.changedTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    setTouchEndX(e.changedTouches[0].clientX);
  };

  useEffect(() => {
    if (touchStartX !== null && touchEndX !== null) {
      const diff = touchStartX - touchEndX;
      if (diff > 50) goToNext(); // Swipe Left
      else if (diff < -50) goToPrev(); // Swipe Right
    }
    setTouchStartX(null);
    setTouchEndX(null);
  }, [touchEndX]);

  return (
    <div
      className="w-full h-[70vh] sticky top-0 z-0 overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100 z-0' : 'opacity-0 z-0'
          }`}
        >
          {slide.video ? (
            <video
              src={slide.video}
              autoPlay
              muted
              loop
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          ) : (
            <Image
              src={slide.image || '/default-image.jpg'}
              alt={`slide-${index}`}
              fill
              className="w-full h-full object-cover"
            />
          )}
        </motion.div>
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-5"></div>

      {/* Overlay Content */}
      <div className="absolute font-serif inset-0 z-10 mt-5 md:ml-10 px-4 flex items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 1 }}
            className="text-white"
          >
            <h1 className="text-2xl md:text-5xl font-extrabold text-gray-300 mb-4">
              {slides[currentIndex].title}
            </h1>
            <p className="mb-8 font-bold max-w-xl text-xs md:text-sm text-balance text-gray-400">
              {slides[currentIndex].subtitle}
            </p>
            <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="mb-2 cursor-pointer font-bold px-4 py-2 w-fit text-center rounded-md bg-blue-800 text-white">
              {slides[currentIndex].description}
            </button>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-3">
        {slides.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-1 md:w-3 h-0.5 md:h-0.5 cursor-pointer transition-all duration-300 ${
              index === currentIndex ? 'bg-white' : 'bg-blue-800'
            }`}
          ></span>
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={goToPrev}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 z-20 rounded hover:bg-black/60 transition"
        aria-label="Previous slide"
      >
        <ChevronLeft className="hidden md:flex w-8 h-8 md:w-10 md:h-10 text-white" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20 p-2 rounded hover:bg-black/60 transition"
        aria-label="Next slide"
      >
        <ChevronRight className="hidden md:flex w-8 h-8 md:w-10 md:h-10 text-white" />
      </button>
    </div>
  );
}
