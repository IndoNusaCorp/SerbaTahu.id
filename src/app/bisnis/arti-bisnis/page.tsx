"use client";

import Link from "next/link";
import { useState } from "react";

export default function psikologi() {
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
      <div className="text-center text-2xl font-bold py-8">Bisnis</div>

      {/* Content 1 */}
      <div className="px-6 md:px-16 lg:px-24">
        {/* Introduction */}
        <div className="text-base md:text-lg font-light leading-relaxed">
          <p>
            Apa sih itu{" "}
            <span className="text-blue-500 font-semibold">Bisnis</span>?
            Sebenarnya sih, bisnis itu bukan cuman soal jual beli produk atau
            jasa aja. Menurut Hughes dan Kapoor, bisnis adalah aktivitas
            individu atau kelompok yang terorganisir untuk bisa menghasilkan dan
            menjual barang serta jasa untuk mendapatkan keuntungan, sekaligus
            memenuhi kebutuhan masyarakat. dan memang tujuan utamanya itu untuk
            menghasilkan laba. Tapi, bisnis juga bertujuan untuk memenuhi
            kebutuhan kita. dengan adanya produk dan jasa. kayak contoh kita
            butuh sabun untuk mandi pasti ada yang jual produk sabun tersebut.
            dan contoh juga kita butuh guru untuk mengajar, pasti ada kok jasa
            guru. bahkan guru juga di bayar oleh pihak sekolah untuk mengajari
            kita. Dan memang guru bisa di bilang the best banget. Jadi kita
            harus hormati mereka apalagi disebut "Pahlawan tanpa jasa".
            Ngomong-ngomong, Kamu tau ga sih? sebenarnya dunia bisnis itu luas
            banget loh. jadi ada pasarnya gitu di setiap masing-masing jasa dan
            produk. Misal nih aku sebutin, bisnis agraris yang berfokus untuk
            hasil pertanian seperti padi, jagung, karet, kelapa sawit, dll.
            Lalu, ada juga berfokus ke kesehatan, pendidikan, teknologi,
            konsultan, dan bahkan ada jasa unik juga. Seperti jasa curhat, kan
            itu unik bangetzzz... jadi kayak contoh kita sedang sedih, butuh
            temen curhat, tapi ga ada yang bisa, jadi otomatis kita akan pesen
            jasa mereka, Nah. itu lah salah satu bisnis juga. Kalau bisnis
            Pendidikan itu kayak jasa guru, jualan buku. Jasa pendidikan sih
            bisa menjadi gratis maupun bayar. Dan masih banyak loh bisnis unik
            lain. Keren deh pokoknya. Tetapi harus ada namanya konsisten. Mau
            belajar tentang sejarah bisnis ga? Gaskan lah kita bahas
          </p>

          <h2 className="text-xl font-semibold mt-6">
            <Link
              href={
                "https://kumparan.com/info-psikologi/7-manfaat-mempelajari-psikologi-untuk-kehidupan-manusia-20ryBewSUR1/full"
              }
            >
              Sejarah:
            </Link>
          </h2>
          <ul className="list-disc pl-6">
            <li>
              <span className="text-blue-500 font-semibold">
                Industri 1.0: Era Mesin Uap (Abad ke-18 – Awal Abad ke-19)
              </span>{" "}
              Sejarah Pertama itu ada di industri 1.0, Jadi Dulu banget, sebelum
              ada mesin, hampir semua pekerjaan dilakukan secara manual. Terus,
              di akhir abad ke-18, muncul revolusi besar: mesin uap! Ini pertama
              kali dipopulerkan di Inggris dan benar-benar mengubah segalanya.
              Mesin uap bikin produksi jadi lebih cepat dan efisien, terutama di
              sektor manufaktur dan tekstil. Kalau sebelumnya butuh banyak
              tenaga manusia, sekarang mesin bisa menggantikan sebagian besar
              pekerjaan. Ini juga awal mula munculnya pabrik-pabrik besar yang
              jadi cikal bakal industri modern.
            </li>
            <li>
              <span className="text-blue-500 font-semibold">
                Industri 2.0: Era Listrik dan Produksi Massal (Akhir Abad ke-19
                – Awal Abad ke-20)
              </span>{" "}
              Dengan Psikologi, kita bisa lebih berempati karena kita tahu bahwa
              setiap tindakan seseorang dipengaruhi oleh berbagai faktor,
              seperti lingkungan, pengalaman masa lalu, atau kondisi mentalnya.
            </li>
            <li>
              <span className="text-blue-500 font-semibold">
                Industri 3.0: Era Komputer dan Otomasi (Pertengahan Abad ke-20 –
                Awal Abad ke-21)
              </span>{" "}
              Dengan Masuk ke abad ke-20, revolusi berikutnya datang dengan
              munculnya komputer dan teknologi otomatisasi. Kalau dulu semuanya
              masih bergantung pada manusia, sekarang mesin dan robot mulai
              mengambil alih tugas-tugas yang berulang. Di era ini, komputer
              mulai dipakai dalam bisnis untuk meningkatkan efisiensi, mengelola
              data, dan bahkan membantu dalam p roses produksi. Internet juga
              mulai berkembang, yang akhirnya membuka pintu untuk bisnis
              digital.
            </li>
            <li>
              <span className="text-blue-500 font-semibold">
                Industri 4.0: Era Digital dan Kecerdasan Buatan (Abad ke-21 –
                Sekarang)
              </span>{" "}
              Nah, sekarang kita ada di era Industri 4.0. Ini adalah era di mana
              teknologi digital, big data, artificial intelligence (AI),
              Internet of Things (IoT), dan otomatisasi canggih benar-benar
              mengubah cara bisnis berjalan. Sekarang, kita bisa lihat
              perusahaan menggunakan AI untuk menganalisis data pelanggan, robot
              pintar bekerja di pabrik, dan bahkan bisnis kecil bisa menjual
              produk ke seluruh dunia lewat e-commerce. Bisnis di era ini bukan
              cuma soal produksi barang, tapi juga pengalaman pengguna, inovasi
              teknologi, dan efisiensi yang tinggi. Lihat aja
              perusahaan-perusahaan besar kayak Tesla, Amazon, atau
              Google—mereka memanfaatkan teknologi untuk terus berkembang.
              Bahkan UMKM sekarang bisa bersaing dengan perusahaan besar dengan
              memanfaatkan media sosial dan marketplace online.
            </li>
          </ul>
        </div>
        
        <div className="text-base md:text-lg font-light leading-relaxed">
          <p>
            Jadi, pada intinya bisnis itu akan terus berkembang. Semua bisa dijadikan bisnis
            Tapi tau ga? Ai yang kita kenal sekarang itu dari bisnis juga loh, yang udah 
            membantu kita banget dalam melalukan kegiatan sehari-hari. Tetapi kita harus adaptasi
            dalam melakukan bisnis apalagi udah ada ai, terapkan ai untuk membantumu berbisnis
            dan jangan terlalu <span className="text-blue-500 font-semibold">Bergantung pada Ai</span> Jadikan ai
            menjadi <span className="text-blue-500 font-semibold">Teman </span>bukan <span className="text-red-500 font-semibold">MUSUH</span>
          </p>
          </div>

        {/* Jurnal Section */}
        <div className="judul-jurnal-1 text-center font-bold text-xl mt-12">
          Jurnal Bisnis
        </div>
        <div className="text-lg font-medium text-center my-6">
          Pengantar Bisnis
          <a
            href="https://books.google.co.id/books?hl=en&lr=&id=2DW2DwAAQBAJ&oi=fnd&pg=PR1&dq=bisnis&ots=9gLv9byYdq&sig=QaaaQHm0Jh2euQObVQSZIjJ44EY&redir_esc=y#v=onepage&q=bisnis&f=false"
            className="text-blue-500 font-semibold ml-2"
          >
            &gt;
          </a>
        </div>
        <div className="text-lg font-medium text-center my-6">
        Strategi Penelitian Bisnis
          <a
            href="https://books.google.co.id/books?hl=en&lr=&id=ETgEEAAAQBAJ&oi=fnd&pg=PR3&dq=bisnis&ots=x66qu4ckr_&sig=6ekWzDnGll4lp9FgUSUFqk5Blgo&redir_esc=y#v=onepage&q=bisnis&f=false"
            className="text-blue-500 font-semibold ml-2"
          >
            &gt;
          </a>
        </div>
        <div className="text-lg font-medium text-center my-6">
        Memahami Bisnis Bank - Ikatan Bankir Indonesia
          <a
            href="https://books.google.co.id/books?hl=en&lr=&id=LKBLDwAAQBAJ&oi=fnd&pg=PA5&dq=bisnis&ots=mSNGLrJ2zS&sig=joangXgp1mq9vUEca07PJPtSavo&redir_esc=y#v=onepage&q=bisnis&f=false"
            className="text-blue-500 font-semibold ml-2"
          >
            &gt;
          </a>
        </div>

        {/* Video Section */}
        <div className="flex flex-col items-center gap-8 mt-12">
          <div className="w-full max-w-2xl flex flex-col items-center px-4">
            <iframe
              className="w-full aspect-video rounded-xl"
              src="https://youtube.com/embed/89QEZGxWYZc?si=vH7NCWMN0YGku9gO"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
            <p className="text-center mt-4">
              Video 1: Step by Step MulaI Bisnis dari Nol | Dig Deeper{" "}
              <Link href={"https://www.youtube.com/@Theoderick_"}>
                <span className="text-blue-500 font-semibold">| Theo Derick</span>
              </Link>
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-8 mt-12">
          <div className="w-full max-w-2xl flex flex-col items-center px-4">
            <iframe
              className="w-full aspect-video rounded-xl"
              src="https://www.youtube.com/embed/lCioIb6GLXY?si=JVFVRmomUQ7RnpLo"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
            <p className="text-center mt-4">
              Video 2: 5 Teknik KOMUNIKASI untuk Bisnis & Karir{" "}
              <Link href={"https://www.youtube.com/@RaymondChins"}>
                <span className="text-blue-500 font-semibold">
                  | Raymond Chin
                </span>
              </Link>
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-8 mt-12">
          <div className="w-full max-w-2xl flex flex-col items-center px-4">
            <iframe
              className="w-full aspect-video rounded-xl"
              src="https://www.youtube.com/embed/naHivpOR0Gs?si=jLjlWziblyS64pus"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
            <p className="text-center mt-4">
              Video 3: Bisnis Itu Serem? Hah Kok Gitu Sih..{" "}
              <Link
                href={"https://www.youtube.com/@radityadika"}
              >
                <span className="text-blue-500 font-semibold">
                  {" "}
                  | Raditya Dika
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
