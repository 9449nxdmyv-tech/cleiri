import { FaInstagram, FaYoutube, FaSpotify, FaFacebookF, FaTiktok } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black text-white p-6">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://www.instagram.com/cleiriquezada" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram className="text-2xl hover:text-gray-400" />
          </a>
          <a href="https://www.youtube.com/@Cleiri" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <FaYoutube className="text-2xl hover:text-gray-400" />
          </a>
          <a href="https://open.spotify.com/search/Cleiri" target="_blank" rel="noopener noreferrer" aria-label="Spotify">
            <FaSpotify className="text-2xl hover:text-gray-400" />
          </a>
          <a href="https://www.facebook.com/CleiriOfficial/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebookF className="text-2xl hover:text-gray-400" />
          </a>
          <a href="https://www.tiktok.com/t/ZTRJ5D6kg/" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <FaTiktok className="text-2xl hover:text-gray-400" />
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Cleiri. All rights reserved.</p>
      </div>
    </footer>
  );
}
