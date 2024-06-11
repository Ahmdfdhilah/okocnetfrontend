/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import PELAKSANA1 from "@img/emakkece/PELAKSANA1.png";
import PELAKSANA2 from "@img/emakkece/PELAKSANA2.png";
import PELAKSANA3 from "@img/emakkece/PELAKSANA3.png";
import PESERTA1 from "@img/emakkece/PESERTA1.png";
import PESERTA2 from "@img/emakkece/PESERTA2.png";
import PESERTA3 from "@img/emakkece/PESERTA3.png";
import PESERTA4 from "@img/emakkece/PESERTA4.png";
import PESERTA5 from "@img/emakkece/PESERTA5.png";
import DURASI1 from "@img/emakkece/DURASI1.png";
import DURASI2 from "@img/emakkece/DURASI2.png";
import DURASI3 from "@img/emakkece/DURASI3.png";
import DURASI4 from "@img/emakkece/DURASI4.png";
import SUMBER1 from "@img/emakkece/SUMBER1.png";
import SUMBER2 from "@img/emakkece/SUMBER2.png";
import SUMBER3 from "@img/emakkece/SUMBER3.png";
import SUMBER4 from "@img/emakkece/SUMBER4.png";
import TAHAPAN from "@img/emakkece/TAHAPAN.png";
import EMAKKECE from "@img/emakkece/EMAKKECE.png";
import MATERI1 from "@img/emakkece/MATERI1.png";
import MATERI2 from "@img/emakkece/MATERI2.png";
import MATERI3 from "@img/emakkece/MATERI3.png";
import MATERI4 from "@img/emakkece/MATERI4.png";
import FOTO1 from "@img/emakkece/FOTO1.png";
import FOTO2 from "@img/emakkece/FOTO2.png";
import FOTO3 from "@img/emakkece/FOTO3.png";



const Emakkece = () => {
    return (
        <>
             <div className="px-20 py-20 bg-white max-md:px-5 mobile:mt-6 lg:mt-20">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                    <img class="mt-2.5 w-full aspect-[1.96] max-md:mt-10 max-md:max-w-full" src={EMAKKECE} />
                    </div>
                    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col mt-2.5 font-bold text-black leading-[120%] max-md:mt-10 max-md:max-w-full">
                        <div className="text-4xl max-md:max-w-full">EMAK KECE</div>
                        <div className="mt-6 text-lg leading-7 text-justify max-md:max-w-full">
                        Emak Kece adalah program inovatif yang dirancang oleh OK OCE Indonesia, khusus untuk para ibu-ibu. Program ini dijalankan oleh para penggerak dan mitra OK OCE Indonesia, dengan tujuan memberdayakan serta meningkatkan keterampilan dan potensi ekonomi para ibu dalam berbagai bidang usaha.
                        <br />
                        </div>
                        <div className="justify-center items-center px-16 py-6 mt-10 text-2xl text-center text-white bg-red-600 rounded-3xl max-md:px-5 max-md:max-w-full">
                        PELAJARI SELENGKAPNYA
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            {/* Responsive mobile diukuran 320px keatas*/}
            <div class="bg-white-300 w-full h-[20rem] grid justify-center content-center mobile:mt-72 mobile:mb-[55rem] lg:mt-20 lg:mb-20">
                <h1 class="font-extrabold text-4xl text-center">PELAKSANA</h1>
                <div class="flex justify-center">
                    <div class="grid gap-4 mobile:grid-cols-1 lg:grid-cols-3"> {/* Responsive mobile*/}
                        <div class="mt-4">
                            <img class="h-[15em]" src={PELAKSANA1} />
                        </div>
                        <div class="mt-4">
                            <img class="h-[15em]" src={PELAKSANA2} />
                        </div>
                        <div class="mt-4">
                            <img class="h-[15em]" src={PELAKSANA3} />
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-white-300 w-full h-[20rem] grid justify-center content-center mobile:mt-52 mobile:mb-[65rem] lg:mt-20 lg:mb-20">
                <h1 class="font-extrabold text-4xl text-center">PESERTA</h1>
                <div class="flex justify-center">
                    <div class="grid gap-4 mobile:grid-cols-1 lg:grid-cols-5">
                        <div class="mt-4">
                            <img class="h-[15em]" src={PESERTA1} />
                        </div>
                        <div class="mt-4">
                            <img class="h-[15em]" src={PESERTA2} />
                        </div>
                        <div class="mt-4">
                            <img class="h-[15em]" src={PESERTA3} />
                        </div>
                        <div class="mt-4">
                            <img class="h-[15em]" src={PESERTA4} />
                        </div>
                        <div class="mt-4">
                            <img class="h-[15em]" src={PESERTA5} />
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-white-300 w-full h-[20rem] grid justify-center content-center mobile:mt-52 mobile:mb-[55rem] lg:mt-20 lg:mb-20">
                <h1 class="font-extrabold py-5 text-4xl text-center">DURASI</h1>
                <div class="flex justify-center">
                    <div class="grid gap-4 mobile:grid-cols-1 lg:grid-cols-4">
                        <div class="mt-4">
                            <img class="h-[15em]" src={DURASI1} />
                        </div>
                        <div class="mt-4">
                            <img class="h-[15em]" src={DURASI2} />
                        </div>
                        <div class="mt-4">
                            <img class="h-[15em]" src={DURASI3} />
                        </div>
                        <div class="mt-4">
                            <img class="h-[15em]" src={DURASI4} />
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-white-300 w-full h-[20rem] grid justify-center content-center mobile:mt-52 mobile:mb-[30rem] lg:mt-10 lg:mb-10">
                <h1 class="font-extrabold py-5 text-4xl text-center">SUMBER DAYA</h1>
                <div class="flex justify-center">
                    <div class="grid gap-4 mobile:grid-cols-1 lg:grid-cols-4">
                        <div class="mt-4">
                            <img class="h-[15em]" src={SUMBER1} />
                        </div>
                        <div class="mt-4">
                            <img class="h-[15em]" src={SUMBER2} />
                        </div>
                        <div class="mt-4">
                            <img class="h-[15em]" src={SUMBER3} />
                        </div>
                        <div class="mt-4">
                            <img class="h-[15em]" src={SUMBER4} />
                        </div>
                    </div>
                </div>
            </div>

            
            <div class="mt-[5rem] bg-white-300 w-full h-[50rem] grid justify-center content-center mobile:mb-[20rem] lg:mb-0">
                <h1 class="font-extrabold text-4xl text-center">TAHAPAN</h1>
                <div class="flex justify-center">
                    <div class="grid grid-cols-1 gap-4">
                        <div class="mt-1">
                            <img class="h-[40em]" src={TAHAPAN} />
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-white-300 w-full h-[20rem] grid justify-center content-center mobile:mt-52 mobile:mb-[45rem] lg:mt-10 lg:mb-5">
                <h1 class="font-extrabold py-5 text-4xl text-center">MATERI</h1>
                <div class="flex justify-center">
                    <div class="grid gap-4 mobile:grid-cols-1 lg:grid-cols-4">
                        <div class="mt-4">
                            <img class="h-[15em]" src={MATERI1} />
                        </div>
                        <div class="mt-4">
                            <img class="h-[15em]" src={MATERI2} />
                        </div>
                        <div class="mt-4">
                            <img class="h-[15em]" src={MATERI3} />
                        </div>
                        <div class="mt-4">
                            <img class="h-[15em]" src={MATERI4} />
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-white-300 w-full h-[40rem] grid justify-center content-center mobile:mb-[20rem] lg:mb-5">
                <h1 class="font-extrabold py-5 text-4xl text-center">DEWAN PENASEHAT</h1>
                <div class="flex justify-center">
                    <div class="grid gap-4 mobile:grid-cols-1 lg:grid-cols-3">
                        <div class="mt-4">
                            <img class="h-[20em]" src={FOTO1} />
                        </div>
                        <div class="mt-4">
                            <img class="h-[20em]" src={FOTO2} />
                        </div>
                        <div class="mt-4">
                            <img class="h-[20em]" src={FOTO3} />
                        </div>
                    </div>
                </div>
            </div>
        
        



        </>
    );
}

export default Emakkece ;