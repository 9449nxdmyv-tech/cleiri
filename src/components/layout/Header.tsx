import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header
      className="relative bg-cover bg-center text-white min-h-[350px] flex items-center justify-center z-20"
      style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/images/channels4_banner.jpg')" }}
    >
      <nav className="container mx-auto flex flex-col items-center p-6">
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Cleiri Logo"
            width={250}
            height={100}
            className="h-20 object-contain"
          />
        </Link>
        <div className="mt-4">
          <Link href="/music" className="mx-4 hover:text-purple-300">
            Music
          </Link>
          <Link href="/videos" className="mx-4 hover:text-purple-300">
            Videos
          </Link>
          <Link href="/about" className="mx-4 hover:text-purple-300">
            About
          </Link>
        </div>
      </nav>
    </header>
  );
}
