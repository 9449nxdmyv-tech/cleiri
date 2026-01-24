import Image from 'next/image';
import { FaSpotify, FaMusic, FaLink } from 'react-icons/fa';
import { BsMusicNote } from 'react-icons/bs';

const musicPlatforms = [
  {
    name: 'Spotify',
    url: 'https://open.spotify.com/track/42Lb5g0ZbSOeq9w6N0Jl7A?utm_medium=share&utm_source=linktree',
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

const pressArticles = [
  {
    title: 'Making the dream become a reality',
    source: 'The Rider Newspaper',
    url: 'https://www.utrgvrider.com/making-the-dream-become-a-reality/',
  },
  {
    title: "Acclaimed Singer-Songwriter Cleiri Unveils Emotion-Filled Journey with 'Estoy Pensando En Ti'",
    source: 'Tejano Nation',
    url: 'https://tejanonation.net/2023/09/15/acclaimed-singer-songwriter-cleiri-unveils-emotion-filled-journey-with-estoy-pensando-en-ti/',
  },
  {
    title: "Cleiri Takes Musical Journey Through Her Ancestral Roots with 'Si Dios Me Quita La Vida'",
    source: 'Tejano Nation',
    url: 'https://tejanonation.net/2024/07/02/cleiri-takes-musical-journey-through-her-ancestral-roots-with-si-dios-me-quita-la-vida/',
  },
  {
    title: "Cleiri Takes Musical Journey with 'Si Dios Me Quita La Vida'",
    source: 'KSAB Tejano 99.9',
    url: 'https://ksabfm.iheart.com/content/2024-07-03-cleiri-takes-musical-journey-with-si-dios-me-quita-la-vida/',
  },
];

export default function MusicPage() {
  return (
    <div className="bg-[#FAF7F2] min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="section-subtitle">Explore</p>
          <h1 className="section-title text-[#2C2C2C]">Music</h1>
          <p className="text-[#6B6B6B] text-lg max-w-2xl mx-auto leading-relaxed">
            Immerse yourself in soulful melodies and captivating rhythms. From heartfelt ballads
            to vibrant mariachi sounds, each track tells a story.
          </p>
        </div>
      </section>

      {/* Featured Release */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 md:order-1">
              <div className="aspect-square relative rounded-sm overflow-hidden shadow-2xl">
                <Image
                  src="/images/cleiri-512x512bb.jpg"
                  alt="Cleiri Album Art"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-2 border-[#C4A484] rounded-sm -z-10" />
            </div>
            <div className="order-1 md:order-2">
              <p className="section-subtitle">Latest Release</p>
              <h2 className="text-4xl font-serif mb-4 text-[#2C2C2C]">Furia</h2>
              <p className="text-[#6B6B6B] leading-relaxed mb-8">
                Available on all platforms. Experience the passion and power of Cleiri&apos;s newest single.
              </p>
              <div className="space-y-3">
                {musicPlatforms.map((platform) => (
                  <a
                    key={platform.name}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-[#FAF7F2] hover:bg-[#2C2C2C] hover:text-white rounded-sm transition-all duration-300 group"
                  >
                    <span className="text-xl mr-4 text-[#C4A484] group-hover:text-[#C4A484]">
                      {platform.icon}
                    </span>
                    <span className="font-medium tracking-wide">{platform.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SoundCloud Player */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <p className="section-subtitle">Stream</p>
            <h2 className="text-3xl font-serif text-[#2C2C2C]">Full Catalog</h2>
          </div>
          <div className="rounded-sm overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="450"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/cleiri&color=%23C4A484&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true"
            />
          </div>
        </div>
      </section>

      {/* Live Performances */}
      <section className="py-20 px-6 bg-[#2C2C2C] text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="section-subtitle text-[#C4A484]">Experience</p>
          <h2 className="text-3xl font-serif mb-12">Live Repertoire</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
            {[
              'About Damn Time',
              'Carnaval',
              "Don't Start Now",
              'Feel Like A Woman',
              'Give It To Me Baby',
              'Good Times',
              'Hell A Good',
              'Joey',
              'Locked Out Of Heaven',
              "Please Don't Stop The Music",
              'Tennessee Whiskey',
            ].map((song) => (
              <div
                key={song}
                className="py-3 px-4 border border-gray-700 rounded-sm text-gray-300"
              >
                {song}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <p className="section-subtitle">Featured In</p>
            <h2 className="text-3xl font-serif text-[#2C2C2C]">Press & Media</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {pressArticles.map((article, index) => (
              <a
                key={index}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-8 bg-white rounded-sm shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <p className="text-xs uppercase tracking-widest text-[#C4A484] mb-3">
                  {article.source}
                </p>
                <h3 className="font-serif text-xl text-[#2C2C2C] group-hover:text-[#C4A484] transition-colors leading-relaxed">
                  {article.title}
                </h3>
                <span className="inline-block mt-4 text-sm text-[#6B6B6B] group-hover:text-[#2C2C2C] transition-colors">
                  Read Article &rarr;
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
