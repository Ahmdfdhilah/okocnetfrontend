/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Atas from "@img/Trainer/Atas.png";
import Penggerak1 from "@img/Trainer/Penggerak1.png";
import Penggerak2 from "@img/Trainer/Penggerak2.png";
import Penggerak3 from "@img/Trainer/Penggerak3.png";
import Penggerak4 from "@img/Trainer/Penggerak4.png";
import Penggerak5 from "@img/Trainer/Penggerak5.png";
import Penggerak6 from "@img/Trainer/Penggerak6.png";
import Penggerak7 from "@img/Trainer/Penggerak7.png";
import Penggerak8 from "@img/Trainer/Penggerak8.png";
import Vector1 from "@img/Trainer/Vector1.png";
import Vector2 from "@img/Trainer/Vector2.png";
import Vector3 from "@img/Trainer/Vector3.png";
import Vector4 from "@img/Trainer/Vector4.png";
import Vector5 from "@img/Trainer/Vector5.png";

const Trainer = () => {
    return (
        <>
            <div className="flex overflow-hidden relative flex-col items-start px-12 py-20 text-white shadow-sm min-h-[825px] max-md:px-5">
                <img loading="lazy" src={Atas} className="object-cover absolute inset-0 size-full" />
                <div className="relative text-4xl font-bold leading-10 max-md:mt-10 max-md:max-w-full mobile:mt-64 lg:mt-96">
                    TRAINER{" "}
                </div>
                <div className="relative text-lg leading-7 text-justify w-[616px] max-md:max-w-full mobile:mt-0 lg:mt-6">
                    Trainer UMKM memberikan panduan praktis dalam mengembangkan bisnis kecil
                    dan menengah, meliputi strategi pemasaran, manajemen keuangan, dan
                    keterampilan pengembangan produk.
                </div>
            </div>

            <div className="flex flex-col">
                <div className="flex flex-col px-16 py-20 w-full text-black bg-gray-50 max-md:px-5 max-md:max-w-full">
                    <div className="mt-8 text-4xl font-bold leading-10 max-md:max-w-full">
                        Kenapa harus menjadi trainer ?
                    </div>
                    <div className="mt-7 text-lg leading-7 text-justify max-md:max-w-full">
                        Sebagai trainer UMKM di OK OCE, individu tersebut bertanggung jawab
                        memberikan pengetahuan dan keterampilan bisnis kepada para pelaku
                        usaha kecil dan menengah. Dengan pengalaman yang luas, ia menjelaskan
                        topik seperti perencanaan bisnis, pemasaran, dan manajemen keuangan,
                        sambil memberikan motivasi dan dukungan untuk kesuksesan mereka.
                    </div>
                </div>
            </div>

            <div className="flex flex-col px-16 py-20 bg-sky-700 max-md:px-5">
                <div className="mt-8 max-md:max-w-full">
                    <h1 className="mt-5 text-4xl font-bold leading-10 text-white">Siapun bisa menjadi trainer di OK OCE INDONESIA!</h1>
                    <h3 className="mt-4 text-xl font-medium leading-10 text-white">Lengkapi syarat dibawah ini agar kamu bisa menjadi Trainer di OK OCE INDONESIA!</h3>
                </div>
                <div className="mt-24 max-md:mt-10 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                        <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col text-white rounded-xl bg-sky-800 border-white border-2 max-md:mt-10">
                                <div className="text-2xl font-bold leading-8 p-4">
                                    Menjadi Bagian OK OCE Indonesia
                                </div>
                                <div className="text-lg leading-7 text-justify px-4 pb-4 max-md:mt-10">
                                    Seorang calon mentor harus terdaftar sebagai penggerak, atau sebagai volunteer di program OK OCE INDONESIA.
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col text-white rounded-xl bg-sky-800 border-white border-2 max-md:mt-10">
                                <div className="text-2xl font-bold leading-8 p-4">
                                    Memiliki kompetensi dan pengalaman bisnis yang relevan
                                </div>
                                <div className="text-lg leading-7 text-justify px-4 pb-4">
                                    Calon mentor harus memiliki pengetahuan yang memadai dan
                                    pengalaman yang cukup dalam bidang bisnis yang akan diajarkan
                                    kepada para peserta OK OCE.
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col text-white rounded-xl bg-sky-800 border-white border-2 max-md:mt-10">
                                <div className="text-2xl font-bold leading-8 p-4">
                                    Kemampuan untuk mendidik dan memberi motivasi
                                </div>
                                <div className="text-lg leading-7 text-justify px-4 pb-4">
                                    Mentor harus memiliki keterampilan dalam mendidik dan memotivasi
                                    para peserta, serta mampu memberikan dukungan yang diperlukan
                                    untuk membantu mereka meraih kesuksesan dalam usaha mereka.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="justify-center items-center self-center px-16 py-4 mt-36 max-w-full text-xl font-semibold leading-6 text-center text-white bg-red-600 rounded-[50px] w-[441px] max-md:px-5 max-md:mt-10">
                    MULAI BEKERJASAMA
                </div>
            </div>

            <div className="flex flex-col justify-center py-14 bg-white">
                <div className="flex justify-center items-center px-16 py-10 w-full bg-white max-md:px-5 max-md:max-w-full">
                    <div className="flex flex-col w-full max-w-[1217px] max-md:max-w-full">
                        <div className="text-5xl font-bold text-black leading-[57.6px] max-md:max-w-full max-md:text-4xl">
                            Benefit Menjadi Trainer
                        </div>
                        <div className="mt-8 text-lg leading-4 text-neutral-700 max-md:max-w-full">
                            Menjadi trainer memberikan kesempatan untuk berbagi pengetahuan,
                            memperluas jaringan profesional, dan merasa puas melihat
                            perkembangan peserta.
                        </div>
                        <div className="mt-16 max-md:mt-10 max-md:max-w-full">
                            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                                    <div className="flex flex-col grow px-10 py-6 w-full text-black bg-white rounded-3xl border border-indigo-800 border-solid shadow-sm max-md:px-5 max-md:mt-10 max-md:max-w-full">
                                        < img src={Vector1} className="aspect-square w-[50px]" />
                                        <div className="mt-4 text-2xl font-bold leading-8 max-md:max-w-full">
                                            Berbagi Pengetahuan dan Pengalaman
                                        </div>
                                        <div className="mt-4 text-base leading-6 text-justify max-md:max-w-full">
                                            Sebagai trainer UMKM, Anda berbagi pengalaman bisnis untuk
                                            membimbing para pelaku UMKM, membantu mereka menghindari
                                            kesalahan umum, dan mempercepat kemajuan bisnis.
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                                    <div className="flex flex-col grow px-10 pt-6 pb-12 w-full text-black bg-white rounded-3xl border border-indigo-800 border-solid shadow-sm max-md:px-5 max-md:mt-10 max-md:max-w-full">
                                        <img src={Vector2} className="aspect-square w-[50px]" />
                                        <div className="mt-4 text-2xl font-bold leading-8 max-md:max-w-full">
                                            Mendapatkan Penghargaan dan Kepuasan
                                        </div>
                                        <div className="mt-4 text-base leading-6 text-justify max-md:max-w-full">
                                            Melihat peserta berkembang memberikan kepuasan besar,
                                            membuat Anda bangga atas kontribusi Anda pada kesuksesan
                                            mereka.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-12 max-md:mt-10 max-md:max-w-full">
                            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                                <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                                    <div className="flex flex-col grow px-10 pt-5 pb-20 w-full text-black bg-white rounded-3xl border border-indigo-800 border-solid shadow-sm max-md:px-5 max-md:mt-9">
                                        <img src={Vector3} className="aspect-square w-[50px]" />
                                        <div className="mt-4 text-2xl font-bold leading-9">
                                            Mengembangkan Kemampuan Komunikasi dan Kepemimpinan
                                        </div>
                                        <div className="mt-4 text-base leading-6 text-justify">
                                            Sebagai trainer, Anda terus mengasah kemampuan komunikasi,
                                            kepemimpinan, dan motivasi, keterampilan penting dalam
                                            bisnis dan kehidupan sehari-hari.
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                                    <div className="flex flex-col grow px-10 pt-5 pb-12 w-full text-black bg-white rounded-3xl border border-indigo-800 border-solid shadow-sm max-md:px-5 max-md:mt-9">
                                        <img src={Vector4} className="aspect-square w-[50px]" />
                                        <div className="mt-4 text-2xl font-bold leading-9">
                                            Membentuk Jaringan Profesional yang Luas
                                        </div>
                                        <div className="mt-4 text-base leading-6 text-justify">
                                            Menjadi trainer UMKM membuka peluang untuk bertemu dengan
                                            berbagai kalangan industri, memperluas jaringan profesional,
                                            berkolaborasi dengan sesama, dan menemukan peluang bisnis
                                            baru.
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                                    <div className="flex flex-col grow px-10 py-5 w-full text-black bg-white rounded-3xl border border-indigo-800 border-solid shadow-sm max-md:px-5 max-md:mt-9">
                                        <img src={Vector5} className="aspect-square w-[50px]" />
                                        <div className="mt-4 text-2xl font-bold leading-9">
                                            Memberikan Dampak Positif pada Komunitas Bisnis
                                        </div>
                                        <div className="mt-4 text-base leading-6 text-justify">
                                            Sebagai trainer UMKM, Anda memperkuat ekosistem bisnis lokal
                                            dengan membantu para pelaku UMKM berkembang, mendukung
                                            pertumbuhan ekonomi, dan memperkuat komunitas bisnis.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Trainer;
