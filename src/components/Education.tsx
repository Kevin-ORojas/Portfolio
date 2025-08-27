import React from "react";

export default function Education() {
  return (
    <div className="max-w-md p-[2px] rounded-2xl bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 shadow-[0_0_25px_5px_rgba(34,197,94,0.4)]">
      <div className="bg-black rounded-2xl p-6 font-mono text-green-300 text-sm leading-relaxed">
        <p>
          <span className="text-blue-400">const</span>{" "}
          <span className="text-pink-400">education</span> = [
          <span className="text-yellow-400">
            "Técnico en desarrollo de software", "Cursos de ciberseguridad",
            "Bootcamps de React y JavaScript"
          </span>
          ];
        </p>
      </div>
    </div>
  );
}
