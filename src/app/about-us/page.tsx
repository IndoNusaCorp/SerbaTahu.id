"use client";

import Link from "next/link";
import { useState } from "react";

export default function AboutUs() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center py-4 px-8 bg-black shadow-md">
        <div className="text-left">
          <Link href="/" className="text-xl font-bold text-white transition-colors hover:text-gray-300">
            SerbaTahu
          </Link>
        </div>
        <div className="flex gap-6">
          <Link href="/about-us" className="text-lg font-semibold text-white transition-colors hover:text-gray-300">
            Tentang Kami
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>
        <p className="text-lg leading-relaxed mb-6 text-center">
          Selamat Datang di {" "}
          <span className="text-blue-500 font-semibold">SerbaTahu</span>, sebuah ensiklopedia dari Indonesia untuk dunia. Kami hadir sebagai sumber informasi edukatif yang kaya, mencakup berbagai topik seperti kesehatan, teknologi, dan banyak lagi. Misi kami adalah memberikan edukasi berkualitas kepada masyarakat Indonesia dan dunia, membantu menciptakan generasi yang lebih cerdas dan berwawasan luas.
        </p>
        <div className="flex justify-around mt-10">
          {/* Team Member 1 */}
          <div className="flex flex-col items-center">
            <img
              src="/me.png"
              alt="Team Member 1"
              className="rounded-full w-40 h-40 object-cover mb-4 shadow-lg"
            />
            <p className="text-lg font-medium">Yizreel Novanto</p>
            <p className="text-sm text-gray-400">CEO & Founder & Developer</p>
          </div>
        </div>
        <p className="text-center mt-10 text-gray-400">
          "Innovating the future, together."
        </p>
      </div>
    </div>
  );
}
