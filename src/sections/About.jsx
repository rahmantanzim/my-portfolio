import React from 'react'

const About = () => {
  return (
    <section id='about' className='py-32 relative overflow-hidden'>
      <div className='container mx-auto px-6 relative z-10'>
        <div className='grid lg:grid-cols-2 gap-16 items-center'>
          {/* left col  */}
          <div className='space-y-8'>
            <div className='animaet-fade-in'>
              <span className='color-secondary-foreground text-sm font-medium tracking-wider uppercase'>About me</span>
            </div>
            <h2 className='text-4xl md:text-5xl font-bold leading-tight animate-fade-in text-primary animation-delay-100'>Solving complex problems <span className='font-serif italic font-normal text-white'>One component at a time</span></h2>
            
            {/* About me details in text */}
            <div>

            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default About