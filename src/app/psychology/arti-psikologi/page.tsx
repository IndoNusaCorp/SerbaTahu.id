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
      <div className="text-center text-2xl font-bold py-8">Psikologi</div>

      {/* Content 1 */}
      <div className="px-6 md:px-16 lg:px-24">
        {/* Introduction */}
        <div className="text-base md:text-lg font-light leading-relaxed">
          <p>
            <span className="text-blue-500 font-semibold">Psikologi</span> itu
            adalah ilmu pengetahuan dan ilmu terapan untuk mempelajari perilaku,
            sikap, mental. biasanya seseorang yang melakukan praktik psikologi
            itu bisa di sebut dengan psikolog. Para psikolog berusaha untuk
            memperbaiki kualitas hidup seseorang dengan intervensi tertentu baik
            mental maupun perilaku.
          </p>

          <h2 className="text-xl font-semibold mt-6">
            <Link href={"https://id.wikipedia.org/wiki/Psikologi"}>
              Etomologi:
            </Link>
          </h2>
          <ul className="list-disc pl-6">
            <li>
              <strong>psyche</strong> adalah kata berasal dari bahasa yunani
              yang berarti nafas, jiwa, atau budi. dan logos itu artinya kata,
              diskursus, dan ilmu
            </li>
          </ul>

          <h2 className="text-xl font-semibold mt-6">
            <Link
              href={
                "https://www.kompasiana.com/nuraini23741/658520eb12d50f490d381902/sejarah-psikologi-psikologi"
              }
            >
              Sejarah:
            </Link>
          </h2>
          <p className="text-base md:text-lg font-light leading-relaxed">
            jadi gini… Dulu, di zaman Yunani Kuno, filsafat itu dianggap sebagai
            induk dari semua ilmu pengetahuan. Jadi, semua cabang ilmu yang
            sekarang kita kenal, termasuk psikologi, dulunya masih masuk dalam
            ranah filsafat. Para pemikir zaman itu nggak melihat ilmu-ilmu ini
            sebagai sesuatu yang terpisah, melainkan sebagai bagian dari upaya
            besar untuk memahami dunia dan manusia. Nah, karena psikologi itu
            berkaitan sama pikiran, jiwa, dan perilaku manusia, otomatis dia
            banyak banget dipengaruhi oleh filsafat. Bahkan, bisa dibilang
            psikologi lahir dari pemikiran para filsuf. Makanya, kalau kita
            lihat ke belakang, tokoh-tokoh awal dalam dunia psikologi itu ya
            sebenarnya para filsuf juga. Misalnya nih, ada Plato (429-347 SM).
            Plato ini punya teori menarik tentang jiwa manusia. Dia percaya
            kalau jiwa kita terbagi jadi tiga bagian: yang rasional (alias
            logika dan akal sehat), yang emosional (kayak perasaan, marah,
            sedih, dan sebagainya), dan yang berhubungan sama keinginan atau
            nafsu. Menurut Plato, kalau ketiga bagian ini nggak seimbang, hidup
            kita bisa kacau. Terus ada lagi Aristoteles (384-322 SM), muridnya
            Plato. Nah, kalau Plato lebih suka pendekatan idealis, Aristoteles
            ini lebih realistis. Dia percaya kalau pengetahuan itu datang dari
            pengalaman dan pengamatan langsung, bukan cuma dari pemikiran
            abstrak. Makanya, dia lebih menekankan pentingnya bukti nyata dalam
            memahami manusia. Bisa dibilang, pemikirannya ini jadi salah satu
            pondasi awal metode ilmiah yang akhirnya dipakai dalam psikologi
            modern. Jadi intinya, sebelum psikologi jadi ilmu yang kita kenal
            sekarang, awalnya dia adalah bagian dari filsafat. Dan berkat
            pemikiran orang-orang kayak Plato dan Aristoteles, kita sekarang
            punya pemahaman yang lebih dalam tentang bagaimana manusia berpikir,
            merasa, dan berperilaku. Keren, kan?
          </p>

          <h2 className="text-xl font-semibold mt-6">
            <Link href={"https://kumparan.com/info-psikologi/7-manfaat-mempelajari-psikologi-untuk-kehidupan-manusia-20ryBewSUR1/full"}>Manfaat Belajar Psikologi dalam Kehidupan Sehari-hari</Link>
          </h2>
          <ul className="list-disc pl-6">
            <li>
              <strong>Mengenal Diri Sendiri dengan Lebih Baik:</strong> Salah
              satu manfaat paling keren dari belajar Psikologi adalah kita bisa
              lebih memahami diri sendiri. Lewat berbagai teori dan penelitian,
              kita jadi tahu cara mengenali kepribadian, emosi, hingga pola
              pikir kita.
            </li>
            <li>
              <strong>Memiliki Empati terhadap Sesama:</strong> Dengan
              Psikologi, kita bisa lebih berempati karena kita tahu bahwa setiap
              tindakan seseorang dipengaruhi oleh berbagai faktor, seperti
              lingkungan, pengalaman masa lalu, atau kondisi mentalnya.
            </li>
            <li>
              <strong>Mampu Memosisikan Diri saat Berinteraksi:</strong> Dengan
              ilmu Psikologi, kita bisa lebih peka dalam berinteraksi, tahu
              kapan harus berbicara, kapan harus mendengarkan, dan bagaimana
              menyampaikan pendapat tanpa menyinggung perasaan orang lain.
            </li>
            <li>
              <strong>Memahami Wawasan tentang Kesehatan Mental:</strong>{" "}
              Belajar Psikologi membantu kita lebih paham tentang kesehatan
              mental dan cara mendeteksi tanda-tanda gangguan psikologis, serta
              bagaimana menanganinya dengan benar.
            </li>
            <li>
              <strong>Tidak Mudah Menghakimi Orang Lain:</strong> Dengan belajar
              Psikologi, kita bisa lebih bijak dalam menilai orang lain dan
              mencoba memahami alasan di balik tindakan mereka.
            </li>
            <li>
              <strong>
                Mengenal Faktor yang Mempengaruhi Perilaku Manusia:
              </strong>{" "}
              Psikologi membahas berbagai faktor yang membentuk perilaku
              manusia, seperti genetika, lingkungan, dan pengalaman hidup.
            </li>
            <li>
              <strong>Mengembangkan Pemikiran Kritis:</strong> Belajar Psikologi
              juga mengajarkan kita cara berpikir kritis, menganalisis
              informasi, dan mengambil keputusan yang lebih rasional.
            </li>
          </ul>
        </div>

        {/* Jurnal Section */}
        <div className="judul-jurnal-1 text-center font-bold text-xl mt-12">
          Jurnal Psikologi
        </div>
        <div className="text-lg font-medium text-center my-6">
        Teori-teori Psikologi
          <a
            href="https://repository.iainkediri.ac.id/584/"
            className="text-blue-500 font-semibold ml-2"
          >
            &gt;
          </a>
        </div>
        <div className="text-lg font-medium text-center my-6">
          Psikologi Pendidikan
          <a
            href="https://repository.bbg.ac.id/bitstream/1789/1/Jalaluddin_Rahmat_-_Psikologi_Komunikasi_(belum_lengkap).pdf"
            className="text-blue-500 font-semibold ml-2"
          >
            &gt;
          </a>
        </div>
        <div className="text-lg font-medium text-center my-6">
        Psikologi Komunikasi
          <a
            href="https://repository.iainkediri.ac.id/584/"
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
              src="https://youtube.com/embed/j9vqa4K4h90?si=qf7KPromQOv7GWaM_"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
            <p className="text-center mt-4">
              Video 1: 🧠 Apa Itu Ilmu 'Psikologi' Sebenarnya? #BelajardiRumah{" "}
              <Link href={"https://www.youtube.com/@KokBisa"}>
                <span className="text-blue-500 font-semibold">
                 | Kok Bisa?
                </span>
              </Link>
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-8 mt-12">
          <div className="w-full max-w-2xl flex flex-col items-center px-4">
            <iframe
              className="w-full aspect-video rounded-xl"
              src="https://www.youtube.com/embed/yxQZk_IRiRs?si=_wWhl45Ipl-QsWcZ"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
            <p className="text-center mt-4">
              Video 2: MApa itu Ilmu Psikologi? | Psikologi Dasar 1{" "}
              <Link href={"https://www.youtube.com/@bintang_psiko"}>
                <span className="text-blue-500 font-semibold">
                 | Bintang Psiko
                </span>
              </Link>
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-8 mt-12">
          <div className="w-full max-w-2xl flex flex-col items-center px-4">
            <iframe
              className="w-full aspect-video rounded-xl"
              src="https://www.youtube.com/embed/HpZatdrik9M?si=yAi1Vg_ykr9R9Bvd"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
            <p className="text-center mt-4">
              Video 3: Bagaimana Alam Bawah Membentuk Kepribadian Manusia? Belajar Psikologi: Seri Teori Kepribadian Freud{" "}
              <Link href={"https://www.youtube.com/@SatuPersenIndonesianLifeschool"}>
                <span className="text-blue-500 font-semibold"> | Satu Persen - Indonesian Life School
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
