"use client";

import Link from "next/link";
import { useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <html lang="en">
      <head>
        <title>SerbaTahu</title>
      </head>
      <body style={{ backgroundColor: "black", color: "white", minHeight: "100vh", padding: "0", margin: "0" }}>
        {/* Navbar */}
        <nav className="navbar" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem 2rem", background: "black", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)" }}>
          <div className="navbar-brand" style={{ textAlign: "left" }}>
            <Link href="/" className="navbar-logo" style={{ fontSize: "1.5rem", fontWeight: "bold", textDecoration: "none", color: "white", transition: "color 0.3s ease" }}>SerbaTahu</Link>
          </div>
          <div className="navbar-links" style={{ display: "flex", gap: "1.5rem" }}>
            <Link href="/about-us" className="navbar-item" style={{ fontSize: "1.2rem", fontWeight: "bold", textDecoration: "none", color: "white", transition: "color 0.3s ease" }}>Tentang Kami</Link>
          </div>
        </nav>

        {/* Header */}
        <div className="header-section1" style={{ textAlign: "center", fontSize: "2rem", fontWeight: "bold", padding: "2rem 0" }}>
          Kategori | Ayo kita eksplor bareng-bareng 🚀🔥
        </div>

        {/* Category */}
        <div className="content-section" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2rem", padding: "2rem" }}>
          {[
            { name: "💻", href: "/ilmu-komputer" },
            { name: "🌎", href: "/sejarah" },
            { name: "🏥", href: "/kesehatan" },
            { name: "📊", href: "/bisnis" },
            { name: "🚗", href: "/kendaraan" },
            { name: "🏀", href: "/olahraga" },
            { name: "🌮", href: "/makanan" },
          ].map((category) => (
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
                e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
              }}
            >
              {category.name}
            </Link>
          ))}
        </div>

        {/* Content */}
        <div className="discovery-section" style={{ padding: "2rem", backgroundColor: "#121212" }}>
          <div style={{ marginBottom: "1rem", color: "white", fontWeight: "bold", fontSize: "1.5rem", marginLeft: "20px" }}>
            Temukan Hal Menarik ✨
          </div>

          <div className="discovery-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem" }}>
            {[
              {
                title: "Kumpas tuntas Mesin GD Diesel Toyota",
                description: "Pelajari Teknologi Mesin GD Toyota",
                href: "/kendaraan/gd-diesel-toyota",
              },
              {
                title: "Bagaimana cara pertama kali commit di github",
                description: "liat caranya disini",
                href: "/ilmu-komputer/github/bagaimana-cara-pertama-kali-commit",
              },
            ].map((item) => (
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
                <div style={{ fontSize: "1.2rem", fontWeight: "bold", marginBottom: "0.5rem" }}>{item.title}</div>
                <div style={{ fontSize: "0.9rem", color: "#ccc" }}>{item.description}</div>
              </Link>
            ))}
          </div>
        </div>

        {/* Analytics */}
        <Analytics />

        {/* Speed Insights */}
        <SpeedInsights />
      </body>
    </html>
  );
}
