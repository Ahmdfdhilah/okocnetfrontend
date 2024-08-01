import React, { useState, useEffect } from "react";
import Youtube from "@components/Youtube";
import FloatingMenu from "../components/FloatingMenu";

const LokalBrand = () => {
    const [datas, setData] = useState([]);
    const [banners, setBanners] = useState([]);
    const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

    useEffect(() => {
        fetchData();
        fetchBanners();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch("http://localhost:3000/brand-lokals");
            if (!response.ok) {
                throw new Error("Gagal mengambil data brand");
            }
            const data = await response.json();
            setData(data.data);
        } catch (error) {
            console.error("Error fetching brand:", error);
            setData([]);
        }
    };

    const fetchBanners = async () => {
        try {
            const response = await fetch("http://localhost:3000/all-banners");
            if (!response.ok) {
                throw new Error("Gagal mengambil data banners");
            }
            const data = await response.json();
            const brandBanners = data.data.find(item => item.nama === 'Brand Lokal');
            setBanners(brandBanners ? brandBanners.foto : []);
        } catch (error) {
            console.error("Error fetching banners:", error);
            setBanners([]);
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBannerIndex(prevIndex => (prevIndex + 1) % banners.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [banners]);

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


            <div className="flex max-w-6xl mx-auto justify-center m-12">
                <Youtube src="https://okoce.net/wp-content/uploads/2023/10/6.-HIGHRES-VIDEO-UCAPAN-BRAND-LOKAL-OK.mp4" />
            </div>

            <div className="mt-[6rem] bg-gray-300 w-full h-[22rem] grid justify-center content-center mobile:px-5">
                <h1 className="font-extrabold text-center mobile:text-2xl lg:text-4xl">SELAMAT ATAS TERPILIHNYA 24 PRODUK UMKM<br />DARI 24 PENGGERAK YANG MENDAFTAR!</h1>
            </div>

            <div className="mt-[3rem] mb-[3rem] flex items-center justify-center">
                <div className="container w-4/5 mx-auto p-4">
                    <div className="grid mobile:grid-cols-1 lg:grid-cols-2 gap-8">
                        {datas.map((data, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <img src={`http://localhost:3000${data.fotoBrand}`} alt="Brand" className="rounded-md object-cover mx-auto border lg:w-4/5 lg:h-96" />
                                <div className="px-1 py-4 text-center">
                                    <div className="font-bold text-xl mb-2">{data.judulBrand}</div>
                                    <p className="text-gray-700 text-base">
                                        {data.deskripsiBrand}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <FloatingMenu />{" "}
        </>
    );
};

export default LokalBrand;
