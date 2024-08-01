/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from "react";
import FloatingMenu from "../components/FloatingMenu";
import Modalberkah1 from "@img/modalberkah/modalberkah.png";

const Modalberkah = () => {
    const [banners, setBanners] = useState([]);
    const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

    useEffect(() => {
        fetchBanners();
    }, []);

    const fetchBanners = async () => {
        try {
            const response = await fetch("http://localhost:3000/all-banners");
            if (!response.ok) {
                throw new Error("Gagal mengambil data banners");
            }
            const data = await response.json();
            const modalBerkahBanners = data.data.find(item => item.nama === 'Modal Berkah');
            setBanners(modalBerkahBanners ? modalBerkahBanners.foto : []);
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
            <div id="carousel-header" className="relative w-full bg-gray-400 mt-24">
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

            {/* Main Content */}
            <div className="py-24 bg-white w-full grid gap-6 items-center justify-center mobile:grid-cols-1 mobile:mt-10 lg:grid-cols-2 lg:mt-[6rem]">
                <div className="mx-auto flex flex-col justify-center justify-items-center items-center w-3/4 p-4 h-full">
                    <div className="mobile:mr-2">
                        <img src={Modalberkah1} alt="Modal Berkah Image" className="rounded-md mx-auto mb-6 object-cover mobile:w-full lg:w-4/6" />
                    </div>
                    <a href="https://modalberkah.com/" className="text-white bg-red-600 rounded-xl font-bold hover:bg-red-800 mobile:py-2 mobile:w-full mobile:mobile:px-10 lg:w-80 lg:py-0 lg:px-0">
                        <div className="mobile:text-center mobile:w-full mobile:text-sm lg:py-3 lg:text-xl lg:w-80">
                            Pelajari Selengkapnya
                        </div>
                    </a>
                </div>

                <div className="rounded-md object-fill flex flex-col justify-center items-start mobile:w-full mobile:px-9 lg:h-48 lg:w-4/5">
                    <h1 className="font-extrabold text-4xl mb-6 mobile:text-xl mobile:text-center lg:text-left text-left">MODAL BERKAH</h1>
                    <p className="text-justify">Melalui program ‘Modal Berkah’ diharapkan bisa membantu perkembangan wirxausaha dan UMKM sekitar Masjid karena bersifat tanpa riba dan tanpa embel-embel bagi hasil untuk ketiga belah pihak (OK OCE, Masjid dan UMKM) Merupakan program keumatan berbasis lembaga atau masjid yang bertujuan untuk menghimpun dan menyalurkan infaq dalam bentuk pinjaman dana kepada pelaku UMKM tanpa adanya riba</p>
                </div>
            </div>
            <FloatingMenu />
        </>
    );
}

export default Modalberkah;
