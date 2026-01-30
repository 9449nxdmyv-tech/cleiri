import Image from 'next/image';
import { FaSpotify, FaMusic, FaLink } from 'react-icons/fa';
import { BsMusicNote } from 'react-icons/bs';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Music',
};

const musicPlatforms = [
  {
    name: 'Spotify',
    url: 'https://open.spotify.com/track/42Lb5g0ZbSOeq9w6N0Jl7A',
    icon: <FaSpotify />,
  },
  {
    name: 'Apple Music',
    url: 'https://geo.music.apple.com/us/album/_/1704624939?app=music&at=1000lHKX&ct=linktree_http&i=1704624941&itscg=30200&itsct=lt_m&ls=1&mt=1',
    icon: <FaMusic />,
  },
  {
    name: 'Tidal',
    url: 'https://listen.tidal.com/track/313196763',
    icon: <BsMusicNote />,
  },
  {
    name: 'More Platforms',
    url: 'https://tr.ee/Ej2ao5KUdJ',
    icon: <FaLink />,
  },
];

const videos = [
  {
    id: '5l0s_5mh4jw',
    title: 'La Distancia - Official Video',
    category: 'Music Video',
  },
  {
    id: 'QQRPpXxIvZI',
    title: 'Estoy Pensando En Ti',
    category: 'Music Video',
  },
  {
    id: 'wCkudGBUg-4',
    title: 'Si Dios Me Quita La Vida',
    category: 'Music Video',
  },
  {
    id: 'Vp8PV0LlUes',
    title: 'Live Performance',
    category: 'Live',
  },
];

const discography = [
  {
    title: 'Furia',
    year: '2025',
    type: 'Single',
    description: 'The latest release showcasing raw emotion and powerful vocals.',
  },
  {
    title: 'Si Dios Me Quita La Vida',
    year: '2024',
    type: 'Single',
    description: 'A musical journey through ancestral roots honoring traditional Mexican music.',
  },
  {
    title: 'Estoy Pensando En Ti',
    year: '2023',
    type: 'Single',
    description: 'An emotion-filled journey produced by CHR Records.',
  },
  {
    title: 'La Distancia',
    year: '2022',
    type: 'Single',
    description: 'International Spanish balada that topped multiple charts.',
  },
  {
    title: 'Besos De Miel',
    year: '2021',
    type: 'Single',
    description: 'Produced by Grammy-winning producer Alex Espinoza. Featured in the film "Rooster".',
  },
  {
    title: 'Ilusiones',
    year: '2021',
    type: 'Single',
    description: 'Grammy-produced track featured in the Mexican film "Rooster".',
  },
];

const chartAchievements = [
  {
    song: 'La Distancia',
    achievement: '#1',
    chart: 'Mas Chingon Radio',
    detail: 'Top 50 Songs of the Week',
  },
  {
    song: 'La Distancia',
    achievement: '#1',
    chart: 'Ladies of Tejano',
    detail: 'November 2022',
  },
  {
    song: 'La Distancia',
    achievement: 'Top 20',
    chart: 'Tejano Radio Countdown',
    detail: 'National Syndication',
  },
  {
    song: 'Estoy Pensando En Ti',
    achievement: 'Top 50',
    chart: 'Tejano Nation Charts',
    detail: 'Multiple weeks',
  },
];

export default function MusicPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/gallery/IMG_2112.jpeg"
            alt="Cleiri performing"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[var(--color-emerald)]/80" />
        </div>
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <p className="section-subtitle text-[var(--color-gold)]">Explore</p>
          <h1 className="section-title text-[var(--color-bone)]">Music</h1>
          <p className="text-[var(--color-bone)]/80 text-lg max-w-2xl mx-auto leading-relaxed">
            Immerse yourself in soulful melodies and captivating rhythms. From heartfelt ballads
            to vibrant mariachi sounds, each track tells a story.
          </p>
        </div>
      </section>

      {/* Streaming Platforms */}
      <section className="py-16 px-6 bg-[var(--color-bone-light)]">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-10">
            <p className="section-subtitle text-[var(--color-emerald)]">Listen Now</p>
            <h2 className="text-3xl font-serif text-[var(--color-black)]">Stream Everywhere</h2>
          </div>
          <div className="space-y-3">
            {musicPlatforms.map((platform) => (
              <a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-white hover:bg-[var(--color-emerald)] hover:text-[var(--color-bone)] rounded-sm transition-all duration-300 group border border-[var(--color-emerald)]/10"
              >
                <span className="text-xl mr-4 text-[var(--color-emerald)] group-hover:text-[var(--color-bone)]">
                  {platform.icon}
                </span>
                <span className="font-medium tracking-wide">{platform.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Video */}
      <section className="py-20 px-6 bg-[var(--color-emerald)]">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <p className="section-subtitle text-[var(--color-gold)]">Watch</p>
            <h2 className="text-3xl font-serif text-[var(--color-bone)]">Videos</h2>
          </div>
          <div className="relative aspect-video rounded-sm overflow-hidden shadow-2xl">
            <iframe
              className="w-full h-full border-0"
              src={`https://www.youtube.com/embed/${videos[0].id}`}
              title={videos[0].title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="mt-6 text-center text-[var(--color-bone)]">
            <span className="text-[var(--color-gold)] text-xs uppercase tracking-widest">{videos[0].category}</span>
            <h3 className="font-serif text-2xl mt-2">{videos[0].title}</h3>
          </div>

          {/* More Videos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {videos.slice(1).map((video) => (
              <div key={video.id}>
                <div className="relative aspect-video rounded-sm overflow-hidden shadow-lg">
                  <iframe
                    className="w-full h-full border-0"
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    loading="lazy"
                    allowFullScreen
                  />
                </div>
                <div className="mt-3 text-center">
                  <span className="text-[var(--color-gold)] text-xs uppercase tracking-widest">{video.category}</span>
                  <h4 className="font-serif text-lg text-[var(--color-bone)] mt-1">{video.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* On The Charts */}
      <section className="py-20 px-6 bg-[var(--color-bone)]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <p className="section-subtitle text-[var(--color-emerald)]">Chart Success</p>
            <h2 className="text-3xl md:text-4xl font-serif text-[var(--color-black)]">On The Charts</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {chartAchievements.map((item) => (
              <div
                key={`${item.song}-${item.chart}`}
                className="bg-[var(--color-bone-light)] rounded-sm p-6 text-center border border-[var(--color-emerald)]/10 hover:border-[var(--color-emerald)]/40 transition-colors"
              >
                <div className="text-4xl font-serif text-[var(--color-emerald)] mb-2">{item.achievement}</div>
                <div className="text-[var(--color-black)] font-medium mb-1">{item.chart}</div>
                <div className="text-[var(--color-charcoal)] text-sm mb-3">{item.detail}</div>
                <div className="text-xs uppercase tracking-widest text-[var(--color-charcoal)]/60">{item.song}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Discography */}
      <section className="py-20 px-6 bg-[var(--color-bone-light)]">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <p className="section-subtitle text-[var(--color-emerald)]">Catalog</p>
            <h2 className="text-3xl font-serif text-[var(--color-black)]">Discography</h2>
          </div>
          <div className="space-y-4">
            {discography.map((release) => (
              <div
                key={release.title}
                className="flex items-start gap-6 p-6 bg-white rounded-sm border border-[var(--color-emerald)]/10 hover:border-[var(--color-emerald)]/30 transition-colors"
              >
                <div className="text-[var(--color-emerald)] font-serif text-2xl font-bold min-w-[60px]">
                  {release.year}
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-serif text-xl text-[var(--color-black)]">{release.title}</h3>
                    <span className="text-xs uppercase tracking-widest text-[var(--color-emerald)] bg-[var(--color-emerald)]/10 px-2 py-1 rounded-sm">
                      {release.type}
                    </span>
                  </div>
                  <p className="text-[var(--color-charcoal)] text-sm">{release.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Catalog - SoundCloud */}
      <section className="py-20 px-6 bg-[var(--color-bone)]">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <p className="section-subtitle text-[var(--color-emerald)]">Stream</p>
            <h2 className="text-3xl font-serif text-[var(--color-black)]">Full Catalog</h2>
          </div>
          <div className="rounded-sm overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="450"
              scrolling="no"
              className="border-0"
              title="Cleiri on SoundCloud"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/cleiri&color=%23064E3B&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
