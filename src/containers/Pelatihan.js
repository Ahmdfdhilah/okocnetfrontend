import React, { useState, useEffect } from "react";
import Top from "@img/7top-rb.webp";
import Modul1 from "@img/7 top/modul1.jpg";
import Modul2 from "@img/7 top/modul2.jpg";
import Modul5 from "@img/7 top/modul5.jpg";
import Modul6 from "@img/7 top/modul6.jpg";
import FloatingMenu from "../components/FloatingMenu";

const Pelatihan = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetchDataEvents();
    }, []);

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
            eventData.sort((a, b) => b.id - a.id);
            const lastThreeData = eventData.slice(0, 3); // Mengambil 3 data terakhir
            console.log(lastThreeData);
            setEvents(lastThreeData);
        } catch (error) {
            console.error("Error fetching employees:", error);
            // Jika terjadi kesalahan, pastikan untuk mengatur employees menjadi array kosong
            setEvents([]);
        }
    };

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

            <div className="grid mb-20 mobile:grid-cols-1 mobile:grid-flow-row lg:w-11/12 lg:mx-auto lg:grid-cols-3 lg:grid-flow-row lg:gap-y-12 lg:gap-x-0 lg:mt-24">
                {events.map((data, index) =>
                    <div key={index} className="flex flex-col mx-auto w-5/6 max-md:ml-0 drop-shadow-xl max-md:w-full mobile:p-6 lg:p-0">
                        <div className="flex flex-col grow max-md:mt-10">
                            <img src={data?.attributes?.foto_event?.data?.attributes?.url} loading="lazy" className="w-full shadow-sm aspect-square" alt="" />
                            <div className="flex flex-col px-4 py-5 w-full bg-white shadow-sm">
                                <div className="relative group mb-2 mt-2 h-10">
                                    <div className="text-base leading-7 text-black font-bold text-xl overflow-hidden line-clamp-2">
                                        {data.attributes?.judul_event}
                                    </div>
                                    <div className="absolute left-0 bottom-full mb-2 hidden w-full text-xs text-white bg-black p-2 rounded group-hover:block">
                                        {data.attributes?.judul_event}
                                    </div>
                                </div>
                                <div className="flex gap-5 justify-between mt-7 text-xs leading-5">
                                    <div className="flex flex-col">
                                        <div className="text-neutral-400">{data.attributes.tanggal_event}</div>
                                        <div className="mt-2.5 text-sky-700">{data.attributes.harga_event}</div>
                                    </div>
                                    <div className="self-start mt-8 text-right text-red-600">
                                        {data.attributes.point_event} Points
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
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

            <div class="flex items-center justify-center container mx-auto mb-20">
                <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    <div class="pr-0 md:pr-10 pb-10 md:pb-0 flex">
                        <div id="pelatihan-card" class="card card-compact w-60 bg-base-100 shadow-xl rounded-none">
                            <img src={Modul1} alt=""></img>
                            <div class="h-auto bg-cover bg-center rounded-none"></div>
                            <div class="card-body rounded-none bg-white">
                                <a href="https://id.wikipedia.org/wiki/Lorem_ipsum" class="text-center font-bold text-slate-700 p-5 flex flex-col">
                                    Modul Pelatihan 1
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="pr-0 md:pr-10 pb-10 md:pb-0 flex">
                        <div id="pelatihan-card" class="card card-compact w-60 bg-base-100 shadow-xl rounded-none">
                            <img src={Modul2} alt=""></img>
                            <div class="h-auto bg-cover bg-center rounded-none"></div>
                            <div class="card-body rounded-none bg-white">
                                <a href="https://id.wikipedia.org/wiki/Lorem_ipsum" class="text-center font-bold text-slate-700 p-5 flex flex-col">
                                    Modul Pelatihan 3
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="pr-0 md:pr-10 pb-10 md:pb-0 flex">
                        <div id="pelatihan-card" class="card card-compact w-60 bg-base-100 shadow-xl rounded-none">
                            <img src={Modul5} alt=""></img>
                            <div class="h-auto bg-cover bg-center rounded-none"></div>
                            <div class="card-body rounded-none bg-white">
                                <a href="https://id.wikipedia.org/wiki/Lorem_ipsum" class="text-center font-bold text-slate-700 p-5 flex flex-col">
                                    Modul Pelatihan 5
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="pr-0 md:pr-10 pb-10 md:pb-0 flex">
                        <div id="pelatihan-card" class="card card-compact w-60 bg-base-100 shadow-xl rounded-none">
                            <img src={Modul6} alt=""></img>
                            <div class="h-auto bg-cover bg-center rounded-none"></div>
                            <div class="card-body rounded-none bg-white">
                                <a href="https://id.wikipedia.org/wiki/Lorem_ipsum" class="text-center font-bold text-slate-700 p-5 flex flex-col">
                                    Modul Pelatihan 6
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FloatingMenu />
        </>
    );
}

export default Pelatihan;