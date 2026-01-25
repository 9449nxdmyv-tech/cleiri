import Image from 'next/image';

const newsItems = [
  {
    date: 'November 2024',
    category: 'Milestone',
    title: 'Cleiri Receives Invitation to Latin Grammys',
    description: 'Brownsville Tejano singer hits a major career milestone with an invitation to the prestigious Latin Grammy Awards ceremony.',
    source: 'Valley Central',
    url: 'https://www.valleycentral.com/news/local-news/rgv-sounds-brownsville-tejano-singer-hits-milestone-with-invitation-to-latin-grammys/',
    featured: true,
  },
  {
    date: 'October 2024',
    category: 'Feature',
    title: 'Hispanic Heritage Month: RGV Singer Brings New Listeners From Across the Globe',
    description: 'Mariachi singer Cleiri continues to expand her international audience while honoring her Rio Grande Valley roots.',
    source: 'Valley Central',
    url: 'https://www.valleycentral.com/news/local-news/hispanic-heritage-month-mariachi-singer-brings-new-listeners-from-across-the-globe/',
  },
  {
    date: 'July 2024',
    category: 'New Release',
    title: "Cleiri Takes Musical Journey Through Her Ancestral Roots with 'Si Dios Me Quita La Vida'",
    description: 'The acclaimed singer-songwriter explores her heritage in this powerful new release that pays homage to traditional Mexican music.',
    source: 'Tejano Nation',
    url: 'https://tejanonation.net/2024/07/02/cleiri-takes-musical-journey-through-her-ancestral-roots-with-si-dios-me-quita-la-vida/',
  },
  {
    date: 'September 2023',
    category: 'New Release',
    title: "Acclaimed Singer-Songwriter Cleiri Unveils Emotion-Filled Journey with 'Estoy Pensando En Ti'",
    description: 'Cleiri\'s latest single showcases her signature blend of Spanish ballads and contemporary soul.',
    source: 'Tejano Nation',
    url: 'https://tejanonation.net/2023/09/15/acclaimed-singer-songwriter-cleiri-unveils-emotion-filled-journey-with-estoy-pensando-en-ti/',
  },
  {
    date: 'October 2022',
    category: 'Industry News',
    title: "Singer-Songwriter Cleiri Signs with CHR Records, Announces 'La Distancia' Single and Video",
    description: 'Following a series of successful independent singles, Cleiri inks a deal with CHR Records to record her first full-length album.',
    source: 'Tejano Nation',
    url: 'https://tejanonation.net/2022/10/17/singer-songwriter-cleiri-signs-with-chr-records-announces-la-distancia-single-and-video/',
  },
  {
    date: '2022',
    category: 'Feature',
    title: 'Rising Star Feature in Voyage Magazine San Antonio',
    description: 'Cleiri is featured as one of San Antonio\'s rising stars in the arts and entertainment scene.',
    source: 'Voyage Magazine',
    url: '#',
  },
  {
    date: '2021',
    category: 'Feature',
    title: 'Making the Dream Become a Reality',
    description: 'An in-depth profile on Cleiri\'s journey from University of Texas at Brownsville graduate to award-winning singer-songwriter.',
    source: 'The Rider Newspaper',
    url: 'https://www.utrgvrider.com/making-the-dream-become-a-reality/',
  },
];

export default function NewsPage() {
  const featuredNews = newsItems.find(item => item.featured);
  const otherNews = newsItems.filter(item => !item.featured);

  return (
    <div className="bg-[#E7DBCB] min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="section-subtitle text-[#A30302]">Latest Updates</p>
          <h1 className="section-title text-[#2D282C]">News</h1>
          <p className="text-[#555456] text-lg max-w-2xl mx-auto leading-relaxed">
            Stay up to date with Cleiri&apos;s latest releases, performances, awards, and media features.
          </p>
        </div>
      </section>

      {/* Featured News - RED accent */}
      {featuredNews && (
        <section className="py-12 px-6">
          <div className="container mx-auto max-w-6xl">
            <a
              href={featuredNews.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-[#A30302] rounded-sm overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="grid md:grid-cols-2">
                <div className="relative aspect-video md:aspect-auto">
                  <Image
                    src="/images/cleiri.jpg"
                    alt={featuredNews.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center text-white">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-[#FFBD17] text-xs uppercase tracking-widest">
                      {featuredNews.category}
                    </span>
                    <span className="text-white/60 text-xs">{featuredNews.date}</span>
                  </div>
                  <h2 className="font-serif text-2xl md:text-3xl mb-4 group-hover:text-[#FFBD17] transition-colors">
                    {featuredNews.title}
                  </h2>
                  <p className="text-white/80 mb-6">{featuredNews.description}</p>
                  <span className="text-[#FFBD17] text-sm uppercase tracking-widest">
                    Read on {featuredNews.source} &rarr;
                  </span>
                </div>
              </div>
            </a>
          </div>
        </section>
      )}

      {/* News Grid */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherNews.map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-[#F7FBF8] rounded-sm p-8 shadow-sm hover:shadow-lg transition-all duration-300 border-l-4 border-transparent hover:border-[#A30302]"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-[#A30302] text-xs uppercase tracking-widest">
                    {item.category}
                  </span>
                  <span className="text-[#555456] text-xs">{item.date}</span>
                </div>
                <h3 className="font-serif text-xl text-[#2D282C] mb-3 group-hover:text-[#A30302] transition-colors leading-relaxed">
                  {item.title}
                </h3>
                <p className="text-[#555456] text-sm mb-4 leading-relaxed">
                  {item.description}
                </p>
                <span className="text-sm text-[#A30302] group-hover:text-[#2D282C] transition-colors">
                  {item.source} &rarr;
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
