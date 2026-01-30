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
            Singer &bull; Songwriter &bull; Musician
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
