/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Masjidpemberdaya1 from "@img/masjidpemberdaya/Masjidpemberdaya.png";

const Masjidpemberdaya = () => {
    return (
        <>
            <div className="mt-[6rem] py-[6rem] bg-gray-200 w-full grid grid-cols-2 gap-6 items-center justify-center">
                <div className="flex flex-col justify-items-center mx-auto w-3/4 h-full">
                    <div className="">
                        <img src={Masjidpemberdaya1} alt="Placeholder Image" className="rounded-md mx-auto mb-6 object-cover" />
                    </div>
                    <div className="mt-2 p-5 ">
                        <a href="#Link" class="px-40 py-4 bg-green-600 rounded-lg text-white font-bold text-lg text-center hover:bg-green-800">Pelajari Selengkapnya</a>
                    </div>
                </div>

                <div className="w-4/5 h-48 rounded-md object-fill flex flex-col justify-center items-start">
                    <h1 className="font-extrabold text-4xl text-left flex-initial mb-6">KOLABORASI MASJID<br />PEMBERDAYA</h1>
                    <p className="text-left">KMP adalah himpunan masjid-masjid yang bergabung atas dasar visi yang sama dalam mewujudkan peran masjid dalam mengentaskan kemiskinan. KMP adalah entitas berbadan hukum perkumpulan yang beranggotakan para perwakilan pengurus masjid pemberdaya di Indonesia</p>
                </div>
            </div>
        </>
    );
}

export default Masjidpemberdaya;
