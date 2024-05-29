import React, { useState, useEffect } from "react";
import Header from '../asset/img/beritaheader.png';
import { Link } from "react-router-dom";

const ITEMS_PER_PAGE = 9;  // Jumlah item per halaman
const MAX_PAGE_BUTTONS = 5; // Jumlah maksimal tombol halaman yang ditampilkan

const DaftarBerita = () => {
    const [datas, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1); // State untuk halaman saat ini

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('https://cms-okoce-a155c649b6e6.herokuapp.com/api/beritas?populate=*&_sort=id:ASC&_cacheBuster=' + new Date().getTime());
            if (!response.ok) {
                throw new Error('Gagal mengambil data berita');
            }
            const data = await response.json();
            const newsData = data.data;
            newsData.sort((a, b) => a.id - b.id);
            console.log(newsData);
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

    // Fungsi untuk menentukan halaman yang akan ditampilkan dalam rentang tertentu
    const getPageNumbers = () => {
        const pages = [];
        const halfRange = Math.floor(MAX_PAGE_BUTTONS / 2);
        let startPage = Math.max(currentPage - halfRange, 1);
        let endPage = Math.min(currentPage + halfRange, totalPages);

        if (currentPage - halfRange <= 0) {
            endPage = Math.min(MAX_PAGE_BUTTONS, totalPages);
        }

        if (currentPage + halfRange > totalPages) {
            startPage = Math.max(totalPages - MAX_PAGE_BUTTONS + 1, 1);
        }

        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }

        return pages;
    };

    return (
        <>
            <div className="w-full mt-24">
                <img className="mobile:w-full mobile:h-[10.5rem] lg:w-full lg:h-full object-cover" src={Header} alt="" />
            </div>
            <div className="grid mobile:grid-cols-1 mobile:mt-10 lg:grid-cols-3 lg:gap-y-8 lg:gap-x-4 lg:mt-24">
                {currentItems.map((data, index) => (
                    <div key={index} className="w-full mx-auto p-4">
                        <div className="bg-white shadow-md rounded-lg">
                            <div className="p-5">
                                <img className="object-cover w-full mobile:h-36 lg:h-96" src={data.attributes?.foto_berita?.data?.attributes?.url} alt="" />
                                <h2 className="font-bold text-xl mb-2 mt-6">{data.attributes?.judul_berita}</h2>
                                <p className="text-zinc-700">Author: {data.attributes?.author_berita}</p>
                                <div className="flex space-x-4 my-4">
                                    <span className="bg-yellow-300 text-blue-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded">
                                        Tanggal Publish: {data.attributes?.tanggal_berita}
                                    </span>
                                </div>
                                <div className="mt-8 flex justify-start">
                                    <button className="bg-green-500 w-full text-white p-2 rounded-lg">Read more</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* Pagination Controls */}
            <div className="flex justify-center mt-8 mb-8 bg-gray-200 p-4 w-1/2 mx-auto rounded-xl">
                <button
                    onClick={() => handlePageChange(1)}
                    disabled={currentPage === 1}
                    className="mx-1 px-4 py-2 border rounded bg-white text-blue-500"
                >
                    First
                </button>
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="mx-1 px-4 py-2 border rounded bg-white text-blue-500"
                >
                    Previous
                </button>
                {getPageNumbers().map((page) => (
                    <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`mx-1 px-4 py-2 border rounded ${currentPage === page ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'
                            }`}
                    >
                        {page}
                    </button>
                ))}
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="mx-1 px-4 py-2 border rounded bg-white text-blue-500"
                >
                    Next
                </button>
                <button
                    onClick={() => handlePageChange(totalPages)}
                    disabled={currentPage === totalPages}
                    className="mx-1 px-4 py-2 border rounded bg-white text-blue-500"
                >
                    Last
                </button>
            </div>
        </>
    );
};

export default DaftarBerita;
