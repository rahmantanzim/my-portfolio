// src/pages/About.jsx
import React from "react";
import { workxp } from "../../assets/workxp_data";
import Work_experience from "./Work_experience";
const Aboutme = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-black text-white px-6 pt-24 pb-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">
            About
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              {" "}
              Tanzim
            </span>
          </h1>
          <p className="mt-4 text-zinc-400 leading-relaxed text-base sm:text-lg">
            I’m Tanzim, a developer in training focused on building clean,
            reliable web applications with modern JavaScript and Python. I’m
            currently pursuing a Master’s in Software Engineering at Memorial
            University of Newfoundland.
          </p>
        </div>

        {/* Content */}
        <section className="mt-10 grid gap-6 lg:grid-cols-12">
          {/* Left card: photo + quick info */}
          <div className="lg:col-span-4">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <img
                  src="https://avatars.githubusercontent.com/u/185747376?s=400&u=3043af905f3e8c638b71a68a77535c666aeeef00&v=4"
                  alt="Tanzim"
                  className="h-16 w-16 rounded-2xl object-cover border border-zinc-800"
                />
                <div>
                  <p className="text-lg font-semibold tracking-tight">Tanzim</p>
                  <p className="text-sm text-zinc-400">Full Stack • JS • Python</p>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <div className="rounded-xl border border-zinc-800 bg-zinc-950/40 p-4">
                  <p className="text-xs text-zinc-500">Location</p>
                  <p className="text-sm text-zinc-200">St. John&apos;s, NL, Canada</p>
                </div>

                <div className="rounded-xl border border-zinc-800 bg-zinc-950/40 p-4">
                  <p className="text-xs text-zinc-500">Currently</p>
                  <p className="text-sm text-zinc-200">
                    Master&apos;s in Software Engineering (MUN)
                  </p>
                </div>

                <div className="rounded-xl border border-zinc-800 bg-zinc-950/40 p-4">
                  <p className="text-xs text-zinc-500">Focus</p>
                  <p className="text-sm text-zinc-200">
                    Building production-ready web apps & portfolios
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="mailto:tanzimr@mun.ca"
                  className="px-4 py-2 rounded-lg text-sm font-medium
                             bg-gradient-to-r from-cyan-500 to-blue-600 text-white
                             hover:opacity-95 transition"
                >
                  Email Me
                </a>
                <a
                  href="https://github.com/rahmantanzim"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-lg text-sm font-medium
                             border border-zinc-700 text-zinc-200
                             hover:bg-zinc-800/60 transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Right: story + highlights + skills */}
          <div className="lg:col-span-8 space-y-6">

            <Work_experience workxp={workxp} />
            {/* Skills */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 shadow-sm">
              <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
                Tech I use
              </h2>

              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  "JavaScript",
                  "React",
                  "Tailwind CSS",
                  "Node.js",
                  "Express",
                  "MongoDB",
                  "REST APIs",
                  "Git & GitHub",
                  "Python",
                  "WordPress",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="text-xs sm:text-sm px-3 py-1.5 rounded-full
                               bg-zinc-950/60 border border-zinc-800 text-zinc-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-6 rounded-xl border border-zinc-800 bg-zinc-950/40 p-4">
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Want to collaborate or have an opportunity in mind? Send me an
                  email — I reply fast.
                </p>
                <a
                  href="mailto:tanzimr@mun.ca"
                  className="inline-flex mt-4 px-4 py-2 rounded-lg text-sm font-medium
                             bg-gradient-to-r from-cyan-500 to-blue-600 text-white
                             hover:opacity-95 transition"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Aboutme;
