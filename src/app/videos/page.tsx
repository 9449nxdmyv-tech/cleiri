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
    <div className="bg-[#FAF7F2] min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="section-subtitle">Watch</p>
          <h1 className="section-title text-[#2C2C2C]">Videos</h1>
          <p className="text-[#6B6B6B] text-lg max-w-2xl mx-auto leading-relaxed">
            Official music videos and live performances from Cleiri&apos;s YouTube channel.
          </p>
        </div>
      </section>

      {/* Featured Video */}
      <section className="py-8 px-6">
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
          <div className="mt-6 text-center">
            <span className="text-[#C4A484] text-xs uppercase tracking-widest">{videos[0].category}</span>
            <h2 className="font-serif text-2xl text-[#2C2C2C] mt-2">{videos[0].title}</h2>
          </div>
        </div>
      </section>

      {/* Videos Grid */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <p className="section-subtitle">More Videos</p>
            <h2 className="text-3xl font-serif text-[#2C2C2C]">From the Channel</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videos.slice(1).map((video) => (
              <div key={video.id} className="group">
                <div className="relative aspect-video rounded-sm overflow-hidden shadow-lg">
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
                  <span className="text-[#C4A484] text-xs uppercase tracking-widest">{video.category}</span>
                  <h3 className="font-serif text-lg text-[#2C2C2C] mt-1">{video.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-[#2C2C2C] text-white">
        <div className="container mx-auto max-w-2xl text-center">
          <p className="section-subtitle text-[#C4A484]">More Content</p>
          <h2 className="text-3xl font-serif mb-6">Subscribe for Updates</h2>
          <p className="text-gray-400 mb-8">
            Be the first to see new music videos, live performances, and exclusive content.
          </p>
          <a
            href="https://www.youtube.com/@Cleiri?sub_confirmation=1"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary bg-white text-[#2C2C2C] hover:bg-[#C4A484] hover:text-white"
          >
            Subscribe on YouTube
          </a>
        </div>
      </section>
    </div>
  );
}
