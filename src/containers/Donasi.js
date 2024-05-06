import React from "react";
import qris from "@img/barcode/qris.png";
import qris2 from "@img/barcode/Qris-1.png";
import qris3 from "@img/barcode/Qris-2.png";

const Donasi = () => {
    return (
        <>
            {/* <!-- Jumbotron --> */}
            <div className="w-full grid justify-items-center items-center">
                <div className="w-full my-36 max-w-6xl rounded-lg p-6 text-surface shadow-lg">
                    <h2 className="mb-5 text-4xl font-extrabold text-center pt-10">Qris Donasi Ok Oce Indonesia</h2>
                    <p className="text-center text-xl px-12">
                        OK OCE adalah Gerakan Sosial Penciptaan Lapangan Kerja Berbasis Wirausaha. Kami membuka <br />bagi siapapun yang memiliki kesamaan visi, nilai dan perjuangan untuk mendukung gerakan ini dengan berdonasi melalui : <br /><br />
                        <span className="font-bold text-2xl">Bank Syariah Indonesia (ex-BSM) </span> <br />
                        an. OK OCE INDONESIA No. Rekening 7148254367 <br /><br />
                        Scan QRIS melalui Aplikasi Payment dan Mobile Banking Melalui :
                    </p>
                    <div className="w-full mt-10 mb-10 mx-auto border-2 bg-gray-50 rounded-lg lg:w-5/6">
                        <div className="grid justify-items-center items-center p-4 grid-cols-1 lg:grid-cols-2 gap-2 lg:mr-10 ">
                            <div className="justify-self-auto">
                                <img className="object-cover w-full rounded-t-lg h-96 lg:h-auto lg:w-48 lg:rounded-none lg:rounded-l-lg" src={qris} alt="" />
                            </div>
                            <div className="">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-black">Noteworthy technology acquisitions 2021</h5>
                                <p className="mb-3 font-normal text-gray-700">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
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