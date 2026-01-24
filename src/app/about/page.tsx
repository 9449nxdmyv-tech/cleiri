import Image from 'next/image';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

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
    <div className="bg-[#FAF7F2] min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="section-subtitle">The Story</p>
          <h1 className="section-title text-[#2C2C2C]">{title}</h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Image */}
            <div className="relative">
              <div className="sticky top-8">
                <div className="relative rounded-sm overflow-hidden shadow-2xl">
                  <Image
                    src="/images/cleiri.jpg"
                    alt="Cleiri"
                    width={600}
                    height={800}
                    className="object-cover w-full"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-[#C4A484] rounded-sm -z-10" />
              </div>
            </div>

            {/* Text Content */}
            <div>
              <div
                className="prose prose-lg max-w-none text-[#6B6B6B] leading-relaxed"
                dangerouslySetInnerHTML={{ __html: contentHtml }}
              />

              {/* Contact CTA */}
              <div className="mt-12 pt-8 border-t border-[#E5E0D8]">
                <h3 className="font-serif text-xl text-[#2C2C2C] mb-4">Get in Touch</h3>
                <p className="text-[#6B6B6B] mb-6">
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

      {/* Awards Section */}
      <section className="py-20 px-6 bg-[#2C2C2C] text-white mt-20">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="section-subtitle text-[#C4A484]">Recognition</p>
          <h2 className="text-3xl font-serif mb-12">Awards & Achievements</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto text-left">
            <div className="bg-white/5 rounded-sm p-6 border border-white/10">
              <p className="text-[#C4A484] text-sm uppercase tracking-widest mb-3">2021 - 2023</p>
              <h3 className="text-xl font-serif mb-2">Brownsville Music Legacy Awards</h3>
              <p className="text-gray-400 text-sm">Three consecutive years of recognition for contributions to regional music.</p>
            </div>
            <div className="bg-white/5 rounded-sm p-6 border border-white/10">
              <p className="text-[#C4A484] text-sm uppercase tracking-widest mb-3">2021 - 2023</p>
              <h3 className="text-xl font-serif mb-2">Guadalupe Awards - San Antonio</h3>
              <p className="text-gray-400 text-sm">Honored for excellence in Latin music and cultural contribution.</p>
            </div>
            <div className="bg-white/5 rounded-sm p-6 border border-white/10">
              <p className="text-[#C4A484] text-sm uppercase tracking-widest mb-3">October 2022</p>
              <h3 className="text-xl font-serif mb-2">Best Female Vocalist Nominee</h3>
              <p className="text-gray-400 text-sm">Nominated at the Guadalupe Awards for vocal excellence.</p>
            </div>
            <div className="bg-white/5 rounded-sm p-6 border border-white/10">
              <p className="text-[#C4A484] text-sm uppercase tracking-widest mb-3">2022</p>
              <h3 className="text-xl font-serif mb-2">Rising Star - Voyage Magazine</h3>
              <p className="text-gray-400 text-sm">Featured as one of San Antonio&apos;s rising stars in arts and entertainment.</p>
            </div>
            <div className="bg-white/5 rounded-sm p-6 border border-white/10 md:col-span-2">
              <p className="text-[#C4A484] text-sm uppercase tracking-widest mb-3">2024</p>
              <h3 className="text-xl font-serif mb-2">Latin Grammy Awards Invitation</h3>
              <p className="text-gray-400 text-sm">Received an official invitation to attend the prestigious Latin Grammy Awards ceremony.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
