"use client"

import { useState } from "react";
import Link from "next/link";
import { SignInButton, SignOutButton, UserButton, useUser } from "@clerk/nextjs";

const Header = () => {
  const { isLoaded, isSignedIn } = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/30 backdrop-blur-md text-black shadow-lg">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Urban Spoon
        </Link>

        {/* Hamburger Icon */}
        <button
          className="block md:hidden text-black focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>

        {/* Navigation Links */}
        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex md:space-x-6 absolute md:static top-16 left-1/2 transform -translate-x-1/2 md:transform-none w-11/12 md:w-auto bg-white/80 backdrop-blur-md rounded-lg shadow-md md:shadow-none py-4 md:py-0 z-20`}
        >
          <li className="text-center md:text-left py-2 md:py-0">
            <Link href="/" className="hover:text-gray-700">Home</Link>
          </li>
          <li className="text-center md:text-left py-2 md:py-0">
            <Link href="/menu" className="hover:text-gray-700">Menu</Link>
          </li>
          <li className="text-center md:text-left py-2 md:py-0">
            <Link href="/about" className="hover:text-gray-700">About Us</Link>
          </li>
          {/* <li className="text-center md:text-left py-2 md:py-0">
            <Link href="/chefs" className="hover:text-gray-700">Our Chefs</Link>
          </li> */}
          <li className="text-center md:text-left py-2 md:py-0">
            <Link href="/cart" className="hover:text-gray-700">Cart</Link>
            
          </li>
        </ul>

        {/* User Login Controls */}
        <div className="flex items-center space-x-4">
          {isLoaded && !isSignedIn ? (
            <SignInButton mode="modal">
              <button className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600">Sign In</button>
            </SignInButton>
          ) : isLoaded && isSignedIn ? (
            <>
              <UserButton afterSignOutUrl="/"/>
              {/* <SignOutButton>
                <button className="bg-red-500 text-white px-2 py-2 rounded shadow hover:bg-red-600">Sign Out</button>
              </SignOutButton> */}
            </>
          ) : null}
        </div>
      </nav>
    </header>
  );
};

export default Header;
