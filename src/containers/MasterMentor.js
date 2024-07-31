/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
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
import FloatingMenu from "../components/FloatingMenu";
import axios from "axios";

const MasterMentor = () => {
    const [benefits, setBenefits] = useState([]);
    const [tujuans, setTujuans] = useState([]);

    useEffect(() => {
        const fetchBenefits = async () => {
            try {
                const response = await axios.get('http://localhost:3000/benefit-master-mentors');
                setBenefits(response.data.data);
            } catch (error) {
                console.error("Error fetching benefits", error);
            }
        };

        const fetchTujuans = async () => {
            try {
                const response = await axios.get('http://localhost:3000/tujuan-master-mentors');
                setTujuans(response.data.data);
            } catch (error) {
                console.error("Error fetching tujuans", error);
            }
        };

        fetchBenefits();
        fetchTujuans();
    }, []);

    const splitBenefitsIntoRows = (benefits) => {
        const rows = [];
        let currentIndex = 0;

        while (currentIndex < benefits.length) {
            const itemsInRow = rows.length % 2 === 0 ? 2 : 3;
            rows.push(benefits.slice(currentIndex, currentIndex + itemsInRow));
            currentIndex += itemsInRow;
        }

        return rows;
    };
    const splitTujuanIntoRows = (benefits) => {
        const rows = [];
        let currentIndex = 0;

        while (currentIndex < benefits.length) {
            const itemsInRow = rows.length % 2 === 0 ? 3 : 2;
            rows.push(tujuans.slice(currentIndex, currentIndex + itemsInRow));
            currentIndex += itemsInRow;
        }

        return rows;
    };

    const benefitRows = splitBenefitsIntoRows(benefits);
    const tujuanRows = splitTujuanIntoRows(tujuans);
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
                <div className="flex gap-5 py-10 max-md:flex-col max-md:gap-0 lg:px-20">
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

            <div className="flex flex-col ml-3 mr-3 mb-10 px-11 pt-2.5 pb-4 max-md:px-5">
                <div className="text-5xl font-bold text-black leading-[57.6px] max-md:max-w-full max-md:text-4xl">
                    Tujuan Master Mentor
                </div>
                <div className="mt-8 text-lg leading-4 text-neutral-700 max-md:max-w-full">
                    Tujuan pelatihan ini diantaranya :
                </div>
                <div className="mt-16 max-md:mt-10 max-md:max-w-full">
                    {tujuanRows.length > 0 && (
                        <div className="flex flex-col gap-10 max-md:gap-5">
                            {tujuanRows.map((row, rowIndex) => (
                                <div
                                    key={rowIndex}
                                    className={`grid ${rowIndex % 2 === 0 ? 'grid-cols-3 gap-5' : 'grid-cols-2 gap-5'} max-md:gap-4`}
                                >
                                    {row.map(tujuan => (
                                        <div key={tujuan.id} className="flex flex-col w-full">
                                            <div className={`flex flex-col grow px-10 py-6 text-black bg-white rounded-3xl border border-indigo-800 border-solid shadow-sm max-md:px-5`}>
                                                <img src={`http://localhost:3000${tujuan.img}`} className="aspect-square w-[50px]" alt={`Benefit ${tujuan.judul}`} />
                                                <div className="mt-4 text-2xl font-bold leading-8 max-md:max-w-full">
                                                    {tujuan.judul}
                                                </div>
                                                <div className="mt-4 text-base leading-6 text-justify max-md:max-w-full">
                                                    {tujuan.deskripsi}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    )}
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

            <div className="flex flex-col ml-3 mr-3 mb-10 px-11 pt-2.5 pb-4 max-md:px-5">
                <div className="text-5xl font-bold text-black leading-[57.6px] max-md:max-w-full max-md:text-4xl">
                    Benefit Menjadi Mentor
                </div>
                <div className="mt-8 text-lg leading-4 text-neutral-700 max-md:max-w-full">
                    Menjadi trainer memberikan kesempatan untuk berbagi pengetahuan,
                    memperluas jaringan profesional, dan merasa puas melihat perkembangan
                    peserta.
                </div>
                <div className="mt-16 max-md:mt-10 max-md:max-w-full">
                    {benefitRows.length > 0 && (
                        <div className="flex flex-col gap-10 max-md:gap-5">
                            {benefitRows.map((row, rowIndex) => (
                                <div
                                    key={rowIndex}
                                    className={`grid ${rowIndex % 2 === 0 ? 'grid-cols-2 gap-5' : 'grid-cols-3 gap-5'} max-md:gap-4`}
                                >
                                    {row.map(benefit => (
                                        <div key={benefit.id} className="flex flex-col w-full">
                                            <div className={`flex flex-col grow px-10 py-6 text-black bg-white rounded-3xl border border-indigo-800 border-solid shadow-sm max-md:px-5`}>
                                                <img src={`http://localhost:3000${benefit.img}`} className="aspect-square w-[50px]" alt={`Benefit ${benefit.judul}`} />
                                                <div className="mt-4 text-2xl font-bold leading-8 max-md:max-w-full">
                                                    {benefit.judul}
                                                </div>
                                                <div className="mt-4 text-base leading-6 text-justify max-md:max-w-full">
                                                    {benefit.deskripsi}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <FloatingMenu />{" "}
        </>
    );
}

export default MasterMentor;
