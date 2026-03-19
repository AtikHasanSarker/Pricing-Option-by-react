import React, { useState } from 'react';
import { Menu } from "lucide-react";
import { X } from "lucide-react";

const navigationData = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "About",
    path: "/about",
  },
  {
    id: 3,
    name: "Services",
    path: "/services",
  },
  {
    id: 4,
    name: "Blog",
    path: "/blog",
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact",
  },
];
const links = navigationData.map((route) => (
  <li key={route.id} className="hover:bg-cyan-500 text-xl">
    <a href={route.path}>{route.name}</a>
  </li>
));

const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
      <header>
        <nav className="flex justify-between mx-8 items-center my-5">
          <div className="flex gap-8 items-center">
            <div className="lg:hidden">
              <span onClick={() => setOpen(!open)}>
                {open ? <X size={32} /> : <Menu size={32} />}
              </span>
              <ul
                className={`bg-cyan-200 p-4 rounded-lg absolute duration-1000 ${open ? "left-18" : "-left-44"} top-0 text-black`}
              >
                {links}
              </ul>
            </div>
            <h1 className="text-5xl">Gear AI</h1>
          </div>
          <ul className="hidden lg:flex gap-5">{links}</ul>
          <button className="btn btn-info text-xl text-white p-6">
            Sign In
          </button>
        </nav>
        <hr className='border-2 border-gray-300' />
      </header>
    );
};

export default Navbar;