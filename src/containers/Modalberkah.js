import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Modalberkah1 from "@img/modalberkah/modalberkah.png";


const Modalberkah = () => {
    return (
        <>
            <div className="mt-[6rem] py-[6rem] bg-gray-400 w-full grid grid-cols-2 gap-6 items-center justify-center">
                <div className="flex flex-col items-center">
                    <img src={Modalberkah1} alt="Placeholder Image" className="w-4/5 h-48 rounded-md object-fill mx-auto border mb-6" />
                    <div>
                    <a href="#Link" class="w-300px px-40 py-4 bg-red-600 rounded-lg text-white font-bold text-lg text-center">Pelajari Selengkapnya</a>
                    </div>
                </div>

                <div className="w-4/5 h-48 rounded-md object-fill flex flex-col justify-center items-start">
                    <h1 className="font-extrabold text-4xl text-left mb-6">MODAL BERKAH</h1>
                    <p className="text-left">Melalui program ‘Modal Berkah’ diharapkan bisa membantu perkembangan wirausaha dan UMKM sekitar Masjid karena bersifat tanpa riba dan tanpa embel-embel bagi hasil untuk ketiga belah pihak (OK OCE, Masjid dan UMKM) Merupakan program keumatan berbasis lembaga atau masjid yang bertujuan untuk menghimpun dan menyalurkan infaq dalam bentuk pinjaman dana kepada pelaku UMKM tanpa adanya riba</p>
                </div>

            </div>
        </>
    );
}

export default Modalberkah;
