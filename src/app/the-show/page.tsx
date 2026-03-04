import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Show',
};

export default function TheShowPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Content */}
      <section className="flex-grow flex items-center justify-center px-6 py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/gallery/IMG_2115.jpeg"
            alt="Cleiri"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[var(--color-emerald)]/85" />
        </div>
        <div className="text-center max-w-2xl mx-auto relative z-10">
          <p className="section-subtitle text-[var(--color-gold)]">Something New</p>
          <h1 className="section-title text-[var(--color-bone)] mb-6">Cleiri The Show</h1>
          <div className="w-16 h-px bg-[var(--color-bone)]/30 mx-auto mb-8" />
          <p className="text-[var(--color-bone)]/80 text-lg leading-relaxed mb-12">
            A new chapter begins. Stay tuned for an experience that brings you closer to the music, the stories, and the journey.
          </p>
          <div className="w-full aspect-video rounded-sm overflow-hidden shadow-2xl">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/videoseries?list=PL2HtmVveDJNPPNIc2xF50mx2TmIpYNaQ4&rel=0"
              title="Cleiri The Show Playlist"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </div>
  );
}
