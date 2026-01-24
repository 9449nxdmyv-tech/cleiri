import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram, FaYoutube, FaSpotify } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/cleiri.jpg"
            alt="Cleiri"
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-[#FAF7F2]" />
        </div>

        {/* Navigation */}
        <nav className="absolute top-0 left-0 right-0 z-30 p-8">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-white">
              <Image
                src="/images/logo.png"
                alt="Cleiri"
                width={120}
                height={48}
                className="object-contain brightness-0 invert"
              />
            </Link>
            <div className="hidden md:flex items-center space-x-10">
              <Link href="/music" className="nav-link text-white">
                Music
              </Link>
              <Link href="/videos" className="nav-link text-white">
                Videos
              </Link>
              <Link href="/photos" className="nav-link text-white">
                Photos
              </Link>
              <Link href="/news" className="nav-link text-white">
                News
              </Link>
              <Link href="/about" className="nav-link text-white">
                About
              </Link>
            </div>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-20 text-center text-white px-6 mt-32">
          <p className="section-subtitle text-white/80 slide-up">Singer &bull; Songwriter &bull; Musician</p>
          <h1 className="text-6xl md:text-8xl font-serif font-bold mb-6 fade-in tracking-wide">
            Cleiri
          </h1>
          <p className="text-lg md:text-xl font-light max-w-xl mx-auto mb-10 leading-relaxed opacity-90 slide-up">
            Award-winning artist from the Rio Grande Valley, blending Spanish ballads with the soulful sound of mariachi.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 slide-up">
            <Link href="/music" className="btn-primary bg-white text-[#2C2C2C] hover:bg-[#C4A484] hover:text-white">
              Listen Now
            </Link>
            <Link href="/about" className="btn-outline border-white text-white hover:bg-white hover:text-[#2C2C2C]">
              Learn More
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="w-px h-16 bg-gradient-to-b from-white/60 to-transparent animate-pulse" />
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-24 px-6 bg-[#FAF7F2]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-subtitle">Latest Release</p>
              <h2 className="section-title text-[#2C2C2C]">Furia</h2>
              <p className="text-[#6B6B6B] text-lg leading-relaxed mb-8">
                Experience the passion and power of Cleiri&apos;s newest single. A captivating blend of
                traditional Mexican sounds with contemporary soul that speaks to the heart.
              </p>
              <Link href="/music" className="btn-primary">
                Stream Now
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-square relative rounded-sm overflow-hidden shadow-2xl">
                <Image
                  src="/images/cleiri-512x512bb.jpg"
                  alt="Cleiri Album Art"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-[#C4A484] rounded-sm -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Social Section */}
      <section className="py-20 px-6 bg-[#2C2C2C] text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="section-subtitle text-[#C4A484]">Stay Connected</p>
          <h2 className="text-3xl md:text-4xl font-serif mb-8">Follow the Journey</h2>
          <div className="flex justify-center space-x-8 mb-12">
            <a
              href="https://www.instagram.com/cleiriquezada"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-[#C4A484] transition-colors duration-300"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.youtube.com/@Cleiri"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-[#C4A484] transition-colors duration-300"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
            <a
              href="https://open.spotify.com/search/Cleiri"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-[#C4A484] transition-colors duration-300"
              aria-label="Spotify"
            >
              <FaSpotify />
            </a>
          </div>
          <a
            href="mailto:music@cleiri.com"
            className="text-[#C4A484] hover:text-white transition-colors duration-300 text-sm tracking-widest uppercase"
          >
            music@cleiri.com
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-[#FAF7F2] border-t border-[#E5E0D8]">
        <div className="container mx-auto text-center">
          <p className="text-sm text-[#6B6B6B]">
            &copy; {new Date().getFullYear()} Cleiri. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
