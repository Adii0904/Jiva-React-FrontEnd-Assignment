import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const navLinkClass = ({ isActive }) =>
    `px-4 py-2 rounded-md ${
      isActive ? "bg-blue-600 text-white" : "text-gray-700 hover:text-blue-600"
    }`;

  return (
    <nav className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-blue-600">
        Jiva Health
      </Link>
      <div className="flex gap-4">
        <NavLink to="/" className={navLinkClass}>
          Home
        </NavLink>
        <NavLink to="/doctors" className={navLinkClass}>
          Doctors
        </NavLink>
      </div>
    </nav>
  );
}
