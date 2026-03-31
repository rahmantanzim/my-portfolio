import React from 'react'

const Experience = () => {
  const experiences = [
    {
    period: "June 2018 — June 2022",
    role: "Web Developer",
    company: "HYPE Dhaka",
    description:
      "Developed 15+ responsive websites using JavaScript, Bootstrap, and WordPress, increasing project delivery speed by 50%. Collaborated on high-fidelity UI implementations, translating client requirements into intuitive navigation and layouts.",
    technologies: ["WordPress", "PHP", "Laravel", "UI/UX Design", "JavaScript"],
    current: false,
  },
  {
    period: "Nov 2022 — April 2024",
    role: "Claims Customer Service Rep",
    company: "Intact Financial CORP.",
    description:
      "Managed 5,000+ high-volume inquiries annually with 100% documentation accuracy, consistently exceeding performance KPIs. Maintained 95% call adherence in a fast-paced environment, providing technical troubleshooting and clear, user-focused problem solving for diverse clients.",
    technologies: ["Problem Solving", "Team work", "Insurance Claims", "Communication"],
    current: false,
  },
  {
    period: "May 2024 — Present",
    role: "Cash office supervisor",
    company: "Sobeys Inc.",
    description:
      "Supervising a team of 8 members to optimize daily operations and service standards. Maintaining 100% accuracy in financial auditing and cash management systems. Mentoring 5+ new employees on technical procedures, ensuring high-team performance and streamlined internal communications.",
    technologies: ["Leadership", "Team Management", "Customer Service"],
    current: true,
  },
];
  return (
    <section id='experience' className='py-16 md:py-32 relative overflow-hidden'>
      <div className='absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 counded-full blur-3xl -translate-y-1/2'></div>
      <div className='container mx-auto px-6 relative z-10'>
        {/* section header  */}
        <div className='max-w-3x mb-16'>
          <span className='color-secondary-foreground text-sm font-medium tracking-wider uppercase'>Career Journey</span>
          <h2 className='text-4xl md:text-5xl font-bold leading-tight animate-fade-in text-primary animation-delay-100'>Experience that <span className='font-serif italic font-normal text-white'>Speaks volumes</span></h2>
          <p className='text-muted-foreground text-sm'>A timeline of my professional growth</p>
        </div>
        {/* Timeline  */}
        <div className='relative'>
          {/* Horizontal line  */}
          <div className='timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,168,0.8)]'>
          </div>
          <div className='space-y-12'>
            {experiences.map((exp, index)=>{
              return (
                <div key={index} className='relative grid md:grid-cols-2 gap-8 animate-fade-in'>
                  {/* Timeline dot */}
                  <div className='absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4-background z-10'>
                  {exp.current && <span className='absolute inset-0 rounded-full bg-primary animate-ping opacity-75' />}
                  </div>
                  {/* content  */}
                  <div className={`pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16 md:col-start-2"}`}>
                    <div className={`glass p-6 rounded-2xl border-primary/30 hover:border-primary/50 transi tion-all-500 `}>
                      <span className='text-sm text-primary font-medium'>{exp.period}</span>
                      <h3 className='text-xl font-semibold mt-2 '>{exp.role}</h3>
                      <p className='text-sm text-muted-foreground mt-4'>{exp.company}</p>
                      <p>{exp.description}</p>
                      <div className={`flex flex-wrap gap-2 mt-4 ${index%2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                        {exp.technologies.map((tech,idx)=>{
                          return <span className='px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground' key={idx}>{tech}</span>
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience