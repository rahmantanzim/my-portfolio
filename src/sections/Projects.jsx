import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { projects } from "@/data/projects";
const Projects = () => {
  return (
    <section id='projects' className='py-16 md:py-32 relative overflow-hidden'>
      {/* Glowing affetc in background  */}
      <div className='absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl'></div>
      <div className='absolute bottom-1/4 left-0 w-96 h-96 bg-highlight/5 rounded-full blur-3xl'></div>
      {/* Container div  */}
      <div className='container mx-auto px-6 relative z-10'>
        <div className='text-center mx-auto max-w-3xl mb-16'>
          <span className='uppercase text-secondary-foreground text-sm font-medium tracking-wider animate-fade-in'>Featured work</span>
          <h2 className='text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground'>Projects that
            <span className='font-serif italic font-normal text-white'> make an impact</span>
          </h2>
          <p className='text-buted-foreground animate-fade-in animation-delay-200'>
            A selection of my recent works, from university projects to complex web applications and business websites.
          </p>
        </div>
        {/* Projects grid  */}
        <div className='grid md:grid-cols-3 gap-8'>
          {projects.map((project, index) => {
            return (<div key={index} className='group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1'>
              {/* <div className='relative overflow-hidden aspect-square'>
                <img
                  src={project.image}
                  alt={project.title}
                  className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60'>
                  <div className='absolute inset-0 flex items-center justify-center gap-4 opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer'>
                    <a target="_blank" href={project.link} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                    {project.github !== "#" && (
                      <a target="_blank" href={project.github} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                        <Github className="w-5 h-5" />
                      </a>
                    )}

                  </div>
                </div>

              </div> */}
              {/* Grid-content  */}
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors"><a href={project.link} target="_blank">{project.title}</a></h3>
                  <a href={project.link} target="_blank"><ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover: text-primary group-hover:translate-x-1 group-hover: -translate-y-1 transition-all" /></a>
                </div>
                <p className="text-muted-foreground text-sm">{project.description} </p>
                <div className="flex flex-wrap gap-2">{project.tags.map((tag, index) => {
                  return <span className="px-4 py-1.5 rounded-full bg-surace text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300" key={index}>{tag}</span>
                })}</div>
              </div>
            </div>)
          })}
        </div>
        {/* View All CTA */}
        {/* <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div> */}
      </div>
    </section>
  )
}

export default Projects