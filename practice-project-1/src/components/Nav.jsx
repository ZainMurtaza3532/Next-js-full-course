"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";



const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
  { name: "Products", path: "/products" },
  { name: "Services", path: "/services" },
  { name: "About", path: "/about" },
];

  return (
    <nav className="bg-white px-6 md:px-12 lg:px-24 xl:px-40 py-4 flex items-center justify-between relative">
      
      {/* Logo */}
      <Link href="/">
        <span className="cursor-pointer">
          Logo
        </span>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center bg-zinc-50 border border-zinc-200 rounded-full px-1 py-1 gap-2">
        {navItems.map((item) => (
  <Link
    key={item.name}
    href={item.path}
    className={`px-4 py-1.5 rounded-full text-sm transition-colors ${
      item.name === "item.path"
        ? "bg-white border border-zinc-200 font-medium text-zinc-800"
        : "text-zinc-500 hover:text-zinc-400"
    }`}
  >
    {item.name}
  </Link>
))}
      </div>

      {/* Button */}
      <button className="hidden md:flex items-center gap-2.5 bg-gradient-to-r from-zinc-950 to-zinc-500 text-zinc-50 hover:text-zinc-200 text-sm font-medium pl-5 pr-2 py-2 rounded-full">
        Get started
      </button>

      {/* Mobile Toggle */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden flex flex-col gap-1.5"
      >
        <span
          className={`block w-6 h-0.5 bg-zinc-800 ${
            menuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-zinc-800 ${
            menuOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-zinc-800 ${
            menuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t border-zinc-200 flex flex-col p-5 gap-1 md:hidden z-50">
          {navItems.map((item) => (
            <Link
              key={item}
              href="#"
              className="px-4 py-2.5 rounded-lg text-sm text-zinc-500 hover:bg-zinc-50"
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Nav;