import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-[#2C2C2C]">
      <nav className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Cleiri"
              width={100}
              height={40}
              className="object-contain"
            />
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-12">
            <Link href="/music" className="nav-link text-white hover:text-[#C4A484]">
              Music
            </Link>
            <Link href="/videos" className="nav-link text-white hover:text-[#C4A484]">
              Videos
            </Link>
            <Link href="/about" className="nav-link text-white hover:text-[#C4A484]">
              About
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" aria-label="Menu">
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
