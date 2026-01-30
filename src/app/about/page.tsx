import Image from 'next/image';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
};

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
  {
    title: 'Brownsville Tejano Singer Hits Milestone with Invitation to Latin Grammys',
    source: 'Valley Central',
    url: 'https://www.valleycentral.com/news/local-news/rgv-sounds-brownsville-tejano-singer-hits-milestone-with-invitation-to-latin-grammys/',
  },
  {
    title: 'Hispanic Heritage Month: RGV Singer Brings New Listeners From Across the Globe',
    source: 'Valley Central',
    url: 'https://www.valleycentral.com/news/local-news/hispanic-heritage-month-mariachi-singer-brings-new-listeners-from-across-the-globe/',
  },
];

async function getAboutContent(): Promise<{ contentHtml: string; title: string }> {
  const contentDir = path.join(process.cwd(), 'content');
  const fullPath = path.join(contentDir, 'about.md');
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    contentHtml,
    title: matterResult.data.title as string,
  };
}

export default async function AboutPage() {
  const { contentHtml, title } = await getAboutContent();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="section-subtitle text-[var(--color-emerald)]">The Story</p>
          <h1 className="section-title text-[var(--color-black)]">{title}</h1>
        </div>
      </section>

      {/* Bio Content */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Image */}
            <div className="relative">
              <div className="sticky top-8">
                <div className="relative rounded-sm overflow-hidden shadow-2xl">
                  <Image
                    src="/images/gallery/IMG_2095.jpeg"
                    alt="Cleiri"
                    width={600}
                    height={800}
                    className="object-cover w-full"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-[var(--color-emerald)] rounded-sm -z-10" />
              </div>
            </div>

            {/* Text Content */}
            <div>
              <div
                className="prose prose-lg max-w-none text-[var(--color-charcoal)] leading-relaxed"
                dangerouslySetInnerHTML={{ __html: contentHtml }}
              />

              {/* Contact CTA */}
              <div className="mt-12 pt-8 border-t border-[var(--color-black)]/10">
                <h3 className="font-serif text-xl text-[var(--color-black)] mb-4">Get in Touch</h3>
                <p className="text-[var(--color-charcoal)] mb-6">
                  For bookings and inquiries, reach out directly.
                </p>
                <a
                  href="mailto:music@cleiri.com"
                  className="btn-primary"
                >
                  Contact Cleiri
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Press & Media */}
      <section className="py-20 px-6 bg-[var(--color-bone-light)]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <p className="section-subtitle text-[var(--color-emerald)]">Featured In</p>
            <h2 className="text-3xl font-serif text-[var(--color-black)]">Press & Media</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {pressArticles.map((article) => (
              <a
                key={article.url}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-8 bg-white rounded-sm hover:shadow-lg transition-all duration-300 border border-[var(--color-emerald)]/10"
              >
                <p className="text-xs uppercase tracking-widest text-[var(--color-emerald)] mb-3">
                  {article.source}
                </p>
                <h3 className="font-serif text-lg text-[var(--color-black)] group-hover:text-[var(--color-emerald)] transition-colors leading-relaxed">
                  {article.title}
                </h3>
                <span className="inline-block mt-4 text-sm text-[var(--color-charcoal)] group-hover:text-[var(--color-emerald)] transition-colors">
                  Read Article &rarr;
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Achievements */}
      <section className="py-20 px-6 bg-[var(--color-emerald)] text-[var(--color-bone)]">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="section-subtitle text-[var(--color-gold)]">Recognition</p>
          <h2 className="text-3xl font-serif mb-12">Awards & Achievements</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto text-left">
            <div className="bg-white/10 rounded-sm p-6 border border-white/10 hover:border-[var(--color-gold)]/40 transition-colors">
              <p className="text-[var(--color-gold)] text-sm uppercase tracking-widest mb-3">2021 - 2023</p>
              <h3 className="text-xl font-serif mb-2">Brownsville Music Legacy Awards</h3>
              <p className="text-[var(--color-bone)]/70 text-sm">Three consecutive years of recognition for contributions to regional music.</p>
            </div>
            <div className="bg-white/10 rounded-sm p-6 border border-white/10 hover:border-[var(--color-gold)]/40 transition-colors">
              <p className="text-[var(--color-gold)] text-sm uppercase tracking-widest mb-3">2021 - 2023</p>
              <h3 className="text-xl font-serif mb-2">Guadalupe Awards - San Antonio</h3>
              <p className="text-[var(--color-bone)]/70 text-sm">Honored for excellence in Latin music and cultural contribution.</p>
            </div>
            <div className="bg-white/10 rounded-sm p-6 border border-white/10 hover:border-[var(--color-gold)]/40 transition-colors">
              <p className="text-[var(--color-gold)] text-sm uppercase tracking-widest mb-3">October 2022</p>
              <h3 className="text-xl font-serif mb-2">Best Female Vocalist Nominee</h3>
              <p className="text-[var(--color-bone)]/70 text-sm">Nominated at the Guadalupe Awards for vocal excellence.</p>
            </div>
            <div className="bg-white/10 rounded-sm p-6 border border-white/10 hover:border-[var(--color-gold)]/40 transition-colors">
              <p className="text-[var(--color-gold)] text-sm uppercase tracking-widest mb-3">2022</p>
              <h3 className="text-xl font-serif mb-2">Rising Star - Voyage Magazine</h3>
              <p className="text-[var(--color-bone)]/70 text-sm">Featured as one of San Antonio&apos;s rising stars in arts and entertainment.</p>
            </div>
            <div className="bg-white/10 rounded-sm p-6 border border-white/10 md:col-span-2 hover:border-[var(--color-gold)]/40 transition-colors">
              <p className="text-[var(--color-gold)] text-sm uppercase tracking-widest mb-3">2024</p>
              <h3 className="text-xl font-serif mb-2">Latin Grammy Awards Invitation</h3>
              <p className="text-[var(--color-bone)]/70 text-sm">Received an official invitation to attend the prestigious Latin Grammy Awards ceremony.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
