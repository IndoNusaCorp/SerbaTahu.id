"use client";

import Link from "next/link";
import { useState } from "react";

export default function Lua() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div>

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

      {/* message */}
      <div className="message" style={{display: "flex", justifyContent: "center", alignContent: "center", alignItems: "center", fontWeight: "bold", marginTop: "25%", fontSize: "1.5rem"}}>Maaf, Konten Saat ini belum tersedia</div>
    </div>
  );
}
