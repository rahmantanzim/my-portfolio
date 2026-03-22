import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
const Projects = () => {
  const projects = [
  {
    title: "An AI driven Blogging platform with MERN stack",
    description:
      "An intelligent blogging tool powered by Gemini API, helping users create better content faster based on the prompt they give.",
    image: "/projects/project1.jpeg",
    tags: ["React", "NodeJS", "Express", "MongoDB", "Tailwind CSS", "JWT","Vercel"],
    link: "https://fullstack-ai-blog-git-main-tanzimr-9285s-projects.vercel.app",
    github: "https://github.com/rahmantanzim/fullstack-ai-blog",
  },
  {
    title: "End-to-end Secured chat with Python Cryptography",
    description:
      "A lightweight, end-to-end encrypted chat application built with Python.",
    image: "/projects/project2.jpeg",
    tags: ["Python", "Flask", "SocketIO", "cryptography"],
    link: "#",
    github: "https://github.com/rahmantanzim/python-cryptography-chat",
  },
  {
    title: "Full Website for an historical archives",
    description:
      "Showingg full catalogue, publications, collections and contents of the archive which is the first ever private archives in Bangladesh",
    image: "/projects/project3.jpeg",
    tags: ["Elementor", "WP theme customization", "UI", "UX"],
    link: "https://heritage-archives.org",
    github: "#",
  },
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce solution with inventory management, payment processing, and analytics dashboard for a Local Business in Dhaka, Bangladesh.",
    image: "/projects/project4.jpeg",
    tags: ["Wordpress", "Elementor", "WooCommerce", "PHP"],
    link: "https://konnyasundori.com",
    github: "#",
  },
  
  
];

  return (
    <section id='projects' className='py-32 relative overflow-hidden'>
      {/* Glowing affetc in background  */}
      <div className='absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl'></div>
      <div className='absolute bottom-1/4 left-0 w-96 h-96 bg-highlight/5 rounded-full blur-3xl'></div>
      {/* Container div  */}
      <div className='container mx-auto px-6 relative z-10'>
        <div className='text-center mx-auto max-w-3xl mb-16'>
          <span className='text-secondary-foreground text-sm font-medium tracking-wider animate-fade-in'>Featured work</span>
          <h2 className='text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground'>Projects that
            <span className='font-serif italic font-normal text-white'> make an impact</span>
          </h2>
          <p className='text-buted-foreground animate-fade-in animation-delay-200'>
            A selection of my recent works, from university projects to complex web applications and business websites that serves real world problems.
          </p>
        </div>
        {/* Projects grid  */}
        <div className='grid md:grid-cols-3 gap-8'>
          {projects.map((project,index)=>{
            return (<div key={index} className='group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1'>
              <div className='relative overflow-hidden aspect-square'>
                <img 
                src={project.image} 
                alt={project.title} 
                className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110' 
                />
                <div className='absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60'>
                  <div className='absolute inset-0 flex items-center justify-center gap-4 opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer'>
                    <a href={project.link} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                      <ArrowUpRight className="w-5 h-5"/>
                    </a>
                    <a href={project.github} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                      <Github className="w-5 h-5"/>
                    </a>
                  </div>
                </div>
                
              </div>
              {/* Grid-content  */}
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{project.title}</h3>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover: text-primary group-hover:translate-x-1 group-hover: -translate-y-1 transition-all"/>
                  </div>
                  <p className="text-muted-foreground text-sm">{project.description} </p>
                  <div className="flex flex-wrap gap-2">{project.tags.map((tag,index)=>{
                      return <span className="px-4 py-1.5 rounded-full bg-surace text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300" key={index}>{tag}</span>
                  })}</div>
                </div>
            </div>)
          })}
        </div>
        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  )
}

export default Projects