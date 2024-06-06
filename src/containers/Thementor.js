import React from "react";
import Header from "@img/headerthementor.png";
import Themen from "@img/thementor1.png";
import Themen2 from "@img/themen2.png";
import Themen3 from "@img/themen3.png";

const Thementor = () => {
  return (
    <>
      <div className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-20 text-center text-white min-h-[677px] max-md:px-5">
        <img
          loading="lazy"
          src={Header}
          className="object-cover absolute inset-0 size-full"
        />
        <div className="relative self-center mt-20 mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          &quot;The Mentor&quot; Training Online Penggerak OK OCE Indonesia
        </div>
        <div className="relative mt-16 mb-8 text-lg font-normal text-gray-300 leading-7 lg:text-xl sm:px-16 lg:px-48 max-md:mt-10 max-md:mr-1.5 max-md:max-w-full">
          &quot;The Mentor&quot; sebelumnya disebut TOT adalah program untuk
          melatih mentor mentor yang berkompeten dari penggerak. Yang akan
          berjalan setiap Minggu selama satu tahun.
        </div>

      </div>

      {/* Teks Content 1 */}
<div className="px-7 pt-6 pb-4 my-5 text-lg leading-7 mr-2 ml-2 text-center text-black max-md:px-5 max-md:max-w-full lg:w-8/12 lg:mx-auto">
  OK OCE terus menguatkan visi penciptaan lapangan kerja melalui
  pendampingan wirausaha dengan cara memperluas Mentor diseluruh wilayah
  Indonesia. Yang dilakukan melalui Program Training of Trainer ‘ToT
  Mentor’ OK OCE Batch 8 pada Jumat, 15 Maret 2024.
  <br />
  “Salah satu kunci dalam Public Speaking adalah Ketenangan, ketenangan
  menjamin 50% dari Kesuksesan penyampaian pesan dalam Public Speaking,”
  ujar Aziz Munawar, Manager Kurikulum Program OK OCE Indonesia yang
  menjadi pemateri dalam Program ‘ToT Mentor’.
</div>
{/* Teks Content 1 end */}

{/* Teks Content 2 */}
<div className="justify-center px-9 py-5 my-5 mr-2 ml-2 text-lg leading-7 text-center text-black max-md:px-5 max-md:max-w-full lg:w-8/12 lg:mx-auto">
  Aziz memberikan materi Public Speaking yang diharapkan bisa membangun
  skill para peserta untuk lebih baik menyampaikan pesan dalam menjalankan
  peran seorang Mentor. Ia juga menekankan dalam Terdapat 3 Power of
  Public Speaking, yaitu, The Power Of Mindset, The Power of Content dan
  The Power of Delivery. Masing-masing Power memiliki peran yang besar,
  seperti Mindset untuk terus belajar memberikan manfaat kepada sesama,
  Content yang menarik dan mudah dimengerti hingga Delivery berupa
  penyampaian pesan yang bisa diterima pendengar.
  <br />
</div>
{/* Teks Content 2 end */}

{/* Teks Content 3 */}
<div className="justify-center px-3 py-5 my-5 mr-2 ml-2 text-lg leading-7 text-center text-black max-md:pr-5 lg:w-8/12 lg:mx-auto">
  Irana Leila, Manager Pelatihan Program OK OCE turut hadir memberikan
  materi Coaching, ia menyampaikan, “Seorang Coach perlu memiliki
  kemampuan dasar ‘Mendengarkan’ yang baik, karena perlu mendorong Coachee
  mengeluarkan potensi untuk menyelesaikan masalah dengan pertanyaan
  terbuka”. Dalam kegitan Coaching, Coach tidak diperbolehkan memberikan
  pertanyaan tertutup karena akan menghambat ide dari Coachee sehingga
  bisa mempersulit pemikirannya.Didalam Program ‘ToT Mentor’ OK OCE ini
  para peserta calon mentor dilatih untuk praktik secara langsung Public
  Speaking dan Coaching secara sederhana, berharap bisa memberikan
  pengalaman secara langsung secara teknis.
</div>
{/* Teks Content 3 end */}

     {/* Gambar utama */}
<div className="flex overflow-hidden relative flex-col items-center px-16 pt-20 pb-9 mb-20 min-h-[715px] max-md:px-5 max-md:pt-10 max-md:pb-0 max-md:min-h-[210px]">
  <img
    loading="lazy"
    src={Themen}
    className="object-cover absolute inset-0 w-full h-full max-md:h-auto"
  />
  <div className="flex relative gap-5 justify-between mt-[571px] max-md:mt-10">
    <img
      loading="lazy"
      src={Themen3}
      className="shrink-0 aspect-square w-[30px]"
    />
    <img
      loading="lazy"
      src={Themen2}
      className="shrink-0 aspect-square w-[30px]"
    />
  </div>
</div>
{/* Gambar Utama End */}


    </>
  );
};

export default Thementor;
