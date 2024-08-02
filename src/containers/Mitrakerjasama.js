import React from "react";
import Utama from "@img/mitra-kerjasama/Utama.png";
import FloatingMenu from "../components/FloatingMenu";
import { useState, useEffect } from 'react';
import axios from 'axios';

const Mitrakerjasama = () => {
    const [penggerakData, setPenggerakData] = useState([]);
    const [swastaData, setSwastaData] = useState([]);
    const [pemerintahData, setPemerintahData] = useState([]);
    const [pendidikanData, setPendidikanData] = useState([]);
    const [banners, setBanners] = useState([]);
    const [totalSwasta, setTotalSwasta] = useState(0);
    const [totalPendidikan, setTotalPendidikan] = useState(0);
    const [totalPemerintah, setTotalPemerintah] = useState(0);
    const [totalPenggerak, setTotalPenggerak] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const fetchMitraData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/mitras`);
                const mitraSwastaData = response.data.data.filter(item => item.tipe === 'swasta');
                const mitraPendidikanData = response.data.data.filter(item => item.tipe === 'pendidikan');
                const mitraPemerintahData = response.data.data.filter(item => item.tipe === 'pemerintah');
                setSwastaData(mitraSwastaData);
                setPemerintahData(mitraPemerintahData);
                setPendidikanData(mitraPendidikanData);

                setTotalSwasta(mitraSwastaData.length);
                setTotalPendidikan(mitraPendidikanData.length);
                setTotalPemerintah(mitraPemerintahData.length);
            } catch (err) {
                console.error(err);
            }
        };
        const fetchBanners = async () => {
            try {
                const response = await axios.get('http://localhost:3000/all-banners');
                const bannersData = response.data.data.find(item => item.nama === 'Mitra Kerjasama');
                setBanners(bannersData ? bannersData.foto : []);
            } catch (error) {
                console.error('Error fetching banners:', error);
                setBanners([]);
            }
        };

        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/penggerak-okoces`);
                const penggerakData = response.data.data;
                setPenggerakData(penggerakData);
                setTotalPenggerak(penggerakData.length);
            } catch (err) {
                console.error(err);
            }
        };

        fetchBanners();
        fetchData();
        fetchMitraData();
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
    return (
        <>
            <section className="relative mt-24">
                <div id="carousel-header" className="relative w-full bg-gray-200 mt-24">
                    <div className="relative overflow-hidden">
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

            </section>

            <div className="w-full mx-auto px-6 py-32 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 text-gray-900 shadow-xl">
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold text-gray-800 leading-tight mb-6">
                        Berbagai Kemitraan di OK OCE
                    </h1>
                    <p className="text-lg lg:text-xl leading-relaxed text-gray-700 max-w-4xl mx-auto">
                        Kami memiliki beragam pilihan kemitraan yang dapat mengembangkan dampak
                        kita bersama. Sehingga kita bisa memperkuat jejaring kerjasama lembaga
                        keuangan maupun perusahaan dan lembaga di sektor lainnya untuk
                        memberikan dampak yang lebih besar. Temukan informasi rinci tentang
                        kemitraan yang telah dibentuk dengan berbagai institusi keuangan,
                        perusahaan, dan lembaga organisasi lainnya. Kami berbangga menjadi bagian
                        dari upaya untuk memajukan UMKM di Indonesia.
                    </p>
                </div>
            </div>

            <div className="w-full mx-auto px-8 py-12 bg-sky-800 text-white">
                <div className="text-center mt-8 mb-6">
                    <h2 className="text-3xl font-extrabold leading-tight mb-4">
                        Manfaat Kemitraan dengan OK OCE
                    </h2>
                    <p className="text-lg max-w-2xl mx-auto mb-8">
                        Pelajari tentang manfaat yang kami tawarkan kepada mitra kami. Mulai dari
                        akses ke pangsa pasar yang lebih luas hingga berbagi pengetahuan industri
                        yang berharga.
                    </p>
                </div>
                <div className="flex flex-wrap gap-8 justify-center">
                    <div className="w-full md:w-1/3 bg-sky-700 p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-bold mb-4">Memperluas jaringan kemitraan</h3>
                        <p className="text-lg">
                            OKOCE telah bekerja sama dengan mitra, komunitas, hingga institusi
                            dengan latar belakang yang beragam di Indonesia. Kita bisa menjalin
                            hubungan baru dan mempererat jejaring dengan cakupan yang lebih luas.
                        </p>
                    </div>
                    <div className="w-full md:w-1/3 bg-sky-700 p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-bold mb-4">Mengembangkan pertumbuhan bisnis</h3>
                        <p className="text-lg">
                            Melalui kerja sama dengan GandengTangan, kita bisa membangun bisnis yang
                            lebih baik dan berkelanjutan secara ekonomi maupun bisnis. Sehingga
                            kedua belah pihak bisa saling menguntungkan satu sama lain.
                        </p>
                    </div>
                    <div className="w-full md:w-1/3 bg-sky-700 p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-bold mb-4">Meningkatkan inklusivitas keuangan</h3>
                        <p className="text-lg">
                            Sejalan dengan visi dan misi GandengTangan, perusahaan kita bisa lebih
                            inklusif dengan menawarkan berbagai layanan dan dukungan yang dibutuhkan
                            oleh UMKM dan usaha lokal di Indonesia.
                        </p>
                    </div>
                </div>
            </div>

            <div className="w-full mx-auto px-6 py-32 bg-gradient-to-r from-blue-300 via-blue-200 to-blue-100 text-gray-900 shadow-xl ">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-800 leading-tight mb-6">
                        Mitra yang Telah Bekerjasama dengan Kami
                    </h1>
                    <p className="text-lg lg:text-xl leading-relaxed text-gray-700 max-w-4xl mx-auto">
                        Hingga saat ini, kami telah bekerjasama dengan berbagai lembaga, mulai
                        dari lembaga keuangan, seperti perbankan dan perusahaan modal ventura,
                        koperasi, startup digital, hingga lembaga non-profit.
                    </p>
                </div>
            </div>


            <div className="grid grid-grid-flow-row justify-items-center items-center mobile:w-80 mobile:mx-auto sm:w-96 lg:w-full">
                <div className="md:pt-16 pb-8">
                    <h2 className="text-sky-700 text-center font-poppins mobile:text-2xl font-bold-700 mobile:text-3xl mobile:font-bold lg:text-4xl ">
                        Total Mitra Kerjasama Swasta
                    </h2>
                    <h3 className="mt-4 mb-4 text-black text-center font-poppins mobile:text-lg mobile:text-3xl mobile:font-bold lg:text-xl lg:font-medium">
                        Mitra Kerjasama Swasta{" "}
                        <span className="text-red-500 font-bold">OK OCE </span>sampai saat
                        ini
                    </h3>
                </div>
                <div className="w-full mb-20 flex justify-around items-center text-slate-700">
                    <div className="about-container flex flex-col lg:flex-row justify-center items-center bg-detik-milk mobile:w-3/4 lg:w-[35rem]">
                        <div className="lg:mt-0 text-lg flex flex-col flex-grow pl-4 justify-center items-center">
                            <p className="font-bold text-2xl mb-4">{totalSwasta}</p>
                            <div className="pb-5">
                                <h3 className="text-black text-justify font-medium">
                                    Mitra Kerjasama Swasta
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pb-14 w-full mx-auto h-auto overflow-hidden border-b-4">
                <div className="mobile:grid mobile:grid-cols-1 mobile:gap-y-10 mobile:justify-items-center lg:flex lg:gap-x-10 lg:animate-marquee">
                    {swastaData.map((item) => (
                        <div className="w-60 h-auto">
                            <img src={`http://localhost:3000${item.foto}`} className="grow shrink-0 mt-2 w-full" />
                        </div>
                    ))}
                </div>
            </div>

            <div className="grid grid-grid-flow-row justify-items-center items-center mobile:w-80 mobile:mx-auto mobile:pt-20 sm:w-96 lg:w-full">
                <div className="md:pt-16 pb-8">
                    <h2 className="text-sky-700 text-center font-poppins mobile:text-2xl font-bold-700 mobile:text-3xl mobile:font-bold lg:text-4xl ">
                        Total Mitra Kerjasama Pendidikan
                    </h2>
                    <h3 className="mt-4 mb-4 text-black text-center font-poppins mobile:text-lg mobile:text-3xl mobile:font-bold lg:text-xl lg:font-medium">
                        Mitra Kerjasama Pendidikan{" "}
                        <span className="text-red-500 font-bold">OK OCE </span>sampai saat
                        ini
                    </h3>
                </div>
                <div className="w-full flex justify-around items-center text-slate-700 mobile:mb-0  lg:mb-20">
                    <div className="about-container flex flex-col lg:flex-row justify-center items-center bg-detik-milk mobile:w-3/4 lg:w-[35rem]">
                        <div className="lg:mt-0 text-lg flex flex-col flex-grow pl-4 justify-center items-center">
                            <p className="font-bold text-2xl mb-4">{totalPendidikan}</p>
                            <div className="mobile:pb-0 lg:pb-5">
                                <h3 className="text-black font-medium mobile:text-center lg:text-justify">
                                    Mitra Kerjasama Pendidikan
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full mx-auto h-auto mobile:pb-0 lg:pb-14 border-b-4">
                <div className="grid gap-x-20 mobile:grid-cols-1 mobile:grid-flow-row mobile:gap-y-4 mobile:w-full mobile:justify-items-center lg:grid-flow-col lg:w-9/12 lg:mx-auto">
                    {pendidikanData.map((item) => (
                        <div className="mobile:w-60 mobile:h-auto lg:w-full lg:h-full">
                            <img src={`http://localhost:3000${item.foto}`} className="grow shrink-0 mobile:mb-12 mobile:mx-auto mobile:mt-10 mobile:w-3/5 lg:w-full lg:mt-2" />
                        </div>
                    ))}
                </div>
            </div>

            <div className="grid grid-grid-flow-row justify-items-center items-center mobile:w-80 mobile:mx-auto mobile:pt-20 sm:w-96 lg:w-full">
                <div className="md:pt-16 pb-8">
                    <h2 className="text-sky-700 text-center font-poppins mobile:text-2xl font-bold-700 mobile:text-3xl mobile:font-bold lg:text-4xl ">
                        Total Mitra Kerjasama Penggerak
                    </h2>
                    <h3 className="mt-4 mb-4 text-black text-center font-poppins mobile:text-lg mobile:text-3xl mobile:font-bold lg:text-xl lg:font-medium">
                        Mitra Kerjasama Penggerak{" "}
                        <span className="text-red-500 font-bold">OK OCE </span>sampai saat
                        ini
                    </h3>
                </div>
                <div className="w-full flex justify-around items-center text-slate-700 mobile:mb-0 lg:mb-20">
                    <div className="about-container flex flex-col lg:flex-row justify-center items-center bg-detik-milk mobile:w-3/4 lg:w-[35rem]">
                        <div className="lg:mt-0 text-lg flex flex-col flex-grow pl-4 justify-center items-center">
                            <p className="font-bold text-2xl mb-4">{totalPenggerak}</p>
                            <div className="mobile:pb-0 lg:pb-5">
                                <h3 className="text-black text-justify font-medium">
                                    Mitra Kerjasama Penggerak
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pb-14 w-full mx-auto h-auto border-b-4">
                <div className="w-9/12 mx-auto grid gap-x-20 mobile:grid-cols-1 mobile:grid-flow-row mobile:gap-y-4 lg:grid-flow-col">
                    {penggerakData.map((item) => (
                        <div className="w-60 h-full">
                            <img src={`http://localhost:3000${item.fotoPenggerak}`} className="grow shrink-0 mobile:mb-12 mobile:mx-auto mobile:mt-10 mobile:w-3/5 lg:w-full lg:mt-2" />
                        </div>
                    ))}
                </div>
            </div>

            <div className="grid grid-grid-flow-row justify-items-center items-center mobile:w-80 mobile:mx-auto mobile:pt-20 sm:w-96 lg:w-full">
                <div className="md:pt-16 pb-8">
                    <h2 className="text-sky-700 text-center font-poppins mobile:text-2xl font-bold-700 mobile:text-3xl mobile:font-bold lg:text-4xl ">
                        Total Mitra Kerjasama Pemerintah
                    </h2>
                    <h3 className="mt-4 mb-4 text-black text-center font-poppins mobile:text-lg mobile:text-3xl mobile:font-bold lg:text-xl lg:font-medium">
                        Mitra Kerjasama Pemerintah{" "}
                        <span className="text-red-500 font-bold">OK OCE </span>sampai saat
                        ini
                    </h3>
                </div>
                <div className="w-full flex justify-around items-center text-slate-700 mobile:mb-0 lg:mb-20">
                    <div className="about-container flex flex-col lg:flex-row justify-center items-center bg-detik-milk mobile:w-3/4 lg:w-[35rem]">
                        <div className="lg:mt-0 text-lg flex flex-col flex-grow pl-4 justify-center items-center">
                            <p className="font-bold text-2xl mb-4">{totalPemerintah}</p>
                            <div className="mobile:pb-0 lg:pb-5">
                                <h3 className="text-black text-center font-medium">
                                    Mitra Kerjasama Pemerintah
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pb-14 w-full mx-auto h-auto">
                <div className="w-9/12 mx-auto grid gap-x-20 mobile:grid-cols-1 mobile:grid-flow-row mobile:gap-y-4 lg:grid-cols-2">
                    {pemerintahData.map((item) => (
                        <div className="mobile:w-60 mobile:h-auto lg:w-full lg:h-full">
                            <img src={`http://localhost:3000${item.foto}`} className="grow shrink-0 mobile:mb-12 mobile:mx-auto mobile:mt-10 mobile:w-3/5 lg:w-full lg:mt-2" />
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex flex-col px-8 py-12 bg-sky-700 text-white max-md:px-5">
    <div className="text-center mb-12">
        <h1 className="text-3xl font-extrabold mb-4 max-md:text-2xl">Ajukan Kemitraan</h1>
        <p className="text-lg leading-relaxed max-w-3xl mx-auto">
            Jika Anda tertarik untuk menjajaki kemitraan dengan kami, jangan ragu untuk menghubungi kami. 
            Kami siap untuk mendiskusikan berbagai peluang yang bisa kita ciptakan bersama.
        </p>
    </div>
    <div className="flex justify-center mb-12">
        <a href="#" className="bg-red-600 text-xl font-semibold text-white rounded-full px-6 py-3 hover:bg-red-700 transition duration-300">
            MULAI BEKERJASAMA
        </a>
    </div>
</div>

            <FloatingMenu />
        </>
    );
};

export default Mitrakerjasama;