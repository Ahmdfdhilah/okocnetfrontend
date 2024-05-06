import React from "react";
import Top from "@img/7top-rb.webp";
import Wtp from "@img/wtp-e1685866203725 1.png"
import Image1 from "@img/7 top/pelaporankeuangan/image 8.png"
import Laba from "@img/7 top/pelaporankeuangan/laba.png"
import Neraca from "@img/7 top/pelaporankeuangan/neraca.png"
import Kas from "@img/7 top/pelaporankeuangan/kas.png"
import Catatan from "@img/7 top/pelaporankeuangan/catatan.png"
import Pajak from "@img/7 top/pelaporankeuangan/pajak.png"



const PelaporanKeuangan = () => {
    return (
        <>
            <div className="pl-40 pt-60 bg-white max-md:pl-5">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-[18%] max-md:ml-0 max-md:w-full">
                        <img
                            loading="lazy"
                            srcSet={Top}
                            alt=""
                            className="grow shrink-0 max-w-full aspect-[0.79] w-[271px] max-md:mt-10"
                        />
                    </div>
                    <div className="flex flex-col ml-5 w-[82%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col self-stretch p-8 my-auto w-full text-white bg-sky-700 max-md:px-5 max-md:mt-10 max-md:max-w-full">
                            <div className="text-5xl font-bold leading-[57.6px] max-md:max-w-full max-md:text-4xl">
                            Pelaporan Keuangan
                            </div>
                            <div className="mt-4 text-lg leading-7 max-md:max-w-full">
                            Peserta akan diajarkan dan didampingi cara membuat laporan keuangan untuk menghitung untung rugi.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="grid place-items-center bg-white m-6 pb-10">
                <div class="p-10 grid grid-cols-2 gap-60 justify-items-center">
                    <div>
                        <img class="h-auto max-h-[100rem]" src={Wtp} alt="" />
                    </div>
                    <div>
                        <img class="h-auto max-h-[10rem]" src={Image1} alt="" />
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center px-16 pt-20 bg-white max-md:px-5">
                <div className="flex flex-col w-full max-w-[1096px] max-md:max-w-full">
                    <div className="self-center text-4xl font-bold leading-10 text-center text-black">
                    Pelaporan Keuangan
                    </div>
                    <div className="mt-8 text-lg leading-7 text-center text-black max-md:max-w-full">
                    Melalui OK OCE, usaha sobat akan mendapatkan fasilitas dari para pendamping dalam hal pelaporan keuangan Tujuan dari pelaporan keuangan 
                    ini adalah untuk memberikan pemilik usaha gambaran yang jelas tentang bagaimana usaha tersebut mengelola dan menghasilkan uang. Fasilitas 
                    tersebut dapat diakses melalui sistem OK OCE Indonesia.
                    </div>
                </div>
            </div>

            <div class="grid place-items-center bg-white m-6 pb-10">
                <div class="p-10 grid grid-cols-5 gap-10 justify-items-center">
                    <div>
                        <img class="h-auto max-h-[10rem]" src={Laba} alt="" />
                        <div className="mt-2 text-lg leading-7 text-center text-black max-md:max-w-full pt-10">
                            Laporan Laba Rugi
                        </div>
                    </div>
                    <div>
                        <img class="h-auto max-h-[10rem]" src={Neraca} alt="" />
                        <div className="mt-2 text-lg leading-7 text-center text-black max-md:max-w-full pt-10">
                            Laporan Neraca
                        </div>
                    </div>
                    <div>
                        <img class="h-auto max-h-[10rem]" src={Kas} alt="" />
                        <div className="mt-2 text-lg leading-7 text-center text-black max-md:max-w-full pt-10">
                            Laporan Arus Kas
                        </div>
                    </div>
                    <div>
                        <img class="h-auto max-h-[10rem]" src={Catatan} alt="" />
                        <div className="mt-2 text-lg leading-7 text-center text-black max-md:max-w-full pt-10">
                            Catatan Laporan Keuangan
                        </div>
                    </div>
                    <div>
                        <img class="h-auto max-h-[10rem]" src={Pajak} alt="" />
                        <div className="mt-2 text-lg leading-7 text-center text-black max-md:max-w-full pt-10">
                            Laporan Pajak
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PelaporanKeuangan;