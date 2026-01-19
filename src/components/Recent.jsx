import React from 'react'
import Card from './Card'
const recentData = [
    {
        id: 1,
        time: 'January 2026',
        title: 'Developing my portfolio website using React and Tailwind css'
    },
    {
        id: 2,
        time: 'January 2026',
        title: 'Developing a fullstack Blog app using MERN Stack'
    },
    {
        id: 3,
        time: 'January 2026 - March 2026',
        title: '2nd Semester of my Masters'
    }
]
const Recent = () => {
    return (
        <section
            id="recent"
            className="bg-gradient-to-br from-zinc-950 via-zinc-900 to-black text-white px-6 py-20  flex flex-col items-center justify-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                What's going on
            </h2>
            {recentData.map((data) => {

                return <Card id={data.id} title={data.title} subtitle={data.time} />
            })}
        </section>
    )
}

export default Recent