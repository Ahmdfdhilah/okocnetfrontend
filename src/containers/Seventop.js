/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Seven from "@img/7top-rb.webp";
import Seven2 from "@img/7-TOP-OK-OCE-1-768x768.webp";

const cardClasses = "mb-10 mx-auto flex items-center bg-zinc-100 rounded-lg shadow-lg mobile:flex-col mobile:w-full lg:w-[35rem] lg:h-[15rem]";
const titleClasses = "bg-blue-700 p-4 flex items-center justify-center text-center text-2xl text-white drop-shadow-lg font-bold rounded-lg mobile:w-full mobile:h-28 lg:w-full lg:h-20";
const titleClasses2 = "bg-red-700 p-4 flex items-center justify-center text-center text-2xl text-white drop-shadow-lg font-bold rounded-lg mobile:w-full mobile:h-28 lg:w-full lg:h-20";
const contentClasses = "text-base p-6 flex flex-col items-center justify-center text-center text-zinc-800 lg:max-w-[500px]";

const Seventop = () => {
    return (
        <>
            <div class="max-w-5xl mx-auto mt-40 px-6">
                <div class="flex justify-center mb-20">
                    <img src={Seven} class="object-cover flex justify-center items-center" alt="7 Top Ok Oce" />
                </div>
                <div class="flex justify-center mt-[6rem] pb-20">
                    <img src={Seven2} class="object-cover flex justify-center items-center max-w-xl mobile:max-w-72" alt="7 Top Ok Oce" />
                </div>
                <div className={cardClasses}>
                    <div className={titleClasses}>Pendaftaran</div>
                    <div className={contentClasses}>
                        Peserta wajib mendaftar di website OKOCE.NET, serta memilih komunitas wirausaha yang akan membina. <br /> <br />
                        <a href="" class="text-blue-500 font-medium">Pelajari Selengkapnya &gt;</a>
                    </div>
                </div>
                <div className={cardClasses}>
                    <div className={titleClasses2}>Pelatihan</div>
                    <div className={contentClasses}>
                        Peserta akan dilatih berdasarkan kurikulum OK OCE dan akan digabungkan ke kelompok inkubasi melalui komunitas penggerak. <br /><br />
                        <a href="/pelatihan" class="text-blue-500 font-medium">Pelajari Selengkapnya &gt;</a>
                    </div>
                </div>
                <div className={cardClasses}>
                    <div className={titleClasses}>Pendampingan</div>
                    <div className={contentClasses}>
                        Peserta akan didampingi oleh pendamping UMKM dan mengikuti Program Mentoring. <br /><br />
                        <a href="/pendampingan" class="text-blue-500 font-medium">Pelajari Selengkapnya &gt;</a>
                    </div>
                </div>
                <div className={cardClasses}>
                    <div className={titleClasses2}>Perizinan</div>
                    <div className={contentClasses}>
                        Peserta akan dijelaskan proses perizinan sesuai kebutuhannya. <br /><br />
                        <a href="/perizinan" class="text-blue-500 font-medium">Pelajari Selengkapnya &gt;</a>
                    </div>
                </div>
                <div className={cardClasses}>
                    <div className={titleClasses}>Pemasaran</div>
                    <div className={contentClasses}>
                        Peserta akan mengikuti proses kurasi dan akan diberikan akses pemasaran dan penjualan yang lebih luas, baik online maupun offline. <br /><br />
                        <a href="/pemasaran" class="text-blue-500 font-medium">Pelajari Selengkapnya &gt;</a>
                    </div>
                </div>
                <div className={cardClasses}>
                    <div className={titleClasses2}>Pelaporan Keuangan</div>
                    <div className={contentClasses}>
                        Peserta akan diajarkan dan didampingi cara membuat laporan keuangan untuk menghitung untung rugi. <br /> <br />
                        <a href="/pelaporankeuangan" class="text-blue-500 font-medium">Pelajari Selengkapnya &gt;</a>
                    </div>
                </div>
                <div className={cardClasses}>
                    <div className={titleClasses}>Permodalan</div>
                    <div className={contentClasses}>
                        Peserta akan didampingi untuk mendapatkan akses permodalan sesuai dengan kebutuhan usahanya.<br /> <br />
                        <a href="/permodalan" class="text-blue-500 font-medium">Pelajari Selengkapnya &gt;</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Seventop;