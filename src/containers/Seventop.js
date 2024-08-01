import React, { useState, useEffect } from "react";
import axios from "axios";
import Seven2 from "@img/7-TOP-OK-OCE-1-768x768.webp";
import FloatingMenu from "../components/FloatingMenu";

const cardClasses =
  "mb-10 mx-auto flex items-center bg-zinc-100 rounded-lg shadow-lg mobile:flex-col mobile:w-full lg:w-[35rem] lg:h-[15rem]";
const titleClasses =
  "bg-blue-700 p-4 flex items-center justify-center text-center text-2xl text-white drop-shadow-lg font-bold rounded-lg mobile:w-full mobile:h-28 lg:w-full lg:h-20";
const titleClasses2 =
  "bg-red-700 p-4 flex items-center justify-center text-center text-2xl text-white drop-shadow-lg font-bold rounded-lg mobile:w-full mobile:h-28 lg:w-full lg:h-20";
const contentClasses =
  "text-base p-6 flex flex-col items-center justify-center text-center text-zinc-800 lg:max-w-[500px]";

const Seventop = () => {
  const [banners, setBanners] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await axios.get("http://localhost:3000/all-banners");
        const bannersData = response.data.data.find(item => item.nama === '7 Top');
        setBanners(bannersData ? bannersData.foto : []);
      } catch (error) {
        console.error('Error fetching banners:', error);
      }
    };

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

  return (
    <>
      {/* Banner Carousel */}
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
      <div className="max-w-5xl mx-auto mt-20 px-6">
        <div className="flex justify-around mb-20">
          <div>
            <img
              src={Seven2}
              className="object-cover lg:max-w-[24rem] mobile:max-w-72"
              alt="7 Top Ok Oce"
            />
          </div>
        </div>
        <div className={cardClasses}>
          <div className={titleClasses}>Pendaftaran</div>
          <div className={contentClasses}>
            Peserta wajib mendaftar di website OKOCE.NET, serta memilih
            komunitas wirausaha yang akan membina. <br /> <br />
            <a href="https://ecsys.okoce.net/" className="text-blue-500 font-medium">
              Pelajari Selengkapnya &gt;
            </a>
          </div>
        </div>
        <div className={cardClasses}>
          <div className={titleClasses2}>Pelatihan</div>
          <div className={contentClasses}>
            Peserta akan dilatih berdasarkan kurikulum OK OCE dan akan
            digabungkan ke kelompok inkubasi melalui komunitas penggerak. <br />
            <br />
            <a href="/pelatihan" className="text-blue-500 font-medium">
              Pelajari Selengkapnya &gt;
            </a>
          </div>
        </div>
        <div className={cardClasses}>
          <div className={titleClasses}>Pendampingan</div>
          <div className={contentClasses}>
            Peserta akan didampingi oleh pendamping UMKM dan mengikuti Program
            Mentoring. <br />
            <br />
            <a href="/pendampingan" className="text-blue-500 font-medium">
              Pelajari Selengkapnya &gt;
            </a>
          </div>
        </div>
        <div className={cardClasses}>
          <div className={titleClasses2}>Perizinan</div>
          <div className={contentClasses}>
            Peserta akan dijelaskan proses perizinan sesuai kebutuhannya. <br />
            <br />
            <a href="/perizinan" className="text-blue-500 font-medium">
              Pelajari Selengkapnya &gt;
            </a>
          </div>
        </div>
        <div className={cardClasses}>
          <div className={titleClasses}>Pemasaran</div>
          <div className={contentClasses}>
            Peserta akan mengikuti proses kurasi dan akan diberikan akses
            pemasaran dan penjualan yang lebih luas, baik online maupun offline.{" "}
            <br />
            <br />
            <a href="/pemasaran" className="text-blue-500 font-medium">
              Pelajari Selengkapnya &gt;
            </a>
          </div>
        </div>
        <div className={cardClasses}>
          <div className={titleClasses2}>Pelaporan Keuangan</div>
          <div className={contentClasses}>
            Peserta akan diajarkan dan didampingi cara membuat laporan keuangan
            untuk menghitung untung rugi. <br /> <br />
            <a href="/pelaporankeuangan" className="text-blue-500 font-medium">
              Pelajari Selengkapnya &gt;
            </a>
          </div>
        </div>
        <div className={cardClasses}>
          <div className={titleClasses}>Permodalan</div>
          <div className={contentClasses}>
            Peserta akan didampingi untuk mendapatkan akses permodalan sesuai
            dengan kebutuhan usahanya.
            <br /> <br />
            <a href="/permodalan" className="text-blue-500 font-medium">
              Pelajari Selengkapnya &gt;
            </a>
          </div>
        </div>
      </div>
      <FloatingMenu />
    </>
  );
};

export default Seventop;
