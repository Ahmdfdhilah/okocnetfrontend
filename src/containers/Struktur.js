import React, { useState, useEffect } from "react";
import axios from "axios";
import FloatingMenu from "../components/FloatingMenu";

const PengurusBaru = () => {
    const [penguruses, setPenguruses] = useState({
        founder: [],
        pembina: [],
        kurasi: [],
        harian: [],
        direktorat: [],
        eksekutif: []
    });
    const [banners, setBanners] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        fetchData();
        fetchBanners();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch(`http://localhost:3000/struktur-penguruses`);
            if (!response.ok) {
                throw new Error('Gagal mengambil data pengurus');
            }
            const data = await response.json();
            filterAndSetData(data.data);
        } catch (error) {
            console.error('Error fetching employees:', error);
        }
    };

    const fetchBanners = async () => {
        try {
            const response = await axios.get("http://localhost:3000/all-banners");
            const bannersData = response.data.data.find(item => item.nama === 'Struktur Pengurus');
            setBanners(bannersData ? bannersData.foto : []);
        } catch (error) {
            console.error('Error fetching banners:', error);
        }
    };

    const filterAndSetData = (data) => {
        const filteredData = {
            founder: data.filter(item => item.tipe === 'founder'),
            pembina: data.filter(item => item.tipe === 'pembina'),
            kurasi: data.filter(item => item.tipe === 'kurasi'),
            harian: data.filter(item => item.tipe === 'harian'),
            direktorat: data.filter(item => item.tipe === 'direktorat'),
            eksekutif: data.filter(item => item.tipe === 'eksekutif')
        };
        setPenguruses(filteredData);
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

            <div>
                <div className="mt-[6rem] mb-16 w-4/5 mx-auto ">
                    <div className="mobile:w-3/4 mobile:mx-auto lg:w-[74rem] lg:ml-[1rem]">
                        <h1 className="mb-8 text-2xl font-bold border-b mobile:text-3xl mobile:text-center lg:text-start">Founder OK OCE INDONESIA</h1>
                    </div>
                    <div className="flex mx-auto mobile:w-60 mobile:flex-col mobile:gap-6 lg:flex-row lg:justify-evenly lg:w-full">
                        {penguruses.founder.map((employee) => (
                            <div key={employee.id} className="flex flex-col grow items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl">
                                <img className="object-cover w-full rounded-t-lg mobile:h-60 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={`http://localhost:3000${employee.foto}`} alt={employee.nama} />
                                <div className="flex flex-col justify-between p-4 leading-normal">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-">{employee.nama}</h5>
                                    <p className="mb-3 font-normal text-gray-600 mobile:mx-auto lg:m-0">{employee.jabatan}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-10 mb-16 w-4/5 mx-auto">
                    <div className="mobile:w-3/4 mobile:mx-auto lg:w-[74rem] lg:ml-[1rem]">
                        <h1 className="mb-8 text-2xl font-bold border-b mobile:text-3xl mobile:text-center lg:text-start">Dewan Pembina</h1>
                    </div>
                    <div className="flex mx-auto mobile:w-60 mobile:flex-col mobile:gap-6 lg:flex-row lg:justify-evenly lg:w-full">
                        {penguruses.pembina.map((employee) => (
                            <div key={employee.id} className="flex flex-col grow items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl">
                                <img className="object-cover w-full rounded-t-lg mobile:h-60 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={`http://localhost:3000${employee.foto}`} alt={employee.nama} />
                                <div className="flex flex-col justify-between p-4 leading-normal">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 mobile:mx-auto lg:m-0">{employee.nama}</h5>
                                    <p className="mb-3 font-normal text-gray-600 mobile:mx-auto lg:m-0">{employee.jabatan}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-10 mb-16 w-4/5 mx-auto">
                    <div className="mobile:w-3/4 mobile:mx-auto lg:w-[74rem] lg:ml-[1rem]">
                        <h1 className="mb-8 text-2xl font-bold border-b mobile:text-3xl mobile:text-center lg:text-start">Dewan Kurasi</h1>
                    </div>
                    <div className="flex mx-auto mobile:w-60 mobile:flex-col mobile:gap-6 lg:flex-row lg:justify-evenly lg:w-full">
                        {penguruses.kurasi.map((employee) => (
                            <div key={employee.id} className="flex items-center bg-white border border-gray-200 rounded-lg shadow mobile:flex-col md:flex-row md:max-w-xl lg:flex-row lg:grow">
                                <img className="object-cover w-full rounded-t-lg mobile:h-60 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={`http://localhost:3000${employee.foto}`} alt={employee.nama} />
                                <div className="flex flex-col justify-between p-4 leading-normal">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 mobile:mx-auto mobile:text-center lg:text-start lg:m-0">{employee.nama}</h5>
                                    <p className="mb-3 font-normal text-gray-600 mobile:mx-auto lg:m-0">{employee.jabatan}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-10 mb-16 w-4/5 mx-auto">
                    <div className="mobile:w-3/4 mobile:mx-auto lg:w-[74rem] lg:ml-[1rem]">
                        <h1 className="mb-8 text-2xl font-bold border-b mobile:text-3xl mobile:text-center lg:text-start">Pengurus Harian</h1>
                    </div>
                    <div className="flex mx-auto mobile:w-60 mobile:flex-col mobile:gap-6 lg:flex-row lg:justify-evenly lg:w-full lg:gap-1">
                        {penguruses.harian.map((employee) => (
                            <div key={employee.id} className="grid items-center bg-white border border-gray-200 rounded-lg shadow mobile:grid-cols-1 md:flex-row md:min-h-16 md:max-w-[24rem] lg:grid-cols-3">
                                <div className="mobile:w-auto lg:w-40 lg:h-full">
                                    <img className="object-cover w-full rounded-t-lg mobile:h-60 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={`http://localhost:3000${employee.foto}`} alt={employee.nama} />
                                </div>
                                <div className="flex flex-col justify-between p-4 leading-normal mobile:ml-0 lg:ml-14">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-start mobile:mx-auto lg:text-start lg:m-0">{employee.nama}</h5>
                                    <p className="mb-3 font-normal text-gray-600 text-start mobile:mx-auto mobile: lg:text-start lg:m-0">{employee.jabatan}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-10 mb-16 w-4/5 mx-auto">
                    <div className="mobile:w-3/4 mobile:mx-auto lg:w-[74rem] lg:ml-[1rem]">
                        <h1 className="mb-8 text-2xl font-bold border-b mobile:text-3xl mobile:text-center lg:text-start">Direktorat</h1>
                    </div>
                    <div className="grid mx-auto mobile:w-60 mobile:grid-cols-1 mobile:grid-flow-row mobile:gap-6 lg:w-full lg:grid-cols-2 lg:grid-flow-row lg:pl-4 lg:gap-6">
                        {penguruses.direktorat.map((employee) => (
                            <div key={employee.id} className="flex flex-col grow items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl">
                                <img className="object-cover w-full rounded-t-lg mobile:h-60 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={`http://localhost:3000${employee.foto}`} alt={employee.nama} />
                                <div className="flex flex-col justify-between p-4 leading-normal">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 mobile:mx-auto mobile:text-center lg:text-start lg:m-0">{employee.nama}</h5>
                                    <p className="mb-3 font-normal text-gray-600 mobile:mx-auto mobile:text-center lg:text-start lg:m-0">{employee.jabatan}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-10 mb-16 w-4/5 mx-auto">
                    <div className="mobile:w-3/4 mobile:mx-auto lg:w-[74rem] lg:ml-[1rem]">
                        <h1 className="mb-8 text-2xl font-bold border-b mobile:text-2xl mobile:text-center lg:text-start">Eksekutif</h1>
                    </div>
                    <div className="grid mx-auto mobile:w-60 mobile:grid-cols-1 mobile:grid-flow-row mobile:gap-6 lg:w-full lg:grid-cols-2 lg:grid-flow-row lg:pl-4 lg:gap-6">
                        {penguruses.eksekutif.map((employee) => (
                            <div key={employee.id} className="flex flex-col grow items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl">
                                <img className="object-cover w-full rounded-t-lg mobile:h-60 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={`http://localhost:3000${employee.foto}`} alt={employee.nama} />
                                <div className="flex flex-col justify-between p-4 leading-normal">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 mobile:mx-auto mobile:text-center lg:text-start lg:m-0">{employee.nama}</h5>
                                    <p className="mb-3 font-normal text-gray-600 mobile:mx-auto mobile:text-center lg:text-start lg:m-0">{employee.jabatan}</p>
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

export default PengurusBaru;