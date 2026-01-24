import Link from 'next/link';
import { FaInstagram, FaYoutube, FaSpotify, FaFacebookF, FaTiktok } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#2C2C2C] text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl mb-4">Cleiri</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Award-winning singer and songwriter from the Rio Grande Valley.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-sm uppercase tracking-widest text-[#C4A484] mb-6">Navigate</h4>
            <div className="flex flex-col space-y-3">
              <Link href="/music" className="text-gray-400 hover:text-white transition-colors text-sm">
                Music
              </Link>
              <Link href="/videos" className="text-gray-400 hover:text-white transition-colors text-sm">
                Videos
              </Link>
              <Link href="/photos" className="text-gray-400 hover:text-white transition-colors text-sm">
                Photos
              </Link>
              <Link href="/news" className="text-gray-400 hover:text-white transition-colors text-sm">
                News
              </Link>
              <Link href="/about" className="text-gray-400 hover:text-white transition-colors text-sm">
                About
              </Link>
            </div>
          </div>

          {/* Social & Contact */}
          <div className="md:text-right">
            <h4 className="text-sm uppercase tracking-widest text-[#C4A484] mb-6">Connect</h4>
            <div className="flex md:justify-end space-x-5 mb-6">
              <a
                href="https://www.instagram.com/cleiriquezada"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-gray-400 hover:text-[#C4A484] transition-colors"
              >
                <FaInstagram className="text-xl" />
              </a>
              <a
                href="https://www.youtube.com/@Cleiri"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="text-gray-400 hover:text-[#C4A484] transition-colors"
              >
                <FaYoutube className="text-xl" />
              </a>
              <a
                href="https://open.spotify.com/search/Cleiri"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Spotify"
                className="text-gray-400 hover:text-[#C4A484] transition-colors"
              >
                <FaSpotify className="text-xl" />
              </a>
              <a
                href="https://www.facebook.com/CleiriOfficial/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-gray-400 hover:text-[#C4A484] transition-colors"
              >
                <FaFacebookF className="text-xl" />
              </a>
              <a
                href="https://www.tiktok.com/t/ZTRJ5D6kg/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="text-gray-400 hover:text-[#C4A484] transition-colors"
              >
                <FaTiktok className="text-xl" />
              </a>
            </div>
            <a
              href="mailto:music@cleiri.com"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              music@cleiri.com
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-500 text-xs tracking-wide">
            &copy; {new Date().getFullYear()} Cleiri. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
