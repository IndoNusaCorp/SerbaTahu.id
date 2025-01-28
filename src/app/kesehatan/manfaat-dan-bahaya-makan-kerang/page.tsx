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

      {/* Header */}
      <div className="text-center text-2xl font-bold py-8">
        Kerang, Manfaat & Bahaya
      </div>

      {/* Content 1 */}
      <div className="px-6 md:px-16 lg:px-24">
        {/* Introduction */}
        <div className="text-base md:text-lg font-light leading-relaxed">
          <p>
            Hmm.. Kerang. Jika kita ngomongin kerang sih pasti enak banget.
            Apalagi kerang fresh, tapi tau nggak teman-teman kalau kerang itu
            ada manfaat dan bahaya? Ternyata bahaya-nya lebih banyak! Apa aja
            sih bahaya-nya? Dan apa manfaat dari kerang tersebut? Mari kita
            bahas!
          </p>

          <h2 className="text-xl font-semibold mt-6">
            Jenis-Jenis Kerang yang Difavoritkan di Indonesia:
          </h2>
          <ul className="list-disc pl-6">
            <li>
              <strong>Abalon:</strong> Kerang abalon adalah makanan jenis
              premium yang mengandung 105 kalori per 100 gram. Kaya akan{" "}
              <span className="text-blue-500 font-semibold">
                Vitamin K, Vitamin B5, Vitamin E, dan fosfor
              </span>
              .
            </li>
            <li>
              <strong>Kerang Hijau:</strong> Aman dikonsumsi, tapi pastikan
              membeli dari produsen terpercaya untuk menghindari kontaminasi.
            </li>
            <li>
              <strong>Kepah:</strong> Kerang ini kaya nutrisi dengan harga lebih
              terjangkau. Biasanya dimasak dengan tumisan atau bumbu tauco.
            </li>
            <li>
              <strong>Simping:</strong> Berasal dari tepi laut dan kaya akan
              Omega-3.
            </li>
          </ul>

          <h2 className="text-xl font-semibold mt-6">Manfaat Kerang:</h2>
          <ul className="list-disc pl-6">
            <li>
              <strong>Otak:</strong> Menjaga kesehatan otak, terutama untuk
              anak-anak, berkat kandungan Omega-3.
            </li>
            <li>
              <strong>Jantung:</strong> Membantu sirkulasi darah dan menjaga
              fungsi jantung berkat asam lemak omega-3.
            </li>
            <li>
              <strong>Organ Reproduksi Pria:</strong> Mendukung kesuburan pria
              melalui kandungan seng dan selenium.
            </li>
            <li>
              <strong>Mengatur Tekanan Darah:</strong> Membantu menurunkan
              tekanan darah dengan kandungan kalium.
            </li>
            <li>
              <strong>Sistem Kekebalan Tubuh:</strong> Kandungan seng dan
              selenium membantu meningkatkan imunitas.
            </li>
            <li>
              <strong>Mencegah Anemia:</strong> Mengandung zat besi dan vitamin
              B12 yang membantu pembentukan hemoglobin.
            </li>
            <li>
              <strong>Mencegah Penuaan Dini:</strong> Mengandung
              mukopolisakarida yang meningkatkan hidrasi kulit.
            </li>
          </ul>

          <h2 className="text-xl font-semibold mt-6">
            Bahaya Mengonsumsi Kerang:
          </h2>
          <ul className="list-disc pl-6">
            <li>
              <strong>Keracunan:</strong> Kerang menyerap zat berbahaya dari
              lingkungannya, yang dapat berisiko bagi tubuh manusia.
            </li>
            <li>
              <strong>Overdosis Vitamin:</strong> Konsumsi berlebihan vitamin
              B12 dapat menyebabkan diare, ruam, dan kulit gatal.
            </li>
            <li>
              <strong>Risiko Berbahaya:</strong> Asupan zat besi yang berlebihan
              dapat meningkatkan risiko diabetes dan penyakit Alzheimer.
            </li>
          </ul>

          <p className="mt-6">
            Apakah kerang aman untuk Bunda hamil?{" "}
            <a
              href="https://chatgpt.com/share/679889fd-fec0-8007-9e73-b56c9412baf0"
              className="text-blue-500 font-semibold"
            >
              Klik disini untuk tips lengkapnya &gt;
            </a>
          </p>
        </div>

        {/* Jurnal Section */}
        <div className="judul-jurnal-1 text-center font-bold text-xl mt-12">
          Jurnal Kerang
        </div>
        <div className="text-lg font-medium text-center my-6">
          Manfaat pada Kerang
          <a
            href="https://zeevorte.blogspot.com/2016/01/manfaat-pada-kerang.html"
            className="text-blue-500 font-semibold ml-2"
          >
            &gt;
          </a>
        </div>
        <div className="text-lg font-medium text-center my-6">
          Alternatif Efektif Menurunkan Anemia pada Ibu Hamil
          <a
            href="https://www.ejurnalmalahayati.ac.id/index.php/kreativitas/article/view/9757"
            className="text-blue-500 font-semibold ml-2"
          >
            &gt;
          </a>
        </div>
        <div className="text-lg font-medium text-center my-6">
          Pengetahuan dan Persepsi Masyarakat Mengenai Kerang
          <a
            href="https://repository.unja.ac.id/50042/"
            className="text-blue-500 font-semibold ml-2"
          >
            &gt;
          </a>
        </div>

        {/* Video Section */}
        <div className="flex flex-col items-center gap-8 mt-12">
          <div className="flex flex-col items-center">
            <iframe
              className="rounded-xl"
              width="560"
              height="315"
              src="https://youtube.com/embed/pz-KgKe04uE?si=a4XmBVjOw-bAuv0_"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
            <p className="text-center mt-4">
              Video 1: Makan kerang itu bahaya? Bisa bikin autis? Masa sih?{" "}
              <Link href={"https://www.youtube.com/@geraldvincentt/shorts"}>
                <span className="text-blue-500 font-semibold">
                  Gerald Vincent
                </span>
              </Link>
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-8 mt-12">
          <div className="flex flex-col items-center">
            <iframe
              className="rounded-xl"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/FLxWikmNH34?si=4E4v9ABFFLNBd4TA"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
            <p className="text-center mt-4">
              Video 2: Manfaat dan dampak Makan kerang hijau{" "}
              <Link href={"https://www.youtube.com/@HidupSehattvOne/videos"}>
                <span className="text-blue-500 font-semibold">
                  Hidup Sehat TVOne
                </span>
              </Link>
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-8 mt-12">
          <div className="flex flex-col items-center">
            <iframe
              className="rounded-xl"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/hIsGYQEhzaU?si=lqitIR2guQyRlnjp"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
            <p className="text-center mt-4">
              Video 3: Boleh Enggak Sih Ibu Hamil Makan Kerang? - dr. Ardiansjah
              Dara Sjahruddin, SpOG., M.Kes.{" "}
              <Link href={"https://www.youtube.com/@GueSehat"}>
                <span className="text-blue-500 font-semibold">Gue Sehat</span>
              </Link>
            </p>
          </div>
        </div>

        {/* Images Section */}
        <div className="flex flex-col items-center gap-8 mt-12">
          <div>
            <img
              src="/kerang ijo.jpeg"
              alt="kerang-ijo"
              className="w-full max-w-md rounded-lg shadow-lg"
            />
            <p className="text-center mt-4">
              Gambar 1: Kerang Ijo dari{" "}
              <Link
                href={
                  "https://www.greeners.co/flora-fauna/kerang-hijau-makanan-lezat-yang-menyimpan-risiko-kesehatan/"
                }
              >
                <span className="text-blue-500 font-semibold">Greeners.Co</span>
              </Link>
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-8 mt-12">
          <div>
            <img
              src="/pengelola-kerang.jpg"
              alt="Pengelola-kerang"
              className="w-full max-w-md rounded-lg shadow-lg"
            />
            <p className="text-center mt-4">
              Gambar 2: Membersihkan dan Mengolah kerang dari{" "}
              <Link
                href={
                  "https://cookpad.com/id/resep/16036418-membersihkan-dan-mengolah-kerang"
                }
              >
                <span className="text-blue-500 font-semibold">Cookpad.com</span>
              </Link>
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-8 mt-12">
          <div>
            <img
              src="/Resep Kerang Dara.webp"
              alt="resep-kerang"
              className="w-full max-w-md rounded-lg shadow-lg"
            />
            <p className="text-center mt-4">
              Gambar 3: Resep kerang Dara Rebus dari{" "}
              <Link
                href={"https://resepkoki.id/resep/resep-kerang-dara-rebus/"}
              >
                <span className="text-blue-500 font-semibold">
                  Resepkoki.id
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
