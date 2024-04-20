import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NilaiInti = () => {
    return (
        <>
            <Navbar />
            <div class="mt-[6rem] bg-gray-300 w-full h-[20rem] grid justify-center content-center">
                <h1 class="font-extrabold text-4xl text-center">Nilai Inti Ok Oce Indonesia</h1>
                <p class="text-center mt-6">Gerakan Ok OCE Indonesia mengadvokasi pertumbuhan ekonomi yang didorong oleh kreativitas dan kolaborasi. <br /> Dengan mengutamakan inovasi, kerjasama antarindividu, dan keterlibatan penuh dalam berbagai sektor ekonomi, <br /> Ok OCE membuka pintu bagi kemajuan yang berkelanjutan dan inklusif bagi seluruh masyarakat Indonesia.</p>
            </div>
            <div>
                <div class="container mx-auto px-4 py-8 mt-10">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
                        <div class="rounded-lg p-4 size-3/4 border-2 h-auto">
                            <h3 class="text-lg font-bold">Kinerja Tinggi</h3>
                            <p class="">Anggota OK OCE Indonesia mampu memiliki kinerja yang maksimal sehingga memiliki pencapaian yang dapat bermanfaat untuk diri sendiri maupun orang lain.</p>
                        </div>
                        <div class="rounded-lg p-4 size-3/4 border-2 h-auto">
                            <h3 class="text-lg font-bold">Mendorong</h3>
                            <p class="">Anggota OK OCE Indonesia mampu menjadi pendorong bagi masyarakat untuk menjadi bagian dari Gerakan Sosial Wirausaha (entrepreneur) Indonesia dengan 4AS dan 7 TOP.</p>
                        </div>
                        <div class="rounded-lg p-4 size-3/4 border-2 h-auto">
                            <h3 class="text-lg font-bold size">Mandiri</h3>
                            <p class="text-gray-600">Anggota OK OCE Indonesia mampu bertindak mandiri dan menciptakan solusi sehingga mampu mencapai tujuan yang telah ditetapkan yaitu peningkatan jumlah wirausaha (entrepreneur) baru, penciptaan lapangan kerja, dan menjadi wirausaha naik kelas.</p>
                        </div>
                        <div class="rounded-lg p-4 size-3/4 border-2 mt-10 ml-[32rem] h-auto">
                            <h3 class="text-lg font-bold">Peduli</h3>
                            <p class="text-gray-600">Anggota OK OCE mampu memiliki rasa saling peduli dan memiliki empati antar sesama anggota sehingga menciptakan raso kebersamaan yang meningkatkan kinerja berwirausaha.</p>
                        </div>
                        <div class="rounded-lg p-4 size-3/4 border-2 mt-10 ml-[32rem] h-auto">
                            <h3 class="text-lg font-bold">Gotong Royong</h3>
                            <p class="text-gray-600">Anggota OK OCE mampu memiliki rasa kebersamaan dengan semangat bersama kita bisa dalam rangka penciptaan wirausaha baru, penciptaan lapangan kerja, dan peningkatan kinerja dan kualitas wirausaha. </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default NilaiInti;