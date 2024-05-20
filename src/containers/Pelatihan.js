import React from "react";
import Top from "@img/7top-rb.webp";

const Pelatihan = () => {
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
                                Pelatihan
                            </div>
                            <div className="mt-4 text-lg leading-7 max-md:max-w-full">
                                Peserta akan dilatih berdasarkan kurikulum OK OCE dan akan digabungkan ke kelompok inkubasi melalui komunitas penggerak.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="pelatihan-body" class="w-full pt-20 font-jost flex justify-center bg-white">
                <div class="w-full lg:w-3/4">
                    <div>
                        <h1 class="text-center text-4xl font-bold text-okoce-blue">Agenda Pelatihan</h1>
                    </div>

                    <div class="py-5 px-3 w-full mx-auto">
                        <p class="text-lg text-center text-slate-700">
                            Informasi penting seputar UMKM, bisa Sobat dapatkan disini juga lho! Yuk cari tahu lebih lanjut
                            mengenai informasi yang Sobat butuhkan disini!
                        </p>
                    </div>
                </div>
            </div>

            <div class="flex items-center justify-center min-h-screen container mx-auto">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div class="rounded-xl shadow-lg">
                        <div class="p-5 flex flex-col">
                            <div class="rounded-xl overflow-hidden">
                                <img src="" alt="" />
                            </div>
                            <h5 class="text-2xl md:text-3xl font-medium mt-3">Kolaborasi UKM Strategi Marketing Digital</h5>
                            <p class="text-slate-500 text-lg mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <a href="https://id.wikipedia.org/wiki/Lorem_ipsum" class="text-center bg-blue-400 text-blue-700 py-2 rounded-lg font semibold mt-4 hover:bg-blue-300 focus:scale-95 transition-all duration-200 ease-out">Daftar</a>
                        </div>
                    </div>
                </div>
            </div>

            <div id="pelatihan-body" class="w-full pt-10 pb-10 font-poppins flex justify-center bg-white">
                <div class="w-full lg:w-3/4">
                    <div>
                        <h1 class="text-center text-4xl font-bold text-okoce-blue">Materi Pelatihan</h1>
                    </div>

                    <div class="py-5 px-3 w-full mx-auto">
                        <p class="text-lg text-center text-slate-700">
                            Informasi penting seputar UMKM, bisa Sobat dapatkan disini juga lho! Yuk cari tahu lebih lanjut
                            mengenai informasi yang Sobat butuhkan disini!
                        </p>
                    </div>
                </div>
            </div>


            <div class="flex items-center justify-center container mx-auto">
                <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <div class="pr-0 md:pr-10 pb-10 md:pb-0 flex">
                        <div id="pelatihan-card" class="card card-compact w-60 bg-base-100 shadow-xl rounded-none">
                            <div class="bg-pengelolaan-keuangan h-40 bg-cover bg-center rounded-none"></div>
                            <div class="card-body rounded-none bg-white">
                                <a href="https://id.wikipedia.org/wiki/Lorem_ipsum" class="text-center font-bold text-slate-700 p-5 flex flex-col">
                                    Materi Pengelolaan Keuangan
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="pr-0 md:pr-10 pb-10 md:pb-0 flex">
                        <div id="pelatihan-card" class="card card-compact w-60 bg-base-100 shadow-xl rounded-none">
                            <div class="bg-keuangan-perbankan h-40 bg-cover bg-center rounded-none"></div>
                            <div class="card-body rounded-none bg-white">
                                <a href="https://id.wikipedia.org/wiki/Lorem_ipsum" class="text-center font-bold text-slate-700 p-5 flex flex-col">
                                    Keuangan Perbankan
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="pr-0 md:pr-10 pb-10 md:pb-0 flex">
                        <div id="pelatihan-card" class="card card-compact w-60 bg-base-100 shadow-xl rounded-none">
                            <div class="bg-pengelolaan-keuangan h-40 bg-cover bg-center rounded-none"></div>
                            <div class="card-body rounded-none bg-white">
                                <a href="https://id.wikipedia.org/wiki/Lorem_ipsum" class="text-center font-bold text-slate-700 p-5 flex flex-col">
                                    Materi Pengelolaan Keuangan
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="pr-0 md:pr-10 pb-10 md:pb-0 flex">
                        <div id="pelatihan-card" class="card card-compact w-60 bg-base-100 shadow-xl rounded-none">
                            <div class="bg-keuangan-perbankan h-40 bg-cover bg-center rounded-none"></div>
                            <div class="card-body rounded-none bg-white">
                                <a href="https://id.wikipedia.org/wiki/Lorem_ipsum" class="text-center font-bold text-slate-700 p-5 flex flex-col">
                                    Keuangan Perbankan
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex items-center justify-center">
                <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 py-20">
                    <div class="pr-0 md:pr-10 pb-10 md:pb-0 flex">
                        <div id="pelatihan-card" class="card card-compact w-60 bg-base-100 shadow-xl rounded-none">
                            <div class="bg-pengelolaan-keuangan h-40 bg-cover bg-center rounded-none"></div>
                            <div class="card-body rounded-none bg-white">
                                <a href="https://id.wikipedia.org/wiki/Lorem_ipsum" class="text-center font-bold text-slate-700 p-5 flex flex-col">
                                    Materi Pengelolaan Keuangan
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="pr-0 md:pr-10 pb-10 md:pb-0 flex">
                        <div id="pelatihan-card" class="card card-compact w-60 bg-base-100 shadow-xl rounded-none">
                            <div class="bg-keuangan-perbankan h-40 bg-cover bg-center rounded-none"></div>
                            <div class="card-body rounded-none bg-white">
                                <a href="https://id.wikipedia.org/wiki/Lorem_ipsum" class="text-center font-bold text-slate-700 p-5 flex flex-col">
                                    Keuangan Perbankan
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="pr-0 md:pr-10 pb-10 md:pb-0 flex">
                        <div id="pelatihan-card" class="card card-compact w-60 bg-base-100 shadow-xl rounded-none">
                            <div class="bg-pengelolaan-keuangan h-40 bg-cover bg-center rounded-none"></div>
                            <div class="card-body rounded-none bg-white">
                                <a href="https://id.wikipedia.org/wiki/Lorem_ipsum" class="text-center font-bold text-slate-700 p-5 flex flex-col">
                                    Materi Pengelolaan Keuangan
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="pr-0 md:pr-10 pb-10 md:pb-0 flex">
                        <div id="pelatihan-card" class="card card-compact w-60 bg-base-100 shadow-xl rounded-none">
                            <div class="bg-keuangan-perbankan h-40 bg-cover bg-center rounded-none"></div>
                            <div class="card-body rounded-none bg-white">
                                <a href="https://id.wikipedia.org/wiki/Lorem_ipsum" class="text-center font-bold text-slate-700 p-5 flex flex-col">
                                    Keuangan Perbankan
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Pelatihan;