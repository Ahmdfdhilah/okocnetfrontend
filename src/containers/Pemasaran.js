import React from "react";
import Top from "@img/7top-rb.webp";
import Halal from "@img/7 top/perizinan/izin-sertifikasi-halal.png"
import Berusaha from "@img/7 top/perizinan/nomer-izin-berusaha.png"
import Kosmetik from "@img/7 top/perizinan/izin-sertifikasi-kosmetik.png"
import Pangan from "@img/7 top/perizinan/izin-sertifikasi-pangan.png"
import Haki from "@img/7 top/perizinan/haki.png"
import Pkrt from "@img/7 top/perizinan/sertifikasi-pkrt.png"



const Pemasaran = () => {
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
                            Pemasaran
                            </div>
                            <div className="mt-4 text-lg leading-7 max-md:max-w-full">
                            Peserta akan mengikuti proses kurasi dan akan diberikan akses pemasaran dan penjualan yang lebih luas, baik online maupun offline.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center px-16 pt-20 bg-white max-md:px-5">
                <div className="flex flex-col w-full max-w-[1096px] max-md:max-w-full">
                    <div className="self-center text-4xl font-bold leading-10 text-center text-black">
                    Pemasaran
                    </div>
                    <div className="mt-8 text-lg leading-7 text-center text-black max-md:max-w-full">
                    Melalui OK OCE, usaha sobat akan mendapatkan fasilitas dari para pendamping dalam hal pemasaran yang akan sangat berguna untuk 
                    anda mengembangkan popularitas dan omzet bisnis. Fasilitas tersebut dapat diakses melalui sistem OK OCE Indonesia.
                    </div>
                </div>
            </div>

            <div class="grid place-items-center bg-white m-6 pb-10">
                <div class="p-10 grid grid-cols-3 gap-60 justify-items-center">
                    <div>
                        <img class="h-auto max-h-[10rem]" src={Halal} alt="" />
                        <div className="mt-2 text-lg leading-7 text-center text-black max-md:max-w-full">
                            Izin sertifikasi Halal
                        </div>
                    </div>
                    <div>
                        <img class="h-auto max-h-[10rem]" src={Berusaha} alt="" />
                        <div className="mt-2 text-lg leading-7 text-center text-black max-md:max-w-full">
                            Nomor Izin Berusaha
                        </div>
                    </div>
                    <div>
                        <img class="h-auto max-h-[10rem]" src={Kosmetik} alt="" />
                        <div className="mt-2 text-lg leading-7 text-center text-black max-md:max-w-full">
                            Izin sertifikasi Kosmetik
                        </div>
                    </div>
                </div>
                <div class="p-10 grid grid-cols-3 gap-60 justify-items-center">
                    <div>
                        <img class="h-auto max-h-[10rem]" src={Pangan} alt="" />
                        <div className="mt-2 text-lg leading-7 text-center text-black max-md:max-w-full">
                            Izin sertifikasi Pangan
                        </div>
                    </div>
                    <div>
                        <img class="h-auto max-h-[10rem]" src={Haki} alt="" />
                        <div className="mt-2 text-lg leading-7 text-center text-black max-md:max-w-full">
                            Izin sertifikasi HAKI
                        </div>
                    </div>
                    <div>
                        <img class="h-auto max-h-[10rem]" src={Pkrt} alt="" />
                        <div className="mt-2 text-lg leading-7 text-center text-black max-md:max-w-full">
                            izin sertifikasi PKRT
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Pemasaran;