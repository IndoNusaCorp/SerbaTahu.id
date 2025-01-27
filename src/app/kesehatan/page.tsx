"use client";

import Link from "next/link";
import { useState } from "react";

export default function kesehatan() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Array kategori konten
  const categories = [
    { name: "Kesehatan & Teknologi Kesehatan", href: "/kesehatan/kesehatan-dan-teknologi-kesehatan" },
    { name: "", href: "" },
    { name: "", href: "" },
  ];

  // Menghitung jumlah konten yang tersedia
  const contentCount = categories.length;

  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        minHeight: "100vh",
        padding: "0",
        margin: "0",
      }}
    >
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

      {/* Header */}
      <div
        className="header-section1"
        style={{
          textAlign: "center",
          fontSize: "2rem",
          fontWeight: "bold",
          padding: "2rem 0",
        }}
      >
        Kategori | Kesehatan 🧪
      </div>

      {/* Total konten yang tersedia */}
      <div
        className="available-content-count"
        style={{
          textAlign: "center",
          fontSize: "1.5rem",
          marginTop: "-3px",
          fontWeight: "bold",
          padding: "2rem 0",
        }}
      >
        Tersedia:{" "}
        <span className="text-blue-500 font-semibold">{contentCount}</span>
      </div>

      {/* Content */}
      <div
        className="content-section"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "2rem",
          padding: "2rem",
        }}
      >
        {categories.map((category) => (
          <Link
            href={category.href}
            key={category.name}
            className="section-item"
            style={{
              textDecoration: "none",
              background: "linear-gradient(145deg, #1e1e1e, #292929)",
              color: "white",
              padding: "1.5rem",
              borderRadius: "10px",
              fontSize: "1.2rem",
              fontWeight: "bold",
              textAlign: "center",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow =
                "0 8px 16px rgba(0, 0, 0, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow =
                "0 4px 8px rgba(0, 0, 0, 0.2)";
            }}
          >
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
