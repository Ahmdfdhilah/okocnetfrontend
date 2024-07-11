import React, { useState, useEffect } from "react";
import Header from "../asset/img/HeaderKerja.png";
import Logo from "@img/logo-okoce.webp";
import FloatingMenu from "../components/FloatingMenu";

const cardClasses = 'bg-white p-4 rounded-lg shadow-md flex items-start cursor-pointer';
const textClasses = 'text-zinc-500';

const JobCard = ({ title, company, location, duration, type, onClick }) => {
    return (
        <div className={cardClasses} onClick={onClick}>
            <img src={Logo} alt="Company Logo" className="w-20 h-full mr-4 object-cover" />
            <div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className={textClasses}>{company}</p>
                <p className={textClasses}>{location}</p>
                <p className={textClasses}>{duration} • {type}</p>
            </div>
        </div>
    );
};

const JobList = ({ onJobClick }) => {
    const [datas, setData] = useState([]);

    useEffect(() => {
        fetchDataMagang();
    }, []);

    const fetchDataMagang = async () => {
        try {
            const response = await fetch('http://localhost:3000/magangs');
            if (!response.ok) {
                throw new Error('Gagal mengambil data magang');
            }
            const data = await response.json();
            const internData = data.data;
            console.log(internData);
            setData(internData);
        } catch (error) {
            console.error('Error fetching internship data:', error);
            setData([]);
        }
    };

    return (
        <div>
            {datas.map((data) =>
                <div className="mt-0" key={data.id}>
                    <div className="space-y-4 mt-5">
                        <JobCard
                            title={data.judulMagang}
                            company="Perkumpulan Gerakan OK OCE"
                            location="Kota Jakarta Selatan (WFO)"
                            duration={data.durasiMagang}
                            type="MSIB"
                            onClick={() => onJobClick(data.id)}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

const Magang = () => {
    const [selectedJobId, setSelectedJobId] = useState(null);
    const [jobDetails, setJobDetails] = useState(null);

    useEffect(() => {
        if (selectedJobId !== null) {
            fetchJobDetails(selectedJobId);
        }
    }, [selectedJobId]);

    const fetchJobDetails = async (id) => {
        try {
            const response = await fetch(`http://localhost:3000/magangs/${id}`);
            if (!response.ok) {
                throw new Error('Gagal mengambil detail magang');
            }
            const data = await response.json();
            setJobDetails(data);
        } catch (error) {
            console.error('Error fetching internship details:', error);
            setJobDetails(null);
        }
    };

    const handleJobClick = (id) => {
        setSelectedJobId(id);
    };

    return (
        <>
            <section className="mt-[4em] bg-center bg-no-repeat" style={{ backgroundImage: `url(${Header})`, width: `100%`, height: `100%`, backgroundSize: `cover` }}>
                <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Yuk, Mulai Gabung dan Dapatkan Hasil Tambahan dengan daftar</h1>
                    <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Fondasi kami, idemu, bersama-sama kita maju dan berkembang untuk menciptakan masa depan bersama.</p>
                </div>
            </section>

            <div className="w-full justify-around md:flex-row p-4 bg-gray-200 mobile:grid  mobile:grid-cols-1 mobile:grid-flow-row lg:flex">
                <div className="mobile:max-w-[30rem] mobile:text-sm lg:min-w-[29rem] lg:p-4">
                    <p className="text-zinc-600 mb-4">List Posisi :</p>
                    <JobList onJobClick={handleJobClick} />
                </div>
                <div className="bg-white mt-14 rounded-xl flex items-center justify-center mobile:max-w-96 lg:min-w-[60%] lg:h-auto">
                    {jobDetails ? (
                        <div className="w-full h-full text-zinc-400">
                            <div className="mobile:ml-0 mobile:px-4 lg:mt-10 lg:ml-2 lg:pr-16 lg:pl-14">
                                <img src={Logo} alt="" className="object-cover mobile:h-auto mobile:w-36 mobile:mt-8 lg:h-auto lg:w-40"></img>
                                <h3 className="text-3xl mt-6 ml-1 font-bold text-black mb-4">{jobDetails.judulMagang}</h3>
                                <p className="text-lg mt-3 ml-1 font-normal text-black">{jobDetails.lokasiMagang}</p>
                                <p className="text-lg ml-1 font-normal text-black">{jobDetails.jenisMagang}</p>
                                <p className="text-lg ml-1 font-normal text-black mb-4"><span className="font-bold">Durasi Magang : </span>{jobDetails.durasiMagang}</p>
                                <div className="w-full mt-10 mr-32 mb-10">
                                    <h1 className="text-2xl text-black font-bold">Rincian Kegiatan</h1>
                                    <h2 className="mt-3 font-bold text-black text-lg">{jobDetails.tentangProgram}</h2>
                                    {console.log(jobDetails.deskripsiMagang)}
                                    {jobDetails.deskripsiMagang.map((item) => (
                                        <p className="text-black text-normal text-lg text-justify mt-4">
                                            {item.str}
                                        </p>
                                    ))}

                                </div>
                                <div className="w-full mt-10 mr-32 mb-10">
                                    <h1 className="text-2xl text-black font-bold">Kompetensi yang Dikembangkan</h1>
                                    <div className="grid mobile:grid-cols-1 lg:grid-cols-2 lg:grid-flow-row lg:gap-y-6">
                                        {jobDetails.kompetensi.map((item) => (
                                            <div className="border-2 drop-shadow-md rounded-lg mt-4 text-black p-4 font-bold text-lg mobile:w-full lg:max-w-[75%]">{item.str}</div>
                                        ))
                                        }
                                    </div>
                                </div>
                                <div className="w-full mt-10 mr-32 mb-10">
                                    <h1 className="text-2xl text-black font-bold">Kriteria Peserta</h1>
                                    <div className="mt-4">
                                        <ul className="ml-5">
                                            {jobDetails.kriteriaPeserta.map((item) => (
                                                <li className="text-black text-black text-lg list-disc">{item.str}</li>
                                            ))
                                            }
                                        </ul>
                                    </div>
                                </div>
                                <div className="w-full mt-10 mr-32 mb-10">
                                    <h1 className="text-2xl text-black font-bold">Benefit Program</h1>
                                    <p className="text-black text-black text-lg">{jobDetails.benefitMagang}
                                    </p>
                                </div>
                                <div className="w-full mt-10 mr-32 mb-10">
                                    <h1 className="text-2xl text-black font-bold">Informasi Tambahan</h1>
                                    <p className="text-black text-black text-lg">OK OCE menawarkan 1 macam sertifikat, yaitu sertifikat keikutsertaan program.
                                    </p>
                                </div>
                                <a href={jobDetails.urlMsib}>
                                    <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 me-2 mb-10 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Daftar MSIB</button>
                                </a>
                            </div>
                        </div>
                    ) : (
                        <p className="text-zinc-400">
                            Silakan pilih aktivitas di sebelah kiri untuk melihat detailnya
                        </p>
                    )}
                </div>
            </div>
            <FloatingMenu />{" "}
        </>
    );
}

export default Magang;
