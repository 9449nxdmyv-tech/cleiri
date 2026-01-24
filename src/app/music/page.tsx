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
    name: 'More',
    url: 'https://tr.ee/Ej2ao5KUdJ',
    icon: <FaLink />,
  },
];

export default function MusicPage() {
  return (
    <div className="container mx-auto px-6 py-24">
      <h1 className="text-5xl font-serif font-bold mb-12 text-center text-gray-800">Music</h1>
      <p className="font-sans text-lg text-center max-w-3xl mx-auto mb-12">
        Immerse yourself in the soulful melodies and captivating rhythms of Cleiri. From heartfelt ballads to vibrant mariachi sounds,
        each track tells a story. Listen now and experience the magic.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Column: SoundCloud Player */}
        <div>
          <iframe
            width="100%"
            height="700"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            className="rounded-lg shadow-xl"
            src={`https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/cleiri&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`}
          ></iframe>
        </div>

        {/* Right Column: Links and Image */}
        <div className="flex flex-col items-center">
          <div className="w-full max-w-sm">
            <h2 className="text-3xl font-serif font-bold mb-6 text-center">Listen On</h2>
            <div className="space-y-4">
              {musicPlatforms.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-4 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors w-full"
                >
                  <span className="mr-3 text-xl">{platform.icon}</span>
                  <span className="font-bold">{platform.name}</span>
                </a>
              ))}
            </div>
          </div>
          <div className="mt-12">
            <Image
              src="/images/cleiri-512x512bb.jpg"
              alt="A portrait of Cleiri"
              width={512}
              height={512}
              className="rounded-full shadow-2xl"
            />
          </div>
        </div>
      </div>
      <div className="mt-24">
        <h2 className="text-4xl font-serif font-bold mb-8 text-center text-gray-800">Original Music</h2>
        <div className="max-w-xl mx-auto text-center text-gray-800">
          <h3 className="text-2xl font-serif font-bold mb-2">Furia</h3>
          <p className="font-sans text-lg">Available on all platforms April 11</p>
        </div>
      </div>

      <div className="mt-24">
        <h2 className="text-4xl font-serif font-bold mb-8 text-center text-gray-800">Live Performances</h2>
        <div className="max-w-xl mx-auto text-center text-gray-800">
          <ul className="list-none p-0 m-0 text-lg font-sans">
            <li className="mb-2">About Damn Time</li>
            <li className="mb-2">Carnaval</li>
            <li className="mb-2">Don&apos;t Start Now</li>
            <li className="mb-2">Feel Like A Woman</li>
            <li className="mb-2">Give It To Me Baby</li>
            <li className="mb-2">Good Times</li>
            <li className="mb-2">Hell A Good</li>
            <li className="mb-2">Joey</li>
            <li className="mb-2">Locked Out Of Heaven</li>
            <li className="mb-2">Please Don&apos;t Stop The Music</li>
            <li className="mb-2">Tennessee Whiskey</li>
          </ul>
        </div>
      </div>
      <div className="mt-24">
        <h2 className="text-4xl font-serif font-bold mb-8 text-center">In the Press</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pressArticles.map((article, index) => (
            <div key={index} className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold mb-2">{article.title}</h3>
                <p className="text-gray-600 mb-4">{article.source}</p>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-bold text-gray-800 hover:text-gray-600"
                >
                  Read Article &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const pressArticles = [
  {
    title: "Making the dream become a reality",
    source: "The Rider Newspaper",
    url: "https://www.utrgvrider.com/making-the-dream-become-a-reality/",
  },

  {
    title: "Acclaimed Singer-Songwriter Cleiri Unveils Emotion-Filled Journey with 'Estoy Pensando En Ti'",
    source: "Tejano Nation",
    url: "https://tejanonation.net/2023/09/15/acclaimed-singer-songwriter-cleiri-unveils-emotion-filled-journey-with-estoy-pensando-en-ti/",
  },
  {
    title: "Cleiri Takes Musical Journey Through Her Ancestral Roots with 'Si Dios Me Quita La Vida'",
    source: "Tejano Nation",
    url: "https://tejanonation.net/2024/07/02/cleiri-takes-musical-journey-through-her-ancestral-roots-with-si-dios-me-quita-la-vida/",
  },
  {
    title: "Cleiri Takes Musical Journey with ‘Si Dios Me Quita La Vida’",
    source: "KSAB Tejano 99.9",
    url: "https://ksabfm.iheart.com/content/2024-07-03-cleiri-takes-musical-journey-with-si-dios-me-quita-la-vida/",
  },
];
