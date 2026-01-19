const Card = ({ id, title, subtitle }) => {
  return (
    <div key={id} className="mt-6">
      <div className="w-full max-w-sm rounded-xl border border-zinc-800 bg-zinc-950/40 py-4 px-6">
        <p className="text-xs text-zinc-500">{subtitle}</p>
        <p className="text-sm text-zinc-200">{title}</p>
      </div>
    </div>
  );
};
export default Card