/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Utama from "@img/mitra-kerjasama/Utama.png";
import Swasta1 from "@img/Mitrakerjasama/Penggerak1.png";
import Swasta2 from "@img/Mitrakerjasama/Penggerak2.png";
import Swasta3 from "@img/Mitrakerjasama/Penggerak3.png";
import Swasta4 from "@img/Mitrakerjasama/Penggerak4.png";
import Swasta5 from "@img/Mitrakerjasama/Penggerak5.png";
import Swasta6 from "@img/Mitrakerjasama/Penggerak6.png";
import Swasta7 from "@img/Mitrakerjasama/Penggerak7.png";
import Swasta8 from "@img/Mitrakerjasama/Penggerak8.png";
import LogoUniv1 from "@img/Logo_UMJ.png";
import LogoUniv2 from "@img/LogoAhmad.png";
import LogoUniv3 from "@img/UnivPertamina.png";
import LogoUniv4 from "@img/LogoUGJ.png";
import LogoUniv5 from "@img/UPI.png";
import LogoUniv6 from "@img/UnivPamulang.png";
import Penggerak1 from "@img/logo_hr-academy.png";
import Penggerak2 from "@img/logo_ok-oce-buana-m16.jpeg";
import Penggerak3 from "@img/logo_ok-oce-forever.jpg";
import Penggerak4 from "@img/logo_ok-oce-gan-gebrakan-anak-negeri.png";
import Penggerak5 from "@img/logo_perwira.png";
import Penggerak6 from "@img/logo_ok-oce-stii.png";
import Govern1 from "@img/yogyakarta.png";
import Govern2 from "@img/surakarta.jpg";
import FloatingMenu from "../components/FloatingMenu";

const Mitrakerjasama = () => {
    return (
        <>
            <div className="flex flex-col justify-center text-white border border-black border-solid leading-[100%]">
                <div className="flex overflow-hidden relative flex-col justify-center w-full min-h-[715px] max-md:max-w-full">
                    <img
                        loading="lazy"
                        src={Utama}
                        className="object-cover absolute inset-0 size-full"
                    />
                    <div className="flex relative flex-col justify-center items-start px-16 py-60 w-full bg-black bg-opacity-60 max-md:px-5 max-md:max-w-full">
                        <div className="flex flex-col max-md:my-10 mobile:w-full lg:w-[616px] lg:mt-11 lg:mb-24 lg:ml-20">
                            <div className="text-4xl font-bold max-md:max-w-full">MITRA KERJASAMA</div>
                            <div className="mt-6 text-lg leading-7 text-justify max-md:max-w-full"
                                style={{ hyphens: 'auto', wordBreak: 'break-word' }}>
                                Di GandengTangan, Kami percaya bahwa kolaborasi adalah kunci
                                untuk mendukung pertumbuhan dan kesuksesan bersama.
                                Bagian &quot;Kemitraan&quot; kami memperkenalkan berbagai
                                kemitraan Strategis dengan institusi keuangan dan perusahaan
                                lainnya. Kami fokus pada menggabungkan sumber daya pengetahuan
                                untuk memberikan dampak positif pada UMKM di Indonesia.
                            </div>
                            <div className="justify-center px-16 py-4 mt-24 text-xl font-semibold text-center bg-red-600 rounded-[50px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
                                HUBUNGI KAMI UNTUK BERMITRA
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-11/12 mx-auto flex flex-col px-16 py-20 text-black bg-white max-md:px-5">
                <div className="mt-14 text-3xl font-bold text-center leading-8 max-md:mt-10 max-md:max-w-full">
                    Berbagai Kemitraan di OKEOCE
                </div>
                <div className="mx-auto mt-8 text-xl leading-7 text-justify max-md:mt-10 lg:w-8/12" style={{ hyphens: 'auto', wordBreak: 'break-word' }}>
                    Kami memiliki beragam pilihan kemitraan yang dapat mengembangkan dampak
                    kita bersama. Sehingga kita bisa memperkuat jejaring kerjasama lembaga
                    keuangan maupun perusahaan dan lembaga di sektor lainnya untuk
                    memberikan dampak yang lebih besar.
                    Temukan informasi rinci tentang kemitraan yang telah dibentuk dengan
                    berbagai institusi keuangan, perusahaan, dan lembaga organisasi lainnya.
                    Kami berbangga menjadi bagian dari upaya untuk memajukan UMKM di
                    Indonesia.
                </div>
            </div>

            <div className="flex flex-col px-16 py-20 bg-sky-700 max-md:px-5">
                <div className="mt-7 text-2xl font-bold leading-8 text-white max-md:max-w-full">
                    Manfaat Kemitraan dengan OKOCE
                </div>
                <div className="mt-6 text-xl leading-7 text-justify text-white max-md:mt-10 max-md:max-w-full" style={{ hyphens: 'auto', wordBreak: 'break-word' }}>
                    Pelajari tentang manfaat yang kami tawarkan kepada mitra kami. Mulai
                    dari akses ke pangsa pasar yang lebih luas hingga berbagi pengetahuan
                    industri yang berharga.
                </div>
                <div className="mt-28 max-md:mt-10 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                        <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow text-white max-md:mt-10">
                                <div className="text-3xl font-bold leading-8">
                                    Memperluas jaringan kemitraan
                                </div>
                                <div className="mt-24 text-xl leading-7 text-justify max-md:mt-10">
                                    OKOCE telah bekerja sama dengan mitra, komunitas, hingga
                                    institusi dengan latar belakang yang beragam di Indonesia. Kita
                                    bisa menjalin hubungan baru dan mempererat jejaring dengan
                                    cakupan yang lebih luas.
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col text-white max-md:mt-10">
                                <div className="text-3xl font-bold leading-8">Mengembangkan pertumbuhan bisnis</div>
                                <div className="mt-16 text-xl leading-7 text-justify max-md:mt-10" style={{ hyphens: 'auto', wordBreak: 'break-word' }}>
                                    Melalui kerja sama dengan GandengTangan, kita bisa membangun
                                    bisnis yang lebih baik dan berkelanjutan secara ekonomi maupun
                                    bisnis. Sehingga kedua belah pihak bisa saling menguntungkan
                                    satu sama lain.
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col text-white max-md:mt-10">
                                <div className="text-3xl font-bold leading-8">
                                    Meningkatkan inklusivitas keuangan bagi UMKM di Indonesia
                                </div>
                                <div className="mt-8 text-xl leading-7 text-justify">
                                    Sejalan dengan visi dan misi GandengTangan, perusahaanmu bisa
                                    ikut terlibat dalam meningkatkan inklusivitas keuangan bagi
                                    UMKM, yang belum terlayani di perkotaan maupun pelosok yang ada
                                    di Indonesia.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="justify-center items-center self-center px-16 py-4 mt-28 max-w-full text-xl font-semibold leading-6 text-center text-white bg-red-600 rounded-[50px] w-[441px] max-md:px-5 max-md:mt-10">
                    MULAI BEKERJASAMA
                </div>
            </div>
            <div className="flex flex-col px-20 py-20 bg-white max-md:px-5">
                <div className="text-2xl font-bold leading-8 text-black max-md:max-w-full">
                    Mitra yang Telah Bekerjasama dengan Kami
                </div>
                <div className="mt-6 text-xl text-justify leading-7 text-black max-md:mt-10 max-md:max-w-full" style={{ hyphens: 'auto', wordBreak: 'break-word' }}>
                    Hingga saat ini, kami telah bekerjasama dengan berbagai lembaga, mulai
                    dari lembaga keuangan, seperti perbankan dan perusahaan modal ventura,
                    koperasi, startup digital, hingga lembaga non-profit.
                </div>
            </div>

            <div class="grid grid-grid-flow-row justify-items-center items-center mobile:w-80 mobile:mx-auto sm:w-96 lg:w-full">
                <div class="md:pt-16 pb-8">
                    <h2 class="text-sky-700 text-center font-poppins mobile:text-2xl font-bold-700 mobile:text-3xl mobile:font-bold lg:text-4xl ">
                        Total Mitra Kerjasama Swasta
                    </h2>
                    <h3 className="mt-4 mb-4 text-black text-center font-poppins mobile:text-lg mobile:text-3xl mobile:font-bold lg:text-xl lg:font-medium">
                        Mitra Kerjasama Swasta{" "}
                        <span className="text-red-500 font-bold">OK OCE </span>sampai saat
                        ini
                    </h3>
                </div>
                <div class="w-full mb-20 flex justify-around items-center text-slate-700">
                    <div class="about-container flex flex-col lg:flex-row justify-center items-center bg-detik-milk mobile:w-3/4 lg:w-[35rem]">
                        <div class="lg:mt-0 text-lg flex flex-col flex-grow pl-4 justify-center items-center">
                            <p className="font-bold text-2xl mb-4">37</p>
                            <div class="pb-5">
                                <h3 class="text-black text-justify font-medium">
                                    Mitra Kerjasama Swasta
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pb-14 w-full mx-auto h-auto overflow-hidden border-b-4">
                <div className="mobile:grid mobile:grid-cols-1 mobile:gap-y-10 mobile:justify-items-center lg:flex lg:gap-x-10 lg:animate-marquee">
                    <div className="mobile:w-60 mobile:h-auto lg:w-full lg:h-full">
                        <img src={Swasta1} className="grow shrink-0 mt-2 w-full" />
                    </div>
                    <div className="mobile:w-60 mobile:h-auto lg:w-full lg:h-full">
                        <img src={Swasta2} className="grow shrink-0 mt-2 w-full" />
                    </div>
                    <div className="mobile:w-60 mobile:h-auto lg:w-full lg:h-full">
                        <img src={Swasta3} className="grow shrink-0 mt-2 w-full " />
                    </div>
                    <div className="mobile:w-60 mobile:h-auto lg:w-full lg:h-full">
                        <img src={Swasta4} className="grow shrink-0 mt-2 w-full " />
                    </div>
                    <div className="mobile:w-60 mobile:h-auto lg:w-full lg:h-full">
                        <img src={Swasta5} className="grow shrink-0 w-full " />
                    </div>
                    <div className="mobile:w-60 mobile:h-auto lg:w-full lg:h-full">
                        <img src={Swasta6} className="grow shrink-0 w-full" />
                    </div>
                    <div className="mobile:w-60 mobile:h-auto lg:w-full lg:h-full">
                        <img src={Swasta7} className="grow shrink-0 w-full" />
                    </div>
                    <div className="mobile:w-60 mobile:h-auto lg:w-full lg:h-full">
                        <img src={Swasta8} className="grow shrink-0 w-full" />
                    </div>
                </div>
            </div>

            <div class="grid grid-grid-flow-row justify-items-center items-center mobile:w-80 mobile:mx-auto mobile:pt-20 sm:w-96 lg:w-full">
                <div class="md:pt-16 pb-8">
                    <h2 class="text-sky-700 text-center font-poppins mobile:text-2xl font-bold-700 mobile:text-3xl mobile:font-bold lg:text-4xl ">
                        Total Mitra Kerjasama Pendidikan
                    </h2>
                    <h3 className="mt-4 mb-4 text-black text-center font-poppins mobile:text-lg mobile:text-3xl mobile:font-bold lg:text-xl lg:font-medium">
                        Mitra Kerjasama Pendidikan{" "}
                        <span className="text-red-500 font-bold">OK OCE </span>sampai saat
                        ini
                    </h3>
                </div>
                <div class="w-full flex justify-around items-center text-slate-700 mobile:mb-0  lg:mb-20">
                    <div class="about-container flex flex-col lg:flex-row justify-center items-center bg-detik-milk mobile:w-3/4 lg:w-[35rem]">
                        <div class="lg:mt-0 text-lg flex flex-col flex-grow pl-4 justify-center items-center">
                            <p className="font-bold text-2xl mb-4">60</p>
                            <div class="mobile:pb-0 lg:pb-5">
                                <h3 class="text-black font-medium mobile:text-center lg:text-justify">
                                    Mitra Kerjasama Pendidikan
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full mx-auto h-auto mobile:pb-0 lg:pb-14 border-b-4">
                <div className="grid gap-x-20 mobile:grid-cols-1 mobile:grid-flow-row mobile:gap-y-4 mobile:w-full mobile:justify-items-center lg:grid-flow-col lg:w-9/12 lg:mx-auto">
                    <div className="mobile:w-60 mobile:h-auto lg:w-full lg:h-full">
                        <img src={LogoUniv1} className="grow shrink-0 mobile:mb-12 mobile:mx-auto mobile:mt-10 mobile:w-3/5 lg:w-full lg:mt-2" />
                    </div>
                    <div className="mobile:w-60 mobile:h-auto lg:w-full lg:h-full">
                        <img src={LogoUniv2} className="grow shrink-0 mobile:mx-auto mobile:mb-12 mobile:w-3/5 lg:w-full lg:mt-2" />
                    </div>
                    <div className="mobile:w-60 mobile:h-auto lg:w-full lg:h-full">
                        <img src={LogoUniv3} className="grow shrink-0 mobile:mx-auto mobile:mb-12 mobile:w-3/5 lg:w-full lg:mt-2" />
                    </div>
                    <div className="mobile:w-60 mobile:h-auto lg:w-full lg:h-full">
                        <img src={LogoUniv4} className="grow shrink-0 mobile:mx-auto mobile:mb-12 mobile:w-3/5 lg:w-full lg:mt-2" />
                    </div>
                    <div className="mobile:w-60 mobile:h-auto lg:w-full lg:h-full">
                        <img src={LogoUniv5} className="grow shrink-0 mobile:mx-auto mobile:mb-12 mobile:w-3/5 lg:w-full lg:mt-2" />
                    </div>
                    <div className="mobile:w-60 mobile:h-auto lg:w-full lg:h-full">
                        <img src={LogoUniv6} className="grow shrink-0 mobile:mx-auto mobile:mb-12 mobile:w-3/5 lg:w-full lg:mt-2" />
                    </div>
                </div>
            </div>

            <div class="grid grid-grid-flow-row justify-items-center items-center mobile:w-80 mobile:mx-auto mobile:pt-20 sm:w-96 lg:w-full">
                <div class="md:pt-16 pb-8">
                    <h2 class="text-sky-700 text-center font-poppins mobile:text-2xl font-bold-700 mobile:text-3xl mobile:font-bold lg:text-4xl ">
                        Total Mitra Kerjasama Penggerak
                    </h2>
                    <h3 className="mt-4 mb-4 text-black text-center font-poppins mobile:text-lg mobile:text-3xl mobile:font-bold lg:text-xl lg:font-medium">
                        Mitra Kerjasama Penggerak{" "}
                        <span className="text-red-500 font-bold">OK OCE </span>sampai saat
                        ini
                    </h3>
                </div>
                <div class="w-full flex justify-around items-center text-slate-700 mobile:mb-0 lg:mb-20">
                    <div class="about-container flex flex-col lg:flex-row justify-center items-center bg-detik-milk mobile:w-3/4 lg:w-[35rem]">
                        <div class="lg:mt-0 text-lg flex flex-col flex-grow pl-4 justify-center items-center">
                            <p className="font-bold text-2xl mb-4">200</p>
                            <div class="mobile:pb-0 lg:pb-5">
                                <h3 class="text-black text-justify font-medium">
                                    Mitra Kerjasama Penggerak
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pb-14 w-full mx-auto h-auto border-b-4">
                <div className="w-9/12 mx-auto grid gap-x-20 mobile:grid-cols-1 mobile:grid-flow-row mobile:gap-y-4 lg:grid-flow-col">
                    <div className="w-full h-full">
                        <img src={Penggerak1} className="grow shrink-0 mt-2 w-full" />
                    </div>
                    <div className="w-full">
                        <img src={Penggerak2} className="grow shrink-0 mobile:mt-0 mobile:mb-14 lg:mt-2 w-full" />
                    </div>
                    <div className="w-full">
                        <img src={Penggerak3} className="grow shrink-0 mt-2 mobile:mb-12 mobile:mx-auto mobile:w-3/5 lg:w-full" />
                    </div>
                    <div className="w-full">
                        <img src={Penggerak4} className="grow shrink-0 mt-2 w-full " />
                    </div>
                    <div className="w-full">
                        <img src={Penggerak5} className="grow shrink-0 w-full " />
                    </div>
                    <div className="w-full">
                        <img src={Penggerak6} className="grow shrink-0 w-full" />
                    </div>
                </div>
            </div>

            <div class="grid grid-grid-flow-row justify-items-center items-center mobile:w-80 mobile:mx-auto mobile:pt-20 sm:w-96 lg:w-full">
                <div class="md:pt-16 pb-8">
                    <h2 class="text-sky-700 text-center font-poppins mobile:text-2xl font-bold-700 mobile:text-3xl mobile:font-bold lg:text-4xl ">
                        Total Mitra Kerjasama Pemerintah
                    </h2>
                    <h3 className="mt-4 mb-4 text-black text-center font-poppins mobile:text-lg mobile:text-3xl mobile:font-bold lg:text-xl lg:font-medium">
                        Mitra Kerjasama Pemerintah{" "}
                        <span className="text-red-500 font-bold">OK OCE </span>sampai saat
                        ini
                    </h3>
                </div>
                <div class="w-full flex justify-around items-center text-slate-700 mobile:mb-0 lg:mb-20">
                    <div class="about-container flex flex-col lg:flex-row justify-center items-center bg-detik-milk mobile:w-3/4 lg:w-[35rem]">
                        <div class="lg:mt-0 text-lg flex flex-col flex-grow pl-4 justify-center items-center">
                            <p className="font-bold text-2xl mb-4">2</p>
                            <div class="mobile:pb-0 lg:pb-5">
                                <h3 class="text-black text-center font-medium">
                                    Mitra Kerjasama Pemerintah
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pb-14 w-full mx-auto h-auto">
                <div className="w-9/12 mx-auto grid gap-x-20 mobile:grid-cols-1 mobile:grid-flow-row mobile:gap-y-4 lg:grid-cols-2">
                    <div className="w-full h-auto lg:ml-36">
                        <img src={Govern1} className="grow shrink-0 mt-2 w-96" />
                    </div>
                    <div className="w-full h-auto">
                        <img src={Govern2} className="grow shrink-0 mobile:mt-0 mobile:w-80 mobile:mb-14 lg:mt-14 lg:w-72" />
                    </div>
                </div>
            </div>

            <div className="flex flex-col px-16 py-20 text-lg leading-5 text-white bg-sky-700 max-md:px-5">
                <div className="mt-7 text-2xl font-bold max-md:max-w-full">Ajukan Kemitraan</div>
                <div className="mt-12 leading-7 text-justify max-md:mt-10 max-md:max-w-full">
                    Jika Anda tertarik untuk menjajaki kemitraan dengan kami, jangan ragu
                    untuk menghubungi kami. Kami siap untuk mendiskusikan berbagai peluang
                    yang bisa kita ciptakan bersama
                </div>
                <div className="justify-center items-center px-16 py-4 mt-14 max-w-full text-xl font-semibold text-center bg-red-600 rounded-[50px] w-[441px] max-md:px-5 max-md:mt-10">
                    MULAI BEKERJASAMA
                </div>
                <div className="mt-16 leading-7 text-justify max-md:mt-10 max-md:max-w-full">
                    Jika Anda tertarik untuk menjajaki kemitraan dengan kami, jangan ragu
                    untuk menghubungi kami. Kami siap untuk mendiskusikan berbagai peluang
                    yang bisa kita ciptakan bersama
                </div>
            </div>
            <FloatingMenu />
        </>
    );
};

export default Mitrakerjasama;