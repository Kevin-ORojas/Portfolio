import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="flex min-h-screen px-4 border-r-2 border-indigo-500">
      <nav className="mt-2 w-26">
        <NavLink
          className={({ isActive }) =>
            `block px-2 py-1 rounded hover:bg-indigo-100 hover:border-b-2
           ${isActive ? "font-bold text-indigo-600" : ""}`
          }
          to="/"
        >
          Home
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            `block px-2 py-1 rounded hover:bg-indigo-100 hover:border-b-2 ${
              isActive ? "font-bold text-indigo-600" : ""
            }`
          }
          to="about"
        >
          About
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            `block px-2 py-1 rounded hover:bg-indigo-100 hover:border-b-2 ${
              isActive ? "font-bold text-indigo-600" : ""
            }`
          }
          to="contact"
        >
          Contact
        </NavLink>
      </nav>

      <footer>Footer</footer>
    </div>
  );
}
