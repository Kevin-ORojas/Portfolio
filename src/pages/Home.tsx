import photo from "../assets/image/1746624408240.jpeg";

export default function Home() {
  return (
    <main className=" min-h-screen justify-between h-30 flex w-full items-center gap-4 p-2 text-white relative">
      <section className="absolute top-20 lg:left-10 p-4 mt-10">
        <h1 className="font-['roboto']">
          Hello, My name is{" "}
          <span className="bg-gradient-to-r from-[#00FF88] via-[#00E0FF] to-[#7A00FF] bg-clip-text text-transparent text-xl font-['Oleo_Script'] font-bold">
            Kevin Rojas
          </span>
        </h1>
        <p className="mt-4 text-sm sm:text-base md:text-lg leading-relaxed min-w-[250px] lg:w-[750px] font-['Roboto'] ">
          persona apasionada por la tecnología, el desarrollo de software y la
          ciberseguridad, con un interés especial en el hacking ético y el Red
          Team. Me considero autodidacta, siempre en constante aprendizaje,
          explorando nuevas herramientas y metodologías que fortalezcan mis
          conocimientos. Disfruto combinar el mundo del desarrollo con el de la
          ciberseguridad, creando soluciones seguras y funcionales, y
          manteniendo siempre la motivación por crecer profesionalmente y
          aportar valor en cada proyecto en el que participo.
        </p>
      </section>

      <section className="absolute bottom-0 lg:bottom-1/8  lg:left-3/5 p-4 animate-pulse">
        <div
          className="absolute inset-0 rounded-full 
        border-4 border-transparent bg-gradient-to-r from-green-400 to-blue-500 bg-clip-border 
        opacity-30 animate-pulse"
        ></div>
        <img
          src={photo}
          alt="kevin"
          className="sm:w-[350px] lg:w-[450px] h-auto rounded-full"
        />
      </section>
    </main>
  );
}
