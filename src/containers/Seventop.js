/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Seven from "@img/7top-rb.webp";
import Header from "@img/headerseventop.png";
import Seven2 from "@img/7-TOP-OK-OCE-1-768x768.webp";

const cardClasses =
  "mb-10 mx-auto flex items-center bg-zinc-100 rounded-lg shadow-lg mobile:flex-col mobile:w-full lg:w-[35rem] lg:h-[15rem]";
const titleClasses =
  "bg-blue-700 p-4 flex items-center justify-center text-center text-2xl text-white drop-shadow-lg font-bold rounded-lg mobile:w-full mobile:h-28 lg:w-full lg:h-20";
const titleClasses2 =
  "bg-red-700 p-4 flex items-center justify-center text-center text-2xl text-white drop-shadow-lg font-bold rounded-lg mobile:w-full mobile:h-28 lg:w-full lg:h-20";
const contentClasses =
  "text-base p-6 flex flex-col items-center justify-center text-center text-zinc-800 lg:max-w-[500px]";

const Seventop = () => {
  return (
    <>
      <div class="w-full flex justify-center mobile:mt-24">
        <img
          src={Header}
          class="relative object-cover block w-full h-auto lg:w-screen lg:h-[40rem]"
          alt="header"
        />
      </div>
      <div class="max-w-5xl mx-auto mt-20 px-6">
        <div className="flex justify-around mb-20">
          <div class="">
            <img src={Seven} class="object-cover" alt="7 Top Ok Oce" />
          </div>
          <div class="">
            <img
              src={Seven2}
              class="object-cover lg:max-w-64 mobile:max-w-72"
              alt="7 Top Ok Oce"
            />
          </div>
        </div>
        <div className={cardClasses}>
          <div className={titleClasses}>Pendaftaran</div>
          <div className={contentClasses}>
            Peserta wajib mendaftar di website OKOCE.NET, serta memilih
            komunitas wirausaha yang akan membina. <br /> <br />
            <a href="" class="text-blue-500 font-medium">
              Pelajari Selengkapnya &gt;
            </a>
          </div>
        </div>
        <div className={cardClasses}>
          <div className={titleClasses2}>Pelatihan</div>
          <div className={contentClasses}>
            Peserta akan dilatih berdasarkan kurikulum OK OCE dan akan
            digabungkan ke kelompok inkubasi melalui komunitas penggerak. <br />
            <br />
            <a href="/pelatihan" class="text-blue-500 font-medium">
              Pelajari Selengkapnya &gt;
            </a>
          </div>
        </div>
        <div className={cardClasses}>
          <div className={titleClasses}>Pendampingan</div>
          <div className={contentClasses}>
            Peserta akan didampingi oleh pendamping UMKM dan mengikuti Program
            Mentoring. <br />
            <br />
            <a href="/pendampingan" class="text-blue-500 font-medium">
              Pelajari Selengkapnya &gt;
            </a>
          </div>
        </div>
        <div className={cardClasses}>
          <div className={titleClasses2}>Perizinan</div>
          <div className={contentClasses}>
            Peserta akan dijelaskan proses perizinan sesuai kebutuhannya. <br />
            <br />
            <a href="/perizinan" class="text-blue-500 font-medium">
              Pelajari Selengkapnya &gt;
            </a>
          </div>
        </div>
        <div className={cardClasses}>
          <div className={titleClasses}>Pemasaran</div>
          <div className={contentClasses}>
            Peserta akan mengikuti proses kurasi dan akan diberikan akses
            pemasaran dan penjualan yang lebih luas, baik online maupun offline.{" "}
            <br />
            <br />
            <a href="/pemasaran" class="text-blue-500 font-medium">
              Pelajari Selengkapnya &gt;
            </a>
          </div>
        </div>
        <div className={cardClasses}>
          <div className={titleClasses2}>Pelaporan Keuangan</div>
          <div className={contentClasses}>
            Peserta akan diajarkan dan didampingi cara membuat laporan keuangan
            untuk menghitung untung rugi. <br /> <br />
            <a href="/pelaporankeuangan" class="text-blue-500 font-medium">
              Pelajari Selengkapnya &gt;
            </a>
          </div>
        </div>
        <div className={cardClasses}>
          <div className={titleClasses}>Permodalan</div>
          <div className={contentClasses}>
            Peserta akan didampingi untuk mendapatkan akses permodalan sesuai
            dengan kebutuhan usahanya.
            <br /> <br />
            <a href="/permodalan" class="text-blue-500 font-medium">
              Pelajari Selengkapnya &gt;
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Seventop;
