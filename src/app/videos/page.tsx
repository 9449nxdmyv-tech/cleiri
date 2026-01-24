const videos = [
  { id: '5l0s_5mh4jw' },
  { id: 'QQRPpXxIvZI' },
  { id: 'wCkudGBUg-4' },
  { id: 'Vp8PV0LlUes' },
];

export default function VideosPage() {
  return (
    <div className="container mx-auto px-6 py-24">
      <h1 className="text-5xl font-serif font-bold mb-12 text-center text-gray-800">Videos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {videos.map((video) => (
          <div key={video.id} className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-full rounded-lg shadow-xl"
              src={`https://www.youtube.com/embed/${video.id}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
}
