/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import Youtube from "@components/Youtube";
import FloatingMenu from "../components/FloatingMenu";
import Header from "@img/Brand Lokal OK.png"

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
            <div className="mt-24 w-full h-auto grid justify-center content-center flex-col items-center">
                <div className="relative mx-auto w-full h-full">
                    <img className="mobile:w-full mobile:h-full object-cover lg:mx-auto lg:w-full lg:h-auto" src={Header} alt="" />
                    <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center mobile:bottom-[-1] mobile:w-60 lg:w-80 lg:mb-4 lg:bottom-0 ">
                        <a href="" className="bg-red-600 hover:bg-red-700 rounded-lg text-white font-bold mobile:p-2 mobile:text-xs lg:text-lg lg:p-4">PENDAFTARAN DI TUTUP</a>
                    </div>
                </div>
            </div>

            <div class="flex max-w-6xl mx-auto justify-center m-12">
                <Youtube src="https://okoce.net/wp-content/uploads/2023/10/6.-HIGHRES-VIDEO-UCAPAN-BRAND-LOKAL-OK.mp4" />
            </div>
            <div class="mt-[6rem] bg-gray-300 w-full h-[22rem] grid justify-center content-center mobile:px-5">
                <h1 class="font-extrabold text-center mobile:text-2xl lg:text-4xl ">SELAMAT ATAS TERPILIHNYA 24 PRODUK UMKM<br />DARI 24 PENGGERAK YANG MENDAFTAR!</h1>
            </div>
            {/* <!-- component --> */}
            <div class="mt-[3rem] mb-[3rem] flex items-center justify-center">
                <div class="container w-4/5 mx-auto p-4">
                    <div class="grid mobile:grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* <!-- Replace this with your grid items --> */}
                        {datas.map((data, index) =>
                            <div key={index} class="flex flex-col items-center">
                                <img src={data.attributes?.foto_brand?.data?.attributes?.url} alt="Placeholder Image" class="rounded-md object-cover mx-auto border lg:w-4/5 lg:h-96 " />
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