'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[var(--color-bone)] border-b border-[var(--color-black)]/10">
      <nav className="container mx-auto px-6 py-6">
        <div className="flex flex-col items-center relative">
          {/* Logo */}
          <Link href="/" className="mb-4">
            <Image
              src="/images/logo-black.png"
              alt="Cleiri"
              width={120}
              height={48}
              className="object-contain"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-12">
            <Link href="/about" className="nav-link text-[var(--color-black)] hover:text-[var(--color-emerald)]">
              About
            </Link>
            <Link href="/music" className="nav-link text-[var(--color-black)] hover:text-[var(--color-emerald)]">
              Music
            </Link>
            <Link href="/the-show" className="nav-link text-[var(--color-black)] hover:text-[var(--color-emerald)]">
              The Show
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[var(--color-black)] absolute right-0 top-2"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-6 flex flex-col items-center space-y-4 pb-4">
            <Link
              href="/about"
              className="nav-link text-[var(--color-black)] hover:text-[var(--color-emerald)]"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/music"
              className="nav-link text-[var(--color-black)] hover:text-[var(--color-emerald)]"
              onClick={() => setMenuOpen(false)}
            >
              Music
            </Link>
            <Link
              href="/the-show"
              className="nav-link text-[var(--color-black)] hover:text-[var(--color-emerald)]"
              onClick={() => setMenuOpen(false)}
            >
              The Show
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
