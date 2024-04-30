/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import { useState } from "react";

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
import News1 from "@img/news-1.webp";
import Okocetv from "@img/okoce-tv.webp";
import Bg from "@img/blob-scene-haikei.svg";
// - component
import Peta from "@components/Peta";
import Youtube from "@components/Youtube";
import Calendar from "@components/Calendar";
// - galeri
import Berita1 from "@galeri/Munawar.jpg";
import Berita2 from "@galeri/Berbagi Berkah.png";
import Berita3 from "@galeri/copywriting.png";
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



const Homepage = () => {
    const [currentItemIndex, setCurrentItemIndex] = useState(0);
    const [showText, setShowText] = useState(true);


    const items = [
        { src: sandiaga, alt: 'Slide 1', text: 'Founder - Sandiaga Uno' },
        { src: iim, alt: 'Slide 2', text: 'Ketua Umum - Iim Rusyamsi' },
        { src: indra, alt: 'Slide 3', text: 'Ketua Dewan Pembina - Indra Uno' }
    ];

    const goToNextItem = () => {
        setCurrentItemIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    const goToPrevItem = () => {
        setCurrentItemIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    };

    const toggleText = () => {
        setShowText(!showText);
    };

    return (
        <>
            <section class="mt-[5em] bg-center bg-no-repeat" style={{ backgroundImage: `url(${Bg})`, width: `100%`, height: `100%`, backgroundSize: `cover` }}>
                <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                    <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Gerakan Sosial Untuk Indonesia!</h1>
                    <p class="mb-8 text-lg font-normal text-white lg:text-xl sm:px-16 lg:px-48">OK OCE hadir sebagai gerakan sosial yang mampu menciptakan lapangan kerja dan meningkatkan penghasilan masyarakat melalui pelatihan dan pendampingan kewirausahaan.</p>
                    <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                        <a href="https://www.ecsys.okoce.net/register" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-red-600 hover:bg-white hover:text-black focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                            DAFTAR SEKARANG
                        </a>
                        <a href="#" class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                            PANDUAN DAFTAR OK OCE
                        </a>
                    </div>
                </div>
            </section>

            <div id="about" className="mt-[5em] mb-20 w-full flex justify-center items-center bg-white pt-16">
                <div className="w-3/4 about-container flex flex-col lg:flex-row justify-center items-center bg-detik-milk">
                    <div className="w-[100%] mx-auto p-2">
                        <div className="relative rounded-lg overflow-hidden" data-carousel="static">
                            <div className="relative h-78" data-carousel-inner>
                                {items.map((item, index) => (
                                    <div key={index} className={`duration-700 ease-in-out ${currentItemIndex === index ? 'block' : 'hidden'}`} data-carousel-item onClick={toggleText}>
                                        <img src={item.src} className="object-cover ml-2 w-full h-full" alt={item.alt} />
                                        {showText && (
                                            <h1 class="w-full transform text-center text-base font-semibold text-black">
                                                {item.text}
                                            </h1>
                                        )}
                                    </div>
                                ))}
                            </div>
                            <button type="button" className="flex absolute top-1/2 left-0 z-40 items-center justify-center w-10 h-10 bg-black rounded-full hover:bg-gray-300 focus:outline-none transition" data-carousel-prev onClick={goToPrevItem}>
                                <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 12H18M6 12L11 7M6 12L11 17" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                            </button>
                            <button type="button" className="flex absolute top-1/2 right-0 z-40 items-center justify-center w-10 h-10 bg-black rounded-full hover:bg-gray-300 focus:outline-none transition" data-carousel-next onClick={goToNextItem}>
                                <svg width="28px" height="28px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                            </button>
                        </div>
                    </div>

                    <div class="ml-10 pt-40 lg:mt-0 flex flex-col flex-grow pl-0 lg:pl-4 lg:pt-0">
                        <div class="pb-5">
                            <h3 id="about-headline"
                                class="text-center lg:text-left font-poppins text-sm leading-9 lg:text-5xl font-bold-700 text-slate-700">
                                OK OCE Gerakan Sosial Penciptaan Lapangan Kerja
                            </h3>
                        </div>
                        <div class="pb-5">
                            <h3 class="text-black text-justify font-light font-jost">
                                Pendiri OK OCE, Sandiaga Uno, mempunyai misi ekonomi yang mengutamakan rakyat, adil, makmur,
                                berkualitas dan berwawasan lingkungan; mendorong penciptaan wirausaha baru melalui gerakan OK
                                OCE dengan membangun pusat kewirausahaan di tingkat Kecamatan untuk memperkuat produk-produk
                                UMKM; serta menciptakan lapangan kerja sebanyak-banyaknya dengan mengutamakan tenaga kerja
                                lokal.
                            </h3>
                        </div>
                        <div class="flex items-center">
                            <div class="font-jost font-semibold text-slate-600 mr-4">Share</div>
                            <div class="mx-2">
                                <a href="https://www.instagram.com/okoce.indonesia" target="_blank">
                                    <img src={instagram} class="h-7 lg:h-10" alt="instagram" />
                                </a>
                            </div>
                            <div class="mx-2">
                                <a href="https://www.twitter.com/okoceindonesia" target="_blank">
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

            <div class="pb-20">
                <div class="md:pt-8 pb-8">
                    <h3 class="text-okoce-blue text-center font-poppins text-xl md:text-2xl lg:text-4xl font-bold-700">Sebaran UMKM di Indonesia</h3>
                </div>
                <div id="map" class="grid justify-items-center">
                    <div class="w-3/4">
                        <Peta />
                    </div>
                </div>

                <div class="w-full flex justify-center items-center text-slate-700">
                    <div class="w-3/4  about-container flex flex-col lg:flex-row justify-center items-center bg-detik-milk">
                        <div class="lg:mt-0 flex flex-col flex-grow pl-0 justify-center items-center">
                            <div class="pb-5">
                                <h3 id="about-headline"
                                    class="text-center lg:text-left font-poppins text-2xl lg:text-5xl font-bold-700">
                                    14.367
                                </h3>
                            </div>
                            <div class="pb-5">
                                <h3 class="text-black text-justify font-light font-jost">
                                    UMKM Anggota OK OCE Indonesia
                                </h3>
                            </div>
                        </div>
                        <div class="lg:mt-0 flex flex-col flex-grow pl-0 justify-center items-center">
                            <div class="pb-5">
                                <h3 id="about-headline"
                                    class="text-center lg:text-left font-poppins text-2xl lg:text-5xl font-bold-700">
                                    117
                                </h3>
                            </div>
                            <div class="pb-5">
                                <h3 class="text-black text-justify font-light font-jost">
                                    Penggerak OK OCE Indonesia
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-white pb-20 grid justify-items-center">
                <div class="md:pt-8 pb-8 mb-4">
                    <h3 class="text-okoce-blue text-center font-poppins text-xl md:text-2xl lg:text-4xl font-bold-700">7 Tahapan OK OCE Prima</h3>
                </div>
                <div class="lg:w-3/5 lg:grid lg:justify-items-center lg:grid-cols-5 lg:grid-flow-col">
                    <div class="md:row-span-2 md:mr-8 hover:drop-shadow-2xl">
                        <a href="/7top">
                            <img class="md:h-[20em]" src={Top7} />
                        </a>
                    </div>
                    <div class="mt-12 md:mt-4 hover:drop-shadow-2xl">
                        <img class="md:h-[10em] object-cover mx-auto" src={Pendaftaran} />
                    </div>
                    <a href="/pelatihan">
                        <div class="mt-12 md:mt-4 hover:drop-shadow-2xl">
                            <img class="md:h-[10em] object-cover mx-auto" src={Pelatihan} />
                        </div>
                    </a>
                    <a href="/pendampingan">
                        <div class="mt-12 md:mt-4 hover:drop-shadow-2xl">
                            <img class="h-[10em] sm:mx-auto object-cover mx-auto" src={Pendampingan} />
                        </div>
                    </a>
                    <a href="/perizinan">
                        <div class="mt-12 md:mt-4 hover:drop-shadow-2xl">
                            <img class="md:h-[10em] object-cover mx-auto" src={Perizinan} />
                        </div>
                    </a>
                    <a href="/pemasaran">
                        <div class="mt-12 md:mt-4 hover:drop-shadow-2xl">
                            <img class="md:h-[10em] object-cover mx-auto" src={Pemasaran} />
                        </div>
                    </a>
                    <a href="/pelaporankeuangan">
                        <div class="mt-12 md:mt-4 hover:drop-shadow-2xl">
                            <img class="md:h-[10em] object-cover mx-auto" src={Pelaporan} />
                        </div>
                    </a>
                    <a href="/permodalan">
                        <div class="mt-12 md:mt-4 hover:drop-shadow-2xl">
                            <img class="md:h-[10em] object-cover mx-auto" src={Permodalan} />
                        </div>
                    </a>
                </div>
            </div>

            <div class="bg-white mb-14">
                <div class="mt-10 pb-4">
                    <h3 class="text-okoce-blue text-center font-poppins text-xl md:text-2xl lg:text-4xl font-bold-700">Event OK OCE Indonesia</h3>
                </div>
                <div class="flex justify-center">
                    <h3 class="w-[55em] text-okoce-blue text-center font-poppins text-xs md:text-xl lg:text-xl font-bold-700">Berikut merupakan kalender mengenai acara-acara yang diselenggarakan oleh OK OCE Indonesia. Ayo Sobat, daftar OK OCE sekarang juga dan nikmati berbagai fasilitas pemasaran produk melalui acara OK OCE secara gratis, lho!</h3>
                </div>
            </div>
            <div class="mb-40 grid justify-center items-center grid-rows-2 grid-flow-col gap-2">
                <div class="p-4 h-[90%] mr-10 mt-10 bg-white drop-shadow-2xl row-span-2 rounded-3xl">
                    <Calendar />
                </div>
                <div class="text-xl font-bold">Daftar Acara
                    <div class="grid grid-flow-col gap-4 mt-4">
                        <img class="max-h-[10rem]" src={News1} />
                        <img class="max-h-[10rem]" src={News1} />
                        <img class="max-h-[10rem]" src={News1} />
                    </div>
                </div>
                <div class="text-xl font-bold">Daftar Pelatihan
                    <div class="grid grid-flow-col gap-4 mt-4">
                        <img class="max-h-[10rem]" src={News1} />
                        <img class="max-h-[10rem]" src={News1} />
                        <img class="max-h-[10rem]" src={News1} />
                    </div>
                </div>
            </div>

            <div class="bg-white m-8 pb-20">
                <div class="md:pt-8 pb-8">
                    <h3 class="text-okoce-blue text-center font-poppins text-xl md:text-2xl lg:text-4xl font-bold-700">Berita Ok Oce Indonesia</h3>
                </div>

                <div class="flex flex-row justify-evenly">
                    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img class="object-cover rounded-t-lg min-h-96 max-h-96 w-full" src={Berita1} alt="" />
                        </a>
                        <div class="p-5">
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Munawar Aziz Bagikan ‘Rahasia Membangun Merek’ Yang Kuat Melalui One Rule, Two Principal</h5>
                            </a>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Jakarta – Di bulan Ramadhan, OK OCE terus memberikan kebermanfaatan untuk pelaku UMKM, salah satunya melalui Program Ramadhan yang didalamnya terdapat Pelatihan Strategi Pemasaran Produk atau Jasa.</p>
                            <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Read more
                                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img class="object-cover rounded-t-lg min-h-96 w-full" src={Berita2} alt="" />
                        </a>
                        <div class="p-5">
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Disambut Bupati Ponorogo, Mahasiswa Amerika Antusias Dengan Budaya Indonesia!</h5>
                            </a>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Jakarta – Acara Buka Puasa OK OCE pada hari Selasa (26/3) di Hotel Amaris Pancoran turut menghadirkan Santunan kepada Mualaf. Momentum berbagi kebaikan ini turut diberikan langsung oleh Founder OK OCE, Sandiaga Salahuddin Uno.</p>
                            <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Read more
                                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img class="object-cover rounded-t-lg min-h-96 max-h-96 w-full" src={Berita3} alt="" />
                        </a>
                        <div class="p-5">
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">OK OCE Bantu Pelaku Usaha Melalui Pelatihan Copywriting Produk, ‘Lebih Dari Sekedar Kata-Kata’</h5>
                            </a>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                Okocenews.com – Dalam bulan penuh berkah, OK OCE selaku Gerakan Sosial penciptaan lapangan kerja melalui pendampingan wirausaha mengadakan serangkaian Program Ramadhan, salah satunya ‘Pelatihan Ramadhan’ dengan tema Effective Copywriting Skill pada Kamis (21/03).</p>
                            <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Read more
                                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-white m-6 pb-20">
                <div class="md:pt-8 pb-8">
                    <h3 class="text-okoce-blue text-center font-poppins text-xl md:text-2xl lg:text-4xl font-bold-700">Jadilah salah satu dari mitra kami!</h3>
                </div>

                <div class="p-10 grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
                    <div>
                        <img class="h-auto max-w-full rounded-lg shadow-md" src={Azindo} alt="" />
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg shadow-md" src={Cetak} alt="" />
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg shadow-md" src={Eduv} alt="" />
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg shadow-md" src={Inotek} alt="" />
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg shadow-md" src={Kkindo} alt="" />
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg shadow-md" src={Pajakonline} alt="" />
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg shadow-md" src={Smeshub} alt="" />
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg shadow-md" src={Travel} alt="" />
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg shadow-md" src={Wgs} alt="" />
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg shadow-md" src={Ekles} alt="" />
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg shadow-md" src={Indivara} alt="" />
                    </div>
                    <div>
                        <img class="h-auto max-w-full rounded-lg shadow-md" src={Jnj} alt="" />
                    </div>
                </div>
            </div>

            <div class="grid justify-items-center mb-[4rem]">
                <div class="mb-8">
                    <img class="h-auto max-w-full" src={Okocetv} alt="" />
                </div>
                <div class="m-auto">
                    <Youtube src="https://www.youtube.com/embed/5ThtiH6g0MQ?si=nDPKDSV7jAU5nfUw" />
                </div>
                <div class="flex justify-center md:pt-8 pb-8">
                    <h3 class="w-[55em] text-okoce-blue text-center font-poppins text-xs md:text-lg lg:text-lg font-bold-700">Tonton video lainnya di YouTube OK OCE Indonesia.</h3>
                </div>
            </div>

            <div class="bg-white m-6 pb-20">
                <div class="md:pt-8 pb-8">
                    <h3 class="text-okoce-blue text-center font-poppins text-xl md:text-2xl lg:text-4xl font-bold-700">Pendapat Mereka Tentang Ok Oce Indonesia!</h3>
                </div>
                <div class="grid grid-cols-3">
                    <section class="bg-white">
                        <div class="bg-gray-600 max-w-sm px-4 py-8 mx-auto text-center rounded-3xl lg:py-16 lg:px-6">
                            <figure class="max-w-screen-md mx-auto">
                                <svg class="h-12 mx-auto mb-3 text-black dark:text-black" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" />
                                </svg>
                                <blockquote>
                                    <p class="text-2xl font-medium text-gray-900 dark:text-white">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
                                </blockquote>
                                <figcaption class="flex items-center justify-center mt-6 space-x-3">
                                    <img class="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile" />
                                    <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                                        <div class="pr-3 font-medium text-gray-900 dark:text-white">Micheal Gough</div>
                                        <div class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">CEO at Google</div>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                    </section>
                    <section class="bg-white">
                        <div class="bg-gray-600 max-w-sm px-4 py-8 mx-auto text-center rounded-3xl lg:py-16 lg:px-6">
                            <figure class="max-w-screen-md mx-auto">
                                <svg class="h-12 mx-auto mb-3 text-black dark:text-black" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" />
                                </svg>
                                <blockquote>
                                    <p class="text-2xl font-medium text-gray-900 dark:text-white">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
                                </blockquote>
                                <figcaption class="flex items-center justify-center mt-6 space-x-3">
                                    <img class="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile" />
                                    <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                                        <div class="pr-3 font-medium text-gray-900 dark:text-white">Micheal Gough</div>
                                        <div class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">CEO at Google</div>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                    </section>
                    <section class="bg-white">
                        <div class="bg-gray-600 max-w-sm px-4 py-8 mx-auto text-center rounded-3xl lg:py-16 lg:px-6">
                            <figure class="max-w-screen-md mx-auto">
                                <svg class="h-12 mx-auto mb-3 text-black dark:text-black" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" />
                                </svg>
                                <blockquote>
                                    <p class="text-2xl font-medium text-gray-900 dark:text-white">"Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
                                </blockquote>
                                <figcaption class="flex items-center justify-center mt-6 space-x-3">
                                    <img class="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile" />
                                    <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                                        <div class="pr-3 font-medium text-gray-900 dark:text-white">Micheal Gough</div>
                                        <div class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">CEO at Google</div>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
};

export default Homepage;