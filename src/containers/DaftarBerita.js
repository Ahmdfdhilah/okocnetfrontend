/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";

const DaftarBerita = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
        // Fungsi async untuk mengambil data dari API
        const fetchData = async () => {
            try {
                const response = await fetch('https://okoce.net/wp-json/wp/v2/posts');
                if (!response.ok) {
                    throw new Error('Gagal mengambil data dari API');
                }
                const data = await response.json();
                // Memperbarui state dengan data yang diperoleh dari API
                setData(data);

                // Console log untuk memeriksa data yang diperoleh dari API
                console.log('Data dari API:', data);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        // Memanggil fungsi fetchData saat komponen dimuat
        fetchData();
    }, []); // Dependency array kosong agar hanya dipanggil sekali saat komponen dimuat

    const formatTanggal = (tanggal) => {
        // Buat objek Date dari tanggal
        const date = new Date(tanggal);

        // Opsi untuk format tanggal
        const options = { day: 'numeric', month: 'long', year: 'numeric' };

        // Format tanggal menggunakan toLocaleDateString() dengan opsi yang sesuai
        return date.toLocaleDateString('id-ID', options);
    };

    return (
        <>
            {data && (
                <div className="mt-[10rem] grid grid-rows gap-4 mb-10">
                    {data.map((item, index) => (
                        <div key={index} className="border-t-2 border-red-600 border-solid" >
                            <div className="flex gap-5 w-full mt-10 max-md:flex-wrap max-md:max-w-full">
                                <div className="flex flex-col self-start px-5 mt-2.5 font-semibold text-justify text-sky-700 leading-[120%]">
                                    <div className="text-5xl max-md:text-4xl">{formatTanggal(item.date)}</div>
                                </div>
                                <div className="flex-auto max-md:max-w-full">
                                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                                        <div className="flex flex-col w-[39%] max-md:ml-0 max-md:w-full">
                                            <img
                                                loading="lazy"
                                                srcSet={item.yoast_head_json.og_image[0].url}
                                                className="grow w-full aspect-[1.41] max-md:mt-5 object-cover"
                                            />
                                        </div>
                                        <div className="flex flex-col ml-5 w-[61%] max-md:ml-0 max-md:w-full">
                                            <div className="flex flex-col grow px-5 mt-1 font-semibold leading-6 text-justify text-black max-md:mt-6 max-md:max-w-full">
                                                <div className="text-xl max-md:max-w-full">
                                                    Program ToT Mentor OK OCE Batch 8, Pengaruh ‘Ketenangan’ Dalam
                                                    Public Speaking dan Coaching
                                                </div>
                                                <div className="mt-4 text-base max-md:max-w-full">
                                                    Jakarta – OK OCE terus menguatkan visi penciptaan lapangan
                                                    kerja melalui pendampingan wirausaha dengan cara memperluas
                                                    Mentor diseluruh wilayah Indonesia. Yang...
                                                </div>
                                                <div className="mt-28 text-sm leading-4 text-red-600 max-md:mt-10 max-md:max-w-full">
                                                    READ MORE
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}


        </>
    )
}

export default DaftarBerita;