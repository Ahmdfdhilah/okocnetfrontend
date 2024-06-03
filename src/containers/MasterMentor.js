/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import MASTERMENTOR from "@img/Mastermentor/MASTERMENTOR.png";
import TUJUAN1 from "@img/Mastermentor/TUJUAN1.png";
import TUJUAN2 from "@img/Mastermentor/TUJUAN2.png";
import TUJUAN3 from "@img/Mastermentor/TUJUAN3.png";
import TUJUAN4 from "@img/Mastermentor/TUJUAN4.png";
import TUJUAN5 from "@img/Mastermentor/TUJUAN5.png";
import TUJUAN6 from "@img/Mastermentor/TUJUAN6.png";
import STRATEGI from "@img/Mastermentor/STRATEGI.png";
import BENEFIT1 from "@img/Mastermentor/BENEFIT1.png";
import BENEFIT2 from "@img/Mastermentor/BENEFIT2.png";
import BENEFIT3 from "@img/Mastermentor/BENEFIT3.png";
import BENEFIT4 from "@img/Mastermentor/BENEFIT4.png";
import BENEFIT5 from "@img/Mastermentor/BENEFIT5.png";

const MasterMentor = () => {
    return (
        <>
            <div className="flex justify-center items-center px-16 py-20 bg-zinc-300 max-md:px-5">
                <div className="mt-9 w-full max-w-[1232px] max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                        <div className="flex flex-col w-[55%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col mt-14 max-md:mt-10 max-md:max-w-full">
                                <div className="text-6xl font-semibold text-red-700 leading-[60px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
                                    <span className="text-sky-700">
                                        Daftar Sertifikasi Master Mentor{" "}
                                    </span>
                                    <br />
                                    OK OCE
                                </div>
                                <div className="justify-center self-start px-12 py-6 mt-12 text-2xl font-bold leading-8 text-center text-white bg-red-600 rounded-3xl max-md:px-5 max-md:mt-10">
                                    DAFTAR{" "}
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full">
                            <img className="grow w-full aspect-[1.45] max-md:mt-10 max-md:max-w-full" src={MASTERMENTOR} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="flex gap-5 px-20 py-10 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow px-5 text-black max-md:mt-10 max-md:max-w-full">
                            <div className="text-5xl font-bold leading-[57.6px] max-md:max-w-full max-md:text-4xl">
                                Sertifikasi Master Mentor
                            </div>
                            <div className="mt-6 text-lg leading-7 text-justify max-md:max-w-full">
                                Pemberdayaan UMKM terbukti menjadi penggerak roda perekonomian
                                nasional dengan kontribusi dan perannya dalam penyerapan tenaga
                                kerja. Pemberdayaan UMKM melalui para penggerak terbukti mampu
                                menekan jumlah angka pegangguran dan kemiskinan. Namun
                                permasalahan yang umum dihadapi pelaku UMKM adalah keterbatasan
                                permodalan, SDM yang kurang kompeten dibidangnya dan teknologi.
                                Hal tersebut perlu mendapat dukungan dari berbagai pihak dalam
                                bentuk penguatan.
                            </div>
                            <div className="justify-center self-start p-2.5 mt-9 text-base font-semibold leading-6 text-center text-white bg-sky-700 rounded-[50px] max-md:px-5">
                                Daftar Sekarang!
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col mx-auto mt-5 w-5/12 max-md:ml-0 max-md:w-full">
                        <iframe id="hero-iframe" src="https://okoce.net/wp-content/uploads/2023/10/7.-HIGHRES-VIDEO-UCAPAN-MASTER-MENTOR-OK-OCE.mp4" class="rounded-xl h-80"></iframe>
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-center px-16 py-14 bg-white max-md:px-5">
                <div className="flex flex-col w-full max-w-[1229px] max-md:max-w-full">
                    <div className="text-5xl font-bold text-black leading-[57.6px] max-md:max-w-full max-md:text-4xl">
                        Tujuan Pelatihan
                    </div>
                    <div className="mt-6 text-lg leading-4 text-neutral-700 max-md:max-w-full">
                        Tujuan pelatihan ini diantaranya :
                    </div>
                    <div className="mt-16 max-md:mt-10 max-md:max-w-full">
                        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col grow text-black max-md:mt-6">
                                    <img className="w-16 aspect-square" src={TUJUAN1} alt="" />
                                    <div className="mt-4 text-2xl font-bold leading-8">
                                        Kompetensi
                                    </div>
                                    <div className="mt-4 text-base leading-6 text-justify">
                                        Para Pendamping memiliki kompetensi komunikasi yang baik dalam
                                        hal menyampaikan sesuatu dengan jelas dan tepat di depan
                                        kelompok maupun individu.
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col grow text-black max-md:mt-6">
                                    <img className="w-16 aspect-square" src={TUJUAN2} alt="" />
                                    <div className="mt-4 text-2xl font-bold leading-8">
                                        Pengembangan
                                    </div>
                                    <div className="mt-4 text-base leading-6 text-justify">
                                        Para Pendamping terampil dalam menerapkan pendekatan coaching
                                        untuk lebih mengembangkan diri, rekan sejawat maupun para
                                        pelaku UMKM.
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col grow text-black max-md:mt-6">
                                    <img className="w-16 aspect-square" src={TUJUAN3} alt="" />
                                    <div className="mt-4 text-2xl font-bold leading-8">
                                        Pengembangan
                                    </div>
                                    <div className="mt-4 text-base leading-6 text-justify">
                                        Para Pendamping terampil dalam menerapkan pendekatan coaching
                                        untuk lebih mengembangkan diri, rekan sejawat maupun para
                                        pelaku UMKM.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-24 max-md:mt-10 max-md:max-w-full">
                        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col grow text-black max-md:mt-6">
                                    <img className="w-16 aspect-square" src={TUJUAN4} alt="" />
                                    <div className="mt-4 text-2xl font-bold leading-8">
                                        Fasilitas
                                    </div>
                                    <div className="mt-4 text-base leading-6 text-justify">
                                        Pendamping mampu untuk memfasilitasi para pelaku UMKM dalam
                                        hal permodalan, pemasaran dan masalah teknis lainnya.
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col grow text-black max-md:mt-6">
                                    <img className="w-16 aspect-square" src={TUJUAN5} alt="" />
                                    <div className="mt-4 text-2xl font-bold leading-8">Asertif</div>
                                    <div className="mt-4 text-base leading-6 text-justify">
                                        Pendamping mampu untuk melakukan evaluasi dengan cara
                                        pemberian feedback dan refleksi berdasarkan data dan hasil
                                        capaian.
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col grow text-black max-md:mt-6">
                                    <img className="w-16 aspect-square" src={TUJUAN6} alt="" />
                                    <div className="mt-4 text-2xl font-bold leading-8">
                                        Evaluasi
                                    </div>
                                    <div className="mt-4 text-base leading-6 text-justify">
                                        Kemampuan kecerdasan emosi yang baik dibutuhkan dalam
                                        menghadapi tantangan di lapangan dan mampu membangun perilaku
                                        asertif.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center px-16 py-14 bg-white max-md:px-5">
                <div className="flex flex-col px-5 py-5 text-5xl font-bold text-center text-black leading-[57.6px] max-md:text-4xl">
                    <div className="w-full max-md:max-w-full max-md:text-4xl">
                        Strategi Pelatihan
                    </div>
                    <img className="self-center mt-12 w-full aspect-[1.89] max-w-[1103px] max-md:mt-10 max-md:max-w-full" src={STRATEGI} alt="" />
                </div>
            </div>

            <div className="flex flex-col items-center px-16 pt-10 pb-20 bg-white max-md:px-5">
                <div className="flex flex-col w-full max-w-[1217px] max-md:max-w-full">
                    <div className="text-5xl font-bold text-black leading-[57.6px] max-md:max-w-full max-md:text-4xl">
                        Benefit Pelatihan
                    </div>
                    <div className="mt-8 text-lg leading-4 text-neutral-700 max-md:max-w-full">
                        Yuk upgrade diri dan usahamu dengan mengikuti pelatihan khusus
                        Pendamping Penggerak OK OCE:
                    </div>
                    <div className="mt-14 max-md:mt-10 max-md:max-w-full">
                        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col grow px-10 py-6 w-full text-black bg-white rounded-3xl border border-indigo-800 border-solid shadow-sm max-md:px-5 max-md:mt-10 max-md:max-w-full">
                                    <img className="aspect-square w-[50px]" src={BENEFIT1} alt="" />
                                    <div className="mt-4 text-2xl font-bold leading-8 max-md:max-w-full">
                                        Jaminan Kompetensi
                                    </div>
                                    <div className="mt-4 text-base leading-6 text-justify max-md:max-w-full">
                                        Para Pendamping memiliki kompetensi komunikasi yang baik dalam
                                        hal menyampaikan sesuatu dengan jelas dan tepat di depan
                                        kelompok maupun individu.
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col grow px-10 py-6 w-full text-black bg-white rounded-3xl border border-indigo-800 border-solid shadow-sm max-md:px-5 max-md:mt-10 max-md:max-w-full">
                                    <img className="aspect-square w-[50px]" src={BENEFIT2} alt="" />
                                    <div className="mt-4 text-2xl font-bold leading-8 max-md:max-w-full">
                                        Keterampilan Coaching
                                    </div>
                                    <div className="mt-4 text-base leading-6 text-justify max-md:max-w-full">
                                        Para Pendamping memiliki kompetensi komunikasi yang baik dalam
                                        hal menyampaikan sesuatu dengan jelas dan tepat di depan
                                        kelompok maupun individu.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 max-md:mt-10 max-md:max-w-full">
                        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col grow px-10 pt-5 pb-20 w-full text-black bg-white rounded-3xl border border-indigo-800 border-solid shadow-sm max-md:px-5 max-md:mt-9">
                                    <img className="aspect-square w-[50px]" src={BENEFIT3} alt="" />
                                    <div className="mt-4 text-2xl font-bold leading-8">
                                        Permodalan dan Pemasaran
                                    </div>
                                    <div className="mt-4 text-base leading-6 text-justify">
                                        Dengan mendaftar program master mentor, usahamu akan
                                        mendapatkan fasilitas dari para pendamping dalam hal
                                        permodalan dan pemasaran.
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col grow px-10 pt-5 pb-20 w-full text-black bg-white rounded-3xl border border-indigo-800 border-solid shadow-sm max-md:px-5 max-md:mt-9">
                                    <img className="aspect-square w-[50px]" src={BENEFIT4} alt="" />
                                    <div className="mt-4 text-2xl font-bold leading-8">
                                        Pelaku Asertif
                                    </div>
                                    <div className="mt-4 text-base leading-6 text-justify">
                                        Para Pendamping memiliki kemampuan kecerdasan emosi yang baik
                                        yang dibutuhkan dalam menghadapi tantangan di lapangan.
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                                <div className="flex flex-col grow px-10 pt-5 pb-20 w-full text-black bg-white rounded-3xl border border-indigo-800 border-solid shadow-sm max-md:px-5 max-md:mt-9">
                                    <img className="aspect-square w-[50px]" src={BENEFIT5} alt="" />
                                    <div className="mt-4 text-2xl font-bold leading-8">
                                        Feedback & Evaluasi
                                    </div>
                                    <div className="mt-4 text-base leading-6 text-justify">
                                        Pendamping dalam program master mentor juga akan bertanggung
                                        jawab dalam melakukan evaluasi pengembangan usahamu
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

export default MasterMentor;
