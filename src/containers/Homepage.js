import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AnimateAnggota from "../components/AnimateAnggota";
import FloatingMenu from "@components/FloatingMenu";
import Top7 from "@img/7top-rb.webp";
import Pelatihan from "@img/Pelatihan.png";
import Pendaftaran from "@img/Pendaftaran.png";
import Pendampingan from "@img/Pendampingan.png";
import Perizinan from "@img/Perizinan.png";
import Pemasaran from "@img/Pemasaran.png";
import Pelaporan from "@img/Laporan Keuangan.png";
import Permodalan from "@img/Permodalan.png";
import Okocetv from "@img/okoce-tv.webp";

// - component
import Peta from "@components/Peta";
import Youtube from "@components/Youtube";
import Calendar from "@components/Calendar";
import HomepageCarousel from "../components/HomepageCarousel";
import PopupMenu from "../components/PopupMenu";
import ReviewSection from "../components/Review";
import MitraList from "../components/MitraList";
import TotalsComponent from "../components/Total";
import DeskripsiComponent from "../components/Deskripsi";
import ProfileComponent from "../components/Profile";
import { fetchLatestVideoUrl } from "../utils/youtubeFetch";

const Homepage = () => {
    const [datas, setData] = useState([]);
    const [events, setEvents] = useState([]);
    const [videoSrc, setVideoSrc] = useState(null);

    useEffect(() => {
        const loadVideo = async () => {
            const channelId = 'UCfkckwZSA11Q7Q-XR7JyQfw'; 
            const url = await fetchLatestVideoUrl(channelId);
            setVideoSrc(url);
        };

        loadVideo();
    }, []);

    useEffect(() => {
        fetchDataNews();
        fetchDataEvents();
    }, []);

    const fetchDataNews = async () => {
        try {
            const response = await fetch(
                "http://localhost:3000/beritas"
            );
            if (!response.ok) {
                throw new Error("Gagal mengambil data berita");
            }
            const data = await response.json();
            const newsData = data.data;
            const lastThreeData = newsData.slice(0, 3); 
            setData(lastThreeData);
        } catch (error) {
            console.error("Error fetching employees:", error);
            setData([]);
        }
    };

    const fetchDataEvents = async () => {
        try {
            const response = await fetch(
                "http://localhost:3000/events"
            );
            if (!response.ok) {
                throw new Error("Gagal mengambil data event");
            }
            const data = await response.json();
            const eventData = data.data;
            const lastThreeData = eventData.slice(0, 3);
            setEvents(lastThreeData);
        } catch (error) {
            console.error("Error fetching employees:", error);
            setEvents([]);
        }
    };

    return (
        <>
            <div class="relative w-full grid grid-flow-row">
                <div className="relative w-full mt-0 mobile:h-full lg:h-screen">
                    <HomepageCarousel interval={4000} className="object-cover w-full h-auto mobile:w-[200%]" />
                </div>
                <div
                    id="about"
                    className="mb-20 flex items-center bg-white mx-auto mobile:justify-start mobile:w-80 mobile:mt-14 sm:w-96 lg:justify-center lg:w-3/4 lg:mt-28">
                    <div className="about-container mx-auto flex flex-col justify-center items-center bg-detik-milk lg:flex-row">
                        <ProfileComponent/>
                        <DeskripsiComponent/>  
                    </div>
                </div>
                               
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center items-center mx-auto max-w-8xl text-center">
                    <div className="md:col-span-2">
                        <h2 className="text-sky-700 text-center font-poppins font-bold-700 md:text-4xl">
                            Total Anggota OK OCE INDONESIA
                        </h2>
                        <h3 className="mt-4 mb-10 text-black text-center font-poppins md:text-xl md:font-medium">
                            Peserta yang telah bergabung di{" "}
                            <span className="text-red-500 font-bold">OK OCE </span>sampai saat ini
                        </h3>
                    </div>
                    <div className="md:col-span-2 mb-20 flex text-slate-700">
                        <div className="about-container flex flex-col justify-center items-center bg-detik-milk">
                            <div className="flex flex-col items-center justify-center ml-0 mr-8">
                                <AnimateAnggota nama="umkm" />
                                <div className="mt-5">
                                    <h3 className="text-black text-center font-medium">
                                        UMKM Anggota OK OCE Indonesia
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center ml-0">
                            <AnimateAnggota nama="penggerak" />
                            <div className="mt-5">
                                <h3 className="text-black text-center font-medium">
                                    Penggerak OK OCE Indonesia
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:col-span-2 flex justify-center items-center">
                        <div className="w-full h-screen">
                            <Peta />
                        </div>
                    </div>
                </div>

                <TotalsComponent />
                <div class="bg-white mt-12 lg:pb-20 mobile:pb-5 grid justify-items-center mobile:w-80 mobile:mx-auto sm:w-96 lg:w-full">
                    <div class="md:pt-8 mb-4">
                        <h3 class="text-sky-700 text-center font-poppins mobile:text-2xl font-bold-700 mobile:text-xl mobile:font-bold lg:text-4xl">
                            7 TAHAPAN OK OCE PRIMA
                        </h3>
                    </div>
                    <div class="lg:w-10/12 lg:grid lg:justify-items-center lg:grid-flow-col lg:mt-20">
                        <div class="md:mr-8 hover:drop-shadow-2xl">
                            <a href="/7top">
                                <img class="md:h-[10em] object-cover mx-auto mobile:w-4/5 mobile:h-auto" src={Top7} />
                            </a>
                        </div>
                        <a href="https://ecsys.okoce.net/">
                            <div class="mt-12 md:mt-4 hover:drop-shadow-2xl">
                                <img
                                    class="md:h-[10em] object-cover mx-auto mobile:w-4/5 mobile:h-auto"
                                    src={Pendaftaran}
                                />
                            </div>
                        </a>
                        <a href="/pelatihan">
                            <div class="mt-12 md:mt-4 hover:drop-shadow-2xl">
                                <img class="md:h-[10em] object-cover mx-auto mobile:w-4/5 mobile:h-auto" src={Pelatihan} />
                            </div>
                        </a>
                        <a href="/pendampingan">
                            <div class="mt-12 md:mt-4 hover:drop-shadow-2xl">
                                <img
                                    class="md:h-[10em] object-cover mx-auto mobile:w-4/5 mobile:h-auto"
                                    src={Pendampingan}
                                />
                            </div>
                        </a>
                        <a href="/perizinan">
                            <div class="mt-12 md:mt-4 hover:drop-shadow-2xl">
                                <img class="md:h-[10em] object-cover mx-auto mobile:w-4/5 mobile:h-auto" src={Perizinan} />
                            </div>
                        </a>
                        <a href="/pemasaran">
                            <div class="mt-12 md:mt-4 hover:drop-shadow-2xl">
                                <img class="md:h-[10em] object-cover mx-auto mobile:w-4/5 mobile:h-auto" src={Pemasaran} />
                            </div>
                        </a>
                        <a href="/pelaporankeuangan">
                            <div class="mt-12 md:mt-4 hover:drop-shadow-2xl">
                                <img class="md:h-[10em] object-cover mx-auto mobile:w-4/5 mobile:h-auto" src={Pelaporan} />
                            </div>
                        </a>
                        <a href="/permodalan">
                            <div class="mt-12 md:mt-4 hover:drop-shadow-2xl">
                                <img
                                    class="md:h-[10em] object-cover mx-auto mobile:w-4/5 mobile:h-auto"
                                    src={Permodalan}
                                />
                            </div>
                        </a>
                    </div>
                </div>

                <div class="bg-white mobile:w-80 mobile:mb-0 mobile:mx-auto sm:w-96 lg:w-full">
                    <div class="mt-20 mobile:mb-6 lg:mb-12">
                        <h3 class="text-sky-700 text-center font-poppins mobile:text-2xl font-bold-700 mobile:text-xl mobile:font-bold lg:text-4xl">
                            EVENT OK OCE INDONESIA
                        </h3>
                    </div>
                    <div class="flex justify-center">
                        <h3 class="w-[55em] text-okoce-blue text-center font-poppins text-xs font-bold-700 mobile:px-2 md:text-xl lg:text-xl ">
                            Berikut merupakan kalender mengenai acara-acara yang
                            diselenggarakan oleh OK OCE Indonesia. Ayo Sobat, daftar OK OCE
                            sekarang juga dan nikmati berbagai fasilitas pemasaran produk
                            melalui acara OK OCE secara gratis, lho!
                        </h3>
                    </div>
                    <div class="grid justify-items-center items-center mobile:mb-20 mobile:mx-auto sm:grid-rows-1 sm:grid-flow-row lg:grid-rows-2 lg:grid-flow-col lg:mb-36">
                        <div class="grid justify-items-center items-center bg-white drop-shadow-2xl rounded-3xl mobile:max-w-full mobile:row-span-1 mobile:p-0 mobile:mx-auto mobile:h-[98%] mobile:mt-12 lg:h-[83%] lg:col-span-1 lg:row-span-2 lg:w-[64%] lg:mr-0 lg:mt-12">
                            <Calendar />
                        </div>
                        <div class="text-xl font-bold mobile:p-4 mobile:mt-14 mobile:text-center lg:text-start lg:p-0 lg:mt-14">
                            Daftar Event
                            <div class="grid gap-4 mt-4 mobile:grid-cols-1 mobile:grid-flow-row lg:grid-cols-3 lg:grid-flow-col">
                                {events.map((event) => (
                                    <div className="border-2 border-black p-2">
                                        <img
                                            class="max-h-[10rem] min-w-42"
                                            src={`http://localhost:3000${event.fotoEvent}`}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div class="text-xl font-bold mobile:p-4 mobile:mt-14 mobile:text-center lg:text-start lg:p-0 lg:mt-6">
                            Daftar Berita
                            <div class="grid gap-4 mt-4 mobile:grid-cols-1 mobile:grid-flow-row lg:grid-cols-3 lg:grid-flow-col">
                                {datas.map((data) => (
                                    <div className="border-2 border-black p-2">
                                        <img
                                            class="object-cover h-full max-w-40"
                                            src={`http://localhost:3000${data.fotoBerita}`}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div class="bg-gray-200 mobile:px-3 mobile:w-full sm:w-96 lg:w-full lg:py-20 lg:mb-20">
                    <div class="mobile:pt-10 lg:pb-6 lg:pt-0">
                        <h3 class="text-sky-700 text-center font-poppins font-bold-700 mobile:text-2xl mobile:text-xl mobile:font-bold lg:text-4xl lg:mb-4">
                            BERITA OK OCE INDONESIA
                        </h3>
                    </div>
                    <div className="grid mobile:grid-cols-1 mobile:mt-10 lg:w-11/12 lg:mx-auto lg:grid-cols-3 lg:gap-y-8 lg:gap-x-4 lg:mt-0">
                        {datas.map((data, index) => (
                            <div key={index} className="w-full mx-auto p-4">
                                <div className="bg-blue-400 shadow-md rounded-lg lg:mr-1">
                                    <div className="p-5">
                                        <img
                                            className="object-cover w-full mobile:h-36 lg:h-72"
                                            src={`http://localhost:3000${data.fotoBerita}`}
                                            alt=""
                                        />
                                        <div className="relative group mb-2 mt-6 h-20">
                                            <div className="text-base leading-7 text-white font-bold text-xl overflow-hidden line-clamp-2">
                                                {data.judulBerita}
                                            </div>
                                            <div className="absolute left-0 bottom-full mb-2 hidden w-full text-xs text-white bg-black p-2 rounded group-hover:block">
                                                {data.judulBerita}
                                            </div>
                                        </div>
                                        <p className="text-white">
                                            Author: {data.authorBerita}
                                        </p>
                                        <div className="flex space-x-4 my-4">
                                            <span className="bg-white text-blue-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded">
                                                Tanggal Publish: {data.tanggalBerita}
                                            </span>
                                        </div>
                                        <Link to={`/daftarberita/${data.id}`}>
                                            <div className="mt-8 flex justify-start">
                                                <button className="bg-white w-full text-black font-bold p-2 rounded-lg hover:bg-red-600 hover:text-white">
                                                    Read more
                                                </button>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="grid grid-flow-row justify-items-center items-center text-lg text-center text-black mobile:mt-14 mobile:w-80 mobile:mx-auto sm:w-96 lg:w-full">
                    <div class="max-w-72 mobile:mb-4">
                        <img loading="lazy" srcSet={Okocetv} className="object-cover" />
                    </div>
                    <div class="flex justify-center items-center mobile:w-80 lg:w-full">
                        <Youtube src={videoSrc} />
                    </div>
                    <div class="flex justify-center mt-7 max-md:max-w-full">
                        Tonton video lainnya di YouTube OK OCE Indonesia.
                    </div>
                </div>
                <div class="bg-white mt-10 mobile:w-full mobile:pb-10 mobile:mx-auto lg:w-11/12 lg:pb-2">
                    <div class="mobile:pt-8 pb-8">
                        <h3 class="text-sky-700 text-center font-poppins font-bold-700 mobile:text-xl mobile:font-bold lg:text-4xl">
                            Jadilah salah satu dari mitra kami!
                        </h3>
                    </div>
                    <MitraList />
                </div>
                <div class="bg-white m-6 pb-20 mobile:w-72 mobile:mx-auto sm:w-96 lg:w-11/12">
                    <div class="md:pt-8 pb-14">
                        <h3 class="text-sky-700 text-center font-poppins font-bold-700 mobile:mt-10 mobile:text-xl mobile:font-bold md:text-2xl lg:text-4xl">
                            Pendapat Mereka Tentang OK OCE INDONESIA!
                        </h3>
                    </div>
                    <ReviewSection />
                </div>
            </div>
            <div>
                <PopupMenu />
            </div>
            <FloatingMenu />{" "}
        </>
    );
};

export default Homepage;