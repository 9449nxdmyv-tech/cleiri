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
    <div className="container mx-auto px-6 py-24 max-w-5xl">
      <h1 className="text-5xl font-serif font-bold mb-12 text-center">{title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Text Content - Left Column */}
        <div
          className="prose prose-lg max-w-none font-sans text-gray-800"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
        {/* Image - Right Column */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/images/cleiri.jpg"
            alt="Cleiri singing into a vintage microphone"
            width={500}
            height={750}
            className="rounded-lg shadow-xl object-cover"
          />
        </div>
      </div>
    </div>
  );
}
