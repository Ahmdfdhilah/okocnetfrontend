import React, { useState, useEffect } from "react";
import Header from "../asset/img/HeaderKerja.png";
import Logo from "@img/logo-okoce.webp";

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
            const response = await fetch('https://cms-okoce-a155c649b6e6.herokuapp.com/api/magangs?populate=*');
            if (!response.ok) {
                throw new Error('Gagal mengambil data magang');
            }
            const data = await response.json();
            const internData = data.data;
            internData.sort((a, b) => a.id - b.id);
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
                            title={data.attributes.judul_magang}
                            company="Perkumpulan Gerakan OK OCE"
                            location="Kota Jakarta Selatan (WFO)"
                            duration={data.attributes.durasi_magang}
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
            const response = await fetch(`https://cms-okoce-a155c649b6e6.herokuapp.com/api/magangs/${id}?populate=*`);
            if (!response.ok) {
                throw new Error('Gagal mengambil detail magang');
            }
            const data = await response.json();
            setJobDetails(data.data);
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

            <div className="w-full flex flex-col justify-around md:flex-row p-4 bg-gray-200">
                <div className="min-w-[25rem] p-4">
                    <p className="text-zinc-600 mb-4">Total Posisi: </p>
                    <JobList onJobClick={handleJobClick} />
                </div>
                <div className="w-7/12 h-auto bg-white mt-14 rounded-xl flex items-center justify-center">
                    {jobDetails ? (
                        <div className="w-full h-full text-zinc-400">
                            <div className="mt-10 ml-14">
                                <img src={Logo} alt="" className="w-40"></img>
                                <h3 className="text-3xl mt-6 ml-1 font-bold text-black mb-4">{jobDetails.attributes.judul_magang}</h3>
                                <p className="text-lg mt-3 ml-1 font-normal text-black">Perkumpulan Gerakan OK OCE</p>
                                <p className="text-lg ml-1 font-normal text-black">Kota Jakarta Selatan (WFO)</p>
                                <p className="text-lg ml-1 font-normal text-black mb-4"><span className="font-bold">Durasi Magang : </span>{jobDetails.attributes.durasi_magang}</p>
                                <div className="mt-10 mr-32 mb-10">
                                    <h1 className="text-2xl text-black font-bold">Rincian Kegiatan</h1>
                                    <h2 className="mt-3 font-bold text-black text-lg">SMART Empowerment: Integrating Sustainable Practices And Co-Learning Spaces For Uplifting UMKM</h2>
                                    <p className="text-black text-normal text-lg text-justify mt-4">Program magang ini bertujuan untuk memberdayakan UMKM (Usaha Mikro, Kecil, dan Menengah) melalui pendekatan SMART, yaitu Sustainability Management and Appropriate Responsible Technology. Magang ini menawarkan kesempatan bagi para peserta magang untuk belajar dan berkontribusi dalam menerapkan praktik-praktik berkelanjutan dan teknologi yang tepat serta bertanggung jawab dalam meningkatkan kinerja dan dampak positif UMKM binaan organisasi.<br /><br />Elemen-elemen utama program magang ini meliputi:<br />
                                        1. Pelatihan dan Pembelajaran Kolaboratif : Para peserta magang akan terlibat dalam sesi pelatihan dan pembelajaran kolaboratif untuk memahami konsep-konsep keberlanjutan dan teknologi yang sesuai untuk diterapkan dalam konteks UMKM.<br /><br />2. Penerapan Praktik Berkelanjutan : Melalui magang ini, peserta akan mempraktikkan dan mengimplementasikan berbagai praktik berkelanjutan di UMKM binaan Organisasi.<br /><br />
                                        3. Keterlibatan Komunitas : Program ini menciptakan ruang bagi keterlibatan komunitas dalam mendukung UMKM yang berkelanjutan, melalui kegiatan seperti pelatihan, lokakarya, dan pameran produk.<br /><br />
                                        4. Monitoring dan Evaluasi : Magang ini juga melibatkan kegiatan pemantauan dan evaluasi terhadap implementasi praktik berkelanjutan di UMKM, untuk memastikan keberlanjutan dan efektivitas program.<br /><br />Melalui program magang ini, Mahasiswa akan mendapatkan ilmu langsung dari semua Stake Holder utama OK OCE Indonesia, termasuki penggerak yang tersebar di seluruh Jabodetabek.
                                        Pada kegiatan Magang, Mahasiswa akan memperoleh ilmu sebagai konsultan bisnis (entrepreneurship) dan Trainer UMKM.
                                        Mahasiswa akan terlibat dalam pelatihan UMKM Nasional yang dilakukan secara berkelanjutan dalam lembaga kami.<br /><br /> Mahasiswa akan dilatih untuk mampu memberikan pelatihan kepada UMKM agar dapat mengscale up usahanya. Sehingga mahasiswa akan mampu melihara pertumbuhan usaha yang massif.
                                        Pelatihan-pelatihan yang akan kami lakukan akan memberikan mahasiswa sebuah pengalaman yang berharga bagaimana cara melatih perusahaan-perusahaan kecil/UMKM yang ada di Indonesia sehingga menjadi perushaan yang mampu bertahan di segala kondisi dan kuat menghadapi persaingan usaha.</p>
                                </div>
                                <div className="mt-10 mr-32 mb-10">
                                    <h1 className="text-2xl text-black font-bold">Kompetensi yang Dikembangkan</h1>
                                    <div className="grid grid-cols-2 grid-flow-row gap-x-4 gap-y-6">
                                        <div className="max-w-[75%] border-2 drop-shadow-lg rounded-lg mt-4">1</div>
                                        <div className="max-w-[75%] border-2 drop-shadow-lg rounded-lg mt-4">2</div>
                                        <div className="max-w-[75%] border-2 drop-shadow-lg rounded-lg mt-4">3</div>
                                        <div className="max-w-[75%] border-2 drop-shadow-lg rounded-lg mt-4">4</div>
                                        <div className="max-w-[75%] border-2 drop-shadow-lg rounded-lg mt-4">5</div>
                                    </div>
                                </div>
                                <div className="mt-10 mr-32 mb-10">
                                    <h1 className="text-2xl text-black font-bold">Kriteria Peserta</h1>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <p className="text-zinc-400">
                            Silakan pilih aktivitas di sebelah kiri untuk melihat detailnya
                        </p>
                    )}
                </div>
            </div>
        </>
    );
}

export default Magang;
