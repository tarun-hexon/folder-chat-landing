'use client'
import React, { useState } from 'react'
import Link from "next/link";
import Image from "next/image";
import { AlignRight, X } from "lucide-react";


const Navbar = () => {

    const [toggle, setToggle] = useState(false)
  const [active, setActive] = useState('')
  const navItems = [
    {
      name: "Features",
      link: "#features",
    },
    {
      name: "Pricing",
      link: "/pricing",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Contact",
      link: "#contact",
    }
    
  ];


  return (
    <header className="px-4 lg:px-6 h-14 flex items-center text-[#ffffff]">
          <Link className="flex items-center justify-center" href="/" onClick={()=> setActive('')}>
            <Image src={'/assets/favicon.svg'} alt="folder.chat" width={30} height={30}/>
          </Link>
          <nav className="ml-auto hidden gap-4 sm:gap-6 sm:flex">
            <Link className="text-sm font-medium hover:underline underline-offset-4 duration-200" href="/#features">
              Features
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4 duration-200" href="/pricing">
              Pricing
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4 duration-200" href="/#about">
              About
            </Link>
            <a className="text-sm font-medium hover:underline underline-offset-4 duration-200" href="mailto:info@hexonlabs.com">
              Contact
            </a>
          </nav>
          <div className="sm:hidden flex flex-1 items-center justify-end">
          {!toggle ? (
            <AlignRight
              className="w-[28px] h-[28px] cursor-pointer object-contain"
              onClick={() => setToggle(!toggle)}
            />
          ) : (
            <X
              className="w-[28px] h-[28px] cursor-pointer object-contain"
              onClick={() => setToggle(!toggle)}
            />
          )}
        </div>
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 text-sm absolute top-10 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl bg-black sm:hidden`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
            {navItems.map((nav) => (
              <li
                key={nav.link}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.name ? "text-white" : "text-gray-400"
                }`}
                onClick={() => {
                  setToggle(!toggle);
                  setActive(nav.name);
                }}
              >
                {nav.name !== "Contact" ? 
                <Link
                  href={`${
                    nav.name === "Pricing"
                      ? "/pricing"
                      : "/" + nav.link
                  }`}
                >
                  {nav.name}
                </Link>:<a
                  href="mailto:info@hexonlabs.com"
                >
                  {nav.name}
                </a>}
              </li>
            ))}
          </ul>
        </div>
      </header>
  )
}

export default Navbar