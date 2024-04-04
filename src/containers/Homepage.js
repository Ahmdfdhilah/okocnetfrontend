/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import sandiaga from "../asset/img/sandiaga-uno-ok.png";
import iim from "../asset/img/IimRusyamsi-Styled.png";
import indra from "../asset/img/indra-uno-styled.png";
import facebook from "../asset/img/facebook.png";
import instagram from "../asset/img/instagram.png";
import twitter from "../asset/img/twitter.webp";
import whatsapp from "../asset/img/whatsapp.png";
import map from "../asset/img/map.png"
import Top7 from "../asset/img/7top-rb.webp"
import Pelatihan from "../asset/img/Pelatihan.png"
import Pendaftaran from "../asset/img/Pendaftaran.png"
import Pendampingan from "../asset/img/Pendampingan.png"
import Perizinan from "../asset/img/Perizinan.png"
import Pemasaran from "../asset/img/Pemasaran.png"
import Pelaporan from "../asset/img/Laporan Keuangan.png"
import Permodalan from "../asset/img/Permodalan.png"


const Homepage = () => {
    return (
        <>
            <section class="mt-[5em] bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
                <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                    <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Gerakan Sosial Untuk Indonesia!</h1>
                    <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">OK OCE hadir sebagai gerakan sosial yang mampu menciptakan lapangan kerja dan meningkatkan penghasilan masyarakat melalui pelatihan dan pendampingan kewirausahaan.</p>
                    <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                        <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                            Get started
                            <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                        <a href="#" class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                            Learn more
                        </a>
                    </div>
                </div>
            </section>

            <div id="about" class="mt-[8em] w-full flex justify-center items-center bg-white pt-16 pb-20 lg:pb-48">
                <div class="w-3/4 about-container flex flex-col lg:flex-row justify-center items-center bg-detik-milk">
                    <div class="relative flex w-full justify-center lg:justify-end flex-shrink-0 md:w-5/12 pr-0 lg:pr-4 text-justify">
                        <div class="flex items-center justify-center w-full h-full py-10 sm:py-8 px-4">

                            <div class="sandiaga-slide">
                                <input class="sr-only peer" type="radio" name="carousel" id="carousel-1" checked />

                                <div
                                    class="w-full lg:w-96 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg  transition-all duration-300 opacity-0 peer-checked:opacity-100 peer-checked:z-10 z-0">
                                    <img class="rounded-t-lg w-full lg:w-96" src={sandiaga} alt="" />
                                    <div class="p-4">
                                        <h1
                                            class="hover:cursor-pointer mt-2 text-gray-900 font-semibold text-md font-jost tracking-tight text-center">
                                            Founder - Sandiaga Uno
                                        </h1>
                                    </div>
                                    <div class="absolute top-1/2 w-full flex justify-between z-20">
                                        <label for="carousel-3"
                                            class="inline-block text-red-600 cursor-pointer -translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 20 20"
                                                fill="currentColor">
                                                <path fill-rule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                        </label>
                                        <label for="carousel-2"
                                            class="inline-block text-red-600 cursor-pointer translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 20 20"
                                                fill="currentColor">
                                                <path fill-rule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="indra-uno-slide">
                                <input class="sr-only peer" type="radio" name="carousel" id="carousel-2" />
                                <div
                                    class="w-full lg:w-96 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg transition-all duration-300 opacity-0 peer-checked:opacity-100 peer-checked:z-10 z-0">
                                    <img class="rounded-t-lg w-full lg:w-96" src={indra} alt="" />
                                    <div class="p-4">
                                        <h1
                                            class="font-jost hover:cursor-pointer mt-2 text-gray-900 font-semibold text-md tracking-tight text-center">
                                            Ketua Dewan Pembina - Indra Uno
                                        </h1>
                                    </div>
                                    <div class="absolute top-1/2 w-full flex justify-between z-20">
                                        <label for="carousel-1"
                                            class="inline-block text-blue-600 cursor-pointer -translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 20 20"
                                                fill="currentColor">
                                                <path fill-rule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                        </label>
                                        <label for="carousel-3"
                                            class="inline-block text-blue-600 cursor-pointer translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 20 20"
                                                fill="currentColor">
                                                <path fill-rule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div class="iim-rusyamsi-slide">
                                <input class="sr-only peer" type="radio" name="carousel" id="carousel-3" />
                                <div
                                    class="w-full lg:w-96 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg transition-all duration-300 opacity-0 peer-checked:opacity-100 peer-checked:z-10 z-0">
                                    <img class="rounded-t-lg w-full lg:w-96"
                                        src={iim}
                                        alt="" />
                                    <div class="py-4 px-8">
                                        <h1 class="hover:cursor-pointer mt-2 text-gray-900 font-semibold text-md text-center font-jost tracking-tight">
                                            Ketua Umum - Iim Rusyamsi
                                        </h1>
                                    </div>
                                    <div class="absolute top-1/2 w-full flex justify-between z-20">
                                        <label for="carousel-2"
                                            class="inline-block text-red-600 cursor-pointer -translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 20 20"
                                                fill="currentColor">
                                                <path fill-rule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                        </label>
                                        <label for="carousel-1"
                                            class="inline-block text-red-600 cursor-pointer translate-x-5 bg-white rounded-full shadow-md active:translate-y-0.5">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 20 20"
                                                fill="currentColor">
                                                <path fill-rule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="pt-40 lg:mt-0 flex flex-col flex-grow pl-0 lg:pl-4 lg:pt-0">
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

            <div class="bg-white pb-20">
                <div class="md:pt-8 pb-8">
                    <h3 class="text-okoce-blue text-center font-poppins text-xl md:text-2xl lg:text-4xl font-bold-700">Sebaran UMKM di Indonesia</h3>
                </div>
                <div id="map" class="h-3/5 w-4/5 mx-auto">
                    <div class="flex justify-center text-justify">
                        <img src={map} alt="" />
                    </div>
                </div>

                <div class="w-full flex justify-center items-center pt-16 text-slate-700">
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

            <div class="bg-white pb-20">
                <div class="md:pt-8 pb-8">
                    <h3 class="text-okoce-blue text-center font-poppins text-xl md:text-2xl lg:text-4xl font-bold-700">7 Tahapan OK OCE Prima</h3>
                </div>
                <div class="flex justify-center grid grid-rows-2 grid-flow-col gap-4">

                    <div class="row-span-2">
                        <img class="h-[20em]" src={Top7} />
                    </div>
                    <div class="mt-4">
                        <img class="h-[10em]" src={Pendaftaran} />
                    </div>
                    <div class="mt-4">
                        <img class="h-[10em]" src={Pelatihan} />
                    </div>
                    <div class="mt-4">
                        <img class="h-[10em]" src={Pendampingan} />
                    </div>
                    <div class="mt-4">
                        <img class="h-[10em]" src={Perizinan} />
                    </div>
                    <div class="mt-4">
                        <img class="h-[10em]" src={Pemasaran} />
                    </div>
                    <div class="mt-4">
                        <img class="h-[10em]" src={Pelaporan} />
                    </div>
                    <div class="col-span-2 mt-4">
                        <img class="h-[10em]" src={Permodalan} />
                    </div>
                </div>
            </div>

            <div class="bg-white pb-20">
                <div class="md:pt-8 pb-8">
                    <h3 class="text-okoce-blue text-center font-poppins text-xl md:text-2xl lg:text-4xl font-bold-700">Event OK OCE Indonesia</h3>
                </div>
                <div class="flex justify-center md:pt-8 pb-8">
                    <h3 class="w-[55em] text-okoce-blue text-center font-poppins text-xs md:text-xl lg:text-xl font-bold-700">Berikut merupakan kalender mengenai acara-acara yang diselenggarakan oleh OK OCE Indonesia. Ayo Sobat, daftar OK OCE sekarang juga dan nikmati berbagai fasilitas pemasaran produk melalui acara OK OCE secara gratis, lho!</h3>
                </div>
            </div>
        </>
    );
};

export default Homepage;