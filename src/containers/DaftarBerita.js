/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import Header from '../asset/img/beritaheader.png';
import { Link } from "react-router-dom";
import FloatingMenu from "../components/FloatingMenu";

const ITEMS_PER_PAGE = 2;

const DaftarBerita = () => {
    const [datas, setData] = useState([]);
    const [banners, setBanners] = useState([]);
    const [currentPage, setCurrentPage] = useState(1); 
    const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

    useEffect(() => {
        fetchData();
        fetchBanners();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:3000/beritas');
            if (!response.ok) {
                throw new Error('Gagal mengambil data berita');
            }
            const data = await response.json();
            setData(data.data);
        } catch (error) {
            console.error('Error fetching news:', error);
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
            const beritaBanners = data.data.find(item => item.nama === 'Berita');
            setBanners(beritaBanners ? beritaBanners.foto : []);
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

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const totalPages = Math.ceil(datas.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentItems = datas.slice(startIndex, endIndex);

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

            {/* News Section */}
            <div className="bg-gray-200">
                <div className="grid mobile:grid-cols-1 mobile:mt-10 lg:w-11/12 lg:mx-auto lg:grid-cols-3 lg:gap-y-8 lg:gap-x-4 lg:mt-24">
                    {currentItems.map((data, index) => (
                        <div key={index} className="w-full mx-auto p-4">
                            <div className="bg-blue-400 shadow-md rounded-lg lg:mr-1">
                                <div className="p-5">
                                    <img className="object-cover w-full mobile:h-36 lg:h-96" src={`http://localhost:3000${data.fotoBerita}`} alt="" />
                                    <div className="relative group mb-2 mt-6 h-20">
                                        <div className="text-base leading-7 text-white font-bold text-xl overflow-hidden line-clamp-2">
                                            {data.judulBerita}
                                        </div>
                                        <div className="absolute left-0 bottom-full mb-2 hidden w-full text-xs text-white bg-black p-2 rounded group-hover:block">
                                            {data.judulBerita}
                                        </div>
                                    </div>
                                    <p className="text-white">Author: {data.authorBerita}</p>
                                    <div className="flex space-x-4 my-4">
                                        <span className="bg-gray-200 text-black text-sm font-semibold mr-2 px-2.5 py-0.5 rounded">
                                            Tanggal Publish: {data.tanggalBerita}
                                        </span>
                                    </div>
                                    <Link to={`/daftarberita/${data.id}`}>
                                        <div className="mt-8 flex justify-start">
                                            <button className="bg-white w-full text-black font-bold p-2 rounded-lg hover:bg-red-500 hover:text-white">Read more</button>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination Controls */}
                <div className="flex justify-center mt-8 py-8 mx-auto rounded-xl mobile:w-3/4 lg:w-1/2">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="mx-1 py-2 border rounded bg-white text-blue-500 mobile:w-full lg:w-8/12 hover:bg-blue-500 hover:text-white"
                    >
                        Sebelumnya
                    </button>
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="mx-1 py-2 border rounded bg-white text-blue-500 mobile:w-full lg:w-8/12 hover:bg-blue-500 hover:text-white"
                    >
                        Selanjutnya
                    </button>
                </div>
            </div>
            <FloatingMenu />{" "}
        </>
    );
};

export default DaftarBerita;
