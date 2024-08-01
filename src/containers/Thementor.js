import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "@img/headerthementor.png";
import FloatingMenu from "../components/FloatingMenu";

const Thementor = () => {
  const [thementorData, setThementorData] = useState(null);
  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  useEffect(() => {
    const fetchThementorData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/thementors');
        const data = response.data.data[0];
        setThementorData(data);
      } catch (error) {
        setError('Error fetching data');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    const fetchBanners = async () => {
      try {
        const response = await axios.get('http://localhost:3000/all-banners');
        if (response.data.data) {
          const theMentorBanners = response.data.data.find(item => item.nama === 'The Mentor');
          setBanners(theMentorBanners ? theMentorBanners.foto : []);
        }
      } catch (error) {
        console.error("Error fetching banners:", error);
        setBanners([]);
      }
    };

    fetchThementorData();
    fetchBanners();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBannerIndex(prevIndex => (prevIndex + 1) % banners.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [banners]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!thementorData) return <div>No data available</div>;

  return (
    <>
      {/* Banner Carousel */}
      <div className="relative w-full bg-white mt-24">
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

      <div className="px-7 pt-6 pb-4 my-5 text-lg leading-7 mr-2 ml-2 text-center text-black max-md:px-5 max-md:max-w-full lg:w-full">
        <div className="grid mobile:grid-flow-row mobile:grid-cols-1 lg:grid-flow-col lg:mt-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="w-10/12 mx-auto">
              <h1 className="font-bold mobile:text-xl lg:text-3xl">{thementorData.judul}</h1>
              {thementorData.deskripsi?.map((item, index) => (
                <p key={index} className="mt-10 text-justify text-lg mobile:mb-14">{item.str}</p>
              ))}
            </div>
          </div>

          <div className="bg-gray-300 rounded-2xl py-16 lg:col-span-4">
            <div className="">
              <h1 className="text-2xl font-bold text-center">Dokumentasi Kegiatan</h1>
            </div>
            {thementorData.dokumentasi?.map((doc, index) => (
              <div key={index} className="max-w-md mx-auto mt-10 mobile:px-4">
                <img
                  loading="lazy"
                  src={`http://localhost:3000${doc}`}
                  className="object-cover w-full max-h-48 rounded-xl"
                  alt={`dokumentasi-${index}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <FloatingMenu />
    </>
  );
};

export default Thementor;
