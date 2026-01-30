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
          <div className="inline-block bg-[var(--color-bone)]/10 border border-[var(--color-bone)]/20 text-[var(--color-bone)] px-10 py-5 rounded-sm">
            <p className="text-xs uppercase tracking-widest mb-2 text-[var(--color-bone)]/60">Premieres</p>
            <p className="font-serif text-2xl md:text-3xl">February 18</p>
          </div>
        </div>
      </section>
    </div>
  );
}
