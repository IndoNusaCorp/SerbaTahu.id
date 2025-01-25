"use client";

import Link from "next/link";
import { useState } from "react";

export default function Kendaraan() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="bg-black text-white min-h-screen p-0 m-0">
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
      <div className="text-center text-2xl font-bold py-8">
        Teknologi yang digunakan mesin GD
      </div>

      {/* Content 1 */}
      <div className="px-6 md:px-16 lg:px-24">
        <div className="text-base md:text-lg font-light leading-relaxed">
          Mesin <span className="text-blue-500 font-semibold">GD</span> itu adalah mesin diesel Toyota yang digunakan pada line-up
          mobil mereka, seperti Innova, Fortuner, Hiace, Hilux dan paling terbaru
          adalah Hilux Rangga. Mesin <span className="text-blue-500 font-semibold">GD</span> pertama kali di rilis pada tahun 2015 dan dipakai sampai sekarang 2025, jadi sudah sekitar hampir 10 tahun.
          Mesin ini biasanya menggunakan transmisi manual dan matic sebanyak 6-speed transmisi. Mesin ini sangat bandel untuk digunakan dalam kerja berat maupun ringan dan juga mesin <span className="text-blue-500 font-semibold">GD</span> sangat irit. Jadi banyak yang berminat dengan mobil ini. Mesin <span className="text-blue-500 font-semibold">GD</span> ini adalah ubahan dari mesin <span className="text-blue-500 font-semibold">KD</span>. 

          Spek lengkap dari mesin GD (untuk 2GD):
          <ul className="list-disc pl-6 mt-2">
            <li>4 silinder alias 4 piston</li>
            <li>Common rail</li>
            <li>VGT (variable geometry turbocharger)</li>
            <li>Kompresi: 15.6:1</li>
            <li>Tenaga: 150hp</li>
            <li>Torsi: 400Nm</li>
            <li>6 Speed AT & MT</li>
          </ul>

          Spek lengkap mesin 1GD:
          <ul className="list-disc pl-6 mt-2">
            <li>4 silinder alias 4 piston</li>
            <li>Common rail</li>
            <li>VGT (variable geometry turbocharger)</li>
            <li>Kompresi: 15.6:1</li>
            <li>Tenaga: 204hp</li>
            <li>Torsi: 500Nm</li>
            <li>6 Speed AT & MT</li>
          </ul>

          <p className="mt-4">
            *Beberapa mobil untuk 1GD ada juga dibawah 204hp
          </p>
        </div>

        <div className="text-base md:text-lg font-light leading-relaxed mt-4">
          Variant mesin GD tersedia 2.400 cc dan 2.800 cc. Mesin <span className="text-blue-500 font-semibold">GD</span> menggunakan Teknologi Selective Catalytic Reduction (SCR) yang bisa mengurangi 99% Emisi NOx. Mesin ini mempunyai termal terbaik di mata Toyota mencapai 44%. Teknologi mesin GD yang lain adalah Thermo Swing Wall Insulation Technology dan pemakaian silica-reinforced porous anodized aluminum (SiRPA) pada piston.
        </div>

        <div className="text-base md:text-lg font-light leading-relaxed mt-4">
          Menurut data, Mesin GD sudah terjual 700ribu lebih di dunia pada tahun 2016.
        </div>

        <div className="text-lg font-medium text-center my-6">
          Pelajari Teknologi dari Turbo VGT disini
          <Link href="https://en.wikipedia.org/wiki/Variable-geometry_turbocharger" className="text-blue-500 font-semibold ml-2">
            &gt;
          </Link>
        </div>

        <div className="text-lg font-medium text-center my-6">
          Pelajari Teknologi dari Selective Catalytic Reduction (SCR) disini (Part 1)
          <Link href="https://en.wikipedia.org/wiki/Selective_catalytic_reduction" className="text-blue-500 font-semibold ml-2">
            &gt;
          </Link>
        </div>

        <div className="text-lg font-medium text-center my-6">
          Pelajari Teknologi dari Selective Catalytic Reduction (SCR) disini (Part 2)
          <Link href="https://mde.maryland.gov/programs/air/MobileSources/documents/selective%20catalytic%20reduction%20_scr_%20fact%20sheet.pdf" className="text-blue-500 font-semibold ml-2">
            &gt;
          </Link>
        </div>

        <div className="text-lg font-medium text-center my-6">
          Pelajari Teknologi dari Silica-reinforced porous anodized aluminum (SiRPA) disini
          <Link href="https://www.tytlabs.co.jp/en/review/issue/files/484_011horie.pdf" className="text-blue-500 font-semibold ml-2">
            &gt;
          </Link>
        </div>

        <div className="text-lg font-medium text-center mb-4">
          Gambar dari mesin GD:
        </div>

        {/* Images Section */}
        <div className="flex flex-col items-center gap-8">
          <div>
            <img
              src="/Mesin GD.jpg"
              alt="Mesin-GD"
              className="w-full max-w-md rounded-lg shadow-lg"
            />
            <p className="text-center mt-2">Image 1</p>
          </div>
          <div>
            <img
              src="/catalytic mesin gd.jpg"
              alt="Catalytic Mesin GD"
              className="w-full max-w-md rounded-lg shadow-lg"
            />
            <p className="text-center mt-2">
              Image 2 from{" "}
              <Link
                href="https://autonetmagz.com/yuk-simak-detail-mesin-diesel-gd-baru-toyota-innova-fortuner-dan-hilux-2015/30857/"
                className="text-blue-500"
              >
                AutonetMagz
              </Link>
            </p>
          </div>
          <div>
            <img
              src="/Toyota GD Diesel Engine Insulation.jpg"
              alt="Toyota GD Diesel Engine Insulation"
              className="w-full max-w-md rounded-lg shadow-lg"
            />
            <p className="text-center mt-2">
              Image 3 from{" "}
              <Link
                href="https://autonetmagz.com/yuk-simak-detail-mesin-diesel-gd-baru-toyota-innova-fortuner-dan-hilux-2015/30857/"
                className="text-blue-500"
              >
                AutonetMagz
              </Link>
            </p>
          </div>
          <div>
            <img
              src="/Piston Toyota GD Diesel Engine 2015.jpg"
              alt="Piston Toyota GD Diesel Engine 2015"
              className="w-full max-w-md rounded-lg shadow-lg"
            />
            <p className="text-center mt-2">
              Image 4 from{" "}
              <Link
                href="https://autonetmagz.com/yuk-simak-detail-mesin-diesel-gd-baru-toyota-innova-fortuner-dan-hilux-2015/30857/"
                className="text-blue-500"
              >
                AutonetMagz
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
