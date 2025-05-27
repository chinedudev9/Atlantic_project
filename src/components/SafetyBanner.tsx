import React from 'react'

function safetyBanner() {
  return (
<div className="relative h-[80vh] w-full overflow-hidden">
  {/* Video Background */}
  <video
    className="absolute top-0 left-0 w-full h-full object-cover"
    autoPlay
    loop
    muted
    playsInline
  >
    <source src="/videos/video5.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* Dark Overlay and Text */}
  <div className="relative z-10 bg-black/50 flex justify-center items-center h-full px-4 text-center">
    <p className="text-white text-xl md:text-5xl font-extrabold">
      SAFETY IS OUR WATCHWORD
    </p>
  </div>
</div>

  )
}

export default safetyBanner