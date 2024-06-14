import React from "react";
import Top from "@img/7top-rb.webp";
import Usaha from "@img/7 top/pendampingan/inkubasi.png";
import Chat from "@img/7 top/pendampingan/chat.png";
import Kolaborator from "@img/7 top/pendampingan/kolaborator.png";
import FloatingMenu from "../components/FloatingMenu";

const Pendampingan = () => {
    return (
        <>
            <div className="pl-40 bg-white max-md:pl-5 mobile:pt-20 lg:pt-60">
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
                                Pendampingan
                            </div>
                            <div className="mt-4 text-lg leading-7 max-md:max-w-full">
                                Peserta akan didampingi oleh pendamping UMKM dan mengikuti Program Mentoring.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center px-16 pt-20 bg-white max-md:px-5">
                <div className="flex flex-col w-full max-w-[1096px] max-md:max-w-full">
                    <div className="self-center text-4xl font-bold leading-10 text-center text-black">
                        Pendampingan
                    </div>
                    <div className="mt-8 text-lg leading-7 text-justify text-black max-md:max-w-full mobile:px-5">
                        Melalui OK OCE, usaha Sobat akan mendapatkan fasilitas pendampingan Oleh Mentor OK OCE dalam kegiatan pemasaran, permodalan, laporan keuangan,
                        konsultasi ide-ide kreatif dan inovatif, perubahan mindset kewirausahaan, mencari penyelesaian permasalahan usaha, hingga pembentukan karakter
                        untuk menjadi UMKM Naik Kelas. Fasilitas tersebut dapat diakses melalui sistem OK OCE pada kolom Inkubasi Usaha, Chat Mentor, maupun Kolaborator.
                    </div>
                </div>
            </div>

            <div class="grid place-items-center bg-white m-6 pb-10">
                <div class="p-10 grid justify-items-center lg:gap-x-20 lg:grid-cols-3">
                    <div>
                        <img class="h-54 mx-auto mobile:w-40 lg:w-44" src={Usaha} alt="" />
                        <div className="mt-2 text-lg leading-7 text-center text-black max-md:max-w-full">
                            Inkubasi Usaha
                        </div>
                    </div>
                    <div>
                        <img class="h-54 mx-auto mobile:w-40 lg:w-44" src={Chat} alt="" />
                        <div className="mt-2 text-lg leading-7 text-center text-black max-md:max-w-full">
                            Chat Mentor
                        </div>
                    </div>
                    <div>
                        <img class="h-54 mx-auto mobile:w-40 lg:w-44" src={Kolaborator} alt="" />
                        <div className="mt-2 text-lg leading-7 text-center text-black max-md:max-w-full">
                            Kolaborator
                        </div>
                    </div>
                </div>
            </div>
            <FloatingMenu />
        </>
    );
}

export default Pendampingan;