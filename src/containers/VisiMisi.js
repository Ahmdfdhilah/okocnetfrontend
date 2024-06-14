import React from "react";
import Header from "@img/headervisimisi.png";
import FloatingMenu from "../components/FloatingMenu";

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
      <div class="w-7/12 mt-10 py-10 mx-auto grid mobile:grid-rows-1">
        <h1 class="font-extrabold text-3xl text-center">
          "OK OCE memberikan relevansi untuk kebutuhan masyarakat"
        </h1>
        <p class="mt-8 text-center">
          Berawal dari para pengurus, penggerak, dan anggota OK OCE yang
          memiliki visi dan misi yang sama mengenai arti memberikan pekerjaan
          dan penghidupan yang layak bagi kemanusiaan. Atas hal tersebut
          tercetuslah sebuah gagasan untuk mendirikan yayasan yang memiliki
          kepedulian terhadap masyarakat khususnya UMKM, menjunjung tinggi
          nilai-nilai sosial, pendidikan dan kemanusiaan.
        </p>
      </div>
      <div class="bg-red-500 rounded-xl mt-10 py-10 mx-auto grid mobile:grid-rows-1 mobile:px-4 mobile:w-11/12 lg:w-7/12">
        <h1 class="font-extrabold text-3xl text-white text-center">
          VISI OK OCE INDONESIA
        </h1>
        <p class="mt-8 text-center text-white">
          Menjadi gerakan sosial yang mampu menciptakan lapangan kerja dan
          meningkatkan penghasilan masyarakat melalui pelatihan dan pendampingan
          kewirausahaan.
        </p>
      </div>
      <div class="bg-blue-500 rounded-xl mt-10 mb-14 py-10 mx-auto grid mobile:grid-rows-1 mobile:w-11/12 mobile:px-3 lg:w-7/12">
        <h1 class="font-extrabold text-3xl text-white text-center">
          MISI OK OCE INDONESIA
        </h1>
        <ul class="w-full text-justify text-white ml-3 mobile:pr-3 lg:pl-2 lg:pr-10 mx-auto mt-8 leading-relaxed hyphens-auto break-words">
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
