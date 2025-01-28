"use client";

import Link from "next/link";
import { useState } from "react";

export default function GithubTutorial1() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div>
      {/* Navbar */}
      <nav className="flex justify-between items-center py-4 px-8 bg-black shadow-md">
        <div className="text-left">
          <Link
            href="/"
            className="text-xl font-bold text-white transition-colors hover:text-gray-300"
          >
            SerbaTahu
          </Link>
        </div>
        <div className="flex gap-6">
          <Link
            href="/about-us"
            className="text-lg font-semibold text-white transition-colors hover:text-gray-300"
          >
            Tentang Kami
          </Link>
        </div>
      </nav>

      {/* Tutorial Section 1 */}
      <div
        className="tutorial-section"
        style={{
          backgroundColor: "black",
          display: "flex",
          fontWeight: "bold",
          justifyContent: "center",
          fontSize: "1.6rem",
          color: "white",
          cursor: "pointer",
          margin: "20px 0",
        }}
      >
        <div className="header-tutorial">Cara Pertama kali Commit & Update</div>
      </div>

      {/* Video Section 1 */}
      <div className="flex flex-col items-center gap-8 mt-12">
          <div className="w-full max-w-2xl flex flex-col items-center px-4">
            <iframe
              className="w-full aspect-video rounded-xl"
              src="https://drive.google.com/file/d/1VWvpYZOXI6-SDyICY-Rz928LiaFvY-9y/preview"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>

      {/* Tutorial Description 1 */}
      <div
        className="tutorial-description"
        style={{
          backgroundColor: "black",
          display: "flex",
          justifyContent: "center",
          fontSize: "1.2rem",
          color: "white",
          marginTop: "20px",
          textAlign: "center",
        }}
      >
        Video dibawah menampilkan Cara pertama kali commit on GitHub.
      </div>

      {/* Tutorial Section 2 */}
      <div
        className="tutorial-section"
        style={{
          backgroundColor: "black",
          display: "flex",
          fontWeight: "bold",
          justifyContent: "center",
          fontSize: "1.6rem",
          color: "white",
          cursor: "pointer",
          margin: "20px 0",
        }}
      >
        <div className="header-tutorial">Cara update commit</div>
      </div>

      {/* Video Section 2 */}
      <div className="flex flex-col items-center gap-8 mt-12">
          <div className="w-full max-w-2xl flex flex-col items-center px-4">
            <iframe
              className="w-full aspect-video rounded-xl"
              src="https://drive.google.com/file/d/1VWvpYZOXI6-SDyICY-Rz928LiaFvY-9y/preview"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>

      {/* Tutorial Description 2 */}
      <div
        className="tutorial-description"
        style={{
          backgroundColor: "black",
          display: "flex",
          justifyContent: "center",
          fontSize: "1.2rem",
          color: "white",
          marginTop: "20px",
          textAlign: "center",
        }}
      >
        Video di atas menampilkan cara update commit
      </div>
    </div>
  );
}
