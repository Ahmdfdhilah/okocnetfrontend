/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import Youtube from "@components/Youtube";
import FloatingMenu from "../components/FloatingMenu";

const LokalBrand = () => {
    const [datas, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
            const response = await fetch(
                "https://cms-okoce-a155c649b6e6.herokuapp.com/api/brand-lokals?populate=*"
            );
            if (!response.ok) {
                throw new Error("Gagal mengambil data brand");
            }
            const data = await response.json();
            const brandData = data.data;
            console.log(brandData);
            setData(brandData);
        } catch (error) {
            console.error("Error fetching brand:", error);
            // Jika terjadi kesalahan, pastikan untuk mengatur employees menjadi array kosong
            setData([]);
        }
    };

    return (
        <>
            <div class="mt-24 bg-gray-400 w-full h-[20rem] grid justify-center content-center flex-col items-center">
                <h1 class="font-extrabold text-4xl text-center">BRAND LOKAL OK</h1>
                <p class="text-center mt-6">MEMILIKI PRODUK 100% BUATAN INDONESIA NAMUN BELUM MAKSIMAL PENJUALANNYA<br />PROGRAM PENDAMPINGAN BAGI PELAKU USAHA UNTUK DAPAT TUMBUH BERSAMA. KATEGORI ULTRA MIKRO & MIKRO UNTUK SCALEUP KE KECIL SAMPAI MENENGAH<br /><span class="text-red-600 font-bold">YUK DAFTAR 100% GRATIS.</span></p>
                <div class="mt-6 flex flex-col items-center">
                    <a href="" class="p-4 bg-red-600 rounded-lg text-white font-bold text-lg">PENDAFTARAN DI TUTUP</a>
                </div>
            </div>
            <div class="flex max-w-6xl mx-auto justify-center m-12">
                <Youtube src="https://okoce.net/wp-content/uploads/2023/10/6.-HIGHRES-VIDEO-UCAPAN-BRAND-LOKAL-OK.mp4" />
            </div>
            <div class="mt-[6rem] bg-gray-300 w-full h-[22rem] grid justify-center content-center">
                <h1 class="font-extrabold text-4xl text-center">SELAMAT ATAS TERPILIHNYA 24 PRODUK UMKM<br />DARI 24 PENGGERAK YANG MENDAFTAR</h1>
            </div>
            {/* <!-- component --> */}
            <div class="mt-[3rem] mb-[3rem] flex items-center justify-center">
                <div class="container w-4/5 mx-auto p-4">
                    <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-8">
                        {/* <!-- Replace this with your grid items --> */}
                        {datas.map((data, index) =>
                            <div key={index} class="flex flex-col items-center">
                                <img src={data.attributes?.foto_brand?.data?.attributes?.url} alt="Placeholder Image" class="w-4/5 h-96 rounded-md object-cover mx-auto border" />
                                <div class="px-1 py-4 text-center">
                                    <div class="font-bold text-xl mb-2">{data.attributes.judul_brand}</div>
                                    <p class="text-gray-700 text-base">
                                        {data.attributes.deskripsi_brand}
                                    </p>
                                </div>
                            </div>
                        )};
                    </div>
                </div>
            </div>
            <FloatingMenu />{" "}
        </>
    );
}

export default LokalBrand;