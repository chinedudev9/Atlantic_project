'use client';

import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { DateTime } from 'luxon';

const cities = [
  { name: 'Lagos', tz: 'Africa/Lagos' },
  { name: 'Singapore', tz: 'Asia/Singapore' },
  { name: 'Lomé', tz: 'Africa/Lome' },
  { name: 'Dakar', tz: 'Africa/Dakar' },
  { name: 'Abidjan', tz: 'Africa/Abidjan' },
  { name: 'Douala', tz: 'Africa/Douala' },
];

// Get DateTime object in specific time zone
const getTimeInTZ = (tz) => {
  return DateTime.now().setZone(tz);
};

const ClockFace = ({ time }) => {
  const sec = time.second;
  const min = time.minute;
  const hour = time.hour % 12;

  const hourDeg = (hour + min / 60) * 30;
  const minDeg = (min + sec / 60) * 6;
  const secDeg = sec * 6;

  const numbers = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <div className="relative w-28 h-28 rounded-full border-2 bg-gray-800">
      {numbers.map((num) => {
        const angle = ((num - 3) * 30 * Math.PI) / 180;
        const x = 50 + 42 * Math.cos(angle);
        const y = 50 + 42 * Math.sin(angle);

        return (
          <span
            key={num}
            className="absolute text-xs font-semibold text-white"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            {num}
          </span>
        );
      })}

      {/* Clock Hands */}
      <div
        className="absolute w-0.5 h-5 bg-white origin-bottom left-1/2 top-[35%]"
        style={{ transform: `translateX(-50%) rotate(${hourDeg}deg)` }}
      />
      <div
        className="absolute w-0.5 h-8 bg-blue-400 origin-bottom left-1/2 top-[20%]"
        style={{ transform: `translateX(-50%) rotate(${minDeg}deg)` }}
      />
      <div
        className="absolute w-0.5 h-10 bg-red-500 origin-bottom left-1/2 top-[10%]"
        style={{ transform: `translateX(-50%) rotate(${secDeg}deg)` }}
      />
      <div className="absolute w-2 h-2 bg-black rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10" />
    </div>
  );
};

const AnalogClock = ({ name, tz }) => {
  const [time, setTime] = useState(getTimeInTZ(tz));
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => setTime(getTimeInTZ(tz)), 1000);
    return () => clearInterval(interval);
  }, [tz]);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=740a38e58a47f15092d4a7e908204845`
        );
        const data = await res.json();
        if (data?.weather?.[0]?.description) {
          setWeather(data.weather[0].description);
        } else {
          setWeather('You are offline!');
        }
      } catch (err) {
        console.error('Weather fetch error:', err);
        setWeather('You are offline!');
      }
    };

    fetchWeather();
  }, [name]);

  const isDay = time.hour >= 6 && time.hour < 18;
  const dateStr = time.toFormat('ccc, LLL dd, yyyy');

  return (
    <div className="p-4 bg-blue-100 rounded-xl shadow-lg w-60 flex flex-col items-center text-gray-900">
      <div className="flex items-center justify-between w-full text-lg mb-2">
        <span>🕓</span>
        {isDay ? (
          <Sun className="text-yellow-500 w-5 h-5" />
        ) : (
          <Moon className="text-blue-500 w-5 h-5" />
        )}
      </div>
      <h2 className="text-md font-bold mb-2">{name}</h2>
      <ClockFace time={time} />
      <p className="mt-3 font-semibold text-sm">{dateStr}</p>
      <p className="font-medium text-sm">
        {weather && `🌤️ ${weather.charAt(0).toUpperCase() + weather.slice(1)}`}
      </p>
    </div>
  );
};

const AnalogClockGrid = () => {
  return (
    <div className="relative bg-white py-10">
              <div className="flex items-center  justify-center mb-10">
               <hr className="w-10 md:w-30 border-red-500" />
               <h2 className="mx-2 md:4 text-blue-800 text-2xl font-bold">Weather Clocks</h2>
               <hr className="w-10 md:w-30 border-blue-200" />
      </div>

      <div className="overflow-x-auto scroll-smooth flex gap-2 px-4">
        {cities.map((city) => (
          <AnalogClock key={city.name} {...city} />
        ))}
      </div>
    </div>
  );
};

export default AnalogClockGrid;
