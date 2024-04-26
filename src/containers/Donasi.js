/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import qris from "@img/barcode/qris.png";
import qris2 from "@img/barcode/Qris-1.png";
import qris3 from "@img/barcode/Qris-2.png";

const Donasi = () => {
    return (
        <>
            {/* <!-- Jumbotron --> */}
            <div class="flex justify-center">
                <div class="my-36 max-w-6xl rounded-lg p-6 text-surface shadow-lg">
                    <h2 class="mb-5 text-4xl font-extrabold text-center pt-10">Qris Donasi Ok Oce Indonesia</h2>
                    <p class="text-center text-xl px-12">
                        OK OCE adalah Gerakan Sosial Penciptaan Lapangan Kerja Berbasis Wirausaha. Kami membuka <br />bagi siapapun yang memiliki kesamaan visi, nilai dan perjuangan untuk mendukung gerakan ini dengan berdonasi melalui : <br /><br />

                        <span class="font-bold text-2xl">Bank Syariah Indonesia (ex-BSM) </span> <br />
                        an. OK OCE INDONESIA No. Rekening 7148254367 <br /><br />

                        Scan QRIS melalui Aplikasi Payment dan Mobile Banking Melalui :
                    </p>
                    <div className="flex flex-col px-5">
                        <div className="mt-20 w-full max-md:mt-10 max-md:max-w-full">
                            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                                <div className="flex flex-col w-[36%] max-md:ml-0 max-md:w-full">
                                    <img
                                        loading="lazy"
                                        src={qris}
                                        className="grow w-full shadow-sm aspect-[0.68] max-md:max-w-full" alt=""
                                    />
                                </div>
                                <div className="flex flex-col ml-5 w-[64%] max-md:ml-0 max-md:w-full">
                                    <div className="flex flex-col grow px-12 py-16 w-full text-black bg-gray-50 rounded-none shadow-sm max-md:px-5 max-md:max-w-full">
                                        <div className="text-4xl font-extrabold leading-[90px] max-md:max-w-full max-md:text-4xl">
                                            OK OCE INDONESIA
                                        </div>
                                        <div className="text-2xl leading-10 text-justify max-md:max-w-full">
                                            OK OCE adalah Gerakan Sosial Penciptaan Lapangan Kerja Berbasis
                                            Wirausaha. Kami membuka bagi siapapun yang memiliki kesamaan
                                            visi, nilai dan perjuangan untuk mendukung gerakan ini
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-28 w-full max-md:mt-10 max-md:max-w-full">
                            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                                <div className="flex flex-col w-[36%] max-md:ml-0 max-md:w-full">
                                    <img
                                        loading="lazy"
                                        src={qris2}
                                        className="grow w-full shadow-sm aspect-[0.68] max-md:max-w-full object-cover" alt=""
                                    />
                                </div>
                                <div className="flex flex-col ml-5 w-[64%] max-md:ml-0 max-md:w-full">
                                    <div className="flex flex-col grow px-12 py-16 w-full text-black bg-gray-50 rounded-none shadow-sm max-md:px-5 max-md:max-w-full">
                                        <div className="text-4xl font-extrabold leading-[90px] max-md:max-w-full max-md:text-4xl">
                                            OK OCE WAKAF
                                        </div>
                                        <div className="text-2xl leading-10 text-justify max-md:max-w-full">
                                            OK OCE adalah Gerakan Sosial Penciptaan Lapangan Kerja Berbasis
                                            Wirausaha. Kami membuka bagi siapapun yang memiliki kesamaan
                                            visi, nilai dan perjuangan untuk mendukung gerakan ini
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-28 w-full max-md:mt-10 max-md:max-w-full">
                            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                                <div className="flex flex-col w-[36%] max-md:ml-0 max-md:w-full">
                                    <img
                                        loading="lazy"
                                        src={qris3}
                                        className="grow w-full shadow-sm aspect-[0.68] max-md:max-w-full" alt=""
                                    />
                                </div>
                                <div className="flex flex-col ml-5 w-[64%] max-md:ml-0 max-md:w-full">
                                    <div className="flex flex-col grow px-12 py-16 w-full text-black bg-gray-50 rounded-none shadow-sm max-md:px-5 max-md:max-w-full">
                                        <div className="text-4xl font-extrabold leading-[90px] max-md:max-w-full max-md:text-4xl">
                                            OK OCE KEMANUSIAAN
                                        </div>
                                        <div className="text-2xl leading-10 text-justify max-md:mt-10 max-md:max-w-full">
                                            OK OCE adalah Gerakan Sosial Penciptaan Lapangan Kerja Berbasis
                                            Wirausaha. Kami membuka bagi siapapun yang memiliki kesamaan
                                            visi, nilai dan perjuangan untuk mendukung gerakan ini
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Jumbotron --> */}

        </>
    )
}

export default Donasi;