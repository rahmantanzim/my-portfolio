import React from 'react'

const Slider = () => {
    return (
        <>
            <div className="slider min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-950 via-zinc-900 to-black">
                <div className="slider-left flex items-center max-w-4xl w-full flex-col gap-6">
                    <h1 className='text-6xl font-bold'>I am
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            Tanzim
                        </span></h1>
                    <h2 className='text-lg sm:text-2xl font-medium text-zinc-300'>Full Stack Developer · JavaScript · Python</h2>
                    <p className='max-w-2xl text-center text-zinc-400 text-base sm:text-lg leading-relaxed'>I am training to be a software developer.
                        Currently I am doing my master's in Software Engineering at <span className='text-zinc-200'>Memorial University of Newfoundland.</span></p>
                    <div className="mt-4 flex gap-4 flex-wrap justify-center">
                        <a
                            href="/Tanzim_Rahman_CV.pdf"
                            download
                            className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 
                       text-white font-medium hover:scale-105 transition-transform duration-200 shadow-lg"
                        >
                            Download CV
                        </a>

                        <a
                            href="#projects"
                            className="px-6 py-3 rounded-lg border border-zinc-700 
                       text-zinc-300 hover:bg-zinc-800 transition"
                        >
                            View Projects
                        </a>
                    </div>
                </div>
                {/* <div className="slider-right">

                </div> */}
            </div>
        </>
    )
}

export default Slider