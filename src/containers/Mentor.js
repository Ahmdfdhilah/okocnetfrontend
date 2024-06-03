import React from "react";
import Header from "@img/headermentor.png";
import Syarat1 from "@img/syarat1.png";
import Syarat2 from "@img/syarat2.png";
import Syarat3 from "@img/syarat3.png";
import Mentor1 from "@img/mentor1.png";
import Mentor2 from "@img/mentor2.png";
import Mentor3 from "@img/mentor3.png";
import Mentor4 from "@img/mentor4.png";
import Mentor5 from "@img/mentor5.png";

function Mentor() {
  return (
    <>
      <section
        class="mt-24 bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${Header})`,
          width: `100%`,
          height: `100%`,
          backgroundSize: `cover`,
        }}>
        <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            Jadilah Versi Terbaik dari Diri Anda dengan Panduan Mentor
            Profesional
          </h1>
          <p class="mt-12 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            Dapatkan bimbingan yang Anda butuhkan untuk mengembangkan
            keterampilan, memperluas wawasan, dan mencapai tujuan Anda.
          </p>
        </div>
      </section>

      {/* Kenapa jadi mentor */}
      <div className="flex flex-col px-16 py-20 ml-10 mr-10 text-black max-md:px-5">
        <div className="mt-6 text-4xl font-bold leading-10 max-md:text-3xl">
          Kenapa harus menjadi mentor?
        </div>
        <div className="mt-7 text-lg leading-7 text-justify max-md:text-base">
          Sebagai mentor UMKM di OK OCE Indonesia, Anda memiliki kesempatan
          untuk memberikan dampak nyata pada pertumbuhan ekonomi lokal. Dengan
          bimbingan Anda, para pelaku usaha mikro, kecil, dan menengah dapat
          mengembangkan bisnis usaha lokal, menciptakan lapangan kerja baru, dan
          meningkatkan kesejahteraan masyarakat.
        </div>
      </div>
      {/* Kenapa jadi mentor */}

      {/* syarat Menjadi mentor */}

      <div className="flex flex-col ml-2 mr-3 justify-center py-5 ">
        <div className="flex overflow-hidden relative flex-col items-center py-20 w-full min-h-[676px] max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3da77ff60b7fc35da6d8954ff6f29b7f0874c0d36b07015025a643ae9840267a?apiKey=368f14f68b784f44a55270c24c2b3538&"
            className="object-cover absolute inset-0 w-full h-full"
            alt="Banner"
          />
          <div className="flex relative flex-col self-stretch px-6 w-full max-md:px-5 max-md:max-w-full">
            <div className="text-4xl font-bold leading-10 text-white max-md:text-3xl max-md:max-w-full ml-12 max-md:ml-3">
              Syarat menjadi Mentor
            </div>
          </div>
          <div className="relative px-5 mt-10 w-full max-w-[1314px] max-md:max-w-full">
            <div className="flex gap-8 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col items-center w-[33%] max-md:w-full max-md:items-start">
                <div className="relative text-lg leading-7 text-justify text-white mt-5 max-md:mt-10">
                  <img
                    loading="lazy"
                    src={Syarat1}
                    className="shrink-0 aspect-square w-[50px] mb-2"
                    alt="Icon 1"
                  />
                  Seorang calon mentor harus terdaftar dan aktif sebagai relawan
                  di program OK OCE Indonesia.
                </div>
              </div>
              <div className="flex flex-col items-center ml-5 w-[33%] max-md:ml-0 max-md:w-full max-md:items-start">
                <div className="relative text-lg leading-7 text-justify text-white mt-5 max-md:mt-10">
                  <img
                    loading="lazy"
                    src={Syarat2}
                    className="shrink-0 aspect-square w-[50px] mb-2"
                    alt="Icon 2"
                  />
                  Calon mentor harus memiliki pengetahuan yang memadai dan
                  pengalaman yang cukup dalam bidang bisnis yang akan diajarkan
                  kepada para peserta OK OCE.
                </div>
              </div>
              <div className="flex flex-col items-center ml-5 w-[33%] max-md:ml-0 max-md:w-full max-md:items-start">
                <div className="relative text-lg leading-7 text-justify text-white mt-5 max-md:mt-10">
                  <img
                    loading="lazy"
                    src={Syarat3}
                    className="shrink-0 aspect-square w-[50px] mb-2"
                    alt="Icon 3"
                  />
                  Mentor harus memiliki keterampilan dalam mendidik dan
                  memotivasi para peserta, serta mampu memberikan dukungan yang
                  diperlukan untuk membantu mereka meraih kesuksesan dalam usaha
                  mereka.
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex justify-center items-center px-16 py-4 mt-20 max-w-full text-xl font-semibold leading-6 text-center text-white bg-red-600 rounded-full w-[441px] max-md:px-5 max-md:mt-10">
            MULAI BEKERJASAMA
          </div>
        </div>
      </div>
      {/* syarat Menjadi mentor End */}

      {/* Benefit menjadi mentor */}
      <div className="flex flex-col ml-3 mr-3 mb-10 px-11 pt-2.5 pb-4 max-md:px-5">
        <div className="text-5xl font-bold text-black leading-[57.6px] max-md:max-w-full max-md:text-4xl">
          Benefit Menjadi Mentor
        </div>
        <div className="mt-8 text-lg leading-4 text-neutral-700 max-md:max-w-full">
          Menjadi trainer memberikan kesempatan untuk berbagi pengetahuan,
          memperluas jaringan profesional, dan merasa puas melihat perkembangan
          peserta.
        </div>
        <div className="mt-16 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow px-10 py-6 w-full text-black bg-white rounded-3xl border border-indigo-800 border-solid shadow-sm max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <img
                  loading="lazy"
                  srcSet={Mentor1}
                  className="aspect-square w-[50px]"
                />
                <div className="mt-4 text-2xl font-bold leading-8 max-md:max-w-full">
                  Berbagi Pengetahuan dan Pengalaman
                </div>
                <div className="mt-4 text-base leading-6 text-justify max-md:max-w-full">
                  Sebagai trainer UMKM, Anda berbagi pengalaman bisnis untuk
                  membimbing para pelaku UMKM, membantu mereka menghindari
                  kesalahan umum, dan mempercepat kemajuan bisnis.
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow px-10 pt-6 pb-12 w-full text-black bg-white rounded-3xl border border-indigo-800 border-solid shadow-sm max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <img
                  loading="lazy"
                  srcSet={Mentor2}
                  className="aspect-square w-[50px]"
                />
                <div className="mt-4 text-2xl font-bold leading-8 max-md:max-w-full">
                  Mendapatkan Penghargaan dan Kepuasan
                </div>
                <div className="mt-4 text-base leading-6 text-justify max-md:max-w-full">
                  Melihat peserta berkembang memberikan kepuasan besar, membuat
                  Anda bangga atas kontribusi Anda pada kesuksesan mereka.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow px-10 pt-5 pb-20 w-full text-black bg-white rounded-3xl border border-indigo-800 border-solid shadow-sm max-md:px-5 max-md:mt-9">
                <img
                  loading="lazy"
                  srcSet={Mentor3}
                  className="aspect-square w-[50px]"
                />
                <div className="mt-4 text-2xl font-bold leading-9">
                  Mengembangkan Kemampuan Komunikasi dan Kepemimpinan
                </div>
                <div className="mt-4 text-base leading-6 text-justify">
                  Sebagai trainer, Anda terus mengasah kemampuan komunikasi,
                  kepemimpinan, dan motivasi, keterampilan penting dalam bisnis
                  dan kehidupan sehari-hari.
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow px-10 pt-5 pb-12 w-full text-black bg-white rounded-3xl border border-indigo-800 border-solid shadow-sm max-md:px-5 max-md:mt-9">
                <img
                  loading="lazy"
                  srcSet={Mentor4}
                  className="aspect-square w-[50px]"
                />
                <div className="mt-4 text-2xl font-bold leading-9">
                  Membentuk Jaringan Profesional yang Luas
                </div>
                <div className="mt-4 text-base leading-6 text-justify">
                  Menjadi trainer UMKM membuka peluang untuk bertemu dengan
                  berbagai kalangan industri, memperluas jaringan profesional,
                  berkolaborasi dengan sesama, dan menemukan peluang bisnis
                  baru.
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow px-10 py-5 w-full text-black bg-white rounded-3xl border border-indigo-800 border-solid shadow-sm max-md:px-5 max-md:mt-9">
                <img
                  loading="lazy"
                  srcSet={Mentor5}
                  className="aspect-square w-[50px]"
                />
                <div className="mt-4 text-2xl font-bold leading-9">
                  Memberikan Dampak Positif pada Komunitas Bisnis
                </div>
                <div className="mt-4 text-base leading-6 text-justify">
                  Sebagai trainer UMKM, Anda memperkuat ekosistem bisnis lokal
                  dengan membantu para pelaku UMKM berkembang, mendukung
                  pertumbuhan ekonomi, dan memperkuat komunitas bisnis.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Benefit menjadi mentor end */}
    </>
  );
}

export default Mentor;
