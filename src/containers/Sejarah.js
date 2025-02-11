import React, { useState, useEffect } from "react";
import FloatingMenu from "../components/FloatingMenu";

const Sejarah = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [logo, setLogo] = useState({});
    const [otherLogos, setOtherLogos] = useState([]);
    const [banners, setBanners] = useState([]);
    const [umkm, setUmkm] = useState(0);
    const [penggerak, setPenggerak] = useState(0);
    const [usaha, setUsaha] = useState(0);

    useEffect(() => {
        fetch('http://localhost:3000/logos')
            .then(response => response.json())
            .then(data => {
                const logos = data.data;

                const logo = {
                    'gerakan sosial': logos.find(logo => logo.nama === 'gerakan sosial'),
                    'okoce': logos.find(logo => logo.nama === 'okoce'),
                };

                setLogo(logo);

                const filteredOtherLogos = logos.filter(
                    logo => logo.nama !== 'okoce' && logo.nama !== 'gerakan sosial'
                );

                setOtherLogos(filteredOtherLogos);
            })
            .catch(error => console.error('Error fetching logos:', error));
    }, []);

    useEffect(() => {
        fetch('http://localhost:3000/totals')
            .then(response => response.json())
            .then(data => {
                const totalData = data.data;

                setUmkm(totalData.find(item => item.nama === 'umkm')?.total || 0);
                setPenggerak(totalData.find(item => item.nama === 'penggerak')?.total || 0);
                setUsaha(totalData.find(item => item.nama === 'usaha')?.total || 0);
            })
            .catch(error => console.error('Error fetching total:', error));
    }, []);

    useEffect(() => {
        fetch('http://localhost:3000/all-banners')
            .then(response => response.json())
            .then(data => {
                const totalData = data.data;
                const sejarahBanners = totalData.find(item => item.nama === 'Sejarah');
                setBanners(sejarahBanners ? sejarahBanners.foto : []);
            })
            .catch(error => console.error('Error fetching banners:', error));
    }, []);

    useEffect(() => {
        const interval = setInterval(nextSlide, 3000);
        return () => clearInterval(interval);
    }, [currentIndex, banners]);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + banners.length) % banners.length);
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    };

    return (
        <>
            <div id="controls-carousel" className="relative w-full h-full top-[3rem] mb-[8rem]" data-carousel="slide">
                <div className="relative overflow-hidden rounded-lg mobile:h-72 lg:min-h-screen">
                    {banners.length > 0 ? (
                        banners.map((banner, index) => (
                            <div key={index} className={`duration-700 ease-in-out ${index === currentIndex ? '' : 'hidden'}`} data-carousel-item={index === currentIndex ? 'active' : ''}>
                                <img src={`http://localhost:3000${banner}`} className="absolute object-cover block h-full w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt={`Slide ${index + 1}`} />
                            </div>
                        ))
                    ) : (
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <p>Loading slides...</p>
                        </div>
                    )}
                </div>
                <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev onClick={prevSlide}>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-200/60 group-hover:bg-white/50 dark:group-hover:bg-white group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                        </svg>
                        <span className="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next onClick={nextSlide}>
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-200/60 group-hover:bg-white/50 dark:group-hover:bg-white group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                        </svg>
                        <span className="sr-only">Next</span>
                    </span>
                </button>
            </div>

            <section class="w-full mx-auto px-12 m-14">
                <div class="grid gap-5 p-4 m-2 mobile:grid-rows-1 mobile:p-0 mobile:m-0 lg:grid-cols-12">
                    <main class="mobile:p-0 mobile:mr-1 mobile:ml-0 lg:p-10 lg:mr-14 lg:col-span-8">
                        <h1 class="text-3xl font-bold text-center mb-8">Sejarah OK OCE Indonesia</h1>
                        <p class="text-justify">OK OCE lahir sebagai sebuah konsep pada tahun 1998 di keluarga Uno, yang terdiri dari Mien dan Henk Uno. Pada saat itu, banyak mahasiswa dari Gorontalo yang tidak bisa melanjutkan kuliah di Jakarta, dan meminta beasiswa kepada keluarga Uno. Dan setelah mereka lulus kuliah, mereka kembali ke perkebunan milik keluarga Uno untuk bekerja.<br /><br />
                            Setelah beberapa tahun, mereka akhirnya membuat ulang dan merombak program beasiswa dari program biasa menjadi program beasiswa enterprenuer, yang terdiri dari pelatihan, pemasaran, dan sekolah penganggaran. Hasilnya, lahirlah Mien R Uno Foundation pada tahun 2000.<br /><br />
                            Pada tahun 2016, Sandiaga Uno berkampanye untuk posisi Wakil Gubernur Jakarta, berpasangan dengan Anies Baswedan. Selama periode ini, Indonesia menghadapi kondisi ekonomi yang menantang, yang mengakibatkan penutupan sejumlah perusahaan dan lonjakan pengangguran di Jakarta, yang mempengaruhi sekitar 300 ribu orang, menurut data yang tersedia. Menanggapi tantangan-tantangan ini, Sandiaga Uno dan Anies Baswedan mengajukan sebuah solusi yang bertujuan untuk menumbuhkan kewirausahaan.<br /><br /> Mereka memperkenalkan program OK OCE, yang dirancang untuk mendorong dan mendukung individu untuk menjadi wirausahawan, sehingga mengurangi dampak kesulitan ekonomi terhadap penduduk setempat. Tujuan dari program ini adalah untuk membangun setidaknya satu pusat kewirausahaan di setiap kecamatan di Jakarta. Target ambisius mereka dimulai dari tahun 2017 hingga 2022, yang bertujuan untuk menciptakan 200 ribu kesempatan kerja melalui pertumbuhan wirausaha di wilayah tersebut.<br /><br />
                            Kemudian, pada tahun 2017, mereka memulai program ini di 44 kecamatan di Jakarta dengan kurikulum 7 TOP (7 Tahapan OK OCE Prima) yang terdiri dari Pendaftaran, Pelatihan, Pendampingan, Perizinan, Pemasaran, Pencatatan Keuangan dan Akses Permodalan.<br /><br />
                            Pada tahun 2018, Sandiaga Uno mengundurkan diri dari jabatannya untuk mencalonkan diri sebagai Wakil Presiden mendampingi Prabowo Subianto. Setelah itu, Program OK OCE memperluas jangkauannya di luar DKI Jakarta hingga mencakup seluruh Indonesia. Program OK OCE menjadi program beliau saat ia mencalonkan diri sebagai calon wakil presiden, dengan target menciptakan 2 juta lapangan kerja dalam jangka waktu lima tahun hingga tahun 2024. Meskipun Sandiaga Uno tidak berhasil mendapatkan posisi wakil presiden, Gerakan OK OCE berhasil memenuhi janjinya untuk menciptakan 2 juta lapangan kerja tanpa bergantung pada anggaran negara. Pencapaian ini diwujudkan melalui upaya bersama dan kontribusi masyarakat.<br /><br />
                            Pada tahun 2023, OK OCE telah menciptakan 1,5 juta lapangan kerja, dan hanya menyisakan 500.000 lapangan kerja lagi untuk mencapai target yang ditetapkan. Inisiatif lokal program OK OCE di DKI Jakarta, yang sekarang dikenal sebagai JakPreneur, memiliki keanggotaan sebanyak 340.000 orang, yang semakin menunjukkan dampak dan keberhasilan program ini secara luas.</p>
                    </main>

                    <aside class="lg:col-span-4 lg:p-2">
                        <img src={logo['okoce']?.foto ? `http://localhost:3000${logo['okoce'].foto}` : ''} class="mobile:max-w-[14rem] mobile:mx-auto mobile:pl-4 mobile:mt-[3rem] lg:max-w-[20rem] lg:mx-auto lg:mt-[7rem]" alt="logo okoce" />
                        <h1 class="text-3xl font-bold text-center mb-8 mt-10">OK OCE Melahirkan Pengusaha Baru!</h1>
                        <p class="text-justify">Bersama lebih 500 ribu anggota dari berbagai provinsi di Indonesia. Setelah sukses memulainya di tahun 2017 dan bekerjasama dengan Pemerintah Provinsi DKI Jakarta dan menghasilkan puluhan ribu wirausaha baru serta menyerap 200 ribu lapangan kerja di DKI Jakarta. Kini OK OCE diterapkan ke seluruh Indonesia melalui lebih dari 197 komunitas penggerak.</p>

                        <div class="mt-10 grid justify-items-start mobile:grid-cols-2 mobile:gap-8 lg:grid-cols-2 lg:grid-flow-row lg:gap-6">
                            <div class="max-w-16">
                                <h1 class="font-extrabold text-4xl">2016</h1>
                                <p class="mt-4">Founded</p>
                            </div>
                            <div class="max-w-32">
                                <h1 class="font-extrabold text-4xl">{umkm.toLocaleString('id-ID')}</h1>
                                <p class="mt-4">UMKM Anggota Ok Oce </p>
                            </div>
                            <div class="max-w-16">
                                <h1 class="font-extrabold text-4xl">{[penggerak.toLocaleString('id-ID')]}</h1>
                                <p class="mt-4">Komunitas Penggerak</p>
                            </div>
                            <div class="max-w-16">
                                <h1 class="font-extrabold text-4xl">{usaha.toLocaleString('id-ID')}</h1>
                                <p class="mt-4">Wirausaha Baru</p>
                            </div>
                        </div>
                    </aside>
                </div>
            </section>
            <div class="grid justify-items-center">
                <h1 class="text-4xl font-bold text-center mt-[4rem] mobile:text-3xl mobile:px-2">Logo OK OCE Indonesia</h1>
                <div className="w-full grid mobile:grid-cols-1 mobile:grid-flow-row mobile:justify-center mobile:items-center lg:grid-flow-col lg:grid-flow-row lg:justify-evenly">
                    {logo['gerakan sosial'] && (
                        <div>
                            <img src={`http://localhost:3000${logo['gerakan sosial'].foto}`} className="mt-[7rem] mx-auto mobile:w-3/5 lg:max-w-[20rem]" alt="gerakan sosial" />
                        </div>
                    )}
                    {logo['okoce'] && (
                        <div className="mobile:ml-5">
                            <img src={`http://localhost:3000${logo['okoce'].foto}`} className="mx-auto mobile:w-3/5 mobile:mt-20 lg:w-1/3 lg:mt-[10rem]" alt="okoce" />
                        </div>
                    )}
                </div>
                <div class="grid justify-items-center mobile:grid-cols-1 mobile:gap-0 lg:grid-cols-2 lg:grid-flow-col lg:gap-6">
                    {otherLogos.map((data) => (
                        <img key={data.nama} src={`http://localhost:3000${data.foto}`} class="max-w-[20rem]" alt={data.nama} />
                    ))}
                </div>
            </div>
            <FloatingMenu />
        </>
    );
};

export default Sejarah;