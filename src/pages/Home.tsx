import photo from "../assets/image/1746624408240.jpeg";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full text-white">
      {/* Texto */}
      <section className="absolute top-10 left-5 lg:top-20 lg:left-20 max-w-[750px] p-4">
        <h1 className="font-['roboto'] text-xl sm:text-2xl mb-4">
          Hello, My name is{" "}
          <span className="bg-gradient-to-r from-[#00FF88] via-[#00E0FF] to-[#7A00FF] bg-clip-text text-transparent text-2xl font-['Oleo_Script'] font-bold">
            Kevin Rojas
          </span>
        </h1>

        <div className="mt-6 p-[2px] rounded-xl bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 shadow-[0_0_25px_5px_rgba(34,197,94,0.4)]">
          <div className="bg-black rounded-xl p-6 font-mono text-green-300 text-sm sm:text-base md:text-lg leading-relaxed">
            <p>
              <span className="text-blue-400">function</span>{" "}
              <span className="text-pink-400">Descripcion</span>() {"{"}
            </p>
            <p className="ml-6">
              persona apasionada por la tecnología, el desarrollo de software y
              la ciberseguridad, con un interés especial en el hacking ético y
              el Red Team.
            </p>
            <p className="ml-6">
              Me considero autodidacta, siempre en constante aprendizaje,
              explorando nuevas herramientas y metodologías que fortalezcan mis
              conocimientos.
            </p>
            <p className="ml-6">
              Disfruto combinar el mundo del desarrollo con el de la
              ciberseguridad, creando soluciones seguras y funcionales.
            </p>
            <p className="ml-6">
              Mantengo siempre la motivación por crecer profesionalmente y
              aportar valor en cada proyecto en el que participo.
            </p>
            <p>{"}"}</p>
          </div>
        </div>
      </section>

      {/* Imagen */}
      <section className="absolute bottom-0 left-1/2 transform -translate-x-1/2 lg:left-auto lg:right-20 lg:translate-x-0 p-4 animate-pulse">
        <div className="rounded-full border-4 border-transparent bg-gradient-to-r from-green-400 to-blue-500 shadow-2xl shadow-stone-400/50 animate-pulse">
          <img
            src={photo}
            alt="kevin"
            className="w-[200px] sm:w-[250px] lg:w-[450px] h-auto rounded-full"
          />
        </div>
      </section>
    </main>
  );
}
