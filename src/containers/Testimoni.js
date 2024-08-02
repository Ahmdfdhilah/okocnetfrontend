import React, { useState, useEffect } from "react";
import axios from "axios";
import TestiMale from "@img/profilecowo.png";
import FloatingMenu from "../components/FloatingMenu";

const Testimoni = () => {
  const [banners, setBanners] = useState([]);
  const [testi, setTesti] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedTesti, setSelectedTesti] = useState(null);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await axios.get('http://localhost:3000/all-banners');
        if (response.data.data) {
          const testimoniBanners = response.data.data.find(item => item.nama === 'Testimoni');
          setBanners(testimoniBanners ? testimoniBanners.foto : []);
        }
      } catch (error) {
        console.error("Error fetching banners", error);
        setBanners([]);
      }
    };

    const fetchTesti = async () => {
      try {
        const response = await axios.get('http://localhost:3000/reviews');
        console.log(response.data);
        const testimoniData = response.data.data;
        setTesti(testimoniData);
      } catch (error) {
        console.error("Error fetching testimonials", error);
        setTesti([]);
      }
    };

    fetchTesti();
    fetchBanners();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % banners.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [banners]);

  const prevSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + banners.length) % banners.length);
  };

  const nextSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % banners.length);
  };

  const truncateText = (text, limit) => {
    if (text.length <= limit) return text;
    return text.slice(0, limit) + '...';
  };

  const openModal = (testi) => {
    setSelectedTesti(testi);
  };

  const closeModal = () => {
    setSelectedTesti(null);
  };

  return (
    <>
      {/* Banner Carousel */}
      <section className="relative mt-24">
        <div id="carousel-header" className="relative w-full bg-gray-200 mt-24">
          <div className="relative overflow-hidden rounded-lg">
            {banners.length > 0 ? (
              banners.map((banner, index) => (
                <div key={index} className={`duration-700 ease-in-out ${index === currentIndex ? '' : 'hidden'}`}>
                  <img src={`http://localhost:3000${banner}`} className="object-cover block h-full w-full" alt={`Slide ${index + 1}`} />
                </div>
              ))
            ) : (
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <p>Loading slides...</p>
              </div>
            )}
            <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer" onClick={prevSlide}>
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-500 text-white">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                </svg>
                <span className="sr-only">Previous</span>
              </span>
            </button>
            <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer" onClick={nextSlide}>
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-500 text-white">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                </svg>
                <span className="sr-only">Next</span>
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Testimoni section */}
      <section className="bg-gray-100 py-12">
        <div className="container my-10 mx-auto px-4">
          <h2 className="text-4xl font-bold my-14 text-center text-sky-700">Pendapat Mereka Tentang Kami!</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {testi.map((item, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col">
                <div className="flex-1 p-4">
                  <p className="text-gray-700 text-base">
                    {truncateText(item.deskripsi, 100)}
                    {item.deskripsi.length > 100 && (
                      <button
                        className="text-blue-500 ml-1"
                        onClick={() => openModal(item)}
                      >
                        Baca Selengkapnya
                      </button>
                    )}
                  </p>
                </div>
                <div className="flex items-center p-4 bg-gray-200">
                  <img
                    className="h-12 w-12 rounded-full mr-4"
                    src={TestiMale}
                    alt="Testimonial"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">{item.nama}</p>
                    <p className="text-xs text-gray-600">{item.posisi}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* End Testimoni section */}

      {/* Modal */}
      {selectedTesti && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md relative">
            <button
              type="button"
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              onClick={closeModal}
            >
              <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1l12 12M1 13L13 1" />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <h3 className="text-xl font-semibold mb-4">{selectedTesti.nama}</h3>
            <p className="text-gray-700 text-base">{selectedTesti.deskripsi}</p>
            <p className="mt-2 text-xs text-gray-600">{selectedTesti.posisi}</p>
          </div>
        </div>
      )}

      <FloatingMenu />
    </>
  );
};

export default Testimoni;
