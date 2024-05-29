/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import Header from "../asset/img/PenggerakOkOce.png"

const Penggerak = () => {
    const [penggerak, setPenggerak] = useState([]);

    useEffect(() => {
        fetchPenggerak();
    }, []);

    const fetchPenggerak = async () => {
        try {
            const response = await fetch('https://cms-okoce-a155c649b6e6.herokuapp.com/api/penggerak-okoces?populate=*');
            if (!response.ok) {
                throw new Error('Gagal mengambil data karyawan');
            }
            const data = await response.json();
            // Extract the data array from the response
            const employeesData = data.data;
            console.log(employeesData)
            setPenggerak(employeesData);
        } catch (error) {
            console.error('Error fetching employees:', error);
            // Jika terjadi kesalahan, pastikan untuk mengatur employees menjadi array kosong
            setPenggerak([]);
        }
    };

    return (
        <>
            <div className="w-full mt-24">
                <img className="w-full h-auto" alt="" src={Header}></img>
            </div>
            <div class="bg-gray-300 w-10/12 mx-auto rounded-xl grid content-center mobile:h-full mobile:mt-20 mobile:p-10 lg:mt-[3rem] lg:justify-center lg:h-[22rem]">
                <h1 class="font-extrabold text-4xl text-center">Penggerak <br /> OK OCE Indonesia</h1>
                <p class="text-center mt-6 font-medium">Penggerak OK OCE sebagai layer kedua dalam bangunan gerakan sosial penciptaan lapangan kerja <br /> berbasis wirausaha tersebar diberbagai daerah di seluruh Indonesia.</p>
                <p class="text-center mt-2 font-medium">Anda dapat bergabung dengan penggerak-penggerak OK OCE di Lokasi terdekat tempat tinggal anda.</p>
                <button type="button" class="w-[10rem] mt-6 mx-auto text-white text-base bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Penggerak  &#10132; </button>
            </div>

            {/* <!-- component --> */}
            <div class="mt-[3rem] mb-[3rem] flex items-center justify-center">
                <div class="container w-4/5 mx-auto mx-auto p-4">
                    <div class="grid mobile:grid-cols-1 mobile:gap-6 sm:grid-cols-2 md:grid-cols-3 lg:gap-8 lg:grid-cols-3">
                        {/* <!-- Replace this with your grid items --> */}
                        {penggerak.map((penggerak) => (
                            <div class="bg-white rounded-lg border drop-shadow-xl p-4">
                                <img className="min-h-60 max-h-60 min-w-40 mx-auto" src={penggerak.attributes.foto_penggerak.data[0].attributes.url} alt={penggerak.attributes.nama_penggerak} />
                                <div class="px-1 py-4">
                                    <div class="font-bold text-xl mb-2">{penggerak.attributes.nama_penggerak}</div>
                                    <p class="text-gray-700 text-base">
                                        {penggerak.attributes.deskripsi_penggerak}
                                    </p>
                                </div>
                            </div>
                        ))}
                        {/* <!-- Add more items as needed --> */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Penggerak;