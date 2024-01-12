import Link from "next/link";
import React from "react";
import { BsCart3 } from "react-icons/bs";

const NavBar = () => {
  return (
    <nav className="sticky top-0 z-50 container mx-auto flex justify-between items-center py-5">
      <div>
        <h1>Infimus</h1>
      </div>
      <ul className="flex space-x-10">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/">Courses</Link>
        </li>
        <li>
          <Link href="/">Features</Link>
        </li>
        <li>
          <BsCart3 className="text-xl" />
        </li>
        <li>
          <Link
            href="/"
            className="border border-green-600 px-4 py-2 rounded-md"
          >
            Login
          </Link>
        </li>
        <li>
          <Link
            href="/"
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Sign up
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;