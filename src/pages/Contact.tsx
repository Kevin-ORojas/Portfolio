export default function Contact() {
  return (
    <main className="flex justify-center items-center  min-h-screen w-full text-white">
      {/* Texto */}
      <section className="  max-w-[750px] w-[800px]  p-4">
        <h1 className="font-['roboto'] text-xl sm:text-2xl mb-4">
          <span className="bg-gradient-to-r from-[#00FF88] via-[#00E0FF] to-[#7A00FF] bg-clip-text text-transparent text-2xl font-['Oleo_Script'] font-bold">
            Contactame
          </span>
        </h1>

        <div className="mt-6 p-[2px] rounded-xl bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 shadow-[0_0_25px_5px_rgba(34,197,94,0.4)]">
          <div className="bg-black rounded-xl p-6 font-mono text-green-300 text-sm sm:text-base md:text-lg leading-relaxed">
            <p>
              <span className="text-blue-400">function</span>{" "}
              <span className="text-pink-400">Descripcion</span>() {"{"}
            </p>
            <p>
              <span>Return</span>
            </p>
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Tu nombre"
                className="p-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <input
                type="email"
                placeholder="Tu correo"
                className="p-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              <textarea
                placeholder="Tu mensaje"
                className="p-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              ></textarea>
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 transition p-2 rounded-lg font-semibold"
              >
                Enviar
              </button>
            </form>
            <p>{"}"}</p>
          </div>
        </div>
      </section>

      {/* Imagen */}
      <section className="absolute bottom-0 left-1/2 transform -translate-x-1/2 lg:left-auto lg:right-20 lg:translate-x-0 p-4 animate-pulse">
        <div className="rounded-full border-4 border-transparent bg-gradient-to-r from-green-400 to-blue-500 shadow-2xl shadow-stone-400/50 animate-pulse"></div>
      </section>
    </main>
  );
}
