import Education from "../components/Education";
import Experience from "../components/Experience";
import Skills from "../components/Skills";

export default function About() {
  return (
    <section className="min-h-screen w-full flex flex-col   items-center  text-white px-6 py-16">
      <h2 className="text-3xl sm:text-4xl font-bold mb-12 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
        About Me
      </h2>
      <div className="grid grid-cols-2 items-center gap-6">
        {/* Bio */}
        <div className="max-w-md mb-8 p-[2px] rounded-2xl bg-gradient-to-r  from-green-400 via-blue-500 to-purple-500 shadow-[0_0_25px_5px_rgba(34,197,94,0.4)]">
          <div className="bg-black rounded-2xl p-6 font-mono text-green-300 text-sm leading-relaxed">
            <p>
              <span className="text-blue-400">const</span>{" "}
              <span className="text-pink-400">bio</span> ={" "}
              <span className="text-yellow-400">
                "Apasionado por el desarrollo de software y la ciberseguridad,
                con experiencia en SOC, hacking ético y desarrollo web con
                React."
              </span>
              ;
            </p>
          </div>
        </div>

        {/* Skills */}
        <Skills />

        {/* Experience */}
        <Experience />

        {/* Education */}
        <Education />
      </div>
    </section>
  );
}
