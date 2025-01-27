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
        Teknologi Kedokteran
      </div>

      {/* Content 1 */}
      <div className="px-6 md:px-16 lg:px-24">
        <div className="text-base md:text-lg font-light leading-relaxed">
          Apa itu <span className="text-blue-500 font-semibold">Kesehatan</span> menurut beberapa sumber seperti wikipedia, dan artikel lainnya.
          Kesehatan itu adalah kondisi kesejahteraan secara fisik, mental, sosial dan lainnya.
          Maka teknologi kedokteran itu sudah berkembang dalam seiringnya waktu. Dan juga perkembangan teknologi kedokteran sudah canggih banget, menggunakan teknologi tinggi.
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








        <div className="judul-jurnal-1" style={{display: "flex", justifyContent: "center", fontSize: "1.5rem", marginTop: "55px", fontWeight: "bold"}}>
            USG
        </div>
        <div className="text-lg font-medium text-center my-6">
        A Systematic Review and Meta-Analysis of 29 Studies Predicting Diagnostic Accuracy of CT, MRI, PET, and USG in Detecting Extracapsular Spread in Head and Neck Cancers
          <Link href="https://www.mdpi.com/2072-6694/16/8/1457" className="text-blue-500 font-semibold ml-2">
            &gt;
          </Link>
        </div>

        <div className="text-lg font-medium text-center my-6">
        Accuracy of low dose CT in the diagnosis of appendicitis in childhood and comparison with USG and standard dose CT
          <Link href="https://www.scielo.br/j/jped/a/DwdKTmCq68rKNRrXzNhh9yL/?format=html&lang=en" className="text-blue-500 font-semibold ml-2">
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
        Comparison methods of edge detection for USG images
          <Link href="https://ieeexplore.ieee.org/abstract/document/7892416" className="text-blue-500 font-semibold ml-2">
            &gt;
          </Link>
        </div>







        <div className="judul-jurnal-1" style={{display: "flex", justifyContent: "center", fontSize: "1.5rem", marginTop: "55px", fontWeight: "bold"}}>
            Thermography
        </div>
        <div className="text-lg font-medium text-center my-6">
        Diagnostic Thermography
          <Link href="https://www.mdpi.com/2072-6694/16/8/1457" className="text-blue-500 font-semibold ml-2">
            &gt;
          </Link>
        </div>

        <div className="text-lg font-medium text-center my-6">
        Medical applications of infrared thermography: A review
          <Link href="https://www.sciencedirect.com/science/article/pii/S1350449512000308" className="text-blue-500 font-semibold ml-2">
            &gt;
          </Link>
        </div>

        <div className="text-lg font-medium text-center my-6">
        Infrared thermography for building diagnostics
          <Link href="https://www.sciencedirect.com/science/article/abs/pii/S0378778801001050" className="text-blue-500 font-semibold ml-2">
            &gt;
          </Link>
        </div>

        <div className="text-lg font-medium text-center my-6">
        Recent advances in the use of infrared thermography
          <Link href="https://iopscience.iop.org/article/10.1088/0957-0233/15/9/R01/meta" className="text-blue-500 font-semibold ml-2">
            &gt;
          </Link>
        </div>







        <div className="judul-jurnal-1" style={{display: "flex", justifyContent: "center", fontSize: "1.5rem", marginTop: "55px", fontWeight: "bold"}}>
        PCR (Polymerase Chain Reaction)
        </div>
        <div className="text-lg font-medium text-center my-6">
        Polymerase Chain Reaction (PCR): A Short Review
          <Link href="https://citeseerx.ist.psu.edu/document?repid=rep1&type=pdf&doi=b9409d22983e4ae5fd496ab642098f3e7ab955cb" className="text-blue-500 font-semibold ml-2">
            &gt;
          </Link>
        </div>

        <div className="text-lg font-medium text-center my-6">
        The real-time polymerase chain reaction
          <Link href="https://www.sciencedirect.com/science/article/abs/pii/S0098299705000907" className="text-blue-500 font-semibold ml-2">
            &gt;
          </Link>
        </div>

        <div className="text-lg font-medium text-center my-6">
        The Polymerase Chain Reaction - Kary B. Mullis - Google Books
          <Link href="https://books.google.co.id/books?hl=en&lr=&id=woNO4w5HweQC&oi=fnd&pg=PR9&dq=PCR+(Polymerase+Chain+Reaction)&ots=fXojMkiqNv&sig=CBMTGe9XQYCqZQonsEEnQ0wMVIY&redir_esc=y#v=onepage&q=PCR%20(Polymerase%20Chain%20Reaction)&f=false" className="text-blue-500 font-semibold ml-2">
            &gt;
          </Link>
        </div>

        <div className="text-lg font-medium text-center my-6">
        A Short History of the Polymerase Chain Reaction
          <Link href="https://link.springer.com/protocol/10.1385/1-59259-384-4:3" className="text-blue-500 font-semibold ml-2">
            &gt;
          </Link>
        </div>






        <div className="judul-jurnal-1" style={{display: "flex", justifyContent: "center", fontSize: "1.5rem", marginTop: "55px", fontWeight: "bold"}}>
        NGS (Next Generation Reaction)
        </div>
        <div className="text-lg font-medium text-center my-6">
        Next generation sequencing technology: Advances and applications
          <Link href="https://www.sciencedirect.com/science/article/pii/S092544391400180X" className="text-blue-500 font-semibold ml-2">
            &gt;
          </Link>
        </div>

        <div className="text-lg font-medium text-center my-6">
        Next-Generation Sequencing Platforms
          <Link href="https://www.annualreviews.org/content/journals/10.1146/annurev-anchem-062012-092628" className="text-blue-500 font-semibold ml-2">
            &gt;
          </Link>
        </div>

        <div className="text-lg font-medium text-center my-6">
        Next-Generation Sequencing and Emerging Technologies
          <Link href="https://www.thieme-connect.com/products/ejournals/abstract/10.1055/s-0044-1786397" className="text-blue-500 font-semibold ml-2">
            &gt;
          </Link>
        </div>

        <div className="text-lg font-medium text-center my-6">
        Landscape of Next-Generation Sequencing Technologies
          <Link href="https://pubs.acs.org/doi/full/10.1021/ac2010857" className="text-blue-500 font-semibold ml-2">
            &gt;
          </Link>
        </div>







        <div className="judul-jurnal-1" style={{display: "flex", justifyContent: "center", fontSize: "1.5rem", marginTop: "55px", fontWeight: "bold"}}>
        CRISPR/Cas9
        </div>
        <div className="text-lg font-medium text-center my-6">
        What is CRISPR/Cas9?
          <Link href="https://ep.bmj.com/content/101/4/213.short" className="text-blue-500 font-semibold ml-2">
            &gt;
          </Link>
        </div>

        <div className="text-lg font-medium text-center my-6">
        The new frontier of genome engineering with CRISPR-Cas9
          <Link href="https://www.science.org/doi/abs/10.1126/science.1258096" className="text-blue-500 font-semibold ml-2">
            &gt;
          </Link>
        </div>

        <div className="text-lg font-medium text-center my-6">
        Development and Applications of CRISPR-Cas9 for Genome Engineering
          <Link href="https://www.cell.com/cell/fulltext/S0092-8674(14)00604-7?featurecode=newtitle%25E9%25A9%25AC%25E5%25A4%25A9&luicode=10000011&lfid=1076033218865071&u=http://www.cell.com%2Fcell%2Fabstract%2FS0092-8674%2814%2900604-7" className="text-blue-500 font-semibold ml-2">
            &gt;
          </Link>
        </div>

        <div className="text-lg font-medium text-center my-6">
        Genome engineering using the CRISPR-Cas9 system
          <Link href="https://www.nature.com/articles/nprot.2013.143" className="text-blue-500 font-semibold ml-2">
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
