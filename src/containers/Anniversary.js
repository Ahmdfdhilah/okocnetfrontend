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

    useEffect(() => {
        const fetchAnniversaries = async () => {
            try {
                const response = await axios.get('http://localhost:3000/anniversaries?sort=year&&order=DESC');
                const data = response.data.data; 
                console.log(data);
                const updatedData = data.map(item => ({
                    ...item,
                    video: convertToEmbedUrl(item.videoLink)
                }));
                setTimelineData(updatedData);
            } catch (error) {
                console.error("Error fetching anniversaries data", error);
            }
        };

        fetchAnniversaries();
    }, []);

    const handleYearClick = (year) => {
        setSelectedYear(year);
    };

    const selectedContent = timelineData.find(item => item.year === selectedYear);

    return (
        <>
            {/* Hero Section */}
            <div className="relative mt-24 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 h-[60vh] flex flex-col justify-center items-center text-center text-white py-12 px-4">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-4">ANNIVERSARY OKOCE</h1>
                <p className="text-xl mb-8 px-4 md:px-12 max-w-3xl">
                    Selamat datang di momen istimewa ini, di mana kami merayakan perjalanan luar biasa yang telah kami lalui.
                    Gerakan sosial OK OCE Indonesia mengadvokasi pertumbuhan ekonomi yang didorong oleh kreativitas dan kolaborasi.
                    Dengan mengutamakan inovasi, kerjasama antarindividu, dan keterlibatan penuh dalam berbagai sektor ekonomi,
                    OK OCE membuka pintu bagi kemajuan yang berkelanjutan dan inklusif bagi seluruh masyarakat Indonesia.
                </p>
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