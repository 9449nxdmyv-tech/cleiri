import Image from 'next/image';
import Link from 'next/link';

export default function Home() {

  return (

    <div
      className="relative text-white min-h-screen overflow-hidden bg-black flex flex-col items-center justify-center"
      style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(128,0,128,0.6))' }}
    >
      {/* Content Wrapper */}
      <div className="relative z-20 w-full h-full flex flex-col justify-center items-center">
        {/* Hero Section */}
        <div className="container mx-auto px-6 pt-12 py-24 flex flex-col items-center justify-center min-h-screen">
          <div className="text-center max-w-2xl">
            <Image
              src="/images/cleiri.jpg"
              alt="Cleiri singing into a vintage microphone"
              width={200}
              height={200}
              className="rounded-full shadow-xl mb-8 mx-auto"
            />
            <Image
              src="/images/logo.png"
              alt="Cleiri Logo"
              width={300}
              height={120}
              className="object-contain mb-4 mx-auto"
            />
            <p className="text-2xl font-sans mb-6">Singer | Songwriter | Musician</p>
            <p className="font-sans text-lg mb-8">
              Award-winning artist from the Rio Grande Valley, blending Spanish ballads with the soulful sound of mariachi.
            </p>
            <div className="mt-8 flex justify-center space-x-4">
              <Link href="/music" className="bg-purple-800 text-white font-bold py-3 px-6 rounded-full hover:bg-purple-700">
                Music
              </Link>
              <Link href="/videos" className="bg-purple-800 text-white font-bold py-3 px-6 rounded-full hover:bg-purple-700">
                Videos
              </Link>
              <Link href="/about" className="bg-purple-800 text-white font-bold py-3 px-6 rounded-full hover:bg-purple-700">
                About
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
