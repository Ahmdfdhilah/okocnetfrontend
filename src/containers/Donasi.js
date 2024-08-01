/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import FloatingMenu from "../components/FloatingMenu";

const Donasi = () => {
    const [datas, setData] = useState([]);
    const [banners, setBanners] = useState([]);
    const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

    useEffect(() => {
        fetchData();
        fetchBanners();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch("http://localhost:3000/donasis");
            if (!response.ok) {
                throw new Error("Gagal mengambil data donasi");
            }
            const data = await response.json();
            setData(data.data);
        } catch (error) {
            console.error("Error fetching donasi:", error);
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
            const donasiBanners = data.data.find(item => item.nama === 'Donasi');
            setBanners(donasiBanners ? donasiBanners.foto : []);
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
            <div className="w-full grid justify-items-center items-center">
                <div className="w-full my-36 max-w-6xl rounded-lg p-6 text-surface shadow-lg">
                    <h2 className="mb-5 text-4xl font-extrabold text-center pt-10">Qris Donasi OK OCE INDONESIA</h2>
                    <p className="text-center text-xl px-12">
                        OK OCE adalah Gerakan Sosial Penciptaan Lapangan Kerja Berbasis Wirausaha. Kami membuka <br />bagi siapapun yang memiliki kesamaan visi, nilai dan perjuangan untuk mendukung gerakan ini dengan berdonasi melalui : <br /><br />
                        <span className="font-bold text-2xl">Bank Syariah Indonesia (ex-BSM) </span> <br />
                        an. OK OCE INDONESIA No. Rekening 7148254367 <br /><br />
                        Scan QRIS melalui Aplikasi Payment dan Mobile Banking Melalui :
                    </p>
                    <div className="flex flex-col px-5">
                        {datas.map((data, index) => (
                            <div key={index} className="mt-36 w-full max-md:mt-10 max-md:max-w-full" >
                                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                                    <div className="flex flex-col w-[46%] max-md:ml-0 max-md:w-full">
                                        <img
                                            loading="lazy"
                                            srcSet={`http://localhost:3000${data.fotoDonasi}`}
                                            className="grow w-full shadow-sm aspect-[0.68] max-md:max-w-full max-h-lvh"
                                        />
                                    </div>
                                    <div className="flex flex-col ml-5 w-[64%] max-md:ml-0 max-md:w-full">
                                        <div className="flex flex-col grow px-12 py-8 w-full text-black bg-gray-50 rounded-none shadow-sm max-md:px-5 max-md:max-w-full">
                                            <div className="text-4xl font-semibold leading-[60px] max-md:max-w-full max-md:text-4xl">
                                                {data.judulDonasi}
                                            </div>
                                            <div className="mt-3 text-xl leading-[30px] text-justify max-md:max-w-full">
                                                {data.deskripsiDonasi}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div >
            <FloatingMenu /> 
        </>
    )
}

export default Donasi;
