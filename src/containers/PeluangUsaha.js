import React, { useState, useEffect } from "react";
import Header from "@img/headerPeluang.png";
import FloatingMenu from "../components/FloatingMenu";

const cardClasses = 'bg-white p-4 rounded-lg shadow-md flex items-start cursor-pointer';

const JobCard = ({ logo, title, location, job_system, category, onClick }) => {
    return (
        <div className={cardClasses} onClick={onClick}>
            <img src={logo} alt="Company Logo" className="w-20 max-h-20  mr-4 object-cover rounded-full" />
            <div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-zinc-800">{location}</p>
                <div className="flex gap-x-4">
                    <div className="mt-4 bg-blue-200 p-1 rounded-md">
                        <p className="text-blue-500">{job_system}</p>
                    </div>
                    <div className="mt-4 bg-green-200 p-1 rounded-md">
                        <p className="text-green-500">{category}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const JobList = ({ onJobClick }) => {
    const [datas, setData] = useState([]);

    useEffect(() => {
        fetchDataPeluangUsaha();
    }, []);

    const fetchDataPeluangUsaha = async () => {
        try {
            const response = await fetch('https://cms-okoce-a155c649b6e6.herokuapp.com/api/peluang-usahas?populate=*');
            if (!response.ok) {
                throw new Error('Gagal mengambil data peluang usaha');
            }
            const data = await response.json();
            const PelUsData = data.data;
            PelUsData.sort((a, b) => a.id - b.id);
            console.log(PelUsData);
            setData(PelUsData);
        } catch (error) {
            console.error('Error fetching peluang usaha :', error);
            setData([]);
        }
    };

    return (
        <div>
            {datas.map((data) =>
                <div className="mt-0" key={data.id}>
                    <div className="space-y-4 mt-5">
                        <JobCard
                            logo={data.attributes?.foto_usaha?.data?.[0]?.attributes?.url}
                            title={data.attributes?.judul_usaha}
                            location={data.attributes?.lokasi_usaha}
                            job_system={data.attributes?.sistem_kerja}
                            category={data.attributes?.kategori_usaha}
                            onClick={() => onJobClick(data.id)}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

const PeluangUsaha = () => {
    const [selectedJobId, setSelectedJobId] = useState(null);
    const [jobDetails, setJobDetails] = useState(null);

    useEffect(() => {
        if (selectedJobId !== null) {
            fetchJobDetails(selectedJobId);
        }
    }, [selectedJobId]);

    const fetchJobDetails = async (id) => {
        try {
            const response = await fetch(`https://cms-okoce-a155c649b6e6.herokuapp.com/api/peluang-usahas/${id}?populate=*`);
            if (!response.ok) {
                throw new Error('Gagal mengambil detail peluang usaha');
            }
            const data = await response.json();
            setJobDetails(data.data);
        } catch (error) {
            console.error('Error fetching peluang usaha details:', error);
            setJobDetails(null);
        }
    };

    const handleJobClick = (id) => {
        setSelectedJobId(id);
    };

    return (
        <>
            <section class="mt-[4em] bg-center bg-no-repeat" style={{ backgroundImage: `url(${Header})`, width: `100%`, height: `100%`, backgroundSize: `cover` }}>
                <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                    <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Yuk, Mulai Gabung dan Dapatkan Hasil Tambahan dengan daftar </h1>
                    <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Fondasi kami, idemu, bersama-sama kita maju dan berkembang untuk menciptakan masa depan bersama. </p>
                </div>
            </section>

            <div className="w-full flex flex-col justify-around md:flex-row p-4 bg-gray-200">
                <div className="min-w-[29rem] p-4">
                    <p className="text-zinc-600 mb-4">List Peluang Usaha : </p>
                    <JobList onJobClick={handleJobClick} />
                </div>
                <div className="w-7/12 h-auto bg-white mt-14 rounded-xl flex items-center justify-center">
                    {jobDetails ? (
                        <div className="w-full h-full text-zinc-400">
                            <div className="mt-10 ml-14">
                                <img src={jobDetails.attributes?.foto_usaha?.data?.[0]?.attributes?.url} alt="" className="w-full h-96 object-contain rounded-full"></img>
                                <h3 className="text-3xl mt-16 ml-1 font-bold text-center text-black mb-4">{jobDetails.attributes.judul_usaha}</h3>
                                <p className="text-lg mt-3 ml-1 font-normal text-black">Perkumpulan Gerakan OK OCE</p>
                                <p className="text-lg ml-1 font-normal text-black">{jobDetails.attributes.lokasi_usaha}</p>
                                <p className="text-lg mt-2 ml-1 font-normal text-black"><span className="font-bold">Kategori Usaha : </span>{jobDetails.attributes.kategori_usaha}</p>
                                <p className="text-lg ml-1 font-normal text-black mb-4"><span className="font-bold">Sistem Kerja : </span>{jobDetails.attributes.sistem_kerja}</p>
                                <div className="mt-10 mr-32 mb-10">
                                    <h1 className="text-2xl text-black font-bold">Rincian Kegiatan</h1>
                                    <h2 className="mt-3 font-medium text-black text-lg text-justify">{jobDetails.attributes.tentang_program}</h2>
                                </div>
                                <div className="mt-10 mr-32 mb-10">
                                    <h1 className="text-2xl text-black font-bold">Deskripsi Usaha</h1>
                                    <h2 className="mt-3 font-medium text-black text-lg text-justify">{jobDetails.attributes.jobdesc_usaha}</h2>
                                </div>
                                <div className="mt-10 mr-32 mb-10">
                                    <h1 className="text-2xl text-black font-bold">Kualifikasi</h1>
                                    <h2 className="mt-3 font-medium text-black text-lg text-justify">{jobDetails.attributes.kriteria_usaha}</h2>
                                </div>
                                <div className="mt-10 mr-32 mb-10">
                                    <h1 className="text-2xl text-black font-bold">Benefit</h1>
                                    <h2 className="mt-3 font-medium text-black text-lg text-justify">{jobDetails.attributes.benefit_program}</h2>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <p className="text-zinc-400">
                            Silakan pilih peluang usaha di sebelah kiri untuk melihat detailnya
                        </p>
                    )}
                </div>
            </div>
            <FloatingMenu />
        </>
    );
}

export default PeluangUsaha;