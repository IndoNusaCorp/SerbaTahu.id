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
        Kesehatan & Teknologi Kesehatan
      </div>

      {/* Content 1 */}
      <div className="px-6 md:px-16 lg:px-24">
        <div className="text-base md:text-lg font-light leading-relaxed">
          Apa itu <span className="text-blue-500 font-semibold">Kesehatan</span> menurut beberapa sumber seperti wikipedia, dan artikel lainnya.
          Kesehatan itu adalah kondisi kesejahteraan secara fisik, mental, sosial dan lainnya.
          Makna kesehatan itu sudah berkembang dalam seiringnya waktu. Dan juga perkembangan teknologi kesehatan dan kedokteran sudah canggih banget, menggunakan teknologi tinggi.
          Seperti teknologi X-Ray, CT-Scan (Computed Tomography), Ultrasound (USG), PET Scan (Positron Emission Tomography), Fluoroskopi, Thermography, PCR (Polymerase Chain Reaction), Next-Generation Sequencing, CRISPR-Cas9, Surgical Robots (Robot bedah), dan masih banyak lainnya.

          Yuk. Kita pelajari bareng tentang Teknologi kedokteran ini. <span className="text-blue-500 font-semibold">MRI (Magnetic Resonance Imaging): </span>  adalah teknologi yang menggunakan medan magnet dan gelombang radio. Biasanya untuk scanning dan bisa menampilkan hasil gambar dari organ tubuh pasien dan jaringan tubuh pasien. <span className="text-blue-500 font-semibold">CT Scan (Computed Tomography): </span> itu adalah teknologi
          kombinasi dari Sinar-X untuk menghasilkan gambar 3D.<span className="text-blue-500 font-semibold"> Ultrasound (USG): </span> itu biasanya menggunakan gelombang suara dengan frekuensi yang sangat tinggi.
          Teknologi ini biasanya digunakan untuk ngecek kehamilan, kesehatan bayi ataupun organ dalam. <span className="text-blue-500 font-semibold"> PET Scan (Positron Emission Tomography): </span> menggunakan zat radioaktif untuk mendeteksi metabolik dan fungsi organ. <span className="text-blue-500 font-semibold">Fluoroskopi: </span> Sinar-X Realtime digunakan untuk melihat pergerakan tubuh.
          dan juga sering digunakan dalam proses operasi/pembedahan. <span className="text-blue-500 font-semibold">Thermography: </span> menggunakan panas inframerah untuk mendeteksi perubahan suhu tubuh, sering juga di gunakan untuk diagnosa penyakiit inflamasi dan kanker. <span className="text-blue-500 font-semibold">PCR (Polymerase Chain Reaction): </span> digunakan mendeteksi DNA atau RNA patogen untuk diagnosa penyakit 
          infeksi. <span className="text-blue-500 font-semibold">NGS (Next Generation Reaction): </span> Teknologi analisis genetik untuk di pelajari nya tentang kelainan genetik dan kanker. <span className="text-blue-500 font-semibold">CRISPR-Cas9:</span> Teknologi pengeditan gen untuk terapi genetik. <span className="text-blue-500 font-semibold">Fotopletismografi (PPG) dan elektrokardiogram (ECG): </span> ini 
          adalah teknologi yang digunakan pada smartwatch untuk monitor irama jantuk. dan juga <span className="text-blue-500 font-semibold">Oximeter </span> di gunakan untuk mengukur oksigen darah. <span className="text-blue-500 font-semibold">Implantable Devices:</span> Alat seperti pacemaker untuk mengatur ritme jantung.
        </div>

        <div className="judul-jurnal-1" style={{display: "flex", justifyContent: "center", fontSize: "1.5rem", marginTop: "55px", fontWeight: "bold"}}>
            Magnetic Resonance Imaging
        </div>

        <div className="text-lg font-medium text-center my-6">
        Magnetic Resonance Imaging (MRI) – A Review
        Girish Katti, Syeda Arshiya Ara, Ayesha Shireen
          <Link href="https://www.researchgate.net/profile/Dr-Shireen/publication/279471369_Magnetic_resonance_imaging_MRI_-_A_review/links/5cd61f53299bf14d9589b943/Magnetic-resonance-imaging-MRI-A-review.pdf" className="text-blue-500 font-semibold ml-2">
            &gt;
          </Link>
        </div>

        <div className="text-lg font-medium text-center my-6">
        The role of magnetic susceptibility in magnetic resonance imaging: MRI magnetic compatibility of the first and second kinds
        John F. Schenck
          <Link href="https://aapm.onlinelibrary.wiley.com/doi/abs/10.1118/1.597854" className="text-blue-500 font-semibold ml-2">
            &gt;
          </Link>
        </div>

        <div className="text-lg font-medium text-center my-6">
        Magnetic resonance imaging (MRI): A review of genetic damage investigations
          <Link href="https://www.sciencedirect.com/science/article/abs/pii/S1383574215000071" className="text-blue-500 font-semibold ml-2">
            &gt;
          </Link>
        </div>

        <div className="text-lg font-medium text-center my-6">
        Magnetic resonance imaging (MRI): considerations and applications in radiotherapy treatment planning
          <Link href="https://www.sciencedirect.com/science/article/abs/pii/S016781409601866X" className="text-blue-500 font-semibold ml-2">
            &gt;
          </Link>
        </div>
        
        <div className="text-lg font-medium text-center my-6">
        Magnetic resonance imaging (MRI) Book
          <Link href="https://books.google.co.id/books?hl=en&lr=&id=9D78CAAAQBAJ&oi=fnd&pg=PR21&dq=MRI+(Magnetic+Resonance+Imaging)&ots=YjyyoDHouy&sig=5Ux2fEOYEBQcF8ZtMUncPKc08iA&redir_esc=y#v=onepage&q=MRI%20(Magnetic%20Resonance%20Imaging)&f=false" className="text-blue-500 font-semibold ml-2">
            &gt;
          </Link>
        </div>

        <div className="text-lg font-medium text-center my-6">
        Pharmacological magnetic resonance imaging: a new application for functional MRI
          <Link href="https://www.cell.com/ajhg/abstract/S0165-6147(00)01507-8" className="text-blue-500 font-semibold ml-2">
            &gt;
          </Link>
        </div>

        <div className="judul-jurnal-1" style={{display: "flex", justifyContent: "center", fontSize: "1.5rem", marginTop: "55px", fontWeight: "bold"}}>
            Computed Tomography (CT-Scan)
        </div>
        <div className="text-lg font-medium text-center my-6">
        Positron Emission Tomography/Computed Tomography
          <Link href="https://www.sciencedirect.com/science/article/abs/pii/S0001299808000226" className="text-blue-500 font-semibold ml-2">
            &gt;
          </Link>
        </div>

        <div className="text-lg font-medium text-center my-6">
        COMPUTED TOMOGRAPHY
          <Link href="https://www.sciencedirect.com/science/article/abs/pii/S0011853222002439" className="text-blue-500 font-semibold ml-2">
            &gt;
          </Link>
        </div>

        <div className="text-lg font-medium text-center my-6">
        Computed tomography: What and how does it measure?
          <Link href="https://www.sciencedirect.com/science/article/abs/pii/S0720048X16300754" className="text-blue-500 font-semibold ml-2">
            &gt;
          </Link>
        </div>

        <div className="text-lg font-medium text-center my-6">
        NCCN Task Force Report: Positron Emission Tomography (PET)/Computed Tomography (CT) Scanning in Cancer
          <Link href="https://jnccn.org/view/journals/jnccn/5/S1/article-pS-1.xml?rskey=c4QjZf&result=3248" className="text-blue-500 font-semibold ml-2">
            &gt;
          </Link>
        </div>

        <div className="text-lg font-medium text-center my-6">
        Computed Tomography (Springer Nature)
          <Link href="https://link.springer.com/chapter/10.1007/978-3-540-74658-4_16" className="text-blue-500 font-semibold ml-2">
            &gt;
          </Link>
        </div>

        <div className="text-lg font-medium text-center my-6">
        X-ray computed tomography
          <Link href="https://iopscience.iop.org/article/10.1088/0031-9155/51/13/R03/meta" className="text-blue-500 font-semibold ml-2">
            &gt;
          </Link>
        </div>

        <div className="text-lg font-medium text-center my-6">
        NCCN Task Force Report: Positron Emission Tomography (PET)/Computed Tomography (CT) Scanning in Cancer
          <Link href="https://jnccn.org/view/journals/jnccn/5/S1/article-pS-1.xml?rskey=c4QjZf&result=3248" className="text-blue-500 font-semibold ml-2">
            &gt;
          </Link>
        </div>



         {/* image */}

        {/* Images Section */}
        <div className="flex flex-col items-center gap-8">
          <div>
            <img
              src="/Magnetic Resonance Imaging-Image.jpeg"
              alt="MRI"
              className="w-full max-w-md rounded-lg shadow-lg"
            />
            <p className="text-center mt-2">Image: Magnetic Resonance Imaging</p>
          </div>

          <div>
            <img
              src="/CT Scan.jpg"
              alt="CT Scan"
              className="w-full max-w-md rounded-lg shadow-lg"
            />
            <p className="text-center mt-2">
              Image: CT-Scan
            </p>
          </div>
          
          <div>
            <img
              src="/usg-scan.jpg"
              alt="USG Scan"
              className="w-full max-w-md rounded-lg shadow-lg"
            />
            <p className="text-center mt-2">
              Image: USG-Scan
            </p>
          </div>

          <div>
            <img
              src="/Thermography.jpg"
              alt="Thermography Scan"
              className="w-full max-w-md rounded-lg shadow-lg"
            />
            <p className="text-center mt-2">
              Image: Thermography
            </p>
          </div>

          <div>
            <img
              src="/Implantable Devices.jpg"
              alt="Implantable Device"
              className="w-full max-w-md rounded-lg shadow-lg"
            />
            <p className="text-center mt-2">
              Image: Implantable Device
            </p>
          </div>

          <div>
            <img
              src="/Oximeter Image.jpg"
              alt="Oximeter Device"
              className="w-full max-w-md rounded-lg shadow-lg"
            />
            <p className="text-center mt-2">
              Image: Oximeter
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
}
