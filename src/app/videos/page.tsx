
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

export default function VideosPage() {
  return (
    <div className="bg-[#E7DBCB] min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="section-subtitle text-[#A30302]">Watch</p>
          <h1 className="section-title text-[#2D282C]">Videos</h1>
          <p className="text-[#555456] text-lg max-w-2xl mx-auto leading-relaxed">
            Official music videos and live performances from Cleiri&apos;s YouTube channel.
          </p>
        </div>
      </section>

      {/* Featured Video - CHARCOAL background */}
      <section className="py-16 px-6 bg-[#2D282C]">
        <div className="container mx-auto max-w-5xl">
          <div className="relative aspect-video rounded-sm overflow-hidden shadow-2xl">
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${videos[0].id}`}
              title={videos[0].title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="mt-6 text-center text-white">
            <span className="text-[#FFBD17] text-xs uppercase tracking-widest">{videos[0].category}</span>
            <h2 className="font-serif text-2xl mt-2">{videos[0].title}</h2>
          </div>
        </div>
      </section>

      {/* Videos Grid */}
      <section className="py-16 px-6 bg-[#E7DBCB]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <p className="section-subtitle text-[#A30302]">More Videos</p>
            <h2 className="text-3xl font-serif text-[#2D282C]">From the Channel</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videos.slice(1).map((video) => (
              <div key={video.id} className="group">
                <div className="relative aspect-video rounded-sm overflow-hidden shadow-lg border-2 border-transparent hover:border-[#A30302]/30 transition-colors">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="mt-4">
                  <span className="text-[#A30302] text-xs uppercase tracking-widest">{video.category}</span>
                  <h3 className="font-serif text-lg text-[#2D282C] mt-1">{video.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - RED accent */}
      <section className="py-20 px-6 bg-[#A30302] text-white">
        <div className="container mx-auto max-w-2xl text-center">
          <p className="section-subtitle text-[#FFBD17]">More Content</p>
          <h2 className="text-3xl font-serif mb-6">Subscribe for Updates</h2>
          <p className="text-white/80 mb-8">
            Be the first to see new music videos, live performances, and exclusive content.
          </p>
          <a
            href="https://www.youtube.com/@Cleiri?sub_confirmation=1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 text-sm tracking-widest uppercase font-medium transition-all duration-300 bg-white text-[#A30302] hover:bg-[#FFBD17] hover:text-[#2D282C]"
          >
            Subscribe on YouTube
          </a>
        </div>
      </section>

    </div>
  );
}
