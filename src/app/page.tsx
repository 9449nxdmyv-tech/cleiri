import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Solid Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/cleiri.jpg"
            alt="Cleiri"
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-[var(--color-emerald)]/70" />
        </div>

        {/* Navigation */}
        <nav className="absolute top-0 left-0 right-0 z-30 pt-8">
          <div className="container mx-auto flex flex-col items-center">
            <Link href="/" className="mb-6">
              <Image
                src="/images/logo-tan.png"
                alt="Cleiri"
                width={140}
                height={56}
                className="object-contain"
              />
            </Link>
            <div className="hidden md:flex items-center space-x-12">
              <Link href="/about" className="nav-link text-[var(--color-bone)] hover:text-white">
                About
              </Link>
              <Link href="/music" className="nav-link text-[var(--color-bone)] hover:text-white">
                Music
              </Link>
              <Link href="/the-show" className="nav-link text-[var(--color-bone)] hover:text-white">
                The Show
              </Link>
            </div>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-20 text-center text-[var(--color-bone)] px-6 mt-24">
          <p className="section-subtitle text-[var(--color-bone)] opacity-80 slide-up mb-6">
            Singer &bull; Songwriter &bull; Host
          </p>
          <h1 className="font-serif text-5xl md:text-7xl mb-6 fade-in">Cleiri Quezada</h1>
          <p className="text-lg md:text-xl font-light max-w-xl mx-auto mb-10 leading-relaxed opacity-90 slide-up">
            Award-winning artist from the Rio Grande Valley, blending Spanish ballads with the soulful sound of mariachi.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 slide-up">
            <Link href="/music" className="btn-primary">
              Listen Now
            </Link>
            <Link href="/about" className="btn-outline">
              Learn More
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="w-px h-16 bg-[var(--color-bone)]/40 animate-pulse" />
        </div>
      </section>

      {/* Social Media Followers Section */}
      <section className="py-16 px-6 bg-[var(--color-emerald)]">
        <div className="container mx-auto max-w-4xl">
          <p className="section-subtitle text-center text-[var(--color-bone)] opacity-80 mb-10">
            Join the Community
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {/* TikTok */}
            <div className="group">
              <div className="mb-3">
                <svg className="w-8 h-8 mx-auto text-[var(--color-bone)] opacity-80 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </div>
              <p className="font-serif text-3xl md:text-4xl text-[var(--color-bone)] mb-1">61.4k</p>
              <p className="text-xs uppercase tracking-widest text-[var(--color-bone)] opacity-60">TikTok</p>
            </div>

            {/* Instagram */}
            <div className="group">
              <div className="mb-3">
                <svg className="w-8 h-8 mx-auto text-[var(--color-bone)] opacity-80 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <p className="font-serif text-3xl md:text-4xl text-[var(--color-bone)] mb-1">20k</p>
              <p className="text-xs uppercase tracking-widest text-[var(--color-bone)] opacity-60">Instagram</p>
            </div>

            {/* Facebook */}
            <div className="group">
              <div className="mb-3">
                <svg className="w-8 h-8 mx-auto text-[var(--color-bone)] opacity-80 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              <p className="font-serif text-3xl md:text-4xl text-[var(--color-bone)] mb-1">15k</p>
              <p className="text-xs uppercase tracking-widest text-[var(--color-bone)] opacity-60">Facebook</p>
            </div>

            {/* YouTube */}
            <div className="group">
              <div className="mb-3">
                <svg className="w-8 h-8 mx-auto text-[var(--color-bone)] opacity-80 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </div>
              <p className="font-serif text-3xl md:text-4xl text-[var(--color-bone)] mb-1">500</p>
              <p className="text-xs uppercase tracking-widest text-[var(--color-bone)] opacity-60">YouTube</p>
            </div>
          </div>
        </div>
      </section>

      {/* Three Page Cards with Gallery Images */}
      <section className="py-24 px-6 bg-[var(--color-bone)]">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-3 gap-8">
            {/* About Card */}
            <Link
              href="/about"
              className="group block rounded-sm overflow-hidden relative"
            >
              <div className="aspect-[3/4] relative">
                <Image
                  src="/images/gallery/IMG_2088.jpeg"
                  alt="About Cleiri"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[var(--color-emerald)]/60 group-hover:bg-[var(--color-emerald)]/75 transition-colors duration-500" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-[var(--color-bone)] p-6">
                  <h3 className="font-serif text-3xl mb-3">About</h3>
                  <p className="text-sm opacity-80 leading-relaxed text-center">
                    Bio, press coverage, and awards
                  </p>
                </div>
              </div>
            </Link>

            {/* Music Card */}
            <Link
              href="/music"
              className="group block rounded-sm overflow-hidden relative"
            >
              <div className="aspect-[3/4] relative">
                <Image
                  src="/images/gallery/IMG_2105.jpeg"
                  alt="Cleiri Music"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[var(--color-emerald)]/60 group-hover:bg-[var(--color-emerald)]/75 transition-colors duration-500" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-[var(--color-bone)] p-6">
                  <h3 className="font-serif text-3xl mb-3">Music</h3>
                  <p className="text-sm opacity-80 leading-relaxed text-center">
                    Videos, streaming, and discography
                  </p>
                </div>
              </div>
            </Link>

            {/* The Show Card */}
            <Link
              href="/the-show"
              className="group block rounded-sm overflow-hidden relative"
            >
              <div className="aspect-[3/4] relative">
                <Image
                  src="/images/gallery/IMG_2117.jpeg"
                  alt="Cleiri The Show"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[var(--color-emerald)]/60 group-hover:bg-[var(--color-emerald)]/75 transition-colors duration-500" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-[var(--color-bone)] p-6">
                  <h3 className="font-serif text-3xl mb-3">The Show</h3>
                  <p className="text-sm opacity-80 leading-relaxed text-center">
                    Coming February 18
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
