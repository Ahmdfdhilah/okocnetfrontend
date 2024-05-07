/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";

const DaftarPelatihan = () => {
    // State untuk menyimpan data yang diambil dari API
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


    return (
        <>
            {data && (
                <div className="grid grid-cols-3 gap-4 mt-[8rem]">
                    {data.map((item, index) => (
                        <div key={index} className="max-w-sm bg-black border border-gray-200 rounded-lg shadow">
                            <a href="#">
                                {/* Gunakan URL gambar dari properti og_image */}
                                <img className="rounded-t-lg" src={item.yoast_head_json.og_image[0].url} alt={item.yoast_head_json.title} />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    {/* Gunakan data untuk mengisi judul */}
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{item.yoast_head_json.title}</h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    {/* Gunakan data untuk mengisi konten */}
                                    {item.yoast_head_json.og_description}
                                </p>
                                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Read more
                                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            )}

        </>
    )
}

export default DaftarPelatihan;