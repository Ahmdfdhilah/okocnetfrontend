import React, { useState, useEffect } from "react";
import axios from "axios";
import TestiFemale from "@img/profilecewe.png";
import TestiMale from "@img/profilecowo.png";
import FloatingMenu from "../components/FloatingMenu";

const Testimoni = () => {
  const [banners, setBanners] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const response = await axios.get('http://localhost:3000/all-banners');
        if (response.data.data) {
          const testimoniBanners = response.data.data.find(item => item.nama === 'Testimoni');
          console.log(testimoniBanners);
          setBanners(testimoniBanners ? testimoniBanners.foto : []);
        }
      } catch (error) {
        console.error("Error fetching banners", error);
        setBanners([]);
      }
    };

    fetchBanners();
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
      {/* Banner Carousel */}
      <section className="relative mt-24">
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
      </section>

      {/* Testimoni section */}
      <section className="bg-gray-100 py-12">
        <div className="container my-10 mx-auto px-4">
          <h2 className="text-4xl font-bold my-14 text-center text-sky-700">Pendapat Mereka Tentang Kami!</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Testimoni item 1 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-4">
                <p className="text-gray-700 text-base">
                  "Program OK OCE Indonesia mampu memberdayakan pengusaha kecil dan menengah melalui pelatihan kewirausahaan dan akses permodalan yang lebih mudah"
                </p>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-200">
                <div className="flex items-center">
                  <img
                    className="h-10 w-10 rounded-full mr-4"
                    src={TestiFemale}
                    alt="Testimonial"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">Ihsania Izzatun Nisa</p>
                    <p className="text-xs text-gray-600">Pendamping Program
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* End Testimoni item 1 */}
            {/* Testimoni item 2 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-4">
                <p className="text-gray-700 text-base">
                  "Program OK OCE Indonesia dipuji banyak pihak karena efektif memberdayakan pengusaha kecil dan menengah melalui pelatihan kewirausahaan dan akses permodalan yang lebih mudah"
                </p>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-200">
                <div className="flex items-center">
                  <img
                    className="h-10 w-10 rounded-full mr-4"
                    src={TestiMale}
                    alt="Testimonial"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">Naufal Firdaus</p>
                    <p className="text-xs text-gray-600">Pendamping UMKM
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* End Testimoni item 2 */}
            {/* Testimoni item 3 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-4">
                <p className="text-gray-700 text-base">
                  "Program OK OCE Indonesia dianggap sukses oleh banyak orang dalam membantu menciptakan lapangan kerja baru dan meningkatkan keterampilan kewirausahaan masyarakat"
                </p>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-200">
                <div className="flex items-center">
                  <img
                    className="h-10 w-10 rounded-full mr-4"
                    src={TestiMale}
                    alt="Testimonial"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">Rico Hadeta Putra</p>
                    <p className="text-xs text-gray-600">Mahasiswa MSIB Batch 6</p>
                  </div>
                </div>
              </div>
            </div>
            {/* End Testimoni item 3 */}
            {/* Testimoni item 4 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden mobile:mt-2 lg:mt-[2rem]">
              <div className="p-4">
                <p className="text-gray-700 text-base">
                  "Okoce ada dan pergerakannya sgt membantu byk rakyat salah satunya bisa membuka lapangan kerja dan pelaku UMKM pun bisa ikut bazaar dm2 dgn acara2 hebat... Espas Indonesia salah satu komunitas emak2 yg sgt terbantu dgn gerakan okoce ini.. Emak2 Espas sering ikut bazaar di acara okoce dan emak2 Espas byk yg sdh bikin usaha  rumahan .. Byk pelatihan jg dr okoce Indonesia... BRAVO OKOCE INDONESIA"
                </p>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-200">
                <div className="flex items-center">
                  <img
                    className="h-10 w-10 rounded-full mr-4"
                    src={TestiFemale}
                    alt="Testimonial"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">@dewiherawati8616</p>
                    <p className="text-xs text-gray-600">
                      Ketua Penggerak OK OCE ESPAS
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* End Testimoni item 4 */}
            {/* Testimoni item 5 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden mobile:mt-2 lg:mt-[2rem]">
              <div className="p-4">
                <p className="text-gray-700 text-base">
                  "Magang di OK OCE sangat menyenangkan dan seru, Teman-teman di sini sangat ramah dan selalu siap membantu, menciptakan lingkungan yang positif dan mendukung. Selain itu, pekerjaan yang diberikan benar-benar sesuai dengan jobdesk, sehingga saya bisa belajar banyak dan mengembangkan keterampilan sesuai bidang yang saya minati. Lingkungan yang kondusif dan suasana kerja yang penuh semangat"
                </p>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-200">
                <div className="flex items-center">
                  <img
                    className="h-10 w-10 rounded-full mr-4"
                    src={TestiMale}
                    alt="Testimonial"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">Reza Hakim</p>
                    <p className="text-xs text-gray-600">
                      Mahasiswa MSIB Batch 6
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* End Testimoni item 5 */}
            {/* Testimoni item 6 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden mobile:mt-2 lg:mt-[2rem]">
              <div className="p-4">
                <p className="text-gray-700 text-base">
                  "OK OCE 2018 yang saya ikuti benar-benar luar biasa dan memiliki dampak nyata. Program ini hebat karena berhasil melahirkan banyak pengusaha baru. Dengan bimbingan yang tepat dan lingkungan yang mendukung, peserta dapat mengembangkan keterampilan dan pengetahuan yang sangat berharga. Sukses selalu untuk OK OCE dan semoga terus memberikan kontribusi positif bagi masyarakat"
                </p>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-200">
                <div className="flex items-center">
                  <img
                    className="h-10 w-10 rounded-full mr-4"
                    src={TestiMale}
                    alt="Testimonial"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">Cheflintang</p>
                    <p className="text-xs text-gray-600">
                      Anggota OK OCE Indonesia
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* End Testimoni item 6 */}
          </div>
        </div>
      </section >
      {/* End Testimoni section */}
      < FloatingMenu />
    </>
  );
};

export default Testimoni;
