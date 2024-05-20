/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import nib from "../asset/img/nib.jpg"
import soap from "../asset/img/soap.jpg"
import canva from "../asset/img/canva.jpg"
import majoo from "../asset/img/majoo.jpg"
import phoneharm from "../asset/img/phonecharm.png"
import pasarok from "../asset/img/pasarok.png"
import okxpress from "../asset/img/okxpress.png"
import insipirasi from "../asset/img/inspirasi.jpg"
import juara from "../asset/img/juara.jpg"

const Event = () => {
    return (
        <>
            <div className="flex flex-col gap-5 items-center p-40 text-center text-black bg-white max-md:flex-wrap max-md:px-5">
                <div className="gap-0 text-5xl font-bold leading-[57.6px] max-md:flex-wrap max-md:max-w-full max-md:text-4xl">
                    EVENT
                </div>
                <div className="gap-0 text-lg leading-7 max-md:flex-wrap max-md:max-w-full">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    varius enim in eros elementum tristique. Duis cursus, mi quis viverra
                    ornare.
                </div>
            </div>

            <div className="flex justify-center items-center px-16 py-10 bg-white max-md:px-5">
                <div className="w-full max-w-3xl min-w-full">
                    <div className="grid grid-cols-3 grid-flow-row max-md:gap-0">
                        <div className="flex flex-col ml-5 w-[70%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow max-md:mt-10">
                                <img src={nib} loading="lazy" className="w-full shadow-sm aspect-square" />
                                <div className="flex flex-col px-4 py-5 w-full bg-white shadow-sm">
                                    <div className="text-base leading-5 text-black">
                                        Pelatihan Pembuatan NIB
                                    </div>
                                    <div className="flex gap-5 justify-between mt-7 text-xs leading-5">
                                        <div className="flex flex-col">
                                            <div className="text-neutral-400">08 May 2024</div>
                                            <div className="mt-2.5 text-sky-700">Rp. 20.000 </div>
                                        </div>
                                        <div className="self-start mt-5 text-right text-red-600">
                                            Get 5 Points
                                        </div>
                                    </div>
                                </div>
                                <div className="justify-center items-center px-16 py-5 text-base leading-5 text-center text-black bg-white rounded-none border-t border-dashed shadow-sm border-neutral-400 max-md:px-5">
                                    Get Ticket
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-[70%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow max-md:mt-10">
                                <img src={soap} loading="lazy" className="w-full shadow-sm aspect-square" />
                                <div className="flex flex-col px-4 py-5 w-full bg-white shadow-sm">
                                    <div className="text-base leading-5 text-black">
                                        Workshop SOAP Making
                                    </div>
                                    <div className="flex gap-5 justify-between mt-7 text-xs leading-5">
                                        <div className="flex flex-col">
                                            <div className="text-neutral-400">30 April 2024</div>
                                            <div className="mt-2.5 text-sky-700">Rp. 100.000 </div>
                                        </div>
                                        <div className="self-start mt-5 text-right text-red-600">
                                            Get 5 Points
                                        </div>
                                    </div>
                                </div>
                                <div className="justify-center items-center px-16 py-5 text-base leading-5 text-center text-black bg-white rounded-none border-t border-dashed shadow-sm border-neutral-400 max-md:px-5">
                                    Get Ticket
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-[70%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow max-md:mt-10">
                                <img src={canva} loading="lazy" className="w-full shadow-sm aspect-square" />
                                <div className="flex flex-col px-4 py-5 w-full bg-white shadow-sm">
                                    <div className="text-base leading-5 text-black">
                                        Belajar Canva
                                    </div>
                                    <div className="flex gap-5 justify-between mt-7 text-xs leading-5">
                                        <div className="flex flex-col">
                                            <div className="text-neutral-400">30  Januari 2024</div>
                                            <div className="mt-2.5 text-sky-700">Rp. 0 (Free)</div>
                                        </div>
                                        <div className="self-start mt-5 text-right text-red-600">
                                            Get 5 Points
                                        </div>
                                    </div>
                                </div>
                                <div className="justify-center items-center px-16 py-5 text-base leading-5 text-center text-black bg-white rounded-none border-t border-dashed shadow-sm border-neutral-400 max-md:px-5">
                                    Get Ticket
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            <div className="flex justify-center items-center px-16 py-10 bg-white max-md:px-5">
                <div className="w-full max-w-3xl min-w-full">
                    <div className="grid grid-cols-3 grid-flow-row max-md:gap-0">
                        <div className="flex flex-col ml-5 w-[70%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow max-md:mt-10">
                                <img src={majoo} loading="lazy" className="w-full shadow-sm aspect-square" />
                                <div className="flex flex-col px-4 py-5 w-full bg-white shadow-sm">
                                    <div className="text-base leading-5 text-black">
                                        Optimalkan Penjualan dengan Strategi Penjualan yang Tepat
                                    </div>
                                    <div className="flex gap-5 justify-between mt-7 text-xs leading-5">
                                        <div className="flex flex-col">
                                            <div className="text-neutral-400">28 February 2024</div>
                                            <div className="mt-2.5 text-sky-700">Rp. 0 (Free) </div>
                                        </div>
                                        <div className="self-start mt-5 text-right text-red-600">
                                            Get 5 Points
                                        </div>
                                    </div>
                                </div>
                                <div className="justify-center items-center px-16 py-5 text-base leading-5 text-center text-black bg-white rounded-none border-t border-dashed shadow-sm border-neutral-400 max-md:px-5">
                                    Get Ticket
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-[70%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow max-md:mt-10">
                                <img src={phoneharm} loading="lazy" className="w-full shadow-sm aspect-square" />
                                <div className="flex flex-col px-4 py-5 w-full bg-white shadow-sm">
                                    <div className="text-base leading-5 text-black">
                                        WORKSHOP MEMBUAT AKSESORIS UNIK
                                        "PHONE CHARM"
                                    </div>
                                    <div className="flex gap-5 justify-between mt-7 text-xs leading-5">
                                        <div className="flex flex-col">
                                            <div className="text-neutral-400">01 February 2024</div>
                                            <div className="mt-2.5 text-sky-700">Rp. 20.000 </div>
                                        </div>
                                        <div className="self-start mt-5 text-right text-red-600">
                                            Get 5 Points
                                        </div>
                                    </div>
                                </div>
                                <div className="justify-center items-center px-16 py-5 text-base leading-5 text-center text-black bg-white rounded-none border-t border-dashed shadow-sm border-neutral-400 max-md:px-5">
                                    Get Ticket
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-[70%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow max-md:mt-10">
                                <img src={pasarok} loading="lazy" className="w-full shadow-sm aspect-square" />
                                <div className="flex flex-col px-4 py-5 w-full bg-white shadow-sm">
                                    <div className="text-base leading-5 text-black">
                                        Kenali Karakter Jadi Pengusaha Sukses Serta Raih Peluang Usaha Pasar OK OCE
                                    </div>
                                    <div className="flex gap-5 justify-between mt-7 text-xs leading-5">
                                        <div className="flex flex-col">
                                            <div className="text-neutral-400">25  Januari 2024</div>
                                            <div className="mt-2.5 text-sky-700">Rp. 0 (Free)</div>
                                        </div>
                                        <div className="self-start mt-5 text-right text-red-600">
                                            Get 5 Points
                                        </div>
                                    </div>
                                </div>
                                <div className="justify-center items-center px-16 py-5 text-base leading-5 text-center text-black bg-white rounded-none border-t border-dashed shadow-sm border-neutral-400 max-md:px-5">
                                    Get Ticket
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="flex justify-center items-center px-16 py-10 bg-white max-md:px-5">
                <div className="w-full max-w-3xl min-w-full">
                    <div className="grid grid-cols-3 grid-flow-row max-md:gap-0">
                        <div className="flex flex-col ml-5 w-[70%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow max-md:mt-10">
                                <img src={okxpress} loading="lazy" className="w-full shadow-sm aspect-square" />
                                <div className="flex flex-col px-4 py-5 w-full bg-white shadow-sm">
                                    <div className="text-base leading-5 text-black">
                                        Peluang Bisnis Ekpedisi Bersama OK OCE Xpress
                                    </div>
                                    <div className="flex gap-5 justify-between mt-7 text-xs leading-5">
                                        <div className="flex flex-col">
                                            <div className="text-neutral-400">18 Januari 2024</div>
                                            <div className="mt-2.5 text-sky-700">Rp. 0 (Free) </div>
                                        </div>
                                        <div className="self-start mt-5 text-right text-red-600">
                                            Get 5 Points
                                        </div>
                                    </div>
                                </div>
                                <div className="justify-center items-center px-16 py-5 text-base leading-5 text-center text-black bg-white rounded-none border-t border-dashed shadow-sm border-neutral-400 max-md:px-5">
                                    Get Ticket
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-[70%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow max-md:mt-10">
                                <img src={insipirasi} loading="lazy" className="w-full shadow-sm aspect-square" />
                                <div className="flex flex-col px-4 py-5 w-full bg-white shadow-sm">
                                    <div className="text-base leading-5 text-black">
                                        UMKM INSPIRATION CHALLANGE
                                    </div>
                                    <div className="flex gap-5 justify-between mt-7 text-xs leading-5">
                                        <div className="flex flex-col">
                                            <div className="text-neutral-400">15  December 2023</div>
                                            <div className="mt-2.5 text-sky-700">Rp. 0 (Free) </div>
                                        </div>
                                        <div className="self-start mt-5 text-right text-red-600">
                                            Get 5 Points
                                        </div>
                                    </div>
                                </div>
                                <div className="justify-center items-center px-16 py-5 text-base leading-5 text-center text-black bg-white rounded-none border-t border-dashed shadow-sm border-neutral-400 max-md:px-5">
                                    Get Ticket
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-[70%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow max-md:mt-10">
                                <img src={juara} loading="lazy" className="w-full shadow-sm aspect-square" />
                                <div className="flex flex-col px-4 py-5 w-full bg-white shadow-sm">
                                    <div className="text-base leading-5 text-black">
                                        JUARA (Jumat Bersama Perwira)
                                    </div>
                                    <div className="flex gap-5 justify-between mt-7 text-xs leading-5">
                                        <div className="flex flex-col">
                                            <div className="text-neutral-400">15  December 2023</div>
                                            <div className="mt-2.5 text-sky-700">Rp. 10 </div>
                                        </div>
                                        <div className="self-start mt-5 text-right text-red-600">
                                            Get 5 Points
                                        </div>
                                    </div>
                                </div>
                                <div className="justify-center items-center px-16 py-5 text-base leading-5 text-center text-black bg-white rounded-none border-t border-dashed shadow-sm border-neutral-400 max-md:px-5">
                                    Get Ticket
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Event;