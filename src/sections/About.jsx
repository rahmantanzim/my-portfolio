import { Code2, Lightbulb, Rocket, Users } from "lucide-react";
const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description:
        "Writing maintainable, scalable code that stands the test of time.",
    },
    {
      icon: Rocket,
      title: "Performance",
      description:
        "Optimizing for speed and delivering lightning-fast user experiences.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working closely with teams to bring ideas to life.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Staying ahead with the latest technologies and best practices.",
    },
  ];
  return (
    <section id='about' className='md:py-32 relative overflow-hidden'>
      <div className='container mx-auto px-6 relative z-10'>
        <div className='grid lg:grid-cols-2 gap-16 items-center'>
          {/* left col  */}
          <div className='space-y-8'>
            <div className='animaet-fade-in'>
              <span className='color-secondary-foreground text-sm font-medium tracking-wider uppercase'>About me</span>
            </div>
            <h2 className='text-4xl md:text-5xl font-bold leading-tight animate-fade-in text-primary animation-delay-100'>Solving complex problems <span className='font-serif italic font-normal text-white'>One component at a time</span></h2>

            {/* About me details in text */}
            <div className='animate-fade-in animation-delay-200 text-muted-foreground'>
              <p>A results-driven Software Engineering graduate student with a strong foundation in JavaScript and Python. I specialize in developing robust web applications with a focus on clean architecture and reliability. Looking to leverage my technical expertise to build impactful software solutions
              </p>
            </div>
            <div className='glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300'>
              <p className='font-medium text-lg italic text-foreground'>My goal is to become a Software engineer where I can contribute to the society by solving real world challanges.</p>
            </div>
          </div>
          {/* Right column  */}
          <div className='grid sm:grid-cols-2 gap-6'>
            {highlights.map((item, index) => {
              return (
                <div key={index} className="glass p-6 rounded-xl animate-fade-in"
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title} </h3>
                  <p className="text-sm text-muted-foreground">{item.description} </p>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}

export default About