import React from "react";
import Header from "@img/headertestimoni.png";
import Testi1 from "@img/profilecewe.png";
import Testi2 from "@img/profilecowo.png";
import Testi3 from "@img/profilecowo.png";
import Testi4 from "@img/profilecewe.png";
import Testi5 from "@img/profilecowo.png";
import Testi6 from "@img/profilecowo.png";

const Testimoni = () => {
  return (
    <>
      <section
        class="mt-[4em] bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${Header})`,
          width: `100%`,
          height: `100%`,
          backgroundSize: `cover`,
        }}>
        <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            Yuk, Mulai Gabung dan Dapatkan Hasil Tambahan dengan daftar
          </h1>
          <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            Fondasi kami, idemu, bersama-sama kita maju dan berkembang untuk
            menciptakan masa depan bersama.
          </p>
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
                    src={Testi1}
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
                    src={Testi2}
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
                    src={Testi3}
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
            <div className="mt-[2rem] bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-4">
                <p className="text-gray-700 text-base">
                  "Okoce ada dan pergerakannya sgt membantu byk rakyat salah satunya bisa membuka lapangan kerja dan pelaku UMKM pun bisa ikut bazaar dm2 dgn acara2 hebat... Espas Indonesia salah satu komunitas emak2 yg sgt terbantu dgn gerakan okoce ini.. Emak2 Espas sering ikut bazaar di acara okoce dan emak2 Espas byk yg sdh bikin usaha  rumahan .. Byk pelatihan jg dr okoce Indonesia... BRAVO OKOCE INDONESIA"
                </p>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-200">
                <div className="flex items-center">
                  <img
                    className="h-10 w-10 rounded-full mr-4"
                    src={Testi4}
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
            <div className="mt-[2rem] bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-4">
                <p className="text-gray-700 text-base">
                  "Magang di OK OCE sangat menyenangkan dan seru, Teman-teman di sini sangat ramah dan selalu siap membantu, menciptakan lingkungan yang positif dan mendukung. Selain itu, pekerjaan yang diberikan benar-benar sesuai dengan jobdesk, sehingga saya bisa belajar banyak dan mengembangkan keterampilan sesuai bidang yang saya minati. Lingkungan yang kondusif dan suasana kerja yang penuh semangat"
                </p>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-200">
                <div className="flex items-center">
                  <img
                    className="h-10 w-10 rounded-full mr-4"
                    src={Testi5}
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
            <div className="mt-[2rem] bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="p-4">
                <p className="text-gray-700 text-base">
                  "OK OCE 2018 yang saya ikuti benar-benar luar biasa dan memiliki dampak nyata. Program ini hebat karena berhasil melahirkan banyak pengusaha baru. Dengan bimbingan yang tepat dan lingkungan yang mendukung, peserta dapat mengembangkan keterampilan dan pengetahuan yang sangat berharga. Sukses selalu untuk OK OCE dan semoga terus memberikan kontribusi positif bagi masyarakat"
                </p>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-200">
                <div className="flex items-center">
                  <img
                    className="h-10 w-10 rounded-full mr-4"
                    src={Testi6}
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
      </section>
      {/* End Testimoni section */}
    </>
  );
};

export default Testimoni;
