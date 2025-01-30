"use client";

import Link from "next/link";
import { useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function psychology () {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Data discovery items
  const discoveryItems = [
    {
      title: "Psikologi",
      href: "/psychology/arti-psikologi",
    },
    {
      title: "(Konten ini Masih kosong)",
      description: "",
      href: "",
    },
  ];

  // Filter logic
  const filteredDiscoveryItems = discoveryItems.filter((item) =>
    `${item.title} ${item.description}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  return (
    <div
      className="content-all-container"
      style={{
        backgroundColor: "black",
        color: "white",
        minHeight: "100vh",
        padding: "0",
        margin: "0",
      }}
    >

      {/* Navbar & Search Bar */}
      <nav
        className="navbar"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem 2rem",
          background: "black",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
        }}
      >
        <div className="navbar-brand" style={{ textAlign: "left" }}>
          <Link
            href="/"
            className="navbar-logo"
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              textDecoration: "none",
              color: "white",
              transition: "color 0.3s ease",
            }}
          >
            SerbaTahu
          </Link>
        </div>
        <div
          className="search-component"
          style={{
            display: "flex",
            cursor: "pointer",
            backgroundColor: "white",
            width: "400px",
            height: "35px",
            borderRadius: "25px",
          }}
        >
          <input
            type="text"
            placeholder="🔍 Yuk Belajar Pskikologi | Apa yang mau kamu cari?"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: "100%",
              border: "none",
              background: "transparent",
              padding: "0 1rem",
              outline: "none",
              color: "black",
              fontSize: "1rem",
            }}
          />
        </div>
        <div className="navbar-links" style={{ display: "flex", gap: "1.5rem" }}>
          <Link
            href="/about-us"
            className="navbar-item"
            style={{
              fontSize: "1.2rem",
              fontWeight: "bold",
              textDecoration: "none",
              color: "white",
              transition: "color 0.3s ease",
            }}
          >
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
        Kategori | Psikologi 🫀
      </div>

      {/* Content */}
      <div
        className="discovery-section"
        style={{ padding: "2rem"}}
      >
        <div
          style={{
            marginBottom: "1rem",
            color: "white",
            fontWeight: "bold",
            fontSize: "1.5rem",
            marginLeft: "20px",
          }}
        >
          Yuk, Belajar bareng 💻✨
        </div>

        <div
          className="discovery-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "2rem",
          }}
        >
          {filteredDiscoveryItems.length > 0 ? (
            filteredDiscoveryItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="discovery-item"
                style={{
                  textDecoration: "none",
                  background: "linear-gradient(145deg, #1e1e1e, #292929)",
                  color: "white",
                  padding: "1.5rem",
                  borderRadius: "10px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
                }}
              >
                <div style={{ fontSize: "1.2rem", fontWeight: "bold", marginBottom: "0.5rem" }}>
                  {item.title}
                </div>
                <div style={{ fontSize: "0.9rem", color: "#ccc" }}>
                  {item.description}
                </div>
              </Link>
            ))
          ) : (
            <div style={{ color: "white", textAlign: "center", gridColumn: "1/-1" }}>
              Tidak ditemukan hasil untuk "{searchQuery}"
            </div>
          )}
        </div>
      </div>

      <Analytics />
      <SpeedInsights />
    </div>
  );
}