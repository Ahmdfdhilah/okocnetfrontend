import React, { useEffect, useState } from "react";
import axios from "axios";
import FloatingMenu from "../components/FloatingMenu";

const VisiMisi = () => {
  const [banners, setBanners] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:3000/all-banners")
      .then(response => {
        const bannersData = response.data.data.find(item => item.nama === 'Visi Misi');
        setBanners(bannersData ? bannersData.foto : []);
      })
      .catch(error => console.error("Error fetching banners:", error));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % banners.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [banners]);

  const prevSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + banners.length) % banners.length);
  };

  const nextSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % banners.length);
  };

  return (
    <>
      <div id="carousel-header" className="relative w-full bg-gray-200 mt-24">
        <div className="relative overflow-hidden rounded-lg">
          {banners.length > 0 ? (
            banners.map((banner, index) => (
              <div key={index} className={`duration-700 ease-in-out ${index === currentIndex ? '' : 'hidden'}`}>
                <img src={`http://localhost:3000${banner}`} className="object-cover block h-full w-full" alt={`Slide ${index + 1}`} />
              </div>
            ))
          ) : (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <p>Loading slides...</p>
            </div>
          )}
          <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer" onClick={prevSlide}>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-500 text-white">
              <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer" onClick={nextSlide}>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-500 text-white">
              <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </div>

      <div className="w-7/12 mt-10 py-10 mx-auto grid mobile:grid-rows-1">
        <h1 className="font-extrabold text-3xl text-center">
          "OK OCE memberikan relevansi untuk kebutuhan masyarakat"
        </h1>
        <p className="mt-8 text-center">
          Berawal dari para pengurus, penggerak, dan anggota OK OCE yang
          memiliki visi dan misi yang sama mengenai arti memberikan pekerjaan
          dan penghidupan yang layak bagi kemanusiaan. Atas hal tersebut
          tercetuslah sebuah gagasan untuk mendirikan yayasan yang memiliki
          kepedulian terhadap masyarakat khususnya UMKM, menjunjung tinggi
          nilai-nilai sosial, pendidikan dan kemanusiaan.
        </p>
      </div>

      <div className="bg-red-500 rounded-xl mt-10 py-10 mx-auto grid mobile:grid-rows-1 mobile:px-4 mobile:w-11/12 lg:w-7/12">
        <h1 className="font-extrabold text-3xl text-white text-center">
          VISI OK OCE INDONESIA
        </h1>
        <p className="mt-8 text-center text-white">
          Menjadi gerakan sosial yang mampu menciptakan lapangan kerja dan
          meningkatkan penghasilan masyarakat melalui pelatihan dan pendampingan
          kewirausahaan.
        </p>
      </div>

      <div className="bg-blue-500 rounded-xl mt-10 mb-14 py-10 mx-auto grid mobile:grid-rows-1 mobile:w-11/12 mobile:px-3 lg:w-7/12">
        <h1 className="font-extrabold text-3xl text-white text-center">
          MISI OK OCE INDONESIA
        </h1>
        <ul className="w-full text-justify text-white ml-3 mobile:pr-3 lg:pl-2 lg:pr-10 mx-auto mt-8 leading-relaxed hyphens-auto break-words">
          <li className="list-disc">
            Melakukan pendataan calon wirausaha dan wirausaha di masyarakat.
          </li>
          <li className="list-disc">
            Melakukan pendataan calon wirausaha dan wirausaha di masyarakat.
          </li>
          <li className="list-disc">
            Memberikan pelatihan dan pendampingan usaha kepada masyarakat.
          </li>
          <li className="list-disc">
            Mendorong dan membantu wirausaha untuk melengkapi perizinan.
          </li>
          <li className="list-disc">
            Membantu pemasaran produk-produk anggota.
          </li>
          <li className="list-disc">
            Menciptakan pusat-pusat kewirausahaan di masyarakat.
          </li>
          <li className="list-disc">
            Membantu akses permodalan kepada anggota.
          </li>
          <li className="list-disc">
            Berkolaborasi dengan pemerintah, swasta, dunia pendidikan dan
            penggerak komunitas Membangun ekosistem bisnis bagi komunitas
            wirausaha sosial untuk membantu wirausaha dampingan.
          </li>
        </ul>
      </div>

      <FloatingMenu />
    </>
  );
};

export default VisiMisi;
