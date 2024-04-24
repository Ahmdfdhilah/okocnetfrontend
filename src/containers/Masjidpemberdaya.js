import React from "react";
import Masjidpemberdaya1 from "../asset/img/masjidpemberdaya/Masjidpemberdaya.png";


const Masjidpemberdaya = () => {
    return (
        <>
            <div className="mt-[6rem] py-[6rem] bg-gray-400 w-full grid grid-cols-2 gap-6 items-center justify-center">
                <div className="flex flex-col items-center">
                    <img src={Masjidpemberdaya1} alt="Placeholder Image" className="w-4/5 h-48 rounded-md object-fill mx-auto border mb-6" />
                    <div>
                    <a href="#Link" class="w-300px px-40 py-4 bg-green-600 rounded-lg text-white font-bold text-lg text-center">Pelajari Selengkapnya</a>
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

export default Masjidpemberdaya ;