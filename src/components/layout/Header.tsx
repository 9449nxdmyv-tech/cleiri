import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-[#E7DBCB] border-b border-[#2D282C]/10">
      <nav className="container mx-auto px-6 py-6">
        <div className="flex flex-col items-center">
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

          {/* Centered Navigation Links */}
          <div className="hidden md:flex items-center space-x-12">
            <Link href="/music" className="nav-link text-[#2D282C] hover:text-[#036B59]">
              Music
            </Link>
            <Link href="/videos" className="nav-link text-[#2D282C] hover:text-[#A30302]">
              Videos
            </Link>
            <Link href="/photos" className="nav-link text-[#2D282C] hover:text-[#036B59]">
              Photos
            </Link>
            <Link href="/news" className="nav-link text-[#2D282C] hover:text-[#A30302]">
              News
            </Link>
            <Link href="/about" className="nav-link text-[#2D282C] hover:text-[#036B59]">
              About
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-[#2D282C] absolute right-6 top-6" aria-label="Menu">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
