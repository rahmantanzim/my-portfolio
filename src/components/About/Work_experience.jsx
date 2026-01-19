import React from 'react'

const Work_experience = ({workxp}) => {
  return (
    <>
    {/* Work Experience */}
<div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 shadow-sm">
  <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
    Work Experience
  </h2>

  <div className="mt-6 space-y-5">
    {workxp.map((job) => (
      <div
        key={job.id}
        className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-5"
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
          <div>
            <p className="text-sm font-semibold text-zinc-200">
              {job.company}
            </p>
            <p className="text-xs text-zinc-400">
              {job.address}
            </p>
          </div>

          <p className="text-xs text-zinc-500">
            {job.length}
          </p>
        </div>

        {/* Role */}
        <div className="mt-2 flex items-center gap-2">
          <p className="text-sm text-zinc-300">
            {job.role}
          </p>

          {job.promoted && (
            <span className="text-[11px] rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-emerald-400">
              Promoted
            </span>
          )}
        </div>

        {/* Tasks */}
        <ul className="mt-3 list-disc space-y-1.5 pl-4 text-sm text-zinc-400 leading-relaxed">
          {job.tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
</div>

    </>


  )
}

export default Work_experience