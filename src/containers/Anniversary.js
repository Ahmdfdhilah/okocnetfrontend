import React, { useState, useEffect } from "react";
import axios from "axios";
import FloatingMenu from "../components/FloatingMenu";

const convertToEmbedUrl = (watchUrl) => {
    const videoId = watchUrl.split('v=')[1];
    if (videoId) {
        return `https://www.youtube.com/embed/${videoId}`;
    }
    return '';
};

const Anniversary = () => {
    const [timelineData, setTimelineData] = useState([]);
    const [selectedYear, setSelectedYear] = useState(null);
    const [banners, setBanners] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const fetchAnniversaries = async () => {
            try {
                const response = await axios.get('http://localhost:3000/anniversaries?sort=year&&order=DESC');
                const data = response.data.data; 
                const updatedData = data.map(item => ({
                    ...item,
                    video: convertToEmbedUrl(item.videoLink)
                }));
                setTimelineData(updatedData);
            } catch (error) {
                console.error("Error fetching anniversaries data", error);
            }
        };

        const fetchBanners = async () => {
            try {
                const response = await axios.get("http://localhost:3000/all-banners");
                const bannersData = response.data.data.find(item => item.nama === 'Anniversary');
                setBanners(bannersData ? bannersData.foto : []);
            } catch (error) {
                console.error('Error fetching banners:', error);
            }
        };

        fetchAnniversaries();
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

    const handleYearClick = (year) => {
        setSelectedYear(year);
    };

    const selectedContent = timelineData.find(item => item.year === selectedYear);

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

            {/* Timeline Section */}
            <div className="bg-gray-50 py-24 px-4 md:px-8">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Perjalanan Kami Melalui Tahun-tahun</h2>
                    <div className="flex flex-row">
                        {/* Timeline */}
                        <div className="w-1/4 flex flex-col items-start md:items-center pl-2 md:pl-8 overflow-y-auto space-y-12 relative max-h-[calc(100vh-24rem)] scrollbar-hide py-4">
                            {timelineData.map((item, index) => (
                                <div key={item.year} className="relative flex items-center group cursor-pointer" onClick={() => handleYearClick(item.year)}>
                                    <div className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full ring-8 ring-white">
                                        <span>{item.year}</span>
                                    </div>
                                    {index < timelineData.length - 1 && (
                                        <div className="absolute w-1 bg-blue-600 h-24 top-12 left-1/2 transform -translate-x-1/2"></div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Content Display */}
                        <div className="w-full md:w-2/3 pl-4 md:pl-12">
                            {selectedContent ? (
                                <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
                                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">{selectedContent.judul}</h3>
                                    <p className="text-gray-600 mb-4">{selectedContent.deskripsi}</p>
                                    <div className="relative h-0 pb-[56.25%]">
                                        <iframe
                                            className="absolute inset-0 w-full h-full"
                                            src={selectedContent.video}
                                            title={`Video YouTube untuk ${selectedContent.year}`}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                    <a
                                        href={selectedContent.videoLink}
                                        className="mt-4 inline-block bg-red-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-red-700 transition-transform transform hover:scale-105"
                                    >
                                        Kunjungi Youtube
                                    </a>
                                </div>
                            ) : (
                                <div className="text-center mt-[25%] text-gray-600">Klik pada tahun untuk melihat detailnya.</div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating Menu */}
            <FloatingMenu />
        </>
    );
};

export default Anniversary;
