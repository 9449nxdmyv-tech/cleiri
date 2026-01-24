'use client';

import Image from 'next/image';
import { useState } from 'react';

const photos = [
  {
    src: '/images/cleiri.jpg',
    alt: 'Cleiri portrait with vintage microphone',
    category: 'Portrait',
  },
  {
    src: '/images/cleiri-512x512bb.jpg',
    alt: 'Cleiri album artwork',
    category: 'Album Art',
  },
  {
    src: '/images/cleiri-2.jpg',
    alt: 'Cleiri promotional photo',
    category: 'Promo',
  },
  {
    src: 'https://cleiri.com/wp-content/uploads/2024/06/IMG_8216-523x1024.jpeg',
    alt: 'Cleiri 2024 photoshoot',
    category: '2024',
  },
  {
    src: 'https://cleiri.com/wp-content/uploads/2024/06/Facetune_24-06-2024-09-42-57-683x1024.jpeg',
    alt: 'Cleiri portrait 2024',
    category: '2024',
  },
  {
    src: 'https://cleiri.com/wp-content/uploads/2024/06/DrG2QdL9-683x1024.jpeg',
    alt: 'Cleiri photo 2024',
    category: '2024',
  },
  {
    src: '/images/channels4_banner.jpg',
    alt: 'Cleiri YouTube banner',
    category: 'Banner',
  },
];

export default function PhotosPage() {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  return (
    <div className="bg-[#FAF7F2] min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="section-subtitle">Gallery</p>
          <h1 className="section-title text-[#2C2C2C]">Photos</h1>
          <p className="text-[#6B6B6B] text-lg max-w-2xl mx-auto leading-relaxed">
            A visual journey through performances, photoshoots, and behind-the-scenes moments.
          </p>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {photos.map((photo, index) => (
              <div
                key={index}
                className="group relative aspect-[3/4] overflow-hidden rounded-sm cursor-pointer"
                onClick={() => setSelectedPhoto(photo.src)}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  unoptimized={photo.src.startsWith('http')}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-white text-xs uppercase tracking-widest bg-black/50 px-3 py-1 rounded-sm">
                    {photo.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            className="absolute top-6 right-6 text-white text-4xl hover:text-[#C4A484] transition-colors"
            onClick={() => setSelectedPhoto(null)}
          >
            &times;
          </button>
          <div className="relative max-w-4xl max-h-[90vh] w-full h-full">
            <Image
              src={selectedPhoto}
              alt="Selected photo"
              fill
              className="object-contain"
              unoptimized={selectedPhoto.startsWith('http')}
            />
          </div>
        </div>
      )}

      {/* Instagram CTA */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-2xl text-center">
          <p className="section-subtitle">More Photos</p>
          <h2 className="text-3xl font-serif mb-6 text-[#2C2C2C]">Follow on Instagram</h2>
          <p className="text-[#6B6B6B] mb-8">
            See the latest photos, stories, and behind-the-scenes content.
          </p>
          <a
            href="https://www.instagram.com/cleiriquezada"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            @cleiriquezada
          </a>
        </div>
      </section>
    </div>
  );
}
