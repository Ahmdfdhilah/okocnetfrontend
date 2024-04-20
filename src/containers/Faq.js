import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Youtube from "../components/Youtube";

const Faq = () => {
  const [accordions, setAccordions] = useState([
    {
      question: "Apa Itu OKOCE Indonesia?",
      answer:
        "OK OCE adalah gerakan penciptaan lapangan kerja, OK OCE, terus memberikan kontribusi positif untuk bangsa. Melalui gerakan kewirausahaan dan ekonomi kerakyatan ini,OK OCE bertujuan untuk bisa menciptakan kemandirian dan lapangan kerja yang banyak untuk rakyat Indonesia.",
      isOpen: false,
    },
    {
      question: "What is Windows VPS?",
      answer:
        "With a Windows VPS server, you will get a Remote Desktop connection within a few minutes. You can run Windows applications such as IIS, SQL, Microsoft Exchange or any software like Docking",
      isOpen: false,
    },
    {
      question: "Payment Options",
      answer:
        "Unlike most other providers you don’t have to pay with just Credit Card or PayPal. You can also",
      isOpen: false,
    },
    {
      question: "Why FutureRDP?",
      answer:
        "Germany, Netherlands, and Canada. We have a range of different solutions for different purposes such as SSD VPS and Storage servers. All servers are equipped with RAID10 only SSD drives and FREE DDoS Protection!",
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
              className={`accordion-item bg-white rounded-lg mb-4 shadow-md ${
                accordion.isOpen ? "bg-gray-100" : ""
              }`}
              key={index}
              style={{ marginTop: "1rem" }}>
              <div
                className="accordion-title p-4 flex justify-between items-center cursor-pointer hover:bg-gray-200"
                onClick={() => toggleAccordion(index)}>
                <h3 className="font-bold">{accordion.question}</h3>
                <i
                  className={`fas fa-chevron-down ${
                    accordion.isOpen ? "chevron-top" : ""
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
        <div className="flex flex-col items-center m-12">
          <h1 className="font-extrabold text-4xl text-center mb-4">
            Video Cara Daftar Akun
          </h1>
          <div style={{ maxWidth: "800px" }} className="mb-8">
            <Youtube src="https://www.youtube.com/embed/avA0_NJK5mU" />
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Faq;
