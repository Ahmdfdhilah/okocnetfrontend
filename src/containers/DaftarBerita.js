import React, { useState, useEffect } from "react";
import Header from '../asset/img/beritaheader.png';
import { Link } from "react-router-dom";
import FloatingMenu from "../components/FloatingMenu";

const ITEMS_PER_PAGE = 2;

const DaftarBerita = () => {
    const [datas, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1); // State untuk halaman saat ini

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:3000/beritas')
            if (!response.ok) {
                throw new Error('Gagal mengambil data berita');
            }
            const data = await response.json();
            const newsData = data.data;
            setData(newsData);
        } catch (error) {
            console.error('Error fetching news:', error);
            setData([]);
        }
    };

    // Fungsi untuk menangani perubahan halaman
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    // Hitung total halaman
    const totalPages = Math.ceil(datas.length / ITEMS_PER_PAGE);

    // Hitung index item yang harus ditampilkan pada halaman saat ini
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const currentItems = datas.slice(startIndex, endIndex);

    return (
        <>
            <div className="bg-gray-200">
                <div className="block w-full mt-24 pt-12">
                    <img className="border-8 border-white mobile:w-full mobile:object-cover mobile:h-[11.3rem] lg:w-11/12 lg:h-[23rem] mx-auto rounded-xl" src={Header} alt="" />
                </div>
                <div className="grid mobile:grid-cols-1 mobile:mt-10 lg:w-11/12 lg:mx-auto lg:grid-cols-3 lg:gap-y-8 lg:gap-x-4 lg:mt-24">
                    {currentItems.map((data, index) => (
                        <div key={index} className="w-full mx-auto p-4">
                            <div className="bg-blue-400 shadow-md rounded-lg lg:mr-1">
                                <div className="p-5">
                                    <img className="object-cover w-full mobile:h-36 lg:h-96" src={`https://sole-debi-crytonexa-deb22e0b.koyeb.app${data.fotoBerita}`} alt="" />
                                    <div className="relative group mb-2 mt-6 h-20">
                                        <div className="text-base leading-7 text-white font-bold text-xl overflow-hidden line-clamp-2">
                                            {data.judulBerita}
                                        </div>
                                        <div className="absolute left-0 bottom-full mb-2 hidden w-full text-xs text-white bg-black p-2 rounded group-hover:block">
                                            {data.judulBerita}
                                        </div>
                                    </div>
                                    <p className="text-white">Author: {data.authorBerita}</p>
                                    <div className="flex space-x-4 my-4">
                                        <span className="bg-gray-200 text-black text-sm font-semibold mr-2 px-2.5 py-0.5 rounded">
                                            Tanggal Publish: {data.tanggalBerita}
                                        </span>
                                    </div>
                                    <Link to={`/daftarberita/${data.id}`}>
                                        <div className="mt-8 flex justify-start">
                                            <button className="bg-white w-full text-black font-bold p-2 rounded-lg hover:bg-red-500 hover:text-white">Read more</button>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination Controls */}
                <div className="flex justify-center mt-8 py-8 mx-auto rounded-xl mobile:w-3/4 lg:w-1/2">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="mx-1 py-2 border rounded bg-white text-blue-500 mobile:w-full lg:w-8/12 hover:bg-blue-500 hover:text-white"
                    >
                        Sebelumnya
                    </button>
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="mx-1 py-2 border rounded bg-white text-blue-500 mobile:w-full lg:w-8/12 hover:bg-blue-500 hover:text-white"
                    >
                        Selanjutnya
                    </button>
                </div>
            </div>
            <FloatingMenu />{" "}
        </>
    );
};

export default DaftarBerita;
