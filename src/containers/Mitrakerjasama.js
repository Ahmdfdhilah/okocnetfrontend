/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Utama from "@img/mitra-kerjasama/Utama.png";
import Penggerak1 from "@img/Mitrakerjasama/Penggerak1.png";
import Penggerak2 from "@img/Mitrakerjasama/Penggerak2.png";
import Penggerak3 from "@img/Mitrakerjasama/Penggerak3.png";
import Penggerak4 from "@img/Mitrakerjasama/Penggerak4.png";
import Penggerak5 from "@img/Mitrakerjasama/Penggerak5.png";
import Penggerak6 from "@img/Mitrakerjasama/Penggerak6.png";
import Penggerak7 from "@img/Mitrakerjasama/Penggerak7.png";
import Penggerak8 from "@img/Mitrakerjasama/Penggerak8.png";


const Mitrakerjasama = () => {
    return (
        <>
            <div className="flex flex-col justify-center text-white border border-black border-solid leading-[100%]">
            <div className="flex overflow-hidden relative flex-col justify-center w-full min-h-[715px] max-md:max-w-full">
                <img loading="lazy" src={Utama} className="object-cover absolute inset-0 size-full"
                />
                <div className="flex relative flex-col justify-center items-start px-16 py-60 w-full bg-black bg-opacity-60 max-md:px-5 max-md:max-w-full">
                <div className="flex flex-col mt-11 mb-24 ml-20 max-w-full w-[616px] max-md:my-10">
                    <div className="text-4xl font-bold max-md:max-w-full">
                    MITRA KERJASAMA
                    </div>
                    <div className="mt-6 text-lg leading-7 text-justify max-md:max-w-full">
                    Di GandengTangan, Kami percaya bahwa kolaborasi adalah kunci untuk
                    mendukung pertumbuhan dan kesuksesan bersama.
                    <br />
                    Bagian &quot;Kemitraan&quot; kami memperkenalkan berbagai
                    kemitraan Strategis dengan institusi keuangan dan perusahaan
                    lainnya. Kami fokus pada menggabungkan sumber daya pengetahuan
                    untuk memberikan dampak positif pada UMKM di Indonesia.
                    </div>
                    <div className="justify-center px-16 py-4 mt-24 text-xl font-semibold text-center bg-red-600 rounded-[50px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
                    HUBUNGI KAMI UNTUK BERMITRA
                    </div>
                </div>
                </div>
            </div>
            </div>

            <div className="flex flex-col px-16 py-20 text-black bg-white max-md:px-5">
            <div className="mt-14 text-2xl font-bold leading-8 max-md:mt-10 max-md:max-w-full">
                Berbagai Kemitraan di OKEOCE
            </div>
            <div className="mt-12 text-lg leading-7 text-justify max-md:mt-10 max-md:max-w-full">
                Kami memiliki beragam pilihan kemitraan yang dapat mengembangkan dampak
                kita bersama. Sehingga kita bisa memperkuat jejaring kerjasama lembaga
                keuangan maupun perusahaan dan lembaga di sektor lainnya untuk
                memberikan dampak yang lebih besar.
                <br />
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
            <div className="mt-12 text-lg leading-7 text-justify text-white max-md:mt-10 max-md:max-w-full">
                Pelajari tentang manfaat yang kami tawarkan kepada mitra kami. Mulai
                dari akses ke pangsa pasar yang lebih luas hingga berbagi pengetahuan
                industri yang berharga.
            </div>
            <div className="mt-28 max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow text-white max-md:mt-10">
                    <div className="text-2xl font-bold leading-8">
                        Memperluas jaringan kemitraan
                    </div>
                    <div className="mt-14 text-lg leading-7 text-justify max-md:mt-10">
                        OKOCE telah bekerja sama dengan mitra, komunitas, hingga
                        institusi dengan latar belakang yang beragam di Indonesia. Kita
                        bisa menjalin hubungan baru dan mempererat jejaring dengan
                        cakupan yang lebih luas.
                    </div>
                    </div>
                </div>
                <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col text-white max-md:mt-10">
                    <div className="text-2xl font-bold leading-8">Mengembangkan pertumbuhan bisnis</div>
                    <div className="mt-12 text-lg leading-7 text-justify max-md:mt-10">
                        Melalui kerja sama dengan GandengTangan, kita bisa membangun
                        bisnis yang lebih baik dan berkelanjutan secara ekonomi maupun
                        bisnis. Sehingga kedua belah pihak bisa saling menguntungkan
                        satu sama lain.
                    </div>
                    </div>
                </div>
                <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col text-white max-md:mt-10">
                    <div className="text-2xl font-bold leading-8">
                        Meningkatkan inklusivitas keuangan bagi UMKM di Indonesia
                    </div>
                    <div className="mt-7 text-lg leading-7 text-justify">
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
                MULAI BEKERJASAMA</div>
            </div>
            <div className="flex flex-col px-20 py-20 bg-white max-md:px-5">
            <div className="text-2xl font-bold leading-8 text-black max-md:max-w-full">
            Mitra yang Telah Bekerjasama dengan Kami
            </div>
            <div className="mt-12 text-lg leading-7 text-black max-md:mt-10 max-md:max-w-full">
                Hingga saat ini, kami telah bekerjasama dengan berbagai lembaga, mulai
                dari lembaga keuangan, seperti perbankan dan perusahaan modal ventura,
                koperasi, startup digital, hingga lembaga non-profit.
            </div>
            </div>

            <div className="mt-12 max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                    < img src={Penggerak1} className="grow shrink-0 mt-2 max-w-full aspect-[2.04] w-[291px] max-md:mt-10" />
                </div>
                <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                    <img src={Penggerak2} className="grow shrink-0 max-w-full aspect-[1.92] w-[291px] max-md:mt-10" />
                </div>
                <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                    <img src={Penggerak3} className="grow shrink-0 mt-2 max-w-full aspect-[2.04] w-[291px] max-md:mt-10" />
                </div>
                <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                    <img src={Penggerak4} className="grow shrink-0 mt-2 max-w-full aspect-[2.04] w-[291px] max-md:mt-10" />
                </div>
                </div>
            </div>
            <div className="mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
                    <img src={Penggerak5} className="grow shrink-0 max-w-full aspect-[2.04] w-[291px] max-md:mt-10" />
                </div>
                <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                    <img src={Penggerak6} className="grow shrink-0 max-w-full aspect-[2.04] w-[291px] max-md:mt-10" />
                </div>
                <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                    <img src={Penggerak7} className="grow shrink-0 max-w-full aspect-[2.04] w-[291px] max-md:mt-10"/>
                </div>
                <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                    <img src={Penggerak8} className="grow shrink-0 max-w-full aspect-[2.04] w-[291px] max-md:mt-10" />
                </div>
                </div>
            </div>

            <div className="flex flex-col px-16 py-20 text-lg leading-5 text-white bg-sky-700 max-md:px-5">
            <div className="mt-7 text-2xl font-bold max-md:max-w-full">
                Ajukan Kemitraan
            </div>
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
        </>
    );
}

export default Mitrakerjasama;