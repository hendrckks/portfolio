"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import type { CSSProperties } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Explicit style to override any blur filters with proper TypeScript types
  const clearStyle: CSSProperties = {
    filter: "blur(0)",
    backdropFilter: "none",
    WebkitBackdropFilter: "none",
    opacity: 1,
    pointerEvents: "auto" as const,
    visibility: "visible" as const,
  };

  return (
    <nav className="w-full py-2 border-b border-gray-100 bg-background relative z-30">
      <div className="container-custom flex items-center justify-between">
        <Link
          href="/"
          className="md:text-sm tracking-tight text-lg relative z-30"
        >
          Samuel Tetenga
        </Link>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="md:hidden z-50 p-2 hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>

        {/* Desktop navigation - with explicit styles to override blur */}
        <div
          className="hidden md:!flex md:!visible md:!opacity-100 items-center text-sm space-x-3 z-40 relative"
          style={clearStyle}
        >
          <Link
            href="/"
            className={`${
              isActive("/")
                ? "font-medium text-black"
                : "text-black/80 hover:text-black transition-colors"
            } block`}
            style={clearStyle}
          >
            Home
          </Link>
          <Link
            href="/work"
            className={`${
              isActive("/work")
                ? "font-medium text-black"
                : "text-black/80 hover:text-black transition-colors"
            } block`}
            style={clearStyle}
          >
            Work
          </Link>
          <Link
            href="/about"
            className={`${
              isActive("/about")
                ? "font-medium text-black"
                : "text-black/80 hover:text-black transition-colors"
            } block`}
            style={clearStyle}
          >
            About
          </Link>
          <Link
            href="/services"
            className={`${
              isActive("/services")
                ? "font-medium text-black"
                : "text-black/80 hover:text-black transition-colors"
            } block`}
            style={clearStyle}
          >
            Services
          </Link>
          <Link
            href="/contact"
            className={`${
              isActive("/contact")
                ? "font-medium text-black"
                : "text-black/80 hover:text-black transition-colors"
            } block`}
            style={clearStyle}
          >
            Contact
          </Link>
        </div>

        {/* CTA button - with explicit styles to override blur */}
        <Link
          href="/contact"
          className="hidden md:!flex md:!visible md:!opacity-100 group items-center text-sm text-black/90 hover:text-black transition-colors z-40 relative"
          style={clearStyle}
        >
          <span style={clearStyle}>Available for work — Let's Talk</span>
          <ArrowUpRight
            className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
            style={clearStyle}
          />
        </Link>

        {/* Mobile menu */}
        <div
          className={`${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          } fixed inset-0 bg-white z-40 md:hidden transition-transform duration-300 ease-in-out flex flex-col items-center justify-center space-y-4 pt-20`}
          aria-hidden={!isMenuOpen}
        >
          <Link
            href="/"
            className={`text-6xl ${
              isActive("/")
                ? "font-medium text-black/90"
                : "font-medium text-black/90"
            }`}
            onClick={toggleMenu}
            style={clearStyle}
          >
            Home
          </Link>
          <Link
            href="/work"
            className={`text-6xl ${
              isActive("/work")
                ? "font-medium text-black/90"
                : "font-medium text-black/90"
            }`}
            onClick={toggleMenu}
            style={clearStyle}
          >
            Work
          </Link>
          <Link
            href="/about"
            className={`text-6xl ${
              isActive("/about")
                ? "font-medium text-black/90"
                : "font-medium text-black/90"
            }`}
            onClick={toggleMenu}
            style={clearStyle}
          >
            About
          </Link>
          <Link
            href="/services"
            className={`text-6xl ${
              isActive("/services")
                ? "font-medium text-black/90"
                : "font-medium text-black/90"
            }`}
            onClick={toggleMenu}
            style={clearStyle}
          >
            Services
          </Link>
          <Link
            href="/contact"
            className={`text-6xl ${
              isActive("/contact")
                ? "font-medium text-black/90"
                : "font-medium text-black/90"
            }`}
            onClick={toggleMenu}
            style={clearStyle}
          >
            Contact
          </Link>
          <Link
            href="/contact"
            className="flex items-center bottom-5 absolute text-lg mt-8"
            onClick={toggleMenu}
            style={clearStyle}
          >
            <span style={clearStyle}>Available for work — Let's Talk</span>
            <ArrowUpRight className="ml-1 w-5 h-5" style={clearStyle} />
          </Link>
        </div>
      </div>
    </nav>
  );
}
