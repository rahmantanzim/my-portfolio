import React from 'react'

const Hero = () => {
  return (
    <section className='min-h-screen flex items-center justify-center ohverflow-hidden'>
      <div className="absolute inset-0">
        {/* Inset-0 means top: 0, right: 0, bottom: 0, left: 0, which makes the element fill the entire viewport. This is often used for background images or overlays to ensure they cover the whole screen."> */}

        <img src="/hero-bg.jpg" alt="Hero Image" className='w-full object-cover opacity-40' />

        <div className='absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background'></div>
        {/* // The first div with the image sets the background image and applies an opacity to it. The second div creates a gradient overlay on top of the image, which can help improve text readability and add visual interest. */}
      </div>
      {/* Green Dots */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        {/* pointer-events-none: This prevents the div from receiving any mouse events, allowing interaction with elements beneath it. */}
        {[...Array(120)].map((_, index) => (
          <div
            key={index}
            className='absolute w-1.5 h-1.5 opacity-60 rounded-full'
            style={{
              backgroundColor: "#20b2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation:`slow-drift ${15+ Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

    </section>
  )
}

export default Hero