import React, { useEffect, useState } from "react";
import Atas from "@img/Trainer/Atas.png";
import FloatingMenu from "../components/FloatingMenu";
import axios from "axios";

const Trainer = () => {
    const [syaratTrainers, setSyaratTrainers] = useState([]);
    const [benefitTrainers, setBenefitTrainers] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/syarat-trainers")
            .then(response => setSyaratTrainers(response.data.data))
            .catch(error => console.error("Error fetching syarat-trainers:", error));

        axios.get("http://localhost:3000/benefit-trainers")
            .then(response => setBenefitTrainers(response.data.data))
            .catch(error => console.error("Error fetching benefit-trainers:", error));
    }, []);

    const splitBenefitsIntoRows = (benefits) => {
        const rows = [];
        let currentIndex = 0;
        let itemsPerRow = 3; 
    
        while (currentIndex < benefits.length) {
            if (rows.length % 2 === 0) {
                itemsPerRow = 3;
            } else {
                itemsPerRow = 2; 
            }
    
            rows.push(benefits.slice(currentIndex, currentIndex + itemsPerRow));
            currentIndex += itemsPerRow;
        }
    
        return rows;
    };
    

    const rows = splitBenefitsIntoRows(benefitTrainers);

    return (
        <>
            <div className="relative flex flex-col items-start px-12 py-20 text-white shadow-sm min-h-[825px] max-md:px-5">
                <img loading="lazy" src={Atas} className="object-cover absolute inset-0 size-full" alt="Trainer Background" />
                <div className="relative text-4xl font-bold leading-10 max-md:mt-10 max-md:max-w-full mobile:mt-64 lg:mt-96">
                    TRAINER
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
                        Kenapa harus menjadi trainer?
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
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 max-md:gap-4">
                        {syaratTrainers.length > 0 ? (
                            syaratTrainers.map(syarat => (
                                <div key={syarat.id} className="flex flex-col w-full">
                                    <div className="flex flex-col grow px-10 py-6 w-full text-white bg-sky-800 border-white border-2 rounded-3xl border border-solid shadow-sm max-md:px-5 max-md:mt-10 max-md:max-w-full">
                                        <div className="text-2xl font-bold leading-8">
                                            {syarat.judul}
                                        </div>
                                        <div className="text-lg leading-7 text-justify mt-4">
                                            {syarat.deskripsi}
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No syarat trainers available</p>
                        )}
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

                        {/* Dynamic Grid Sections */}
                        {rows.length > 0 && (
                            <div className="mt-16 flex flex-col gap-10 max-md:gap-5">
                                {rows.map((row, rowIndex) => (
                                    <div
                                        key={rowIndex}
                                        className={`grid ${rowIndex % 2 === 0 ? 'grid-cols-3 gap-5' : 'grid-cols-2 gap-5'} max-md:gap-4`}
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
            </div>
            <FloatingMenu />
        </>
    );
};

export default Trainer;
