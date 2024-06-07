/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Modalberkah1 from "@img/modalberkah/modalberkah.png";


const Modalberkah = () => {
    return (
        <>
            <div className="mt-[6rem] py-[6rem] bg-gray-400 w-full grid grid-cols-2 gap-6 items-center justify-center">
                <div className="mx-auto flex flex-col justify-center justify-items-center items-center w-3/4 p-4 h-full">
                    <div className="">
                        <img src={Modalberkah1} alt="Placeholder Image" className="w-4/6 rounded-md mx-auto mb-6 object-cover" />
                    </div>
                    <div className="mt-2">
                        <a href="https://modalberkah.com/" class="text-white bg-red-600 px-32 py-4 rounded-xl font-bold text-lg hover:bg-red-800">Pelajari Selengkapnya</a>
                    </div>
                </div >

                <div className="w-4/5 h-48 rounded-md object-fill flex flex-col justify-center items-start">
                    <h1 className="font-extrabold text-4xl text-left mb-6">MODAL BERKAH</h1>
                    <p className="text-justify">Melalui program ‘Modal Berkah’ diharapkan bisa membantu perkembangan wirausaha dan UMKM sekitar Masjid karena bersifat tanpa riba dan tanpa embel-embel bagi hasil untuk ketiga belah pihak (OK OCE, Masjid dan UMKM) Merupakan program keumatan berbasis lembaga atau masjid yang bertujuan untuk menghimpun dan menyalurkan infaq dalam bentuk pinjaman dana kepada pelaku UMKM tanpa adanya riba</p>
                </div>

            </div >
        </>
    );
}

export default Modalberkah;
