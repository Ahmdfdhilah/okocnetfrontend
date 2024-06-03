import React, { useState } from "react";
import Header from "@img/headerPeluang.png";

const accordionContentClasses = 'border-t border-zinc-200 mobile:p-10 lg:p-20';
const accordionButtonClasses = 'flex items-center justify-between w-full text-zinc-500 border-t border-zinc-200 pt-3';

const PeluangUsaha = () => {
    const [isAccordionOpen, setIsAccordionOpen] = useState(false);

    const toggleAccordion = () => {
        setIsAccordionOpen(!isAccordionOpen);
    };

    return (
        <>
            <section class="mt-[4em] bg-center bg-no-repeat" style={{ backgroundImage: `url(${Header})`, width: `100%`, height: `100%`, backgroundSize: `cover` }}>
                <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                    <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Yuk, Mulai Gabung dan Dapatkan Hasil Tambahan dengan daftar </h1>
                    <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Fondasi kami, idemu, bersama-sama kita maju dan berkembang untuk menciptakan masa depan bersama. </p>
                </div>
            </section>

            <div className="my-10 max-w-4xl mx-auto p-4">
                <div className="bg-white shadow-md rounded-lg">
                    <div className="p-5">
                        <h2 className="font-bold text-xl mb-2">TEH KOTAK</h2>
                        <p className="text-zinc-700">Jakarta</p>
                        <div className="flex space-x-4 my-4">
                            <span className="bg-blue-100 text-blue-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded">Franchisee</span>
                            <span className="bg-green-100 text-green-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded">Makanan Minuman</span>
                        </div>
                        <button onClick={toggleAccordion} className={accordionButtonClasses}>
                            <span class="text-black">Detail Informasi</span>
                            <svg className={`w-6 h-6 transform transition-transform ${isAccordionOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                    </div>
                    {isAccordionOpen && (
                        <div className={accordionContentClasses}>
                            <div className="flex justify-between mobile:flex-col mobile:gap-8 lg:flex-row">
                                <img src="https://placehold.co/300x200" alt="Drink" />
                                <img src="https://placehold.co/300x200" alt="Store" />
                            </div>
                            <div className="my-10 flex justify-start mobile:flex-col mobile:gap-4 lg:flex-row">
                                <div class="mr-16">
                                    <h3 className="font-semibold text-lg">Lokasi</h3>
                                    <p>Pinggir Jalan</p>
                                </div>
                                <div class="mr-16">
                                    <h3 className="font-semibold text-lg">Sistem Kerja</h3>
                                    <p>Franchise</p>
                                </div>
                                <div class="mr-16">
                                    <h3 className="font-semibold text-lg">Kategori</h3>
                                    <p>Makann Minuman</p>
                                </div>
                            </div>
                            <div id="content" class="">
                                <div>
                                    <h3 className="font-semibold text-lg">Tentang Program</h3>
                                    <p className="mt-2 text-sm text-zinc-600 text-justify">Sebagai komitmen perusahaan dalam mendukung terciptanya sumberdaya manusia Indonesia yang memiliki daya saing di dunia kerja adalah dengan memberikan kesempatan bagi para mahasiswa/i Indonesia dari Perguruan Tinggi terakreditasi di dalam negeri dan luar negeri untuk mendapatkan pengalaman dan pembelajaran di tempat kerja. Perusahaan akan menyediakan sarana untuk menerapkan hal-hal yang mahasiswa/i pelajari di dalam lingkungan kerja yang aktif, beragam, dan bergerak cepat melalui Program Magang.
                                        Program Magang dilaksanakan berdasarkan kebutuhan bisnis Perusahaan dengan jangka waktu pelaksanaan program maksimum 3 (tiga) bulan.  Penerimaan peserta dilakukan secara berkala dua (2) kali dalam setahun pada bulan Maret dan September. Pengumuman kebutuhan peserta dan pengajuan lamaran dari mahasiswa/i dilakukan melalui website Perusahaan.
                                        Peserta dipilih berdasarkan kinerja akademik dan penilaian standar yang ditetapkan oleh perusahaan dengan mempertimbangkan inklusi dan keberagaman.</p>
                                </div>
                                <div class="mt-10">
                                    <h3 className="font-semibold text-lg">Benefit</h3>
                                    <p className="mt-2 text-sm text-zinc-600">Uang saku
                                        Tiket pesawat (pulang-pergi), akomodasi, makan 3x sehari, fasilitas Kesehatan bagi siswa penempatan dilokasi kerja Papua
                                        Sertifikat penyelesaian program</p>
                                </div>
                                <div class="mt-10">
                                    <h3 className="font-semibold text-lg">Apa saja yang akan dilakukan secara umum </h3>
                                    <ol style={{ listStyle: `decimal` }} className="ml-4 mt-2 text-sm text-zinc-600" >
                                        <li>Melakukan internalisasi prosedur dan budget policy.</li>
                                        <li>Mengawasi budget activation yang sudah tersistem di internal PT Astra Honda Motor.</li>
                                        <li>Membuat laporan keuangan sesuai dengan standar dan kebutuhan perusahaan.</li>
                                        <li>Menganalisa dan menyelesaikan kendala dalam proses budget activation.</li>
                                        <li>Melakukan budget review secara bulanan dengan beberapa divisi yang terdapat di PT Astra Honda Motor.</li>
                                        <li>Mendukung proses penyusunan dan pengawasan pembuatan master budget di beberapa divisi PT Astra Honda Motor.</li>
                                    </ol>
                                </div>
                                <div class="mt-10">
                                    <h3 className="font-semibold text-lg">Kualifikasi</h3>
                                    <ol style={{ listStyle: `decimal` }} className="ml-4 mt-2 text-sm text-zinc-600" >
                                        <li>Melakukan internalisasi prosedur dan budget policy.</li>
                                        <li>Mengawasi budget activation yang sudah tersistem di internal PT Astra Honda Motor.</li>
                                        <li>Membuat laporan keuangan sesuai dengan standar dan kebutuhan perusahaan.</li>
                                        <li>Menganalisa dan menyelesaikan kendala dalam proses budget activation.</li>
                                        <li>Melakukan budget review secara bulanan dengan beberapa divisi yang terdapat di PT Astra Honda Motor.</li>
                                        <li>Mendukung proses penyusunan dan pengawasan pembuatan master budget di beberapa divisi PT Astra Honda Motor.</li>
                                    </ol>
                                </div>
                                <div class="max-w-[10rem] mt-5 p-2 bg-blue-600 rounded-lg">
                                    <p class="text-center font-medium text-white">Daftar Sekarang!</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default PeluangUsaha;