import { Button } from '@/components/Button';
import { Download } from 'lucide-react';
import { FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi';
const Hero = () => {
  const socialLinks = [
    { social: FiGithub, link: "https://github.com/rahmantanzim" },
    { social: FiLinkedin, link: "https://www.linkedin.com/in/tanzim-rahman08/" },
    { social: FiInstagram, link: "https://www.instagram.com/tanzim_r_" },
  ]
  const skills = [
  "HTML5",
  "CSS3",
  "JavaScript (ES6+)",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Context API",
  "Node.js",
  "Express.js",
  "Python",
  "PostgreSQL",
  "MongoDB",
  "Prisma",
  "RESTful APIs",
  "GraphQL",
  "JWT",
  "Redis",
  "Git / GitHub",
  "Docker",
  "Vercel",
  "CI/CD (GitHub Actions)",
  "Jest"
];
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
        {[...Array(50)].map((_, index) => (
          <div
            key={index}
            className='absolute w-1.5 h-1.5 opacity-60 rounded-full'
            style={{
              backgroundColor: "#20b2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>
      {/* content of the hero section */}
      <div className='container mx-auto px-6 pt-32 pb-22 relative z-10'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* Left Column  */}
          <div className='space-y-8'>
            {/* Badge */}
            <div className='animate-fade-in'>
              <span className='inline-flex items-center gap-2 px-4 py-2 rounded-full animate-pulse'>
                <span className='w-2 h-2 bg-primary rounded-full' />
                Full Stack Developer . Software Engineering Student at MUN
              </span>
            </div>
            {/* Title */}
            <div className='space-y-4'>
              <h1 className='text-3xl md:text-4xl lg:text-6xl font-bold leading-tight animate-fade-in'>Building <span className='text-primary glow-text'> Scalable</span> Systems and <span className='text-primary glow-text'>Clean </span> Interfaces</h1>
              <p className='animate-fade-in animation-delay-200 text-xl'>I am <span className='text-xl'>Tanzim Rahman</span> - a software engineer in training with expertise in React, TypeScript, Next.js. I develop performant, data-driven and responsive web applications with user-focused UI & UX</p>
            </div>
            {/* CTA */}
            <div className='flex flex-wrap gap-4 animate-fade-in'>
              <Button size="lg">Contact</Button>
              <Button size="lg" className="bg-secondary/90 hover:bg-secondary cursor-pointer"> Download CV</Button>
            </div>
            {/* Social Links */}
            <div className='flex gap-4'>
              {socialLinks.map((social, index) => {
                return (<a className='glass text-2xl p-2 bg-primary/10 hover:bg-primary text-priamry' href={social.link} key={index} target="_blank"> {<social.social />}</a>)
              })}
            </div>
          </div>
          {/* Right Column  */}
          <div className='relative animate-fade-in'>
            <div className='relative max-w-md mx-auto'>
              <div className='relative glass rounded-3xl p-2 glow-border'>
                <img src='./tanzim.jpg' alt='Tanzim Rahman' className='w-full aspect-[4/5] object-cover rounded-2xl'/>
              </div>
            </div>
          </div>
        </div>
        {/* skill section  */}
        <div className='mt-20 animate-fade-in animation-delay-600'>
          <p className='mb-6 text-center uppercase'>Tech I am expert at</p>
          <div className='relative overflow-hidden'>
            <div className='flex animate-marquee gap-4 items-center justify-center'>
              {[...skills, ...skills].map((skill,index)=>{
                return <div key={index} className='flex-shirnk-0 px-8 py-4 bg-primary/10 '>
                    <span className='text-sm font-semibold' >{skill}</span>
                  </div>
              })
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero