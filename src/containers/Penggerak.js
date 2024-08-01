import React, { useState, useEffect } from "react";
import axios from "axios";
import FloatingMenu from "../components/FloatingMenu";

const Penggerak = () => {
    const [penggerak, setPenggerak] = useState([]);
    const [banners, setBanners] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        fetchPenggerak();
        fetchBanners();
    }, []);

    const fetchPenggerak = async () => {
        try {
            const response = await fetch('http://localhost:3000/penggerak-okoces');
            if (!response.ok) {
                throw new Error('Gagal mengambil data penggerak');
            }
            const data = await response.json();
            setPenggerak(data.data);
        } catch (error) {
            console.error('Error fetching penggerak:', error);
            setPenggerak([]);
        }
    };

    const fetchBanners = async () => {
        try {
            const response = await axios.get("http://localhost:3000/all-banners");
            const bannersData = response.data.data.find(item => item.nama === 'Penggerak');
            setBanners(bannersData ? bannersData.foto : []);
        } catch (error) {
            console.error('Error fetching banners:', error);
        }
    };

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

            <div className="bg-gray-300 w-10/12 mx-auto rounded-xl grid content-center mobile:h-full mobile:mt-20 mobile:p-10 lg:mt-[3rem] lg:justify-center lg:h-[22rem]">
                <h1 className="font-extrabold text-4xl text-center">Penggerak <br /> OK OCE Indonesia</h1>
                <p className="text-center mt-6 font-medium">Penggerak OK OCE sebagai layer kedua dalam bangunan gerakan sosial penciptaan lapangan kerja <br /> berbasis wirausaha tersebar diberbagai daerah di seluruh Indonesia.</p>
                <p className="text-center mt-2 font-medium">Anda dapat bergabung dengan penggerak-penggerak OK OCE di Lokasi terdekat tempat tinggal anda.</p>
                <a href="https://ecsys.okoce.net/" className="mx-auto">
                    <button type="button" className="w-[10rem] mt-6 mx-auto text-white text-base bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Penggerak  &#10132; </button>
                </a>
            </div>

            <div className="mt-[3rem] mb-[3rem] flex items-center justify-center">
                <div className="container w-4/5 mx-auto p-4">
                    <div className="grid mobile:grid-cols-1 mobile:gap-6 sm:grid-cols-2 md:grid-cols-3 lg:gap-8 lg:grid-cols-3">
                        {penggerak.map((item) => (
                            <div key={item.id} className="bg-white rounded-lg border drop-shadow-xl p-4">
                                <img className="min-h-60 max-h-60 min-w-40 mx-auto" src={`http://localhost:3000${item.fotoPenggerak}`} alt={item.namaPenggerak} />
                                <div className="px-1 py-4">
                                    <div className="font-bold text-xl mb-2">{item.namaPenggerak}</div>
                                    <p className="text-gray-700 text-base">
                                        {item.deskripsiPenggerak}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <FloatingMenu />
        </>
    );
}

export default Penggerak;