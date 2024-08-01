import React, { useState, useEffect } from "react";
import axios from "axios";
import FloatingMenu from "../components/FloatingMenu";

const cardClasses = 'bg-white p-4 rounded-lg shadow-md flex items-start cursor-pointer';

const JobCard = ({ logo, title, location, category, onClick }) => {
    return (
        <div className={cardClasses} onClick={onClick}>
            <img src={logo} alt="Company Logo" className="w-20 max-h-20 mr-4 object-cover rounded-full" />
            <div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-zinc-800">{location}</p>
                <div className="flex gap-x-4">
                    <div className="mt-4 bg-green-200 px-3 py-2 rounded-md">
                        <p className="text-green-500">{category}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const JobList = ({ onJobClick }) => {
    const [datas, setData] = useState([]);

    useEffect(() => {
        fetchDataPeluangUsaha();
    }, []);

    const fetchDataPeluangUsaha = async () => {
        try {
            const response = await fetch('http://localhost:3000/peluang-usahas');
            if (!response.ok) {
                throw new Error('Gagal mengambil data peluang usaha');
            }
            const data = await response.json();
            const PelUsData = data.data;
            setData(PelUsData);
        } catch (error) {
            console.error('Error fetching peluang usaha:', error);
            setData([]);
        }
    };

    return (
        <div>
            {datas.map((data) =>
                <div className="mt-0" key={data.id}>
                    <div className="space-y-4 mt-5">
                        <JobCard
                            logo={`http://localhost:3000${data.fotoUsaha}`}
                            title={data.judulUsaha}
                            location={data.lokasiUsaha}
                            category={data.kategoriUsaha}
                            onClick={() => onJobClick(data.id)}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

const PeluangUsaha = () => {
    const [selectedJobId, setSelectedJobId] = useState(null);
    const [jobDetails, setJobDetails] = useState(null);
    const [banners, setBanners] = useState([]);
    const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

    useEffect(() => {
        if (selectedJobId !== null) {
            fetchJobDetails(selectedJobId);
        }
    }, [selectedJobId]);

    useEffect(() => {
        const fetchBanners = async () => {
            try {
                const response = await axios.get('http://localhost:3000/all-banners');
                const bannersData = response.data.data.find(item => item.nama === 'Peluang Usaha');
                setBanners(bannersData ? bannersData.foto : []);
            } catch (error) {
                console.error('Error fetching banners:', error);
                setBanners([]);
            }
        };

        fetchBanners();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBannerIndex(prevIndex => (prevIndex + 1) % banners.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [banners]);

    const fetchJobDetails = async (id) => {
        try {
            const response = await fetch(`http://localhost:3000/peluang-usahas/${id}`);
            if (!response.ok) {
                throw new Error('Gagal mengambil detail peluang usaha');
            }
            const data = await response.json();
            setJobDetails(data);
        } catch (error) {
            console.error('Error fetching peluang usaha details:', error);
            setJobDetails(null);
        }
    };

    const handleJobClick = (id) => {
        setSelectedJobId(id);
    };

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

            {/* Job List and Details */}
            <div className="w-full justify-around md:flex-row p-4 bg-gray-200 mobile:grid mobile:grid-cols-1 mobile:grid-flow-row lg:flex">
                <div className="mobile:max-w-[30rem] mobile:text-sm lg:w-[29rem] lg:mt-5">
                    <p className="text-zinc-600 mb-4">List Peluang Usaha:</p>
                    <JobList onJobClick={handleJobClick} />
                </div>
                <div className="bg-white mt-14 rounded-xl flex items-center justify-center mobile:max-w-96 lg:min-w-[60%] lg:h-auto">
                    {jobDetails ? (
                        <div className="w-full h-full text-zinc-400">
                            <div className="mobile:ml-0 mobile:px-4 lg:mt-10 lg:ml-2 lg:pr-16 lg:pl-14">
                                <img src={`http://localhost:3000${jobDetails.fotoUsaha}`} alt="" className="w-full object-fill mobile:mt-8 h-screen" />
                                <h3 className="text-3xl mt-16 ml-1 font-bold text-black mb-4">{jobDetails.judulUsaha}</h3>
                                <p className="text-lg mt-3 ml-1 font-normal text-black">Perkumpulan Gerakan OK OCE</p>
                                <p className="text-lg ml-1 font-normal text-black">{jobDetails.lokasiUsaha}</p>
                                <p className="text-lg mt-2 ml-1 font-normal text-black"><span className="font-bold">Kategori Usaha:</span> {jobDetails.kategoriUsaha}</p>
                                <div className="w-full mt-10 mr-32 mb-10">
                                    <h1 className="text-2xl text-black font-bold">Rincian Kegiatan</h1>
                                    <h2 className="mt-3 font-medium text-black text-lg text-justify">{jobDetails.tentangProgram}</h2>
                                </div>
                                <div className="w-full mt-10 mr-32 mb-10">
                                    <h1 className="text-2xl text-black font-bold">Deskripsi Usaha</h1>
                                    <h2 className="mt-3 font-medium text-black text-lg text-justify">{jobDetails.jobdescUsaha}</h2>
                                </div>
                                <div className="w-full mt-10 mr-32 mb-10">
                                    <h1 className="text-2xl text-black font-bold">Kualifikasi</h1>
                                    <h2 className="mt-3 font-medium text-black text-lg text-justify">{jobDetails.kriteriaUsaha}</h2>
                                </div>
                                <div className="w-full mt-10 mr-32 mb-10">
                                    <h1 className="text-2xl text-black font-bold">Benefit</h1>
                                    <h2 className="mt-3 font-medium text-black text-lg text-justify">{jobDetails.benefitProgram}</h2>
                                </div>
                                <a href="#">
                                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 me-2 mb-10 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Daftar Sekarang</button>
                                </a>
                            </div>
                        </div>
                    ) : (
                        <p className="text-zinc-400">
                            Silakan pilih peluang usaha di sebelah kiri untuk melihat detailnya
                        </p>
                    )}
                </div>
            </div>
            <FloatingMenu />
        </>
    );
}

export default PeluangUsaha;
