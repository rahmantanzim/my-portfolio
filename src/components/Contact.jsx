import React from "react";
import { FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-zinc-950 via-zinc-900 to-black text-white px-6 py-20"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
          Get in Touch
        </h2>


        {/* Icon Row */}
        <div className="mt-10 flex justify-center gap-3">
          {/* Email */}
          <a
            href="mailto:tanzimr@mun.ca"
            className="group p-4 rounded-xl border border-zinc-800 bg-zinc-900/40
                       hover:border-cyan-400/50 hover:shadow-lg
                       transition-all duration-300"
            aria-label="Email"
          >
            <MdEmail className="text-2xl text-zinc-300 group-hover:text-cyan-400 transition" />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/rahmantanzim"
            target="_blank"
            rel="noreferrer"
            className="group p-4 rounded-xl border border-zinc-800 bg-zinc-900/40
                       hover:border-cyan-400/50 hover:shadow-lg
                       transition-all duration-300"
            aria-label="GitHub"
          >
            <FaGithub className="text-2xl text-zinc-300 group-hover:text-cyan-400 transition" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/tanzim-rahman08/"
            target="_blank"
            rel="noreferrer"
            className="group p-4 rounded-xl border border-zinc-800 bg-zinc-900/40
                       hover:border-cyan-400/50 hover:shadow-lg
                       transition-all duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-2xl text-zinc-300 group-hover:text-cyan-400 transition" />
          </a>

          {/* Location (non-clickable) */}
          <div
            className="p-4 rounded-xl border border-zinc-800 bg-zinc-900/40
                       opacity-80"
            title="St. John's, NL, Canada"
          >
            <FaMapMarkerAlt className="text-2xl text-zinc-400" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
