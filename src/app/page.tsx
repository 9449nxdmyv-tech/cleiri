import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#E7DBCB]">
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
          <div className="absolute inset-0 bg-gradient-to-b from-[#2D282C]/70 via-[#2D282C]/40 to-[#E7DBCB]" />
        </div>

        {/* Navigation - Centered with Logo Above */}
        <nav className="absolute top-0 left-0 right-0 z-30 pt-8">
          <div className="container mx-auto flex flex-col items-center">
            {/* Logo */}
            <Link href="/" className="mb-6">
              <Image
                src="/images/logo-tan.png"
                alt="Cleiri"
                width={140}
                height={56}
                className="object-contain"
              />
            </Link>
            {/* Centered Menu */}
            <div className="hidden md:flex items-center space-x-12">
              <Link href="/music" className="nav-link text-white hover:text-[#2BBCB5]">
                Music
              </Link>
              <Link href="/videos" className="nav-link text-white hover:text-[#2BBCB5]">
                Videos
              </Link>
              <Link href="/photos" className="nav-link text-white hover:text-[#2BBCB5]">
                Photos
              </Link>
              <Link href="/news" className="nav-link text-white hover:text-[#2BBCB5]">
                News
              </Link>
              <Link href="/about" className="nav-link text-white hover:text-[#2BBCB5]">
                About
              </Link>
            </div>
          </div>
        </nav>

        {/* Hero Content - Logo instead of text */}
        <div className="relative z-20 text-center text-white px-6 mt-24">
          <p className="section-subtitle text-[#2BBCB5] slide-up mb-8">Singer &bull; Songwriter &bull; Musician</p>
          <div className="fade-in mb-8">
            <Image
              src="/images/logo-tan.png"
              alt="Cleiri"
              width={320}
              height={128}
              className="object-contain mx-auto"
            />
          </div>
          <p className="text-lg md:text-xl font-light max-w-xl mx-auto mb-10 leading-relaxed opacity-90 slide-up">
            Award-winning artist from the Rio Grande Valley, blending Spanish ballads with the soulful sound of mariachi.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 slide-up">
            <Link href="/music" className="btn-accent-green">
              Listen Now
            </Link>
            <Link href="/about" className="btn-outline border-white text-white hover:bg-white hover:text-[#2D282C]">
              Learn More
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="w-px h-16 bg-gradient-to-b from-white/60 to-transparent animate-pulse" />
        </div>
      </section>

      {/* Featured Section - GREEN accent */}
      <section className="py-24 px-6 bg-[#036B59] text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-subtitle text-[#FFBD17]">Latest Release</p>
              <h2 className="section-title text-white">Furia</h2>
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                Experience the passion and power of Cleiri&apos;s newest single. A captivating blend of
                traditional Mexican sounds with contemporary soul that speaks to the heart.
              </p>
              <Link href="/music" className="inline-block px-8 py-3 text-sm tracking-widest uppercase font-medium transition-all duration-300 bg-white text-[#036B59] hover:bg-[#FFBD17] hover:text-[#2D282C]">
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
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-[#2BBCB5] rounded-sm -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section - GRAY accent */}
      <section className="py-20 px-6 bg-[#555456] text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="section-subtitle text-[#FFBD17]">Recognition</p>
          <h2 className="text-3xl md:text-4xl font-serif mb-12">Awards & Achievements</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border border-white/20 rounded-sm hover:border-[#2BBCB5]/50 transition-colors">
              <div className="text-4xl font-serif text-[#2BBCB5] mb-2">3x</div>
              <div className="text-white font-medium">Brownsville Music Legacy Awards</div>
              <div className="text-white/60 text-sm mt-2">2021 - 2023</div>
            </div>
            <div className="p-6 border border-white/20 rounded-sm hover:border-[#FFBD17]/50 transition-colors">
              <div className="text-4xl font-serif text-[#FFBD17] mb-2">3x</div>
              <div className="text-white font-medium">Guadalupe Awards</div>
              <div className="text-white/60 text-sm mt-2">San Antonio</div>
            </div>
            <div className="p-6 border border-white/20 rounded-sm hover:border-[#A30302]/50 transition-colors">
              <div className="text-4xl font-serif text-[#A30302] mb-2">2024</div>
              <div className="text-white font-medium">Latin Grammy Invitation</div>
              <div className="text-white/60 text-sm mt-2">Official Attendee</div>
            </div>
          </div>
        </div>
      </section>

      {/* Videos Section - RED accent */}
      <section className="py-20 px-6 bg-[#A30302] text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="section-subtitle text-[#FFBD17]">Watch</p>
          <h2 className="text-3xl md:text-4xl font-serif mb-8">Latest Videos</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Watch official music videos and live performances from Cleiri&apos;s YouTube channel.
          </p>
          <Link href="/videos" className="inline-block px-8 py-3 text-sm tracking-widest uppercase font-medium transition-all duration-300 bg-white text-[#A30302] hover:bg-[#2D282C] hover:text-white">
            View All Videos
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
