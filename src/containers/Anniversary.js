/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Youtube from "@components/Youtube";
import HeaderPenggerak from "@img/PenggerakUpdate.png";

const Anniversary = () => {
    return (
        <>
            <div className="w-full">
                <img src={HeaderPenggerak} alt="" />
            </div>
            <section class="w-full mx-auto px-12">
                <div class="grid gap-5 p-4 m-2 mobile:grid-rows-1 mobile:p-0 mobile:m-0 lg:grid-cols-12">
                    <main class="mobile:p-0 mobile:mr-1 mobile:ml-0 lg:p-10 lg:mr-14 lg:col-span-8">
                        <h1 class="text-3xl font-bold text-center mb-8">Sejarah OK OCE Indonesia</h1>
                        <p class="text-justify">OK OCE lahir sebagai sebuah konsep pada tahun 1998 di keluarga Uno, yang terdiri dari Mien dan Henk Uno. Pada saat itu, banyak mahasiswa dari Gorontalo yang tidak bisa melanjutkan kuliah di Jakarta, dan meminta beasiswa kepada keluarga Uno. Dan setelah mereka lulus kuliah, mereka kembali ke perkebunan milik keluarga Uno untuk bekerja.<br /><br />
                            Setelah beberapa tahun, mereka akhirnya membuat ulang dan merombak program beasiswa dari program biasa menjadi program beasiswa enterprenuer, yang terdiri dari pelatihan, pemasaran, dan sekolah penganggaran. Hasilnya, lahirlah Mien R Uno Foundation pada tahun 2000.<br /><br />
                            Pada tahun 2016, Sandiaga Uno berkampanye untuk posisi Wakil Gubernur Jakarta, berpasangan dengan Anies Baswedan. Selama periode ini, Indonesia menghadapi kondisi ekonomi yang menantang, yang mengakibatkan penutupan sejumlah perusahaan dan lonjakan pengangguran di Jakarta, yang mempengaruhi sekitar 300 ribu orang, menurut data yang tersedia. Menanggapi tantangan-tantangan ini, Sandiaga Uno dan Anies Baswedan mengajukan sebuah solusi yang bertujuan untuk menumbuhkan kewirausahaan.<br /><br /> Mereka memperkenalkan program OK OCE, yang dirancang untuk mendorong dan mendukung individu untuk menjadi wirausahawan, sehingga mengurangi dampak kesulitan ekonomi terhadap penduduk setempat. Tujuan dari program ini adalah untuk membangun setidaknya satu pusat kewirausahaan di setiap kecamatan di Jakarta. Target ambisius mereka dimulai dari tahun 2017 hingga 2022, yang bertujuan untuk menciptakan 200 ribu kesempatan kerja melalui pertumbuhan wirausaha di wilayah tersebut.<br /><br />
                            Kemudian, pada tahun 2017, mereka memulai program ini di 44 kecamatan di Jakarta dengan kurikulum 7 TOP (7 Tahapan OK OCE Prima) yang terdiri dari Pendaftaran, Pelatihan, Pendampingan, Perizinan, Pemasaran, Pencatatan Keuangan dan Akses Permodalan.<br /><br />
                            Pada tahun 2018, Sandiaga Uno mengundurkan diri dari jabatannya untuk mencalonkan diri sebagai Wakil Presiden mendampingi Prabowo Subianto. Setelah itu, Program OK OCE memperluas jangkauannya di luar DKI Jakarta hingga mencakup seluruh Indonesia. Program OK OCE menjadi program beliau saat ia mencalonkan diri sebagai calon wakil presiden, dengan target menciptakan 2 juta lapangan kerja dalam jangka waktu lima tahun hingga tahun 2024. Meskipun Sandiaga Uno tidak berhasil mendapatkan posisi wakil presiden, Gerakan OK OCE berhasil memenuhi janjinya untuk menciptakan 2 juta lapangan kerja tanpa bergantung pada anggaran negara. Pencapaian ini diwujudkan melalui upaya bersama dan kontribusi masyarakat.<br /><br />
                            Pada tahun 2023, OK OCE telah menciptakan 1,5 juta lapangan kerja, dan hanya menyisakan 500.000 lapangan kerja lagi untuk mencapai target yang ditetapkan. Inisiatif lokal program OK OCE di DKI Jakarta, yang sekarang dikenal sebagai JakPreneur, memiliki keanggotaan sebanyak 340.000 orang, yang semakin menunjukkan dampak dan keberhasilan program ini secara luas.</p>
                    </main>

                    <aside class="lg:col-span-4 lg:p-2">
                        <h1 class="text-3xl font-bold text-center mb-8 mt-10">OK OCE Melahirkan Pengusaha Baru!</h1>
                        <p class="text-justify">Bersama lebih 500 ribu anggota dari berbagai provinsi di Indonesia. Setelah sukses memulainya di tahun 2017 dan bekerjasama dengan Pemerintah Provinsi DKI Jakarta dan menghasilkan puluhan ribu wirausaha baru serta menyerap 200 ribu lapangan kerja di DKI Jakarta. Kini OK OCE diterapkan ke seluruh Indonesia melalui lebih dari 197 komunitas penggerak.</p>

                        <div class="mt-10 grid justify-items-start mobile:grid-cols-2 mobile:gap-8 lg:grid-cols-2 lg:grid-flow-row lg:gap-6">
                            <div class="max-w-16">
                                <h1 class="font-extrabold text-4xl">2016</h1>
                                <p class="mt-4">Founded</p>
                            </div>
                            <div class="max-w-32">
                                <h1 class="font-extrabold text-4xl">500K+</h1>
                                <p class="mt-4">Anggota Ok Oce </p>
                            </div>
                            <div class="max-w-16">
                                <h1 class="font-extrabold text-4xl">197</h1>
                                <p class="mt-4">Komunitas Penggerak</p>
                            </div>
                            <div class="max-w-16">
                                <h1 class="font-extrabold text-4xl">200K+</h1>
                                <p class="mt-4">wirausaha Baru</p>
                            </div>
                        </div>
                    </aside>
                </div>
            </section>
        </>
    );
}

export default Anniversary;