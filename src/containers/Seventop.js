/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Seven from "@img/7top-rb.webp";
import Seven2 from "@img/7-TOP-OK-OCE-1-768x768.webp";

const cardClasses = "mb-10 w-[50rem] h-[10rem] mx-auto flex items-center bg-zinc-100 rounded-lg shadow-lg";
const titleClasses = "h-[10rem] w-[300px] bg-blue-700 p-4 flex items-center justify-center text-center text-2xl text-white drop-shadow-lg font-bold rounded-lg";
const titleClasses2 = "h-[10rem] w-[300px] bg-red-700 p-4 flex items-center justify-center text-center text-2xl text-white drop-shadow-lg font-bold rounded-lg";
const contentClasses = "max-w-[500px] text-base p-6 flex flex-col items-center justify-center text-center text-zinc-800";

const Seventop = () => {
    return (
        <>
            <div class="flex justify-center mt-[10rem] mb-20">
                <img src={Seven} class="object-cover flex justify-center items-center" alt="7 Top Ok Oce" />
            </div>
            <div className={cardClasses}>
                <div className={titleClasses}>Pendaftaran</div>
                <div className={contentClasses}>
                    Peserta wajib mendaftar di website OKOCE.NET, serta memilih komunitas wirausaha yang akan membina. <br /> <br />
                    <a class="text-blue-500 font-medium">Pelajari Selengkapnya &gt;</a>
                </div>
            </div>
            <div className={cardClasses}>
                <div className={titleClasses2}>Pelatihan</div>
                <div className={contentClasses}>
                    Peserta akan dilatih berdasarkan kurikulum OK OCE dan akan digabungkan ke kelompok inkubasi melalui komunitas penggerak. <br /><br />
                    <a class="text-blue-500 font-medium">Pelajari Selengkapnya &gt;</a>
                </div>
            </div>
            <div className={cardClasses}>
                <div className={titleClasses}>Pendampingan</div>
                <div className={contentClasses}>
                    Peserta akan didampingi oleh pendamping UMKM dan mengikuti Program Mentoring. <br /><br />
                    <a class="text-blue-500 font-medium">Pelajari Selengkapnya &gt;</a>
                </div>
            </div>
            <div className={cardClasses}>
                <div className={titleClasses2}>Perizinan</div>
                <div className={contentClasses}>
                    Peserta akan dijelaskan proses perizinan sesuai kebutuhannya. <br /><br />
                    <a class="text-blue-500 font-medium">Pelajari Selengkapnya &gt;</a>
                </div>
            </div>
            <div className={cardClasses}>
                <div className={titleClasses}>Pemasaran</div>
                <div className={contentClasses}>
                    Peserta akan mengikuti proses kurasi dan akan diberikan akses pemasaran dan penjualan yang lebih luas, baik online maupun offline. <br /><br />
                    <a class="text-blue-500 font-medium">Pelajari Selengkapnya &gt;</a>
                </div>
            </div>
            <div className={cardClasses}>
                <div className={titleClasses2}>Pelaporan Keuangan</div>
                <div className={contentClasses}>
                    Peserta akan diajarkan dan didampingi cara membuat laporan keuangan untuk menghitung untung rugi. <br /> <br />
                    <a class="text-blue-500 font-medium">Pelajari Selengkapnya &gt;</a>
                </div>
            </div>
            <div className={cardClasses}>
                <div className={titleClasses}>Permodalan</div>
                <div className={contentClasses}>
                    Peserta akan didampingi untuk mendapatkan akses permodalan sesuai dengan kebutuhan usahanya.<br /> <br />
                    <a class="text-blue-500 font-medium">Pelajari Selengkapnya &gt;</a>
                </div>
            </div>
            <div class="flex justify-center mt-[10rem] mb-20">
                <img src={Seven2} class="object-cover flex justify-center items-center" alt="7 Top Ok Oce" />
            </div>
        </>
    );
}

export default Seventop;