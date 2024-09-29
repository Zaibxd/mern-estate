import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        {/*Wrap the h1 tag inside Link to navigate to home page on click*/}
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-500">Shahzaib</span>
            <span className="text-slate-700">Estate</span>
          </h1>
        </Link>
        <form className="bg-slate-100 p-3 rounded-lg flex items-center ">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-slate-600" />
        </form>
        <ul className="flex gap-4 ">
          {/*Add Links for navigation*/}
          <Link to="/">
            <li className="hidden sm:inline text-slate-500 font-bold hover:text-black cursor-pointer transition">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline text-slate-500 font-bold hover:text-black cursor-pointer transition">
              About
            </li>
          </Link>
          <Link to="/sign-in">
            <li className="sm:inline text-slate-500 font-bold hover:text-black cursor-pointer transition">
              Sign In
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
