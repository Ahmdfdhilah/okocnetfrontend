/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AnimateAnggota from "../components/AnimateAnggota";
import AnimatePenggerak from "../components/AnimatePenggerak";
import FloatingMenu from "@components/FloatingMenu";

// - img
import sandiaga from "@img/sandiaga-uno-ok.png";
import iim from "@img/IimRusyamsi-Styled.png";
import indra from "@img/indra-uno-styled.png";
import facebook from "@img/facebook.png";
import instagram from "@img/instagram.png";
import twitter from "@img/twitter.webp";
import whatsapp from "@img/whatsapp.png";
import Top7 from "@img/7top-rb.webp";
import Pelatihan from "@img/Pelatihan.png";
import Pendaftaran from "@img/Pendaftaran.png";
import Pendampingan from "@img/Pendampingan.png";
import Perizinan from "@img/Perizinan.png";
import Pemasaran from "@img/Pemasaran.png";
import Pelaporan from "@img/Laporan Keuangan.png";
import Permodalan from "@img/Permodalan.png";
import Okocetv from "@img/okoce-tv.webp";
import Header from "../asset/img/Penggerak OKOCE Indonesia (1519 x 710 piksel).png";
import Header2 from "@img/Homepage2.png";
import Header3 from "@img/Homepage3.png";
import Header4 from "@img/Homepage4.png";
import Profile1 from "@img/verified.png";
import Profile2 from "@img/safety.png";
import Profile3 from "@img/government.png";
import Profile4 from "@img/partners.png";
import Profile5 from "@img/education.png";
// - component
import Peta from "@components/Peta";
import Youtube from "@components/Youtube";
import Calendar from "@components/Calendar";
import HomepageCarousel from "../components/HomepageCarousel";
// - mitra-kerjasama
import Azindo from "@mitra-kerjasama/az-indonesia.png";
import Cetak from "@mitra-kerjasama/cetakkemasan.png";
import Eduv from "@mitra-kerjasama/eduversal.png";
import Inotek from "@mitra-kerjasama/inotek.png";
import Kkindo from "@mitra-kerjasama/kk-indonesia.png";
import Pajakonline from "@mitra-kerjasama/pajakonline.png";
import Smeshub from "@mitra-kerjasama/smeshub.png";
import Travel from "@mitra-kerjasama/travelbook.png";
import Wgs from "@mitra-kerjasama/wgshub.png";
import Ekles from "@mitra-kerjasama/alternatives/ekles-2.png";
import Indivara from "@mitra-kerjasama/alternatives/indivara-2.png";
import Jnj from "@mitra-kerjasama/alternatives/jnj-group-2.png";
import PopupMenu from "../components/PopupMenu";

const Homepage = () => {
    const [currentItemIndex, setCurrentItemIndex] = useState(0);
    const [showText, setShowText] = useState(true);
    const [datas, setData] = useState([]);
    const [events, setEvents] = useState([]);

    const images = [
        { src: Header, alt: 'Header Image' },
        { src: Header2, alt: 'Second Image' },
        { src: Header3, alt: 'Third Image' },
        { src: Header4, alt: 'Fourth Image' },
        // Tambahkan lebih banyak gambar jika diperlukan
    ];

    const items = [
        { src: sandiaga, alt: "Slide 1", text: "Founder - Sandiaga Uno" },
        { src: iim, alt: "Slide 2", text: "Ketua Umum - Iim Rusyamsi" },
        { src: indra, alt: "Slide 3", text: "Ketua Dewan Pembina - Indra Uno" },
    ];

    useEffect(() => {
        fetchDataNews();
        fetchDataEvents();
    }, []);

    const fetchDataNews = async () => {
        try {
            const response = await fetch(
                "https://cms-okoce-a155c649b6e6.herokuapp.com/api/beritas?populate=*"
            );
            if (!response.ok) {
                throw new Error("Gagal mengambil data berita");
            }
            const data = await response.json();
            // Extract the data array from the response
            const newsData = data.data;
            newsData.sort((a, b) => a.id - b.id);
            const lastThreeData = newsData.slice(0, 3); // Mengambil 3 data terakhir
            console.log(lastThreeData);
            setData(lastThreeData);
        } catch (error) {
            console.error("Error fetching employees:", error);
            // Jika terjadi kesalahan, pastikan untuk mengatur employees menjadi array kosong
            setData([]);
        }
    };

    const fetchDataEvents = async () => {
        try {
            const response = await fetch(
                "https://cms-okoce-a155c649b6e6.herokuapp.com/api/events?populate=*"
            );
            if (!response.ok) {
                throw new Error("Gagal mengambil data event");
            }
            const data = await response.json();
            // Extract the data array from the response
            const eventData = data.data;
            eventData.sort((a, b) => a.id - b.id);
            const lastThreeData = eventData.slice(0, 3); // Mengambil 3 data terakhir
            console.log(lastThreeData);
            setEvents(lastThreeData);
        } catch (error) {
            console.error("Error fetching employees:", error);
            // Jika terjadi kesalahan, pastikan untuk mengatur employees menjadi array kosong
            setEvents([]);
        }
    };

    const goToNextItem = () => {
        setCurrentItemIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    const goToPrevItem = () => {
        setCurrentItemIndex(
            (prevIndex) => (prevIndex - 1 + items.length) % items.length
        );
    };

    const toggleText = () => {
        setShowText(!showText);
    };

    return (
        <>
            <div class="relative w-full grid grid-flow-row">
                <div className="relative w-full mt-0 mobile:h-full lg:h-screen">
                    <HomepageCarousel images={images} interval={4000} className="object-cover w-full h-auto mobile:w-[200%]" />
                </div>

                <div
                    id="about"
                    className="mb-20 flex items-center bg-white mx-auto mobile:justify-start mobile:w-80 mobile:mt-14 sm:w-96 lg:justify-center lg:w-3/4 lg:mt-28">
                    <div className="about-container mx-auto flex flex-col justify-center items-center bg-detik-milk lg:flex-row">
                        <div className="mobile:w-[60%] mobile:h-auto lg:w-[100%] lg:h-full lg:mr-20">
                            <div
                                className="relative rounded-lg overflow-hidden"
                                data-carousel="static">
                                <div className="relative h-78" data-carousel-inner>
                                    {items.map((item, index) => (
                                        <div
                                            key={index}
                                            className={`duration-700 ease-in-out ${currentItemIndex === index ? "block" : "hidden"
                                                }`}
                                            data-carousel-item
                                            onClick={toggleText}>
                                            <img
                                                src={item.src}
                                                className="object-cover ml-2 w-full h-full"
                                                alt={item.alt}
                                            />
                                            {showText && (
                                                <h1 class="w-full transform text-center text-base font-semibold text-black">
                                                    {item.text}
                                                </h1>
                                            )}
                                        </div>
                                    ))}
                                </div>
                                <button
                                    type="button"
                                    className="flex absolute top-1/2 left-0 z-40 items-center justify-center w-10 h-10 bg-black rounded-full hover:bg-gray-300 focus:outline-none transition"
                                    data-carousel-prev
                                    onClick={goToPrevItem}>
                                    <svg
                                        width="30px"
                                        height="30px"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                        <g
                                            id="SVGRepo_tracerCarrier"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"></g>
                                        <g id="SVGRepo_iconCarrier">
                                            {" "}
                                            <path
                                                d="M6 12H18M6 12L11 7M6 12L11 17"
                                                stroke="#ffffff"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"></path>{" "}
                                        </g>
                                    </svg>
                                </button>
                                <button
                                    type="button"
                                    className="flex absolute top-1/2 right-0 z-40 items-center justify-center w-10 h-10 bg-black rounded-full hover:bg-gray-300 focus:outline-none transition"
                                    data-carousel-next
                                    onClick={goToNextItem}>
                                    <svg
                                        width="28px"
                                        height="28px"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                        <g
                                            id="SVGRepo_tracerCarrier"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"></g>
                                        <g id="SVGRepo_iconCarrier">
                                            {" "}
                                            <path
                                                d="M5 12H19M19 12L13 6M19 12L13 18"
                                                stroke="#ffffff"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"></path>{" "}
                                        </g>
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div class="flex flex-col flex-grow mobile:mt-10 lg:ml-16">
                            <div class="pb-5 mobile:mt-0">
                                <h3
                                    id="about-headline"
                                    class="text-center lg:text-left text-sm leading-9 lg:text-5xl font-bold-700 text-black mobile:text-xl mobile:font-bold">
                                    OK OCE Gerakan Sosial Penciptaan Lapangan Kerja
                                </h3>
                            </div>
                            <div class="pb-5">
                                <h3 class="text-black text-justify font-light font-jost">
                                    Pendiri OK OCE, Sandiaga Uno, mempunyai misi ekonomi yang
                                    mengutamakan rakyat, adil, makmur, berkualitas dan berwawasan
                                    lingkungan; mendorong penciptaan wirausaha baru melalui
                                    gerakan OK OCE dengan membangun pusat kewirausahaan di tingkat
                                    Kecamatan untuk memperkuat produk-produk UMKM; serta
                                    menciptakan lapangan kerja sebanyak-banyaknya dengan
                                    mengutamakan tenaga kerja lokal.
                                </h3>
                            </div>
                            <div class="flex items-center">
                                <div class="font-jost font-semibold text-slate-600 mr-4">
                                    Share
                                </div>
                                <div class="mx-2">
                                    <a
                                        href="https://www.instagram.com/okoce.indonesia"
                                        target="_blank">
                                        <img src={instagram} class="h-7 lg:h-10" alt="instagram" />
                                    </a>
                                </div>
                                <div class="mx-2">
                                    <a
                                        href="https://www.twitter.com/okoceindonesia"
                                        target="_blank">
                                        <img src={twitter} class="h-6 lg:h-8" alt="twitter" />
                                    </a>
                                </div>
                                <div class="mx-2">
                                    <a href="https://api.whatsapp.com/send/?phone=628117411578&text&type=phone_number&app_absent=0">
                                        <img src={whatsapp} class="h-6 lg:h-8" alt="whatsapp" />
                                    </a>
                                </div>
                                <div class="mx-2">
                                    <a href="https://web.facebook.com/people/OKOCEINDONESIA/100064564037361/">
                                        <img src={facebook} class="h-9 lg:h-11" alt="facebook" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="grid grid-grid-flow-row justify-items-center items-center mobile:w-80 mobile:mx-auto sm:w-96 lg:w-full">
                    <div class="md:pt-16 pb-8">
                        <h2 class="text-sky-700 text-center font-poppins font-bold-700 mobile:text-xl mobile:font-bold lg:text-4xl ">
                            Total Anggota OK OCE INDONESIA
                        </h2>
                        <h3 className="mt-4 mb-10 text-black text-center font-poppins mobile:text-lg mobile:text-lg mobile:font-bold lg:text-xl lg:font-medium">
                            Peserta yang telah bergabung di{" "}
                            <span className="text-red-500 font-bold">OK OCE </span>sampai saat
                            ini
                        </h3>
                    </div>
                    <div class="w-full mb-20 flex justify-around items-center text-slate-700">
                        <div class="about-container flex flex-col lg:flex-row justify-center items-center bg-detik-milk mobile:w-3/4 lg:w-[35rem]">
                            <div class="lg:mt-0 flex flex-col flex-grow pl-0 justify-center items-center">
                                <AnimateAnggota />
                                <div class="pb-5">
                                    <h3 class="text-black text-center font-medium">
                                        UMKM Anggota OK OCE Indonesia
                                    </h3>
                                </div>
                            </div>
                            <div class="lg:mt-0 flex flex-col flex-grow pl-0 justify-center items-center">
                                <AnimatePenggerak />
                                <div class="pb-5">
                                    <h3 class="text-black text-justify font-medium">
                                        Penggerak OK OCE Indonesia
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="map" class="grid justify-items-center items-center w-full">
                        <div class="w-11/12">
                            <Peta />
                        </div>
                    </div>
                </div>

                <div class="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:w-10/12 lg:mx-auto lg:grid-cols-3 p-4">
                    <div class="bg-yellow-100 rounded-lg p-4 flex items-center">
                        <img src={Profile1} alt="User Icon" class="mr-4" />
                        <div>
                            <div class="text-2xl font-bold">107.618</div>
                            <div class="text-zinc-600">Total Pelaku Usaha</div>
                        </div>
                    </div>
                    <div class="bg-zinc-100 rounded-lg p-4 flex items-center">
                        <img src={Profile2} alt="Event Icon" class="mr-4" />
                        <div>
                            <div class="text-2xl font-bold">37</div>
                            <div class="text-zinc-600">Total Kerjasama Swasta
                            </div>
                        </div>
                    </div>
                    <div class="bg-purple-100 rounded-lg p-4 flex items-center">
                        <img src={Profile3} alt="Training Icon" class="mr-4" />
                        <div>
                            <div class="text-2xl font-bold">2</div>
                            <div class="text-zinc-600">Total Kerjasama Pemerintah</div>
                        </div>
                    </div>
                    <div class="bg-blue-100 rounded-lg p-4 flex items-center lg:col-span-2">
                        <img src={Profile4} alt="Consultation Icon" class="mr-4" />
                        <div>
                            <div class="text-2xl font-bold">200</div>
                            <div class="text-zinc-600">Total Kerjasama Penggerak</div>
                        </div>
                    </div>
                    <div class="bg-teal-100 rounded-lg p-4 flex items-center">
                        <img src={Profile5} alt="Community Icon" class="mr-4" />
                        <div>
                            <div class="text-2xl font-bold">60</div>
                            <div class="text-zinc-600">Total Kerjasama Pendidikan</div>
                        </div>
                    </div>
                </div>

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
                                            src={event.attributes.foto_event.data.attributes.url}
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
                                            src={data.attributes.foto_berita.data.attributes.url}
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
                                            src={data.attributes?.foto_berita?.data?.attributes?.url}
                                            alt=""
                                        />
                                        <div className="relative group mb-2 mt-6 h-20">
                                            <div className="text-base leading-7 text-white font-bold text-xl overflow-hidden line-clamp-2">
                                                {data.attributes?.judul_berita}
                                            </div>
                                            <div className="absolute left-0 bottom-full mb-2 hidden w-full text-xs text-white bg-black p-2 rounded group-hover:block">
                                                {data.attributes?.judul_berita}
                                            </div>
                                        </div>
                                        <p className="text-white">
                                            Author: {data.attributes?.author_berita}
                                        </p>
                                        <div className="flex space-x-4 my-4">
                                            <span className="bg-white text-blue-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded">
                                                Tanggal Publish: {data.attributes?.tanggal_berita}
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
                        <Youtube src="https://www.youtube.com/embed/5ThtiH6g0MQ?si=03pi3GAI_Gokz4X7" />
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
                    <div class="grid grid-cols-2 gap-6 justify-items-center mobile:grid-cols-1 mobile:px-10 md:grid-cols-4  lg:p-10">
                        <div>
                            <img
                                class="h-auto max-w-full rounded-lg shadow-md"
                                src={Azindo}
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                class="h-auto max-w-full rounded-lg shadow-md"
                                src={Cetak}
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                class="h-auto max-w-full rounded-lg shadow-md"
                                src={Eduv}
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                class="h-auto max-w-full rounded-lg shadow-md"
                                src={Inotek}
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                class="h-auto max-w-full rounded-lg shadow-md"
                                src={Kkindo}
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                class="h-auto max-w-full rounded-lg shadow-md"
                                src={Pajakonline}
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                class="h-auto max-w-full rounded-lg shadow-md"
                                src={Smeshub}
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                class="h-auto max-w-full rounded-lg shadow-md"
                                src={Travel}
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                class="h-auto max-w-full rounded-lg shadow-md"
                                src={Wgs}
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                class="h-auto max-w-full rounded-lg shadow-md"
                                src={Ekles}
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                class="h-auto max-w-full rounded-lg shadow-md"
                                src={Indivara}
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                class="h-auto max-w-full rounded-lg shadow-md"
                                src={Jnj}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                <div class="bg-white m-6 pb-20 mobile:w-72 mobile:mx-auto sm:w-96 lg:w-11/12">
                    <div class="md:pt-8 pb-14">
                        <h3 class="text-sky-700 text-center font-poppins font-bold-700 mobile:mt-10 mobile:text-xl mobile:font-bold md:text-2xl lg:text-4xl">
                            Pendapat Mereka Tentang OK OCE INDONESIA!
                        </h3>
                    </div>
                    <div class="grid mobile:grid-cols-1 mobile:grid-flow-row mobile:gap-4 lg:grid-cols-3">
                        <section class="bg-white">
                            <div class="bg-gray-500 max-w-sm min-h-3/5 px-4 py-8 mx-auto text-center rounded-3xl lg:py-16 lg:px-6">
                                <figure class="max-w-screen-md mx-auto">
                                    <svg
                                        class="h-12 mx-auto mb-3 text-black dark:text-black"
                                        viewBox="0 0 24 27"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                    <blockquote>
                                        <p class="font-medium text-gray-900 dark:text-white lg:text-2xl ">
                                            "Program OK OCE Indonesia telah mendapat berbagai
                                            tanggapan positif karena dianggap mampu memberdayakan
                                            pengusaha kecil dan menengah melalui pelatihan
                                            kewirausahaan dan akses permodalan yang lebih mudah."
                                        </p>
                                    </blockquote>
                                    <figcaption class="flex items-center justify-center mt-6 space-x-3">
                                        <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                                            <div class="pr-3 font-medium text-gray-900 text-white">
                                                Ihsania Izzatun Nisa
                                            </div>
                                            <div class="pl-3 text-sm font-bold text-black">
                                                Pendamping Program
                                            </div>
                                        </div>
                                    </figcaption>
                                </figure>
                            </div>
                        </section>
                        <section class="bg-white">
                            <div class="bg-gray-500 max-w-sm min-h-[100%] px-4 py-8 mx-auto text-center rounded-3xl lg:py-16 lg:px-6">
                                <figure class="max-w-screen-md mx-auto">
                                    <svg
                                        class="h-12 mx-auto mb-3 text-black dark:text-black"
                                        viewBox="0 0 24 27"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                    <blockquote>
                                        <p class="font-medium text-gray-900 dark:text-white lg:text-2xl">
                                            "Program OK OCE Indonesia dipuji banyak pihak karena
                                            efektif memberdayakan pengusaha kecil dan menengah melalui
                                            pelatihan kewirausahaan dan akses permodalan yang lebih
                                            mudah."
                                        </p>
                                    </blockquote>
                                    <figcaption class="flex items-center justify-center mt-14 space-x-3">
                                        <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                                            <div class="pr-3 font-medium text-gray-900 text-white">
                                                Nauval Firdaus
                                            </div>
                                            <div class="pl-3 text-sm font-bold text-black">
                                                Pendamping UMKM
                                            </div>
                                        </div>
                                    </figcaption>
                                </figure>
                            </div>
                        </section>
                        <section class="bg-white">
                            <div class="bg-gray-500 max-w-sm min-h-[100%] px-4 py-8 mx-auto text-center rounded-3xl lg:py-16 lg:px-6">
                                <figure class="max-w-screen-md mx-auto">
                                    <svg
                                        class="h-12 mx-auto mb-3 text-black dark:text-black"
                                        viewBox="0 0 24 27"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                    <blockquote>
                                        <p class="font-medium text-gray-900 dark:text-white lg:text-2xl">
                                            "Program OK OCE Indonesia dianggap sukses oleh banyak
                                            orang dalam membantu menciptakan lapangan kerja baru dan
                                            meningkatkan keterampilan kewirausahaan masyarakat."
                                        </p>
                                    </blockquote>
                                    <figcaption class="flex items-center justify-center mt-[5.5rem] space-x-3">
                                        <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                                            <div class="pr-3 font-medium text-gray-900 text-white">
                                                Rico Hadeta Putra
                                            </div>
                                            <div class="pl-3 text-sm font-bold text-black">
                                                MSIB Batch 6
                                            </div>
                                        </div>
                                    </figcaption>
                                </figure>
                            </div>
                        </section>
                    </div>
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
