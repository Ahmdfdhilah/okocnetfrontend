/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";
import BiruBig from "../asset/img/merchandise/OK-01/kaos-ok-oce-logo-besar-biru-scaled.webp";
import MerahBig from "../asset/img/merchandise/OK-01/kaos-ok-oce-logo-besar-merah-scaled.webp";
import HitamBig from "../asset/img/merchandise/OK-01/kaos-ok-oce-logo-besar-hitam-scaled.webp";
import Kaos1a from "../asset/img/merchandise/OK-02/Kaos-01-scaled.webp";
import Kaos1b from "../asset/img/merchandise/OK-02/IMG-20220225-WA0013.png";
import Kaos1c from "../asset/img/merchandise/OK-02/IMG-20220225-WA0007.png";
import Kaos1d from "../asset/img/merchandise/OK-02/IMG-20220225-WA0010.png";
import Kaos1e from "../asset/img/merchandise/OK-02/IMG-20220225-WA0011.png";

const Marchendise = () => {
    const [currentItemIndex, setCurrentItemIndex] = useState(0);
    const [currentItemIndex2, setCurrentItemIndex2] = useState(0);

    const items = [
        { src: BiruBig, alt: 'Slide 1' },
        { src: MerahBig, alt: 'Slide 2' },
        { src: HitamBig, alt: 'Slide 3' }
    ];
    const items2 = [
        { src: Kaos1a, alt: 'Kaos 1' },
        { src: Kaos1b, alt: 'Kaos 2' },
        { src: Kaos1c, alt: 'Kaos 3' },
        { src: Kaos1d, alt: 'Kaos 4' },
        { src: Kaos1e, alt: 'Kaos 5' }
    ];

    const goToNextItem = () => {
        setCurrentItemIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    const goToPrevItem = () => {
        setCurrentItemIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    };

    const goToNextItem2 = () => {
        setCurrentItemIndex2((prevIndex) => (prevIndex + 1) % items2.length);
    };

    const goToPrevItem2 = () => {
        setCurrentItemIndex2((prevIndex) => (prevIndex - 1 + items2.length) % items2.length);
    };
    return (
        <>
            <div class="mt-[6rem] bg-gray-400 w-full h-[20rem] grid justify-center content-center">
                <h1 class="font-extrabold text-3xl text-center">Ok Oce Official <br /> <span class="text-5xl">Merchandise</span></h1>
            </div>
            <div id="products" class="mt-[7rem] w-full flex justify-center bg-white text-slate-700">
                <div class="w-3/4">
                    {/* <!-- CARDS --> */}
                    <div class="mb-16 flex">
                        <div className="w-[20rem] mx-auto p-2">
                            <div className="relative rounded-lg overflow-hidden shadow-lg" data-carousel="static">
                                <div className="relative h-78" data-carousel-inner>
                                    {items.map((item, index) => (
                                        <div key={index} className={`duration-700 ease-in-out ${currentItemIndex === index ? 'block' : 'hidden'}`} data-carousel-item>
                                            <img src={item.src} className="object-cover w-full h-full" alt={item.alt} />
                                            {item.text && (
                                                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-semibold text-white md:text-2xl dark:text-gray-800">
                                                    {item.text}
                                                </span>
                                            )}
                                        </div>
                                    ))}
                                </div>
                                <button type="button" className="flex absolute top-1/2 left-3 z-40 items-center justify-center w-10 h-10 bg-gray-200/50 rounded-full hover:bg-gray-300 focus:outline-none transition" data-carousel-prev onClick={goToPrevItem}>
                                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                                    </svg>
                                </button>
                                <button type="button" className="flex absolute top-1/2 right-3 z-40 items-center justify-center w-10 h-10 bg-gray-200/50 rounded-full hover:bg-gray-300 focus:outline-none transition" data-carousel-next onClick={goToNextItem}>
                                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div class="w-full lg:w-2/3 pl-0 lg:pl-10 lg:pt-0 font-poppins flex flex-col justify-between">
                            <div class="flex flex-wrap">
                                <a href="https://wa.me/6282210109142?text=Hallo%20Saya%20tertarik%20dengan%20Merchandise%20OK-02" class="flex-auto text-xl font-semibold">Kaos Gerakan Sosial OK OCE</a>
                                <div class="text-xl font-semibold text-gray-500">Rp. 105.000,-</div>
                                <div class="flex-none w-full mt-2 text-sm font-medium text-gray-500">Sisa stok: 16</div>
                            </div>
                            <div>
                                <p class="text-justify py-3 lg:py-0">Kaos OK OCE, dengan logo OK OCE Besar di bagian dada, dan logo OKOCE.NET di bagian punggung belakang.  Dibuat menggunakan bahan kaos cotton combed soft 30s. Tersedia dalam bentuk lengan pendek warna ( Hitam, Merah, Biru )</p>
                            </div>
                            <div class="flex items-baseline mt-4 mb-6 text-gray-700">
                                <div class="flex space-x-2">
                                    <label class="text-center">
                                        <input type="radio" class="flex items-center justify-center w-6 h-6 bg-gray-100 rounded-lg" name="size" value="xs" />XS</label>

                                    <label class="text-center">
                                        <input type="radio" class="flex items-center justify-center w-6 h-6" name="size" value="s" />S</label>

                                    <label class="text-center">
                                        <input type="radio" class="flex items-center justify-center w-6 h-6" name="size" value="m" />M</label>

                                    <label class="text-center">
                                        <input type="radio" class="flex items-center justify-center w-6 h-6" name="size" value="l" />L</label>

                                    <label class="text-center">
                                        <input type="radio" class="flex items-center justify-center w-6 h-6" name="size" value="xl" />XL</label>
                                </div>
                            </div>
                            <div class="flex mb-4 text-sm font-medium">
                                <a href="https://wa.me/6282210109142?text=Hallo%20Saya%20tertarik%20dengan%20Merchandise%20OK-02" target="blank" class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">Beli sekarang</a>
                            </div>
                        </div>
                    </div>

                    {/* <!-- CARDS --> */}
                    <div class="mb-16 flex">
                        <div className="w-[20rem] mx-auto p-2">
                            <div className="relative rounded-lg overflow-hidden shadow-lg" data-carousel="static">
                                <div className="relative max-h-70" data-carousel-inner>
                                    {items2.map((item, index) => (
                                        <div key={index} className={`duration-700 ease-in-out ${currentItemIndex2 === index ? 'block' : 'hidden'}`} data-carousel-item>
                                            <img src={item.src} class="object-container size-full h-[23rem]" alt={item.alt} />
                                            {item.text && (
                                                <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-semibold text-white md:text-2xl dark:text-gray-800">
                                                    {item.text}
                                                </span>
                                            )}
                                        </div>
                                    ))}
                                </div>
                                <button type="button" className="flex absolute top-1/2 left-3 z-40 items-center justify-center w-10 h-10 bg-gray-200/50 rounded-full hover:bg-gray-300 focus:outline-none transition" data-carousel-prev onClick={goToPrevItem2}>
                                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                                    </svg>
                                </button>
                                <button type="button" className="flex absolute top-1/2 right-3 z-40 items-center justify-center w-10 h-10 bg-gray-200/50 rounded-full hover:bg-gray-300 focus:outline-none transition" data-carousel-next onClick={goToNextItem2}>
                                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                    </svg>
                                </button>
                                <button type="button" className="flex absolute top-1/2 right-3 z-40 items-center justify-center w-10 h-10 bg-gray-200/50 rounded-full hover:bg-gray-300 focus:outline-none transition" data-carousel-next onClick={goToNextItem2}>
                                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div class="w-full lg:w-2/3 pl-0 lg:pl-10 lg:pt-0 font-poppins flex flex-col justify-between">
                            <div class="flex flex-wrap">
                                <a href="https://wa.me/6282210109142?text=Hallo%20Saya%20tertarik%20dengan%20Merchandise%20OK-02" class="flex-auto text-xl font-semibold">Kaos Gerakan Sosial OK OCE</a>
                                <div class="text-xl font-semibold text-gray-500">Rp. 115.000 - Rp. 125.000</div>
                                <div class="flex-none w-full mt-2 text-sm font-medium text-gray-500">Sisa stok: 16</div>
                            </div>
                            <div>
                                <p class="text-justify py-3 lg:py-0">Kaos Gerakan Sosial OK OCE, terdiri dari empat titik lokasi cetak logo Gerakan Sosial di bagian depan, logo OK OCE di bagian belakang , logo 7 top samping kanan dan logo okoce.net sebelah kiri Dibuat menggunakan bahan kaos cotton combed soft 30s. Tersedia dalam bentuk lengan pendek dan lengan panjang<br /><br /></p>
                                <p class="text-justify py-3 lg:py-0">Catatan: <br />Lengan Pendek: Rp. 115.000 <br />Lengan Panjang: Rp.125.000 </p>
                            </div>
                            <div class="flex items-baseline mt-4 mb-6 text-gray-700">
                                <div class="flex space-x-2">
                                    <label class="text-center">
                                        <input type="radio" class="flex items-center justify-center w-6 h-6 bg-gray-100 rounded-lg" name="size" value="xs" />XS</label>

                                    <label class="text-center">
                                        <input type="radio" class="flex items-center justify-center w-6 h-6" name="size" value="s" />S</label>

                                    <label class="text-center">
                                        <input type="radio" class="flex items-center justify-center w-6 h-6" name="size" value="m" />M</label>

                                    <label class="text-center">
                                        <input type="radio" class="flex items-center justify-center w-6 h-6" name="size" value="l" />L</label>

                                    <label class="text-center">
                                        <input type="radio" class="flex items-center justify-center w-6 h-6" name="size" value="xl" />XL</label>
                                </div>
                            </div>
                            <div class="flex mb-4 text-sm font-medium">
                                <a href="https://wa.me/6282210109142?text=Hallo%20Saya%20tertarik%20dengan%20Merchandise%20OK-02" target="blank" class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">Beli sekarang</a>
                            </div>
                        </div>
                    </div>
                    {/* <!-- CARDS --> */}
                </div>
            </div>
        </>
    )
}

export default Marchendise;