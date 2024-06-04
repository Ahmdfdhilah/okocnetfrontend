/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Header from "@img/headerdesapreneur.png";
import TUJUAND1 from "@img/tujuand1.png";
import TUJUAND2 from "@img/tujuand2.png";
import TUJUAND3 from "@img/tujuand3.png";
import TUJUAND4 from "@img/tujuand4.png";
import TUJUAND5 from "@img/tujuand5.png";

const Desapreneur = () => {
  return (
    <>
      <div className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-20 text-center text-white min-h-[677px] max-md:px-5">
        <img
          loading="lazy"
          src={Header}
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative flex-col mt-36 w-full max-w-[1133px] max-md:mt-10 max-md:max-w-full">
          <div className="text-4xl font-bold leading-10 max-md:max-w-full">
            Bersama Program Desa Preuner, <br />
            Kembangkan Usaha Desa dan Majukan Ekonomi Lokal!
          </div>
          <div className="self-center mt-8 text-xl leading-6 max-md:max-w-full">
            Melalui pelatihan dan pendampingan, Program Desa Preuner membantu
            warga desa <br />
            meningkatkan keterampilan, kualitas produk, dan daya saing usaha.{" "}
            <br />
            Bergabunglah untuk menciptakan desa yang mandiri dan sejahtera!
          </div>
        </div>
      </div>

      {/* Tujuan */}
      <div className="flex flex-col ml-5 mr-5 mt-5 px-11 py-10 max-md:px-5">
        <div className="text-5xl ml-8 font-bold text-black leading-[57.6px] max-md:max-w-full max-md:text-4xl">
          Tujuan Program
        </div>
        <div className="mt-12 text-lg ml-8 leading-4 text-neutral-700 max-md:mt-10 max-md:max-w-full">
          Program Desa Preuner Bertujuan Untuk:
        </div>
        <div className="mt-11 max-md:mt-10 max-md:mr-2 max-md:max-w-full">
          <div className="flex flex-wrap justify-center gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col max-w-[581px] w-full">
              <div className="flex flex-col grow py-9 px-10 w-full text-2xl leading-9 text-justify text-black bg-white rounded-3xl border border-indigo-800 border-solid shadow-sm max-md:px-5 max-md:mt-10">
                <img
                  loading="lazy"
                  src={TUJUAND1}
                  className="w-10 aspect-square"
                />
                <div className="mt-4 max-md:max-w-full">
                  Menumbuhkan Unit Usaha Desa
                </div>
              </div>
            </div>
            <div className="flex flex-col max-w-[581px] w-full">
              <div className="flex flex-col grow py-9 px-10 w-full text-2xl leading-9 text-justify text-black bg-white rounded-3xl border border-indigo-800 border-solid shadow-sm max-md:px-5 max-md:mt-10">
                <img
                  loading="lazy"
                  src={TUJUAND2}
                  className="w-10 aspect-square"
                />
                <div className="mt-4 max-md:max-w-full">
                  Penguatan Pengetahuan dan Keterampilan Berwirausaha
                  <br />
                </div>
              </div>
            </div>
            <div className="flex flex-col max-w-[581px] w-full">
              <div className="flex flex-col grow py-9 px-10 w-full text-2xl leading-9 text-justify text-black bg-white rounded-3xl border border-indigo-800 border-solid shadow-sm max-md:px-5 max-md:mt-10">
                <img
                  loading="lazy"
                  src={TUJUAND3}
                  className="w-10 aspect-square"
                />
                <div className="mt-4 max-md:max-w-full">
                  Peningkatan Mutu Produk/Jasa
                </div>
              </div>
            </div>
            <div className="flex flex-col max-w-[581px] w-full">
              <div className="flex flex-col grow py-9 px-10 w-full text-2xl leading-9 text-justify text-black bg-white rounded-3xl border border-indigo-800 border-solid shadow-sm max-md:px-5 max-md:mt-10">
                <img
                  loading="lazy"
                  src={TUJUAND4}
                  className="w-10 aspect-square"
                />
                <div className="mt-4 max-md:max-w-full">
                  Peningkatan Nilai Tambah
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col self-center py-9 px-10 mt-11 max-w-[581px] w-full text-2xl leading-9 text-justify text-black bg-white rounded-3xl border border-indigo-800 border-solid shadow-sm max-md:px-5 max-md:mt-10">
          <img loading="lazy" src={TUJUAND5} className="w-10 aspect-square" />
          <div className="mt-4 max-md:max-w-full">Meningkatkan Daya Saing</div>
        </div>
      </div>

      {/* Tujuan end */}

      {/* Manfaat */}
      <div className="flex flex-col ml-2 mr-2 px-12 pt-7 pb-20 bg-sky-700 max-md:px-5">
        <div className="text-2xl font-bold leading-8 text-white max-md:max-w-full">
          Manfaat Program Desa Preneur
        </div>
        <div className="mt-12 text-xl leading-8 text-justify text-white max-md:mt-10 max-md:max-w-full">
          Dengan berpartisipasi dalam Program Desa Preuner, warga desa dapat
          menikmati berbagai manfaat, antara lain:
        </div>
        <div className="mt-24 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-4 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-white max-md:mt-10">
                <div className="text-2xl font-bold leading-8">
                  Peningkatan Ekonomi Desa
                </div>
                <div className="mt-10 text-lg leading-7 text-justify max-md:mt-10">
                  Usaha yang berkembang akan meningkatkan pendapatan warga dan
                  perekonomian desa secara keseluruhan.
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col text-white max-md:mt-10">
                <div className="text-2xl font-bold leading-8">
                  Kemandirian Ekonomi
                </div>
                <div className="mt-12 text-lg leading-7 text-justify max-md:mt-10">
                  Mendorong kemandirian ekonomi warga desa melalui pengelolaan
                  usaha sendiri.
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col text-white max-md:mt-10">
                <div className="text-2xl font-bold leading-8">
                  Komunitas yang Lebih Kuat
                </div>
                <div className="mt-10 text-lg leading-7 text-justify max-md:mt-10">
                  Membangun rasa kebersamaan dan kerjasama di antara warga desa
                  melalui usaha kolektif.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Manfaaat End */}
    </>
  );
};

export default Desapreneur;
