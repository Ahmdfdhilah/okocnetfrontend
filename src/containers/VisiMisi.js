import React from "react";
<<<<<<< HEAD
import Header from "@img/headervisimisi.png";
import visi from "@img/Visi.png";
import misi from "@img/Misi.png";
=======
import Header from "@img/Header visimisi.png";
>>>>>>> 67a1bd3941eb32904d3494abede36b5b8f268fd0

const VisiMisi = () => {
  return (
    <>
      <div class="w-full flex justify-center mobile:mt-24">
        <img
          src={Header}
          class="relative object-cover block w-full h-auto lg:w-screen lg:h-[40rem]"
          alt="header"
        />
      </div>
      <div className="px-20 mt-10 py-16 max-md:px-5">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[45%] max-md:ml-0 max-md:w-full">
            <div className="self-stretch text-5xl font-semibold text-black leading-[55px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
              “OK OCE memberikan relevansi untuk kebutuhan masyarakat.&quot;
            </div>
<<<<<<< HEAD
          </div>
          <div className="flex flex-col ml-5 w-[55%] max-md:ml-0 max-md:w-full">
            <div className="text-2xl leading-8 text-justify text-black max-md:mt-10 max-md:max-w-full">
              Berawal dari para pengurus, penggerak, dan anggota OK OCE yang
              memiliki visi dan misi yang sama mengenai arti memberikan
              pekerjaan dan penghidupan yang layak bagi kemanusiaan. Atas hal
              tersebut tercetuslah sebuah gagasan untuk mendirikan yayasan yang
              memiliki kepedulian terhadap masyarakat khususnya UMKM, menjunjung
              tinggi nilai-nilai sosial, pendidikan dan kemanusiaan.
=======
            <div class="w-7/12 mt-10 py-10 mx-auto grid mobile:grid-rows-1">
                <h1 class="font-extrabold text-3xl text-center">"OK OCE memberikan relevansi untuk kebutuhan masyarakat"</h1>
                <p class="mt-8 text-center">Berawal dari para pengurus, penggerak, dan anggota OK OCE yang memiliki visi dan misi yang sama mengenai arti memberikan pekerjaan dan penghidupan yang layak bagi kemanusiaan. Atas hal tersebut tercetuslah sebuah gagasan untuk mendirikan yayasan yang memiliki kepedulian terhadap masyarakat khususnya UMKM, menjunjung tinggi nilai-nilai sosial, pendidikan dan kemanusiaan.
                </p>
            </div>
            <div class="w-7/12 bg-red-500 rounded-xl mt-10 py-10 mx-auto grid mobile:grid-rows-1">
                <h1 class="font-extrabold text-3xl text-white text-center">VISI OK OCE INDONESIA</h1>
                <p class="mt-8 text-center text-white">Menjadi gerakan sosial yang mampu menciptakan lapangan kerja dan meningkatkan penghasilan masyarakat melalui pelatihan dan pendampingan kewirausahaan.
                </p>
            </div>
            <div class="w-7/12 bg-blue-500 rounded-xl mt-10 mb-14 py-10 mx-auto grid mobile:grid-rows-1">
                <h1 class="font-extrabold text-3xl text-white text-center">MISI OK OCE INDONESIA</h1>
                <ul class="w-[90%] text-justify text-white mx-auto mt-8">
                    <li className="list-disc">Melakukan pendataan calon wirausaha dan wirausaha di masyarakat.</li>
                    <li className="list-disc">Melakukan pendataan calon wirausaha dan wirausaha di masyarakat.</li>
                    <li className="list-disc">Memberikan pelatihan dan pendampingan usaha kepada masyarakat.</li>
                    <li className="list-disc">Mendorong dan membantu wirausaha untuk melengkapi perizinan.</li>
                    <li className="list-disc">Membantu pemasaran produk-produk anggota.</li>
                    <li className="list-disc">Menciptakan pusat-pusat kewirausahaan di masyarakat.</li>
                    <li className="list-disc">Membantu akses permodalan kepada anggota.</li>
                    <li className="list-disc">Berkolaborasi dengan pemerintah, swasta, dunia pendidikan dan penggerak komunitas
                        Membangun ekosistem bisnis bagi komunitas wirausaha sosial untuk membantu wirausaha dampingan.</li>
                </ul>
>>>>>>> 67a1bd3941eb32904d3494abede36b5b8f268fd0
            </div>
          </div>
        </div>
      </div>
      {/* VISI */}
      <div className="flex justify-center items-center px-16 py-20 max-md:px-5">
        <img
          loading="lazy"
          src={visi}
          className="mt-14 w-full aspect-[4.55] max-w-[1006px] max-md:mt-10 max-md:max-w-full"
        />
      </div>
      {/* VISI END */}

      {/* MISI */}
      <div className="flex justify-center items-center px-16 py-12 max-md:px-5">
        <img
          loading="lazy"
          src={misi}
          className="w-full aspect-[2.22] max-w-[1006px] max-md:max-w-full"
        />
      </div>
      {/* MISI END */}
    </>
  );
};

export default VisiMisi;
