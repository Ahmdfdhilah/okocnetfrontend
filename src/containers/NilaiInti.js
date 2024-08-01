import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../asset/img/Nilai Inti OKOCE.png";
import FloatingMenu from "../components/FloatingMenu";

const NilaiInti = () => {
  const [banners, setBanners] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:3000/all-banners")
      .then(response => {
        const bannersData = response.data.data.find(item => item.nama === 'Nilai Inti');
        setBanners(bannersData ? bannersData.foto : []);
      })
      .catch(error => console.error("Error fetching banners:", error));
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

  return (
    <>
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

      <div className="mt-20 mb-32">
        <div className="container mx-auto px-4 py-8 mt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
            <div className="rounded-lg p-4 size-3/4 border-2 h-auto bg-sky-700 drop-shadow-2xl hover:shadow-red-600 hover:shadow-lg">
              <h3 className="text-xl font-bold text-white mb-4">Kinerja Tinggi</h3>
              <p className="text-white text-lg">Anggota OK OCE Indonesia mampu memiliki kinerja yang maksimal sehingga memiliki pencapaian yang dapat bermanfaat untuk diri sendiri maupun orang lain.</p>
            </div>
            <div className="rounded-lg p-4 size-3/4 border-2 h-auto bg-sky-700 drop-shadow-2xl hover:shadow-red-600 hover:shadow-lg">
              <h3 className="text-xl font-bold text-white mb-4">Mendorong</h3>
              <p className="text-white text-lg">Anggota OK OCE Indonesia mampu menjadi pendorong bagi masyarakat untuk menjadi bagian dari Gerakan Sosial Wirausaha (entrepreneur) Indonesia dengan 4AS dan 7 TOP.</p>
            </div>
            <div className="rounded-lg p-4 size-3/4 border-2 h-auto bg-sky-700 drop-shadow-2xl hover:shadow-red-600 hover:shadow-lg">
              <h3 className="text-xl font-bold text-white mb-4">Mandiri</h3>
              <p className="text-white text-lg">Anggota OK OCE Indonesia mampu bertindak mandiri dan menciptakan solusi sehingga mampu mencapai tujuan yang telah ditetapkan yaitu peningkatan jumlah wirausaha (entrepreneur) baru, penciptaan lapangan kerja, dan menjadi wirausaha naik kelas.</p>
            </div>
            <div className="rounded-lg p-4 size-3/4 border-2 bg-sky-700 drop-shadow-2xl hover:shadow-red-600 hover:shadow-lg mobile:mx-auto mobile:mt-0 mobile:h-auto lg:mt-16 lg:ml-[17rem] lg:h-auto">
              <h3 className="text-xl font-bold text-white mb-4">Peduli</h3>
              <p className="text-white text-lg">Anggota OK OCE mampu memiliki rasa saling peduli dan memiliki empati antar sesama anggota sehingga menciptakan rasa kebersamaan yang meningkatkan kinerja berwirausaha.</p>
            </div>
            <div className="rounded-lg p-4 size-3/4 border-2 bg-sky-700 drop-shadow-2xl hover:shadow-red-600 hover:shadow-lg mobile:mx-auto mobile:mt-0 mobile:h-auto lg:mt-16 lg:ml-[17rem] lg:h-auto">
              <h3 className="text-xl font-bold text-white mb-4">Gotong Royong</h3>
              <p className="text-white text-lg">Anggota OK OCE mampu memiliki rasa kebersamaan dengan semangat bersama kita bisa dalam rangka penciptaan wirausaha baru, penciptaan lapangan kerja, dan peningkatan kinerja dan kualitas wirausaha. </p>
            </div>
          </div>
        </div>
      </div>

      <FloatingMenu />
    </>
  );
}

export default NilaiInti;