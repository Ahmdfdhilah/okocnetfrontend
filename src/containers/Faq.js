import React, { useState } from "react";
import Navbar from "@components/Navbar";
import Youtube from "@components/Youtube";
import FloatingMenu from "@components/FloatingMenu"; // Ensure this import path is correct

const Faq = () => {
  const [accordions, setAccordions] = useState([
    {
      question: "Apa Itu OK OCE Indonesia?",
      answer:
        "OK OCE adalah gerakan penciptaan lapangan kerja, OK OCE, terus memberikan kontribusi positif untuk bangsa. Melalui gerakan kewirausahaan dan ekonomi kerakyatan ini,OK OCE bertujuan untuk bisa menciptakan kemandirian dan lapangan kerja yang banyak untuk rakyat Indonesia.",
      isOpen: false,
    },
    {
      question: "Apa Misi OK OCE Indonesia?",
      answer:
        "Pendiri OK OCE, Sandiaga Uno, mempunyai misi ekonomi yang mengutamakan rakyat, adil, makmur, berkualitas dan berwawasan lingkungan; mendorong penciptaan wirausaha baru melalui gerakan OK OCE dengan membangun pusat kewirausahaan di tingkat Kabupaten untuk memperkuat produk-produk UMKM; serta menciptakan lapangan kerja sebanyak-banyaknya dengan mengutamakan tenaga kerja lokal. ",
      isOpen: false,
    },
    {
      question: "Apa Saja Kurikulum 7 Top OK OCE Indonesia?",
      answer:
        "1. Pendaftaran 2. Pelatihan 3. Pendampingan 4. Perizinan. 5. Pemasaran. 6. Pencatatan Keuangan. 7. Permodalan",
      isOpen: false,
    },
    {
      question: "Apa saja Produk Merek OK OCE?",
      answer:
        "Produk yang sudah menggunakan merek OK OCE antara lain : air mineral dalam kemasan (OK OCE Air Mineral), sabun cuci muka (OK OCE Beauty), OK OCE Xpress, OK OCE Engine Power dan lainnya. Juga ada hampir seratus produk perusahaan swasta yang bergabung dengan OK OCE untuk mendapatkan dukungan penggunaannya di jejaring OK OCE",
      isOpen: false,
    },
  ]);

  const toggleAccordion = (index) => {
    setAccordions((prevAccordions) =>
      prevAccordions.map((accordion, i) => ({
        ...accordion,
        isOpen: index === i ? !accordion.isOpen : accordion.isOpen,
      }))
    );
  };

  return (
    <>
      <Navbar />
      <div className="mt-[5rem] bg-[#FEFAF6] w-full min-h-screen flex flex-col justify-between">
        <div className="container mx-auto mt-[3rem]">
          <h1 className="font-extrabold text-4xl text-center mb-8">
            Apa Saja Yang Sering Ditanyakan?
          </h1>
        </div>

        {/* Accordions section */}
        <div className="container mx-auto max-w-[60rem]">
          {accordions.map((accordion, index) => (
            <div
              className={`accordion-item bg-white rounded-lg mb-4 shadow-md ${accordion.isOpen ? "bg-gray-100" : ""
                }`}
              key={index}
              style={{ marginTop: "1rem" }}>
              <div
                className="accordion-title p-4 flex justify-between items-center cursor-pointer hover:bg-gray-200"
                onClick={() => toggleAccordion(index)}>
                <h3 className="font-bold">{accordion.question}</h3>
                <i
                  className={`fas fa-chevron-down ${accordion.isOpen ? "chevron-top" : ""
                    }`}></i>
              </div>
              {accordion.isOpen && (
                <div className="accordion-content p-4">
                  <p>{accordion.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Video section */}
        <div className="flex flex-col items-center mt-10 mx-auto w-full">
          <h1 className="font-extrabold text-4xl text-center mb-4">
            Video Cara Daftar Akun
          </h1>
          <div className="mb-8 w-11/12 ml-32">
            <Youtube src="https://www.youtube.com/embed/DjF6FKYGYbU?si=Mzale-8dk2aNzbnM" />
          </div>
        </div>
      </div>
      <FloatingMenu />{" "}
      {/* Ensure the FloatingMenu component is included here */}
    </>
  );
};

export default Faq;
