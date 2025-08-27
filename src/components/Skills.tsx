export default function Skills() {
  return (
    <div className="max-w-md mb-8 p-[2px] rounded-2xl bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 shadow-[0_0_25px_5px_rgba(34,197,94,0.4)]">
      <div className="bg-black rounded-2xl p-6 font-mono text-green-300 text-sm leading-relaxed">
        <p>
          <span className="text-blue-400">const</span>{" "}
          <span className="text-pink-400">skills</span> = [
          <span className="text-yellow-400">
            "React", "JavaScript", "Node.js", "TailwindCSS", "Linux",
            "Ciberseguridad", "Red Team"
          </span>
          ];
        </p>
      </div>
    </div>
  );
}
