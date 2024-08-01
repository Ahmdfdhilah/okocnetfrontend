import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "@img/headermentor.png";
import FloatingMenu from "../components/FloatingMenu";

const Mentor = () => {
  const [syaratMasterMentors, setSyaratMasterMentors] = useState([]);
  const [benefitMasterMentors, setBenefitMasterMentors] = useState([]);
  const [banners, setBanners] = useState([]);
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  useEffect(() => {
    const fetchSyaratMasterMentors = async () => {
      try {
        const response = await axios.get('http://localhost:3000/syarat-master-mentors');
        setSyaratMasterMentors(response.data.data);
      } catch (error) {
        console.error("Error fetching syarat master mentors", error);
      }
    };

    const fetchBenefitMasterMentors = async () => {
      try {
        const response = await axios.get('http://localhost:3000/benefit-master-mentors');
        setBenefitMasterMentors(response.data.data);
      } catch (error) {
        console.error("Error fetching benefit master mentors", error);
      }
    };

    const fetchBanners = async () => {
      try {
        const response = await axios.get('http://localhost:3000/all-banners');
        const bannersData = response.data.data.find(item => item.nama === 'Mentor');
        setBanners(bannersData ? bannersData.foto : []);
      } catch (error) {
        console.error("Error fetching banners:", error);
        setBanners([]);
      }
    };

    fetchSyaratMasterMentors();
    fetchBenefitMasterMentors();
    fetchBanners();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBannerIndex(prevIndex => (prevIndex + 1) % banners.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [banners]);

  const splitBenefitsIntoRows = (benefits) => {
    const rows = [];
    let currentIndex = 0;

    while (currentIndex < benefits.length) {
      const itemsInRow = rows.length % 2 === 0 ? 2 : 3; 
      rows.push(benefits.slice(currentIndex, currentIndex + itemsInRow));
      currentIndex += itemsInRow;
    }

    return rows;
  };

  const rows = splitBenefitsIntoRows(benefitMasterMentors);

  return (
    <>
      {/* Banner Carousel */}
      <div id="carousel-header" className="relative w-full bg-gray-200 mt-24">
        <div className="relative overflow-hidden rounded-lg">
          {banners.length > 0 ? (
            banners.map((banner, index) => (
              <div key={index} className={`duration-700 ease-in-out ${index === currentBannerIndex ? '' : 'hidden'}`}>
                <img src={`http://localhost:3000${banner}`} className="object-cover block w-full h-full" alt={`Banner ${index + 1}`} />
              </div>
            ))
          ) : (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <p>Loading slides...</p>
            </div>
          )}
          <button
            type="button"
            className="absolute top-1/2 left-3 z-30 flex items-center justify-center w-10 h-10 bg-gray-200/50 rounded-full hover:bg-gray-300 focus:outline-none transition"
            onClick={() => setCurrentBannerIndex(prevIndex => (prevIndex - 1 + banners.length) % banners.length)}
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
            <span className="sr-only">Previous</span>
          </button>
          <button
            type="button"
            className="absolute top-1/2 right-3 z-30 flex items-center justify-center w-10 h-10 bg-gray-200/50 rounded-full hover:bg-gray-300 focus:outline-none transition"
            onClick={() => setCurrentBannerIndex(prevIndex => (prevIndex + 1) % banners.length)}
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
            <span className="sr-only">Next</span>
          </button>
        </div>
      </div>

  
      <div className="flex flex-col px-16 py-20 ml-10 mr-10 text-black max-md:px-5">
        <div className="mt-6 text-4xl font-bold leading-10 max-md:text-3xl">
          Kenapa harus menjadi mentor?
        </div>
        <div className="mt-7 text-lg leading-7 text-justify max-md:text-base">
          Sebagai mentor UMKM di OK OCE Indonesia, Anda memiliki kesempatan
          untuk memberikan dampak nyata pada pertumbuhan ekonomi lokal. Dengan
          bimbingan Anda, para pelaku usaha mikro, kecil, dan menengah dapat
          mengembangkan bisnis usaha lokal, menciptakan lapangan kerja baru, dan
          meningkatkan kesejahteraan masyarakat.
        </div>
      </div>

      <div className="flex flex-col ml-2 mr-3 justify-center py-5">
        <div className="flex overflow-hidden relative flex-col items-center py-20 w-full min-h-[676px] max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3da77ff60b7fc35da6d8954ff6f29b7f0874c0d36b07015025a643ae9840267a?apiKey=368f14f68b784f44a55270c24c2b3538&"
            className="object-cover absolute inset-0 w-full h-full"
            alt="Banner"
          />
          <div className="flex relative flex-col self-stretch px-6 w-full max-md:px-5 max-md:max-w-full">
            <div className="text-4xl font-bold leading-10 text-white max-md:text-3xl max-md:max-w-full ml-12 max-md:ml-3">
              Syarat menjadi Mentor
            </div>
          </div>
          <div className="relative px-5 mt-10 w-full max-w-[1314px] max-md:max-w-full">
            <div className="flex gap-8 max-md:flex-col max-md:gap-0">
              {syaratMasterMentors.map((syarat, index) => (
                <div key={syarat.id} className="flex flex-col items-center w-[33%] max-md:w-full max-md:items-start">
                  <div className="relative text-lg leading-7 text-justify text-white mt-5 max-md:mt-10">
                    <img
                      loading="lazy"
                      src={`http://localhost:3000${syarat.img}`}
                      className="shrink-0 aspect-square w-[50px] mb-2"
                      alt={`Icon ${index + 1}`}
                    />
                    {syarat.deskripsi}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative flex justify-center items-center px-16 py-4 mt-20 max-w-full text-xl font-semibold leading-6 text-center text-white bg-red-600 rounded-full w-[441px] max-md:px-5 max-md:mt-10">
            MULAI BEKERJASAMA
          </div>
        </div>
      </div>
   
      <div className="flex flex-col ml-3 mr-3 mb-10 px-11 pt-2.5 pb-4 max-md:px-5">
        <div className="text-5xl font-bold text-black leading-[57.6px] max-md:max-w-full max-md:text-4xl">
          Benefit Menjadi Mentor
        </div>
        <div className="mt-8 text-lg leading-4 text-neutral-700 max-md:max-w-full">
          Menjadi trainer memberikan kesempatan untuk berbagi pengetahuan,
          memperluas jaringan profesional, dan merasa puas melihat perkembangan
          peserta.
        </div>
        <div className="mt-16 max-md:mt-10 max-md:max-w-full">
          {rows.length > 0 && (
            <div className="flex flex-col gap-10 max-md:gap-5">
              {rows.map((row, rowIndex) => (
                <div
                  key={rowIndex}
                  className={`grid ${rowIndex % 2 === 0 ? 'grid-cols-2 gap-5' : 'grid-cols-3 gap-5'} max-md:gap-4`}
                >
                  {row.map(benefit => (
                    <div key={benefit.id} className="flex flex-col w-full">
                      <div className={`flex flex-col grow px-10 py-6 text-black bg-white rounded-3xl border border-indigo-800 border-solid shadow-sm max-md:px-5`}>
                        <img src={`http://localhost:3000${benefit.img}`} className="aspect-square w-[50px]" alt={`Benefit ${benefit.judul}`} />
                        <div className="mt-4 text-2xl font-bold leading-8 max-md:max-w-full">
                          {benefit.judul}
                        </div>
                        <div className="mt-4 text-base leading-6 text-justify max-md:max-w-full">
                          {benefit.deskripsi}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <FloatingMenu />
    </>
  );
};

export default Mentor;