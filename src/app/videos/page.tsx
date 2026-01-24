const videos = [
  { id: '5l0s_5mh4jw', title: 'Performance Highlight' },
  { id: 'QQRPpXxIvZI', title: 'Live Session' },
  { id: 'wCkudGBUg-4', title: 'Music Video' },
  { id: 'Vp8PV0LlUes', title: 'Behind the Scenes' },
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
            Experience the visual artistry of Cleiri through live performances,
            music videos, and exclusive behind-the-scenes content.
          </p>
        </div>
      </section>

      {/* Videos Grid */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videos.map((video) => (
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-2xl text-center">
          <p className="section-subtitle">More Content</p>
          <h2 className="text-3xl font-serif mb-6 text-[#2C2C2C]">Subscribe for Updates</h2>
          <p className="text-[#6B6B6B] mb-8">
            Follow Cleiri on YouTube for the latest music videos, live performances, and exclusive content.
          </p>
          <a
            href="https://www.youtube.com/@Cleiri"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Subscribe on YouTube
          </a>
        </div>
      </section>
    </div>
  );
}
