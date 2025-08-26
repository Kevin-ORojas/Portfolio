import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import { House, Shield, Contact } from "lucide-react";

export default function Sidebar() {
  return (
    <main className="flex min-h-screen  border-r-2 border-indigo-500 bg-black text-[#EDEDED]">
      <nav className="w-[12rem] flex flex-col min-h-screen">
        <h1 className="text-3xl text-center font-bold italic bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-['Oleo_Script'] py-4">
          Kevin R.
        </h1>
        <p className="border-b-2 w-full block self-stretch"></p>
        <NavLink
          className={({ isActive }) =>
            `block px-4 py-4 mt-6 rounded  hover:border-b-2 hover:bg-indigo-400
           ${
             isActive
               ? "bg-indigo-500 text-white border-l-4 border-indigo-400"
               : ""
           }`
          }
          to="/"
        >
          <p className="flex gap-4 items-center">
            <House />
            <span>Home</span>
          </p>
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            `block px-4 py-4 mt-6 rounded hover:bg-indigo-300  ${
              isActive
                ? "bg-indigo-500 text-white border-l-4 border-indigo-400"
                : ""
            }`
          }
          to="about"
        >
          <p className="flex items-center gap-4">
            <Shield />
            <span>About</span>
          </p>
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            `block px-4 py-4 mt-6  rounded hover:bg-indigo-200  ${
              isActive
                ? "bg-indigo-500 text-white border-l-4 border-indigo-400"
                : ""
            }`
          }
          to="contact"
        >
          <p className="flex gap-4 items-center">
            <Contact />
            <span>Contact</span>
          </p>
        </NavLink>
        <section className="mt-auto">
          <p className="border-b-2 w-full block self-stretch"></p>
          <Footer />
        </section>
      </nav>
    </main>
  );
}
