import React from "react";
import Header from "../asset/img/Nilai Inti OKOCE.png"

const NilaiInti = () => {
    return (
        <>
            <div className="mt-24">
                <img className="" src={Header} alt="" />
            </div>
            <div className="mt-20 mb-32">
                <div className="container mx-auto px-4 py-8 mt-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
                        <div className="rounded-lg p-4 size-3/4 border-2 h-auto bg-sky-700 drop-shadow-2xl hover:shadow-red-600 hover:shadow-lg">
                            <h3 className="text-lg font-bold text-white mb-4">Kinerja Tinggi</h3>
                            <p className="text-white">Anggota OK OCE Indonesia mampu memiliki kinerja yang maksimal sehingga memiliki pencapaian yang dapat bermanfaat untuk diri sendiri maupun orang lain.</p>
                        </div>
                        <div className="rounded-lg p-4 size-3/4 border-2 h-auto bg-sky-700 drop-shadow-2xl hover:shadow-red-600 hover:shadow-lg">
                            <h3 className="text-lg font-bold text-white mb-4">Mendorong</h3>
                            <p className="text-white">Anggota OK OCE Indonesia mampu menjadi pendorong bagi masyarakat untuk menjadi bagian dari Gerakan Sosial Wirausaha (entrepreneur) Indonesia dengan 4AS dan 7 TOP.</p>
                        </div>
                        <div className="rounded-lg p-4 size-3/4 border-2 h-auto bg-sky-700 drop-shadow-2xl hover:shadow-red-600 hover:shadow-lg">
                            <h3 className="text-lg font-bold text-white mb-4">Mandiri</h3>
                            <p className="text-white">Anggota OK OCE Indonesia mampu bertindak mandiri dan menciptakan solusi sehingga mampu mencapai tujuan yang telah ditetapkan yaitu peningkatan jumlah wirausaha (entrepreneur) baru, penciptaan lapangan kerja, dan menjadi wirausaha naik kelas.</p>
                        </div>
                        <div className="rounded-lg p-4 size-3/4 border-2 bg-sky-700 drop-shadow-2xl hover:shadow-red-600 hover:shadow-lg mobile:mx-auto mobile:mt-0 mobile:h-auto lg:mt-16 lg:ml-[17rem] lg:h-auto">
                            <h3 className="text-lg font-bold text-white mb-4">Peduli</h3>
                            <p className="text-white">Anggota OK OCE mampu memiliki rasa saling peduli dan memiliki empati antar sesama anggota sehingga menciptakan rasa kebersamaan yang meningkatkan kinerja berwirausaha.</p>
                        </div>
                        <div className="rounded-lg p-4 size-3/4 border-2 bg-sky-700 drop-shadow-2xl hover:shadow-red-600 hover:shadow-lg mobile:mx-auto mobile:mt-0 mobile:h-auto lg:mt-16 lg:ml-[17rem] lg:h-auto">
                            <h3 className="text-lg font-bold text-white mb-4">Gotong Royong</h3>
                            <p className="text-white">Anggota OK OCE mampu memiliki rasa kebersamaan dengan semangat bersama kita bisa dalam rangka penciptaan wirausaha baru, penciptaan lapangan kerja, dan peningkatan kinerja dan kualitas wirausaha. </p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default NilaiInti;