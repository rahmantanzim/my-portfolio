import {Button} from '@/components/Button';

const Navbar = () => {
  const navLinks = [
    {href:"#about", label: "About"},
    {href:"#projects", label: "Projects"},
    {href:"#experience", label: "Experience"},
    {href:"#testimonials", label: "Testimonials"},
  ];
  return (
    <header className='fixed top-0 left-0 right-0 bg-transparent py-5'>
      <nav className='container mx-auto px-6 flex items-center justify-between'> 
        <a href="#" className='text-xl font-bold tracking-tigth hover:text-primary '>TR<span className='text-primary'>.</span></a>
        {/* Desktop nav */}
        <div className='flex items-center gap-1'>
          <div className='glass rounded-full px-2 py-1 flex items-center gap-2'>
            {navLinks.map((link,index)=>{
           return <a className='px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface' href={link.href} key={index}>{link.label}</a>
            })}
          </div>
        </div>
        {/* CTA */}
        <Button>Contact</Button>
      </nav>
    </header>
  )
}

export default Navbar