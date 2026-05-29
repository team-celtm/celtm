"use client";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav
        className="fixed top-0 w-full z-50 transition-all duration-300
           bg-white/90 backdrop-blur-lg shadow-md border-b border-slate-200/50"
           
       
      >
        {/* Fixed height container */}
        <div className="h-20 px-6 flex items-center justify-between max-w-8xl mx-auto">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div
              className="transition-transform duration-300"
            >
              <Image
                src="/images/CELTMLOGO.png"
                alt="CELTM Logo"
                width={180}
                height={60}
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { name: "Home", href: "/" },
              { name: "The Model", href: "/model" },
              { name: "Inside CELTM", href: "/insideceltm" },
              { name: "Engage", href: "/engage" },
              { name: "Programs", href: "/programs/arc" },
              // { name: "Let's Talk", href: "/contact" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative font-semibold text-base transition-colors duration-300 group
                 text-[#222778]" 
                
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-slate-800" />
            ) : (
              <Menu className="w-6 h-6 text-slate-800" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-lg md:hidden">
          <div className="flex flex-col h-full pt-28 px-6">
            <div className="flex flex-col items-center justify-center flex-1 space-y-6">
              {[
                { name: "Home", href: "/" },
                { name: "The Model", href: "/model" },
                { name: "Inside CELTM", href: "/insideceltm" },
                { name: "Engage", href: "/engage" },
                 { name: "Programs", href: "/programs/arc" },
                // { name: "Let's Talk", href: "/contact" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-semibold text-slate-800 hover:scale-110 transition-transform"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
