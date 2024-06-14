/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Modalberkah1 from "@img/modalberkah/modalberkah.png";
import FloatingMenu from "../components/FloatingMenu";

const Modalberkah = () => {
    return (
        <>
            <div className="py-[6rem] bg-gray-400 w-full grid gap-6 items-center justify-center mobile:grid-cols-1 mobile:mt-10 lg:grid-cols-2 lg:mt-[6rem]">
                <div className="mx-auto flex flex-col justify-center justify-items-center items-center w-3/4 p-4 h-full">
                    <div className="mobile:mr-2">
                        <img src={Modalberkah1} alt="Placeholder Image" className=" rounded-md mx-auto mb-6 object-cover mobile:w-full lg:w-4/6" />
                    </div>
                    <a href="https://modalberkah.com/" class="text-white bg-red-600 rounded-xl font-bold hover:bg-red-800 mobile:py-2 mobile:w-full mobile:mobile:px-10 lg:w-80 lg:py-0 lg:px-0">
                        <div className="mobile:text-center mobile:w-full mobile:text-sm lg:py-3 lg:text-xl lg:w-80">
                            Pelajari Selengkapnya
                        </div>
                    </a>
                </div >

                <div className="rounded-md object-fill flex flex-col justify-center items-start mobile:w-full mobile:px-9 lg:h-48 lg:w-4/5">
                    <h1 className="font-extrabold text-4xl mb-6 mobile:text-xl mobile:text-center lg:text-left text-left">MODAL BERKAH</h1>
                    <p className="text-justify">Melalui program ‘Modal Berkah’ diharapkan bisa membantu perkembangan wirxausaha dan UMKM sekitar Masjid karena bersifat tanpa riba dan tanpa embel-embel bagi hasil untuk ketiga belah pihak (OK OCE, Masjid dan UMKM) Merupakan program keumatan berbasis lembaga atau masjid yang bertujuan untuk menghimpun dan menyalurkan infaq dalam bentuk pinjaman dana kepada pelaku UMKM tanpa adanya riba</p>
                </div>
            </div >
            <FloatingMenu />
        </>
    );
}

export default Modalberkah;
